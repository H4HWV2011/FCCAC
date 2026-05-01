(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild/services$ cat ~/msjarvis-rebuild-working/ms-allis-frontend/app/portal/page.tsx
// app/portal/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  api,
  ApiError,
  session,
  ApplicationListItem,
  MeResponse,
} from "@/lib/api";
import { portalApi, BalancesResponse, LedgerEntry, LedgerResponse } from "@/lib/portal";
import { ChatPanel } from "@/components/ChatPanel";
import { FounderToken } from "@/components/FounderToken";
import { MsAllisPortrait } from "@/components/MsAllisPortrait";
import { HeartOrnament } from "@/components/HeartOrnament";
import { MountainSilhouette } from "@/components/MountainSilhouette";

type State = "checking" | "ready";
type Tab = "champion" | "admin";

export default function PortalPage() {
  const router = useRouter();
  const [state, setState] = useState<State>("checking");
  const [me, setMe] = useState<MeResponse | null>(null);
  const [balances, setBalances] = useState<BalancesResponse | null>(null);
  const [tab, setTab] = useState<Tab>("champion");

  // Admin tab state
  const [pending, setPending] = useState<ApplicationListItem[]>([]);
  const [pendingState, setPendingState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [pendingError, setPendingError] = useState("");
  const [actingOn, setActingOn] = useState<string | null>(null);
  const [denyingId, setDenyingId] = useState<string | null>(null);
  const [denyReason, setDenyReason] = useState("");

  useEffect(() => {
    if (!session.get()) {
      router.push("/sign-in");
      return;
    }
    api.me()
      .then((m) => {
        setMe(m);
        setState("ready");
        // Fetch balances in parallel; fail silently
        portalApi.myBalances()
          .then((b) => setBalances(b))
          .catch(() => setBalances(null));
      })
      .catch(() => {
        session.clear();
        router.push("/sign-in");
      });
  }, [router]);

  const isAdmin = me?.roles?.includes("admin") ?? false;

  useEffect(() => {
    if (tab !== "admin" || !isAdmin || pendingState !== "idle") return;
    loadPending();
  }, [tab, isAdmin, pendingState]);

  async function loadPending() {
    setPendingState("loading");
    setPendingError("");
    try {
      const result = await api.pending();
      setPending(result.applications || []);
      setPendingState("ready");
    } catch (err) {
      setPendingError(err instanceof ApiError ? err.detail : "Failed to load");
      setPendingState("error");
    }
  }

  async function handleApprove(id: string) {
    setActingOn(id);
    setPendingError("");
    try {
      await api.approve(id);
      await loadPending();
    } catch (err) {
      setPendingError(err instanceof ApiError ? err.detail : "Approve failed");
    }
    setActingOn(null);
  }

  async function handleDeny(id: string) {
    if (denyReason.trim().length < 5) {
      setPendingError("Denial reason must be at least 5 characters.");
      return;
    }
    setActingOn(id);
    setPendingError("");
    try {
      await api.deny(id, denyReason.trim());
      setDenyingId(null);
      setDenyReason("");
      await loadPending();
    } catch (err) {
      setPendingError(err instanceof ApiError ? err.detail : "Deny failed");
    }
    setActingOn(null);
  }

  function handleSignOut() {
    session.clear();
    router.push("/");
  }

  if (state === "checking") {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center">
        <p className="font-display italic text-ink-fade">Checking your session…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream pb-12">
      <header className="border-b border-cream-deep bg-bone">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MsAllisPortrait className="w-10 h-10" />
            <div>
              <p className="font-display text-base text-teal-deep">Ms. Allis</p>
              <p className="font-body text-xs text-ink-fade italic">{me?.userid ?? "—"}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="font-body text-sm text-ink-fade hover:text-terracotta transition-colors underline decoration-cream-deep hover:decoration-terracotta underline-offset-4"
          >
            Sign out
          </button>
        </div>
      </header>

      {isAdmin && (
        <div className="border-b border-cream-deep bg-cream">
          <div className="max-w-6xl mx-auto px-6 flex">
            <button
              onClick={() => setTab("champion")}
              className={`px-6 py-3 font-display text-sm transition-colors ${
                tab === "champion" ? "text-teal-deep border-b-2 border-terracotta" : "text-ink-fade hover:text-teal-deep"
              }`}
            >
              My Champion
            </button>
            <button
              onClick={() => setTab("admin")}
              className={`px-6 py-3 font-display text-sm transition-colors ${
                tab === "admin" ? "text-teal-deep border-b-2 border-terracotta" : "text-ink-fade hover:text-teal-deep"
              }`}
            >
              Admin
              {pending.length > 0 && (
                <span className="ml-2 inline-flex items-center justify-center bg-terracotta text-cream-light text-xs px-2 py-0.5 rounded-full">
                  {pending.length}
                </span>
              )}
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 pt-10">
        {tab === "champion" && <ChampionDashboard me={me} balances={balances} isAdmin={isAdmin} />}

        {tab === "admin" && isAdmin && (
          <AdminQueue
            applications={pending}
            state={pendingState}
            error={pendingError}
            actingOn={actingOn}
            denyingId={denyingId}
            denyReason={denyReason}
            setDenyingId={setDenyingId}
            setDenyReason={setDenyReason}
            onApprove={handleApprove}
            onDeny={handleDeny}
            onClearError={() => setPendingError("")}
          />
        )}
      </div>

      <div className="mt-16">
        <MountainSilhouette className="text-forest" />
      </div>
    </main>
  );
}

// ────────────────────────────────────────────────────────────────────
// Champion dashboard — data first, identity collapsed at bottom
// ────────────────────────────────────────────────────────────────────

function ChampionDashboard({
  me,
  balances,
  isAdmin,
}: {
  me: MeResponse | null;
  balances: BalancesResponse | null;
  isAdmin: boolean;
}) {
  const [showIdentity, setShowIdentity] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showLedger, setShowLedger] = useState(false);
  const [ledger, setLedger] = useState<LedgerResponse | null>(null);
  const [ledgerLoading, setLedgerLoading] = useState(false);
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");

  async function loadLedger(offset: number = 0) {
    setLedgerLoading(true);
    try {
      const data = await portalApi.myLedger(50, offset);
      setLedger(data);
    } catch {
      // fail silently — non-critical
    }
    setLedgerLoading(false);
  }

  const ems = balances?.ems_balance ?? 0;
  const pms = balances?.pms_balance ?? 0;

  return (
    <>
      {/* Hero — smaller than before */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <HeartOrnament className="w-6 h-6 text-terracotta" />
        </div>
        <h1 className="font-display italic text-3xl md:text-4xl text-teal-deep mb-1">
          Welcome, {me?.userid ?? ""}
        </h1>
        <p className="font-body text-sm text-ink-fade italic">
          {me?.county ? `${me.county} County` : "—"}
          {me?.county ? " · " : ""}Community Champion
        </p>
      </div>

      {/* Founder Token + Balances row */}
      <section className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="surface p-6 flex flex-col items-center justify-center text-center">
          {balances?.founder_token ? (
            <>
              <FounderToken
                serialNumber={balances.founder_token.serial_number}
                mintedAt={balances.founder_token.minted_at}
                cohort={balances.founder_token.cohort}
                size={112}
              />
              <p className="font-display text-base text-teal-deep mt-3">
                {balances.founder_token.display}
              </p>
              <p className="font-body text-xs text-ink-fade italic">Phase 0 token holder</p>
            </>
          ) : (
            <>
              <div
                className="rounded-full bg-cream-deep flex items-center justify-center"
                style={{ width: 112, height: 112 }}
              >
                <span className="font-display text-xs text-ink-fade italic">No token yet</span>
              </div>
              <p className="font-display text-base text-ink-fade mt-3 italic">Founder Token</p>
              <p className="font-body text-xs text-ink-fade italic">Coming soon</p>
            </>
          )}
        </div>

        <BalanceCard
          label="Earned MountainShares"
          shortLabel="EMS"
          amount={ems}
          accent="teal"
        />

        <BalanceCard
          label="Purchased MountainShares"
          shortLabel="PMS"
          amount={pms}
          accent="terracotta"
        />
      </section>

      {/* Region scaffolding row */}
      <section className="grid md:grid-cols-3 gap-4 mb-6">
        <PlaceholderCard
          title="Local businesses"
          subtitle={me?.county ? `${me.county} County directory` : "Your county"}
          note="Coming soon"
        />
        <PlaceholderCard
          title="Weather"
          subtitle="Real-time conditions"
          note="Coming soon"
        />
        <PlaceholderCard
          title="County resources"
          subtitle="Public services & support"
          note="Coming soon"
        />
      </section>

      {/* Action buttons */}
      <section className="flex flex-col sm:flex-row gap-3 mb-8 justify-center">
        <button
          onClick={() => setShowChat((v) => !v)}
          className="btn-primary"
        >
          {showChat ? "Hide Ms. Allis" : "Talk to Ms. Allis →"}
        </button>
        <a
          href="/commons"
          className="font-display text-sm bg-bone border border-cream-deep text-teal-deep py-3 px-6 hover:bg-cream-deep transition-colors text-center"
        >
          Enter The Commons →
        </a>
      </section>

      {/* Chat panel — toggles open/closed */}
      {showChat && (
        <section className="mb-6">
          <ChatPanel userId={me?.userid ?? ""} isAdmin={isAdmin} />
        </section>
      )}

      {/* Transaction history */}
      <section className="surface mt-4">
        <button
          onClick={() => { setShowLedger(v => !v); if (!showLedger) loadLedger(); }}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-bone transition-colors"
        >
          <span className="font-display text-base text-teal-deep">Transaction history</span>
          <span className="font-body text-xs text-ink-fade italic">
            {showLedger ? "▼ Hide" : "▶ Show"}{ledger ? ` · ${ledger.total} entries` : ""}
          </span>
        </button>
        {showLedger && (
          <div className="px-6 pb-6 border-t border-cream-deep">
            {ledgerLoading ? (
              <p className="font-body text-sm text-ink-fade italic mt-4">Loading…</p>
            ) : ledger && ledger.entries.length > 0 ? (
<>
                <div className="mt-4 mb-4 flex flex-wrap items-end gap-3 print:hidden">
                  <div>
                    <label className="block font-body text-xs text-ink-fade italic mb-1">From</label>
                    <input
                      type="date"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="px-2 py-1 bg-bone border border-cream-deep focus:border-teal focus:outline-none font-body text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs text-ink-fade italic mb-1">To</label>
                    <input
                      type="date"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="px-2 py-1 bg-bone border border-cream-deep focus:border-teal focus:outline-none font-body text-sm"
                    />
                  </div>
                  {(dateFrom || dateTo) && (
                    <button
                      type="button"
                      onClick={() => { setDateFrom(""); setDateTo(""); }}
                      className="font-body text-xs text-ink-fade hover:text-terracotta transition-colors underline decoration-cream-deep hover:decoration-terracotta underline-offset-4"
                    >
                      Clear
                    </button>
                  )}
                  <div className="ml-auto">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="font-display text-sm bg-teal-deep text-cream-light px-4 py-1.5 hover:bg-teal transition-colors"
                    >
                      Print
                    </button>
                  </div>
                </div>
                {(() => {
                  const filteredEntries = ledger.entries.filter((e) => {
                    if (!dateFrom && !dateTo) return true;
                    const ts = new Date(e.created_at).getTime();
                    if (dateFrom) {
                      const fromTs = new Date(dateFrom + "T00:00:00").getTime();
                      if (ts < fromTs) return false;
                    }
                    if (dateTo) {
                      const toTs = new Date(dateTo + "T23:59:59").getTime();
                      if (ts > toTs) return false;
                    }
                    return true;
                  });
                  return filteredEntries.length === 0 ? (
                    <p className="font-body text-sm text-ink-fade italic">
                      No transactions in this date range.
                    </p>
                  ) : (
                    <div id="ledger-print-area">
                      <div className="hidden print:block mb-4">
                        <h2 className="font-display text-xl text-teal-deep">Transaction history</h2>
                        <p className="font-body text-xs text-ink-fade italic">
                          {me?.userid ?? ""} {dateFrom || dateTo ? `· ${dateFrom || "earliest"} to ${dateTo || "latest"}` : ""}
                        </p>
                      </div>
                      <table className="w-full font-body text-sm">
                        <thead>
                          <tr className="text-left text-ink-fade text-xs uppercase tracking-wider border-b border-cream-deep">
                            <th className="pb-2 pr-4">Date</th>
                            <th className="pb-2 pr-4">Type</th>
                            <th className="pb-2 pr-4">Token</th>
                            <th className="pb-2 text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredEntries.map((e) => (
                            <tr key={e.id} className="border-b border-cream-deep/50 hover:bg-bone transition-colors">
                              <td className="py-2 pr-4 text-ink-fade text-xs">
                                {new Date(e.created_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                              </td>
                              <td className="py-2 pr-4 text-ink italic">{e.transaction_type.replace(/_/g, " ")}</td>
                              <td className="py-2 pr-4">
                                <span className={e.token_class === "EMS" ? "text-teal-deep font-display text-xs" : "text-terracotta font-display text-xs"}>
                                  {e.token_class}
                                </span>
                              </td>
                              <td className="py-2 text-right font-mono text-xs text-ink">
                                +{parseFloat(e.amount).toLocaleString(undefined, { minimumFractionDigits: 4 })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {(dateFrom || dateTo) && (
                        <p className="font-body text-xs text-ink-fade italic mt-3">
                          Showing {filteredEntries.length} of {ledger.entries.length} transactions in selected range.
                        </p>
                      )}
                    </div>
                  );
                })()}
              </>
            ) : (
              <p className="font-body text-sm text-ink-fade italic mt-4">No transactions yet.</p>
            )}
            {ledger && ledger.total > ledger.limit && (
              <div className="flex items-center justify-between mt-4 print:hidden">
                <p className="font-body text-xs text-ink-fade italic">
                  Page {Math.floor(ledger.offset / ledger.limit) + 1} of {Math.ceil(ledger.total / ledger.limit)}
                  {" · "}
                  showing {ledger.offset + 1}–{Math.min(ledger.offset + ledger.entries.length, ledger.total)} of {ledger.total}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => loadLedger(Math.max(0, ledger.offset - ledger.limit))}
                    disabled={ledgerLoading || ledger.offset === 0}
                    className="font-display text-sm bg-bone border border-cream-deep text-teal-deep px-3 py-1 hover:bg-cream-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    « Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => loadLedger(ledger.offset + ledger.limit)}
                    disabled={ledgerLoading || ledger.offset + ledger.entries.length >= ledger.total}
                    className="font-display text-sm bg-bone border border-cream-deep text-teal-deep px-3 py-1 hover:bg-cream-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next »
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Identity — collapsed accordion at bottom */}
      <section className="surface mt-4">
        <button
          onClick={() => setShowIdentity((v) => !v)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-bone transition-colors"
        >
          <span className="font-display text-base text-teal-deep">Your identity</span>
          <span className="font-body text-xs text-ink-fade italic">
            {showIdentity ? "▼ Hide" : "▶ Show"}
          </span>
        </button>
        {showIdentity && (
          <div className="px-6 pb-6 border-t border-cream-deep">
            <dl className="grid sm:grid-cols-2 gap-4 mt-4 font-body text-sm">
              <Field label="Userid" value={me?.userid ?? "—"} mono />
              <Field label="UEID" value={me?.uei || "—"} mono small />
              <Field label="County" value={me?.county ?? "—"} />
              <Field label="Roles" value={me?.roles?.join(", ") || "user"} />
              {balances?.balance_last_updated && (
                <Field
                  label="Balances updated"
                  value={new Date(balances.balance_last_updated).toLocaleString()}
                  small
                />
              )}
            </dl>
            <p className="font-body text-xs text-ink-fade italic mt-4 leading-relaxed">
              Your data is private. Only you can see this — no other Champion or admin
              can view your balances, UEID, or wallet. If anything looks wrong, email{" "}
              <a
                href="mailto:kiddstechnical@gmail.com"
                className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/30 hover:decoration-terracotta underline-offset-4 transition-colors"
              >
                kiddstechnical@gmail.com
              </a>.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

function BalanceCard({
  label,
  shortLabel,
  amount,
  accent,
}: {
  label: string;
  shortLabel: string;
  amount: number;
  accent: "teal" | "terracotta";
}) {
  const color = accent === "teal" ? "text-teal-deep" : "text-terracotta-deep";
  const formatted = amount.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
  return (
    <div className="surface p-6 flex flex-col items-center justify-center text-center">
      <p className="font-body text-xs text-ink-fade italic uppercase tracking-wider">
        {shortLabel}
      </p>
      <p className={`font-display italic text-5xl ${color} my-2`}>{formatted}</p>
      <p className="font-body text-xs text-ink-fade italic">{label}</p>
    </div>
  );
}

function PlaceholderCard({
  title,
  subtitle,
  note,
}: {
  title: string;
  subtitle: string;
  note: string;
}) {
  return (
    <div className="surface p-6 flex flex-col items-center justify-center text-center opacity-60">
      <p className="font-display text-base text-teal-deep">{title}</p>
      <p className="font-body text-xs text-ink-fade italic mt-1">{subtitle}</p>
      <p className="font-body text-xs text-terracotta/70 italic mt-3">{note}</p>
    </div>
  );
}

function Field({
  label,
  value,
  mono = false,
  small = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
  small?: boolean;
}) {
  return (
    <div>
      <dt className="text-ink-fade italic text-xs uppercase tracking-wider">{label}</dt>
      <dd className={`text-ink ${mono ? "font-mono" : ""} ${small ? "text-xs break-all" : ""}`}>
        {value}
      </dd>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// Admin queue — unchanged from previous version
// ────────────────────────────────────────────────────────────────────

function AdminQueue({
  applications,
  state,
  error,
  actingOn,
  denyingId,
  denyReason,
  setDenyingId,
  setDenyReason,
  onApprove,
  onDeny,
  onClearError,
}: {
  applications: ApplicationListItem[];
  state: "idle" | "loading" | "ready" | "error";
  error: string;
  actingOn: string | null;
  denyingId: string | null;
  denyReason: string;
  setDenyingId: (id: string | null) => void;
  setDenyReason: (r: string) => void;
  onApprove: (id: string) => void;
  onDeny: (id: string) => void;
  onClearError: () => void;
}) {
  return (
    <>
      <div className="flex justify-center mb-6">
        <HeartOrnament className="w-7 h-7 text-terracotta" />
      </div>
      <h1 className="font-display italic text-display text-teal-deep text-center mb-2">
        Pending applications
      </h1>
      <p className="font-body text-sm text-ink-fade text-center mb-10 italic">
        {state === "loading"
          ? "Loading…"
          : applications.length === 0
            ? "Nothing waiting right now."
            : applications.length === 1
              ? "1 application waiting"
              : `${applications.length} applications waiting`}
      </p>

      {error && (
        <div className="max-w-2xl mx-auto mb-6 font-body text-sm text-terracotta-deep bg-terracotta/10 border border-terracotta/30 p-3 italic flex items-baseline justify-between">
          <span>{error}</span>
          <button onClick={onClearError} className="text-xs text-terracotta-deep hover:underline ml-3">
            dismiss
          </button>
        </div>
      )}

      <div className="space-y-6 max-w-3xl mx-auto">
        {applications.map((a) => (
          <div key={a.application_id} className="surface p-6">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <h2 className="font-display text-xl text-teal-deep">{a.name}</h2>
                <p className="font-body text-sm text-ink-fade italic">
                  {a.county} County ·{" "}
                  {new Date(a.submitted_at).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <p className="font-body text-xs text-ink-fade font-mono">
                {a.application_id.slice(0, 8)}…
              </p>
            </div>

            <p className="font-body text-sm text-ink mb-1">{a.email}</p>
            <p className="font-body text-xs text-ink-fade mb-4 font-mono">
              proposed_userid: {a.proposed_userid} · {a.agreement_version}
            </p>

            {a.county_warning && (
              <div className="bg-terracotta/10 border border-terracotta/30 px-4 py-2 mb-4 font-body text-xs text-terracotta-deep italic">
                {a.county_warning}
              </div>
            )}

            <div className="bg-bone border border-cream-deep p-4 mb-4">
              <p className="font-display text-sm text-teal-deep mb-1">Why they want to participate</p>
              <p className="font-body text-sm text-ink leading-relaxed whitespace-pre-wrap">
                {a.motivation}
              </p>
            </div>

            {denyingId === a.application_id ? (
              <div className="space-y-3">
                <textarea
                  value={denyReason}
                  onChange={(e) => setDenyReason(e.target.value)}
                  placeholder="Reason for denial (5+ characters)…"
                  className="w-full px-3 py-2 bg-bone border border-cream-deep focus:border-terracotta focus:outline-none font-body text-sm"
                  rows={3}
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => onDeny(a.application_id)}
                    disabled={actingOn === a.application_id}
                    className="btn-terracotta text-sm flex-1"
                  >
                    Confirm deny
                  </button>
                  <button
                    onClick={() => {
                      setDenyingId(null);
                      setDenyReason("");
                      onClearError();
                    }}
                    className="btn-secondary text-sm flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={() => onApprove(a.application_id)}
                  disabled={actingOn === a.application_id}
                  className="btn-primary"
                >
                  {actingOn === a.application_id ? "Approving…" : "Approve"}
                </button>
                <button
                  onClick={() => {
                    setDenyingId(a.application_id);
                    onClearError();
                  }}
                  disabled={actingOn !== null}
                  className="font-display text-sm text-ink-fade hover:text-terracotta transition-colors underline decoration-cream-deep hover:decoration-terracotta underline-offset-4 px-4"
                >
                  Deny
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild/services$ find ~/msjarvis-rebuild-working/ms-allis-frontend/app \
  -name "*.tsx" -o -name "*.ts" | sort
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/apply/page.tsx
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/commons/category/[slug]/page.tsx
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/commons/how-it-works/page.tsx
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/commons/page.tsx
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/commons/trade-guidelines/page.tsx
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/first-login/page.tsx
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/layout.tsx
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/page.tsx
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/portal/page.tsx
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/sign-in/page.tsx
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild/services$ for f in \
  ~/msjarvis-rebuild-working/ms-allis-frontend/app/portal/page.tsx \
  ~/msjarvis-rebuild-working/ms-allis-frontend/app/commons/how-it-works/page.tsx \
  ~/msjarvis-rebuild-working/ms-allis-frontend/app/sign-in/page.tsx; do
  echo "=== $f ==="; cat "$f" 2>/dev/null || echo "MISSING"; echo
done
=== /home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/portal/page.tsx ===
// app/portal/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  api,
  ApiError,
  session,
  ApplicationListItem,
  MeResponse,
} from "@/lib/api";
import { portalApi, BalancesResponse, LedgerEntry, LedgerResponse } from "@/lib/portal";
import { ChatPanel } from "@/components/ChatPanel";
import { FounderToken } from "@/components/FounderToken";
import { MsAllisPortrait } from "@/components/MsAllisPortrait";
import { HeartOrnament } from "@/components/HeartOrnament";
import { MountainSilhouette } from "@/components/MountainSilhouette";

type State = "checking" | "ready";
type Tab = "champion" | "admin";

export default function PortalPage() {
  const router = useRouter();
  const [state, setState] = useState<State>("checking");
  const [me, setMe] = useState<MeResponse | null>(null);
  const [balances, setBalances] = useState<BalancesResponse | null>(null);
  const [tab, setTab] = useState<Tab>("champion");

  // Admin tab state
  const [pending, setPending] = useState<ApplicationListItem[]>([]);
  const [pendingState, setPendingState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [pendingError, setPendingError] = useState("");
  const [actingOn, setActingOn] = useState<string | null>(null);
  const [denyingId, setDenyingId] = useState<string | null>(null);
  const [denyReason, setDenyReason] = useState("");

  useEffect(() => {
    if (!session.get()) {
      router.push("/sign-in");
      return;
    }
    api.me()
      .then((m) => {
        setMe(m);
        setState("ready");
        // Fetch balances in parallel; fail silently
        portalApi.myBalances()
          .then((b) => setBalances(b))
          .catch(() => setBalances(null));
      })
      .catch(() => {
        session.clear();
        router.push("/sign-in");
      });
  }, [router]);

  const isAdmin = me?.roles?.includes("admin") ?? false;

  useEffect(() => {
    if (tab !== "admin" || !isAdmin || pendingState !== "idle") return;
    loadPending();
  }, [tab, isAdmin, pendingState]);

  async function loadPending() {
    setPendingState("loading");
    setPendingError("");
    try {
      const result = await api.pending();
      setPending(result.applications || []);
      setPendingState("ready");
    } catch (err) {
      setPendingError(err instanceof ApiError ? err.detail : "Failed to load");
      setPendingState("error");
    }
  }

  async function handleApprove(id: string) {
    setActingOn(id);
    setPendingError("");
    try {
      await api.approve(id);
      await loadPending();
    } catch (err) {
      setPendingError(err instanceof ApiError ? err.detail : "Approve failed");
    }
    setActingOn(null);
  }

  async function handleDeny(id: string) {
    if (denyReason.trim().length < 5) {
      setPendingError("Denial reason must be at least 5 characters.");
      return;
    }
    setActingOn(id);
    setPendingError("");
    try {
      await api.deny(id, denyReason.trim());
      setDenyingId(null);
      setDenyReason("");
      await loadPending();
    } catch (err) {
      setPendingError(err instanceof ApiError ? err.detail : "Deny failed");
    }
    setActingOn(null);
  }

  function handleSignOut() {
    session.clear();
    router.push("/");
  }

  if (state === "checking") {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center">
        <p className="font-display italic text-ink-fade">Checking your session…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream pb-12">
      <header className="border-b border-cream-deep bg-bone">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MsAllisPortrait className="w-10 h-10" />
            <div>
              <p className="font-display text-base text-teal-deep">Ms. Allis</p>
              <p className="font-body text-xs text-ink-fade italic">{me?.userid ?? "—"}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="font-body text-sm text-ink-fade hover:text-terracotta transition-colors underline decoration-cream-deep hover:decoration-terracotta underline-offset-4"
          >
            Sign out
          </button>
        </div>
      </header>

      {isAdmin && (
        <div className="border-b border-cream-deep bg-cream">
          <div className="max-w-6xl mx-auto px-6 flex">
            <button
              onClick={() => setTab("champion")}
              className={`px-6 py-3 font-display text-sm transition-colors ${
                tab === "champion" ? "text-teal-deep border-b-2 border-terracotta" : "text-ink-fade hover:text-teal-deep"
              }`}
            >
              My Champion
            </button>
            <button
              onClick={() => setTab("admin")}
              className={`px-6 py-3 font-display text-sm transition-colors ${
                tab === "admin" ? "text-teal-deep border-b-2 border-terracotta" : "text-ink-fade hover:text-teal-deep"
              }`}
            >
              Admin
              {pending.length > 0 && (
                <span className="ml-2 inline-flex items-center justify-center bg-terracotta text-cream-light text-xs px-2 py-0.5 rounded-full">
                  {pending.length}
                </span>
              )}
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 pt-10">
        {tab === "champion" && <ChampionDashboard me={me} balances={balances} isAdmin={isAdmin} />}

        {tab === "admin" && isAdmin && (
          <AdminQueue
            applications={pending}
            state={pendingState}
            error={pendingError}
            actingOn={actingOn}
            denyingId={denyingId}
            denyReason={denyReason}
            setDenyingId={setDenyingId}
            setDenyReason={setDenyReason}
            onApprove={handleApprove}
            onDeny={handleDeny}
            onClearError={() => setPendingError("")}
          />
        )}
      </div>

      <div className="mt-16">
        <MountainSilhouette className="text-forest" />
      </div>
    </main>
  );
}

// ────────────────────────────────────────────────────────────────────
// Champion dashboard — data first, identity collapsed at bottom
// ────────────────────────────────────────────────────────────────────

function ChampionDashboard({
  me,
  balances,
  isAdmin,
}: {
  me: MeResponse | null;
  balances: BalancesResponse | null;
  isAdmin: boolean;
}) {
  const [showIdentity, setShowIdentity] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showLedger, setShowLedger] = useState(false);
  const [ledger, setLedger] = useState<LedgerResponse | null>(null);
  const [ledgerLoading, setLedgerLoading] = useState(false);
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");

  async function loadLedger(offset: number = 0) {
    setLedgerLoading(true);
    try {
      const data = await portalApi.myLedger(50, offset);
      setLedger(data);
    } catch {
      // fail silently — non-critical
    }
    setLedgerLoading(false);
  }

  const ems = balances?.ems_balance ?? 0;
  const pms = balances?.pms_balance ?? 0;

  return (
    <>
      {/* Hero — smaller than before */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <HeartOrnament className="w-6 h-6 text-terracotta" />
        </div>
        <h1 className="font-display italic text-3xl md:text-4xl text-teal-deep mb-1">
          Welcome, {me?.userid ?? ""}
        </h1>
        <p className="font-body text-sm text-ink-fade italic">
          {me?.county ? `${me.county} County` : "—"}
          {me?.county ? " · " : ""}Community Champion
        </p>
      </div>

      {/* Founder Token + Balances row */}
      <section className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="surface p-6 flex flex-col items-center justify-center text-center">
          {balances?.founder_token ? (
            <>
              <FounderToken
                serialNumber={balances.founder_token.serial_number}
                mintedAt={balances.founder_token.minted_at}
                cohort={balances.founder_token.cohort}
                size={112}
              />
              <p className="font-display text-base text-teal-deep mt-3">
                {balances.founder_token.display}
              </p>
              <p className="font-body text-xs text-ink-fade italic">Phase 0 token holder</p>
            </>
          ) : (
            <>
              <div
                className="rounded-full bg-cream-deep flex items-center justify-center"
                style={{ width: 112, height: 112 }}
              >
                <span className="font-display text-xs text-ink-fade italic">No token yet</span>
              </div>
              <p className="font-display text-base text-ink-fade mt-3 italic">Founder Token</p>
              <p className="font-body text-xs text-ink-fade italic">Coming soon</p>
            </>
          )}
        </div>

        <BalanceCard
          label="Earned MountainShares"
          shortLabel="EMS"
          amount={ems}
          accent="teal"
        />

        <BalanceCard
          label="Purchased MountainShares"
          shortLabel="PMS"
          amount={pms}
          accent="terracotta"
        />
      </section>

      {/* Region scaffolding row */}
      <section className="grid md:grid-cols-3 gap-4 mb-6">
        <PlaceholderCard
          title="Local businesses"
          subtitle={me?.county ? `${me.county} County directory` : "Your county"}
          note="Coming soon"
        />
        <PlaceholderCard
          title="Weather"
          subtitle="Real-time conditions"
          note="Coming soon"
        />
        <PlaceholderCard
          title="County resources"
          subtitle="Public services & support"
          note="Coming soon"
        />
      </section>

      {/* Action buttons */}
      <section className="flex flex-col sm:flex-row gap-3 mb-8 justify-center">
        <button
          onClick={() => setShowChat((v) => !v)}
          className="btn-primary"
        >
          {showChat ? "Hide Ms. Allis" : "Talk to Ms. Allis →"}
        </button>
        <a
          href="/commons"
          className="font-display text-sm bg-bone border border-cream-deep text-teal-deep py-3 px-6 hover:bg-cream-deep transition-colors text-center"
        >
          Enter The Commons →
        </a>
      </section>

      {/* Chat panel — toggles open/closed */}
      {showChat && (
        <section className="mb-6">
          <ChatPanel userId={me?.userid ?? ""} isAdmin={isAdmin} />
        </section>
      )}

      {/* Transaction history */}
      <section className="surface mt-4">
        <button
          onClick={() => { setShowLedger(v => !v); if (!showLedger) loadLedger(); }}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-bone transition-colors"
        >
          <span className="font-display text-base text-teal-deep">Transaction history</span>
          <span className="font-body text-xs text-ink-fade italic">
            {showLedger ? "▼ Hide" : "▶ Show"}{ledger ? ` · ${ledger.total} entries` : ""}
          </span>
        </button>
        {showLedger && (
          <div className="px-6 pb-6 border-t border-cream-deep">
            {ledgerLoading ? (
              <p className="font-body text-sm text-ink-fade italic mt-4">Loading…</p>
            ) : ledger && ledger.entries.length > 0 ? (
<>
                <div className="mt-4 mb-4 flex flex-wrap items-end gap-3 print:hidden">
                  <div>
                    <label className="block font-body text-xs text-ink-fade italic mb-1">From</label>
                    <input
                      type="date"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="px-2 py-1 bg-bone border border-cream-deep focus:border-teal focus:outline-none font-body text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs text-ink-fade italic mb-1">To</label>
                    <input
                      type="date"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="px-2 py-1 bg-bone border border-cream-deep focus:border-teal focus:outline-none font-body text-sm"
                    />
                  </div>
                  {(dateFrom || dateTo) && (
                    <button
                      type="button"
                      onClick={() => { setDateFrom(""); setDateTo(""); }}
                      className="font-body text-xs text-ink-fade hover:text-terracotta transition-colors underline decoration-cream-deep hover:decoration-terracotta underline-offset-4"
                    >
                      Clear
                    </button>
                  )}
                  <div className="ml-auto">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="font-display text-sm bg-teal-deep text-cream-light px-4 py-1.5 hover:bg-teal transition-colors"
                    >
                      Print
                    </button>
                  </div>
                </div>
                {(() => {
                  const filteredEntries = ledger.entries.filter((e) => {
                    if (!dateFrom && !dateTo) return true;
                    const ts = new Date(e.created_at).getTime();
                    if (dateFrom) {
                      const fromTs = new Date(dateFrom + "T00:00:00").getTime();
                      if (ts < fromTs) return false;
                    }
                    if (dateTo) {
                      const toTs = new Date(dateTo + "T23:59:59").getTime();
                      if (ts > toTs) return false;
                    }
                    return true;
                  });
                  return filteredEntries.length === 0 ? (
                    <p className="font-body text-sm text-ink-fade italic">
                      No transactions in this date range.
                    </p>
                  ) : (
                    <div id="ledger-print-area">
                      <div className="hidden print:block mb-4">
                        <h2 className="font-display text-xl text-teal-deep">Transaction history</h2>
                        <p className="font-body text-xs text-ink-fade italic">
                          {me?.userid ?? ""} {dateFrom || dateTo ? `· ${dateFrom || "earliest"} to ${dateTo || "latest"}` : ""}
                        </p>
                      </div>
                      <table className="w-full font-body text-sm">
                        <thead>
                          <tr className="text-left text-ink-fade text-xs uppercase tracking-wider border-b border-cream-deep">
                            <th className="pb-2 pr-4">Date</th>
                            <th className="pb-2 pr-4">Type</th>
                            <th className="pb-2 pr-4">Token</th>
                            <th className="pb-2 text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredEntries.map((e) => (
                            <tr key={e.id} className="border-b border-cream-deep/50 hover:bg-bone transition-colors">
                              <td className="py-2 pr-4 text-ink-fade text-xs">
                                {new Date(e.created_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                              </td>
                              <td className="py-2 pr-4 text-ink italic">{e.transaction_type.replace(/_/g, " ")}</td>
                              <td className="py-2 pr-4">
                                <span className={e.token_class === "EMS" ? "text-teal-deep font-display text-xs" : "text-terracotta font-display text-xs"}>
                                  {e.token_class}
                                </span>
                              </td>
                              <td className="py-2 text-right font-mono text-xs text-ink">
                                +{parseFloat(e.amount).toLocaleString(undefined, { minimumFractionDigits: 4 })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {(dateFrom || dateTo) && (
                        <p className="font-body text-xs text-ink-fade italic mt-3">
                          Showing {filteredEntries.length} of {ledger.entries.length} transactions in selected range.
                        </p>
                      )}
                    </div>
                  );
                })()}
              </>
            ) : (
              <p className="font-body text-sm text-ink-fade italic mt-4">No transactions yet.</p>
            )}
            {ledger && ledger.total > ledger.limit && (
              <div className="flex items-center justify-between mt-4 print:hidden">
                <p className="font-body text-xs text-ink-fade italic">
                  Page {Math.floor(ledger.offset / ledger.limit) + 1} of {Math.ceil(ledger.total / ledger.limit)}
                  {" · "}
                  showing {ledger.offset + 1}–{Math.min(ledger.offset + ledger.entries.length, ledger.total)} of {ledger.total}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => loadLedger(Math.max(0, ledger.offset - ledger.limit))}
                    disabled={ledgerLoading || ledger.offset === 0}
                    className="font-display text-sm bg-bone border border-cream-deep text-teal-deep px-3 py-1 hover:bg-cream-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    « Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => loadLedger(ledger.offset + ledger.limit)}
                    disabled={ledgerLoading || ledger.offset + ledger.entries.length >= ledger.total}
                    className="font-display text-sm bg-bone border border-cream-deep text-teal-deep px-3 py-1 hover:bg-cream-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next »
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Identity — collapsed accordion at bottom */}
      <section className="surface mt-4">
        <button
          onClick={() => setShowIdentity((v) => !v)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-bone transition-colors"
        >
          <span className="font-display text-base text-teal-deep">Your identity</span>
          <span className="font-body text-xs text-ink-fade italic">
            {showIdentity ? "▼ Hide" : "▶ Show"}
          </span>
        </button>
        {showIdentity && (
          <div className="px-6 pb-6 border-t border-cream-deep">
            <dl className="grid sm:grid-cols-2 gap-4 mt-4 font-body text-sm">
              <Field label="Userid" value={me?.userid ?? "—"} mono />
              <Field label="UEID" value={me?.uei || "—"} mono small />
              <Field label="County" value={me?.county ?? "—"} />
              <Field label="Roles" value={me?.roles?.join(", ") || "user"} />
              {balances?.balance_last_updated && (
                <Field
                  label="Balances updated"
                  value={new Date(balances.balance_last_updated).toLocaleString()}
                  small
                />
              )}
            </dl>
            <p className="font-body text-xs text-ink-fade italic mt-4 leading-relaxed">
              Your data is private. Only you can see this — no other Champion or admin
              can view your balances, UEID, or wallet. If anything looks wrong, email{" "}
              <a
                href="mailto:kiddstechnical@gmail.com"
                className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/30 hover:decoration-terracotta underline-offset-4 transition-colors"
              >
                kiddstechnical@gmail.com
              </a>.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

function BalanceCard({
  label,
  shortLabel,
  amount,
  accent,
}: {
  label: string;
  shortLabel: string;
  amount: number;
  accent: "teal" | "terracotta";
}) {
  const color = accent === "teal" ? "text-teal-deep" : "text-terracotta-deep";
  const formatted = amount.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });
  return (
    <div className="surface p-6 flex flex-col items-center justify-center text-center">
      <p className="font-body text-xs text-ink-fade italic uppercase tracking-wider">
        {shortLabel}
      </p>
      <p className={`font-display italic text-5xl ${color} my-2`}>{formatted}</p>
      <p className="font-body text-xs text-ink-fade italic">{label}</p>
    </div>
  );
}

function PlaceholderCard({
  title,
  subtitle,
  note,
}: {
  title: string;
  subtitle: string;
  note: string;
}) {
  return (
    <div className="surface p-6 flex flex-col items-center justify-center text-center opacity-60">
      <p className="font-display text-base text-teal-deep">{title}</p>
      <p className="font-body text-xs text-ink-fade italic mt-1">{subtitle}</p>
      <p className="font-body text-xs text-terracotta/70 italic mt-3">{note}</p>
    </div>
  );
}

function Field({
  label,
  value,
  mono = false,
  small = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
  small?: boolean;
}) {
  return (
    <div>
      <dt className="text-ink-fade italic text-xs uppercase tracking-wider">{label}</dt>
      <dd className={`text-ink ${mono ? "font-mono" : ""} ${small ? "text-xs break-all" : ""}`}>
        {value}
      </dd>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// Admin queue — unchanged from previous version
// ────────────────────────────────────────────────────────────────────

function AdminQueue({
  applications,
  state,
  error,
  actingOn,
  denyingId,
  denyReason,
  setDenyingId,
  setDenyReason,
  onApprove,
  onDeny,
  onClearError,
}: {
  applications: ApplicationListItem[];
  state: "idle" | "loading" | "ready" | "error";
  error: string;
  actingOn: string | null;
  denyingId: string | null;
  denyReason: string;
  setDenyingId: (id: string | null) => void;
  setDenyReason: (r: string) => void;
  onApprove: (id: string) => void;
  onDeny: (id: string) => void;
  onClearError: () => void;
}) {
  return (
    <>
      <div className="flex justify-center mb-6">
        <HeartOrnament className="w-7 h-7 text-terracotta" />
      </div>
      <h1 className="font-display italic text-display text-teal-deep text-center mb-2">
        Pending applications
      </h1>
      <p className="font-body text-sm text-ink-fade text-center mb-10 italic">
        {state === "loading"
          ? "Loading…"
          : applications.length === 0
            ? "Nothing waiting right now."
            : applications.length === 1
              ? "1 application waiting"
              : `${applications.length} applications waiting`}
      </p>

      {error && (
        <div className="max-w-2xl mx-auto mb-6 font-body text-sm text-terracotta-deep bg-terracotta/10 border border-terracotta/30 p-3 italic flex items-baseline justify-between">
          <span>{error}</span>
          <button onClick={onClearError} className="text-xs text-terracotta-deep hover:underline ml-3">
            dismiss
          </button>
        </div>
      )}

      <div className="space-y-6 max-w-3xl mx-auto">
        {applications.map((a) => (
          <div key={a.application_id} className="surface p-6">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <h2 className="font-display text-xl text-teal-deep">{a.name}</h2>
                <p className="font-body text-sm text-ink-fade italic">
                  {a.county} County ·{" "}
                  {new Date(a.submitted_at).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <p className="font-body text-xs text-ink-fade font-mono">
                {a.application_id.slice(0, 8)}…
              </p>
            </div>

            <p className="font-body text-sm text-ink mb-1">{a.email}</p>
            <p className="font-body text-xs text-ink-fade mb-4 font-mono">
              proposed_userid: {a.proposed_userid} · {a.agreement_version}
            </p>

            {a.county_warning && (
              <div className="bg-terracotta/10 border border-terracotta/30 px-4 py-2 mb-4 font-body text-xs text-terracotta-deep italic">
                {a.county_warning}
              </div>
            )}

            <div className="bg-bone border border-cream-deep p-4 mb-4">
              <p className="font-display text-sm text-teal-deep mb-1">Why they want to participate</p>
              <p className="font-body text-sm text-ink leading-relaxed whitespace-pre-wrap">
                {a.motivation}
              </p>
            </div>

            {denyingId === a.application_id ? (
              <div className="space-y-3">
                <textarea
                  value={denyReason}
                  onChange={(e) => setDenyReason(e.target.value)}
                  placeholder="Reason for denial (5+ characters)…"
                  className="w-full px-3 py-2 bg-bone border border-cream-deep focus:border-terracotta focus:outline-none font-body text-sm"
                  rows={3}
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => onDeny(a.application_id)}
                    disabled={actingOn === a.application_id}
                    className="btn-terracotta text-sm flex-1"
                  >
                    Confirm deny
                  </button>
                  <button
                    onClick={() => {
                      setDenyingId(null);
                      setDenyReason("");
                      onClearError();
                    }}
                    className="btn-secondary text-sm flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={() => onApprove(a.application_id)}
                  disabled={actingOn === a.application_id}
                  className="btn-primary"
                >
                  {actingOn === a.application_id ? "Approving…" : "Approve"}
                </button>
                <button
                  onClick={() => {
                    setDenyingId(a.application_id);
                    onClearError();
                  }}
                  disabled={actingOn !== null}
                  className="font-display text-sm text-ink-fade hover:text-terracotta transition-colors underline decoration-cream-deep hover:decoration-terracotta underline-offset-4 px-4"
                >
                  Deny
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

=== /home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/commons/how-it-works/page.tsx ===
// app/commons/how-it-works/page.tsx
"use client";

import Link from "next/link";
import { HeartOrnament } from "@/components/HeartOrnament";
import { MountainSilhouette } from "@/components/MountainSilhouette";
import { MsAllisPortrait } from "@/components/MsAllisPortrait";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-cream-deep bg-bone">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/commons" className="flex items-center gap-3">
            <MsAllisPortrait className="w-10 h-10" />
            <div>
              <p className="font-display text-base text-teal-deep">The Commons</p>
              <p className="font-body text-xs text-ink-fade italic">a MountainShares marketplace</p>
            </div>
          </Link>
          <nav className="flex items-center gap-5">
            <Link href="/commons" className="font-body text-sm text-ink-fade hover:text-terracotta transition-colors">
              ← Categories
            </Link>
            <Link href="/portal" className="font-body text-sm text-ink-fade hover:text-terracotta transition-colors">
              Portal
            </Link>
            <Link href="/sign-in" className="font-display text-sm bg-teal-deep text-cream-light px-4 py-1.5 hover:bg-teal transition-colors">
              Sign in
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-14 pb-10 text-center">
        <div className="flex justify-center mb-4">
          <HeartOrnament className="w-7 h-7 text-terracotta" />
        </div>
        <h1 className="font-display italic text-4xl md:text-5xl text-teal-deep mb-3">
          How The Commons works
        </h1>
        <p className="font-body text-base text-ink-fade italic max-w-2xl mx-auto leading-relaxed">
          A neighbor-to-neighbor marketplace, governed by West Virginia trade and
          barter law, run by your county's Champions.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-16 space-y-14">

        {/* Section 1 — What makes this different */}
        <section>
          <h2 className="font-display text-2xl text-teal-deep mb-2">
            Three things that make this different
          </h2>
          <p className="font-body text-sm text-ink-fade italic mb-6">
            We didn't build another classifieds site. We built the marketplace Appalachia deserves.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="surface p-5">
              <p className="font-display text-base text-teal-deep mb-2">Champion-verified</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Every seller is a real person — identity-verified, vouched for by their county.
                No anonymous accounts. No fake profiles.
              </p>
            </div>
            <div className="surface p-5">
              <p className="font-display text-base text-teal-deep mb-2">Local, not regional</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                A listing in Fayette County stays in Fayette County. We don't &ldquo;boost&rdquo;
                listings to neighboring cities to inflate views.
              </p>
            </div>
            <div className="surface p-5">
              <p className="font-display text-base text-teal-deep mb-2">Pay your way</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Dollars, MountainShares, or trade. Whichever works for both sides of the
                deal — under West Virginia law.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — For Buyers */}
        <section>
          <h2 className="font-display text-2xl text-teal-deep mb-6">For Buyers</h2>
          <ol className="space-y-5">
            <li className="flex gap-4">
              <span className="font-display italic text-3xl text-terracotta leading-none flex-shrink-0 w-12">01</span>
              <div>
                <p className="font-display text-base text-teal-deep mb-1">Browse by category or county</p>
                <p className="font-body text-sm text-ink leading-relaxed">
                  Find what you need close to home. Filter by your county, browse all 30 categories,
                  or search across The Commons.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-display italic text-3xl text-terracotta leading-none flex-shrink-0 w-12">02</span>
              <div>
                <p className="font-display text-base text-teal-deep mb-1">Talk to the seller directly</p>
                <p className="font-body text-sm text-ink leading-relaxed">
                  Use the contact details on the listing. No middleman, no platform messaging
                  delays. You and the seller work it out the way neighbors always have.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-display italic text-3xl text-terracotta leading-none flex-shrink-0 w-12">03</span>
              <div>
                <p className="font-display text-base text-teal-deep mb-1">Make the deal</p>
                <p className="font-body text-sm text-ink leading-relaxed">
                  Meet up, inspect, agree, complete. The Commons takes no commission, holds
                  no funds, and stays out of the way.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Section 3 — For Sellers */}
        <section>
          <h2 className="font-display text-2xl text-teal-deep mb-6">For Sellers</h2>
          <ol className="space-y-5">
            <li className="flex gap-4">
              <span className="font-display italic text-3xl text-terracotta leading-none flex-shrink-0 w-12">01</span>
              <div>
                <p className="font-display text-base text-teal-deep mb-1">Become a Champion first</p>
                <p className="font-body text-sm text-ink leading-relaxed">
                  Apply through{" "}
                  <Link href="/apply" className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/30 hover:decoration-terracotta underline-offset-4">
                    /apply
                  </Link>
                  , verify your identity, and — if Phase 0 is still open — receive a Founder Token.
                  Champions are the only people who can post listings.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-display italic text-3xl text-terracotta leading-none flex-shrink-0 w-12">02</span>
              <div>
                <p className="font-display text-base text-teal-deep mb-1">Post your listing</p>
                <p className="font-body text-sm text-ink leading-relaxed">
                  Title, photos, county, description, and price (dollars, MountainShares,
                  trade-only, or no price). It takes about a minute.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-display italic text-3xl text-terracotta leading-none flex-shrink-0 w-12">03</span>
              <div>
                <p className="font-display text-base text-teal-deep mb-1">Connect with a real neighbor</p>
                <p className="font-body text-sm text-ink leading-relaxed">
                  Buyers reach out directly. You set the terms. The Commons takes no
                  commission and adds no hidden fees.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Section 4 — Pay your way */}
        <section className="surface p-8">
          <h2 className="font-display text-2xl text-teal-deep mb-2">
            Pay your way: dollars, MountainShares, or trade
          </h2>
          <p className="font-body text-sm text-ink-fade italic mb-6">
            Three real options, every one of them legal in West Virginia.
          </p>

          <div className="space-y-5">
            <div>
              <p className="font-display text-base text-teal-deep mb-1">Dollars</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Standard cash, check, Venmo, whatever the buyer and seller agree on.
                Handled directly between the two of you. The Commons doesn't touch the money.
              </p>
            </div>

            <div>
              <p className="font-display text-base text-teal-deep mb-1">MountainShares (EMS &amp; PMS)</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Earned MountainShares (EMS) come from community work — verified hours,
                Champion contributions, recognized service. Purchased MountainShares (PMS)
                are bought through Harmony for Hope. Both spend here at face value when
                a seller chooses to accept them.
              </p>
            </div>

            <div>
              <p className="font-display text-base text-teal-deep mb-1">Trade &amp; Barter</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Trade is legal economic activity in West Virginia and a long Appalachian
                tradition. A truck for a tractor weekend. Firewood splitting for canned
                preserves. Sewing work for a side of beef. Both parties are responsible for
                their own tax obligations on the fair-market value of what they receive — barter
                income is taxable under federal and state law.
              </p>
              <p className="font-body text-sm text-ink leading-relaxed mt-2">
                Some categories have specific legal restrictions on what can be traded.{" "}
                <Link href="/commons/trade-guidelines" className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/30 hover:decoration-terracotta underline-offset-4">
                  Read our Trade Guidelines
                </Link>
                {" "}before you list anything you're unsure about.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 — More than buying and selling */}
        <section>
          <h2 className="font-display text-2xl text-teal-deep mb-2">
            More than buying and selling
          </h2>
          <p className="font-body text-sm text-ink-fade italic mb-6">
            Some of what neighbors do for each other doesn't have a price.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="surface p-5">
              <p className="font-display text-base text-teal-deep mb-1">Wanted</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Ask for what you need — a hay rake, a babysitter, a 1968 service manual —
                and see who responds.
              </p>
            </div>
            <div className="surface p-5">
              <p className="font-display text-base text-teal-deep mb-1">Free / Giveaways</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Pay it forward. Move what you can't use to someone who can.
              </p>
            </div>
            <div className="surface p-5">
              <p className="font-display text-base text-teal-deep mb-1">Lost &amp; Found</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                A lost dog, a missing tool, a found wallet. Mountain mutual aid.
              </p>
            </div>
            <div className="surface p-5">
              <p className="font-display text-base text-teal-deep mb-1">Jobs</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Local hiring, gig work, trades wanted. Both directions: looking for help,
                looking for work.
              </p>
            </div>
            <div className="surface p-5 sm:col-span-2">
              <p className="font-display text-base text-teal-deep mb-1">Community Bulletin</p>
              <p className="font-body text-sm text-ink leading-relaxed">
                Church suppers, benefit dinners, road closures, county events.
                Things your neighbors should know.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 — Your responsibility, our limits */}
        <section className="bg-bone border border-cream-deep p-8">
          <h2 className="font-display text-2xl text-teal-deep mb-2">
            Your responsibility, our limits
          </h2>
          <p className="font-body text-sm text-ink-fade italic mb-6">
            We're being upfront about this part.
          </p>
          <p className="font-body text-base text-ink leading-relaxed mb-5">
            The Commons is a place for neighbors to find each other. We don't broker deals,
            hold funds, take commission, or guarantee transactions. That means a few things
            you should know up front:
          </p>

          <ul className="space-y-4 font-body text-sm text-ink leading-relaxed">
            <li className="flex gap-3">
              <span className="text-terracotta font-display flex-shrink-0">·</span>
              <div>
                <strong className="font-display text-teal-deep">You're responsible for your own listings.</strong>{" "}
                Be honest about condition, ownership, and exactly what's being offered. Misrepresentation
                can get your Champion status revoked.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta font-display flex-shrink-0">·</span>
              <div>
                <strong className="font-display text-teal-deep">Some categories have legal requirements.</strong>{" "}
                West Virginia restricts the sale or barter of wildlife (§20-2-11), alcohol, controlled substances,
                and certain bedding and upholstery (§47-1A-11). Vehicles and real estate require formal title transfer
                regardless of how payment changes hands. See our{" "}
                <Link href="/commons/trade-guidelines" className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/30 hover:decoration-terracotta underline-offset-4">
                  Trade Guidelines
                </Link>
                {" "}for details.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta font-display flex-shrink-0">·</span>
              <div>
                <strong className="font-display text-teal-deep">Both parties are responsible for taxes.</strong>{" "}
                Whether paid in dollars, MountainShares, or trade, the IRS and the West Virginia State Tax
                Department may treat the value of what's exchanged as income. The Commons is not a tax advisor.
                Consult yours.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-terracotta font-display flex-shrink-0">·</span>
              <div>
                <strong className="font-display text-teal-deep">If something feels wrong, tell us.</strong>{" "}
                Fraud, misrepresentation, illegal listings — email{" "}
                <a href="mailto:kiddstechnical@gmail.com" className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/30 hover:decoration-terracotta underline-offset-4">
                  kiddstechnical@gmail.com
                </a>
                . Champion status can be revoked. Trust on The Commons is community-enforced.
              </div>
            </li>
          </ul>

          <p className="font-body text-xs text-ink-fade italic mt-6">
            The Commons and Harmony for Hope, Inc. don't provide legal or tax advice. The information here
            is general guidance, not a substitute for talking to a lawyer or accountant about your specific
            situation.
          </p>
        </section>

        {/* Section 7 — Help / Contact */}
        <section className="text-center">
          <h2 className="font-display italic text-2xl text-teal-deep mb-3">
            Questions? Trouble?
          </h2>
          <p className="font-body text-base text-ink leading-relaxed mb-6">
            Email{" "}
            <a href="mailto:kiddstechnical@gmail.com" className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/30 hover:decoration-terracotta underline-offset-4">
              kiddstechnical@gmail.com
            </a>
            . Real person. Reads every message.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/apply" className="btn-primary">
              Apply to be a Champion
            </Link>
            <Link href="/commons" className="font-display text-sm bg-bone border border-cream-deep text-teal-deep px-6 py-3 hover:bg-cream-deep transition-colors">
              Browse The Commons
            </Link>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-cream border-t border-cream-deep py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ink-fade italic">
            The Commons · a project of{" "}
            <a href="https://harmonyforhope.org" className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/30 hover:decoration-terracotta underline-offset-4">
              Harmony for Hope, Inc.
            </a>
            {" "}· Mount Hope, WV
          </p>
          <p className="font-body text-xs text-ink-fade italic">
            Earn your share. Trade your worth.
          </p>
        </div>
      </footer>

      <MountainSilhouette className="text-forest" />
    </main>
  );
}

=== /home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/app/sign-in/page.tsx ===
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api, ApiError, session } from "@/lib/api";
import { MsAllisPortrait } from "@/components/MsAllisPortrait";
import { HeartOrnament } from "@/components/HeartOrnament";

export default function SignInPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setSubmitting(true);
    try {
      const result = await api.signIn(username.trim(), password);
      session.set(result.access_token, username);
      router.push("/portal");
    } catch (err) {
      const msg = err instanceof ApiError ? err.detail : "Something went wrong.";
      setError(msg);
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-cream flex items-start justify-center pt-20 pb-12 px-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <MsAllisPortrait className="w-32 h-32" />
        </div>

        <div className="flex justify-center mb-6">
          <HeartOrnament className="w-7 h-7 text-terracotta" />
        </div>

        <h1 className="font-display italic text-display text-teal-deep text-center mb-2">
          Sign in
        </h1>
        <p className="font-body text-sm text-ink-fade text-center mb-8 italic">
          Welcome back, Champion. Sign in with your username.
        </p>

        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label className="block font-display text-sm text-teal-deep mb-1.5">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-bone border border-cream-deep focus:border-teal focus:outline-none font-body"
              autoComplete="username"
              autoFocus
              required
            />
            <p className="font-body text-xs text-ink-fade italic mt-1">
              Enter the username you were assigned (e.g. carrie_kidd).
            </p>
          </div>

          <div>
            <label className="block font-display text-sm text-teal-deep mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-bone border border-cream-deep focus:border-teal focus:outline-none font-body"
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <div className="font-body text-sm text-terracotta-deep bg-terracotta/10 border border-terracotta/30 p-3 italic">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full"
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="text-center mt-6 space-y-3">
          <p className="font-body text-sm text-ink-fade italic">
            Just got an approval email?{" "}
            <Link href="/first-login" className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/30 hover:decoration-terracotta underline-offset-4 transition-colors">
              First-time setup
            </Link>
          </p>
          <p className="font-body text-sm text-ink-fade italic">
            Not yet a Champion?{" "}
            <Link href="/apply" className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/30 hover:decoration-terracotta underline-offset-4 transition-colors">
              Apply here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild/services$ 

