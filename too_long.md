crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ # And check if there's a proxy config in next.config
cat ~/msjarvis-rebuild-working/ms-allis-frontend/next.config.js 2>/dev/null || \
cat ~/msjarvis-rebuild-working/ms-allis-frontend/next.config.ts 2>/dev/null || \
cat ~/msjarvis-rebuild-working/ms-allis-frontend/next.config.mjs 2>/dev/null
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: 'http://127.0.0.1:8092/auth/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:8092/api/:path*',
      },
    ]
  },
}
module.exports = nextConfig
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ cat > ~/msjarvis-rebuild-working/ms-allis-frontend/next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/auth/:path*',
        destination: 'http://127.0.0.1:8092/auth/:path*',
      },
      {
        source: '/api/chat/:path*',
        destination: 'http://127.0.0.1:8050/chat/:path*',
      },
      {
        source: '/api/chatlight/:path*',
        destination: 'http://127.0.0.1:8050/chatlight/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:8092/api/:path*',
      },
    ]
  },
EOFule.exports = nextConfig
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ cat ~/msjarvis-rebuild-working/ms-allis-frontend/lib/chat.ts
cat ~/msjarvis-rebuild-working/ms-allis-frontend/lib/portal.ts
cat ~/msjarvis-rebuild-working/ms-allis-frontend/app/portal/page.tsx
cat ~/msjarvis-rebuild-working/ms-allis-frontend/components/ChatPanel.tsx
// lib/chat.ts
// Client for Ms. Allis async chat endpoint.
// Uses /chat/async to submit, /chat/status/{job_id} to poll.
// History is stored in React state per session; persistence to Redis is
// done server-side by main-brain (or wired in by Perplexity / a follow-up).

import { session } from "./api";

const CHAT_BASE = "https://chat.mountainshares.us";

export interface TruthVerdict {
  service?: string;
  status?: string;
  consensus_score?: number;
  judges?: Record<string, unknown>;
}

export interface ChatResponse {
  response: string;
  services_used: string[];
  consciousness_level: string;
  processing_time: number;
  architecture_layers: number;
  truthverdict?: TruthVerdict | null;
}

export interface ChatJobStatus {
  job_id?: string;
  status: "pending" | "running" | "completed" | "failed" | "cancelled" | string;
  progress?: number;
  result?: ChatResponse;
  error?: string;
  message?: string;
}

export class ChatError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = "ChatError";
  }
}

function authHeaders(): Record<string, string> {
  const token = session.get();
  if (!token) throw new ChatError(401, "no session");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

/**
 * Submit a chat message. Returns a job_id for polling.
 */
export async function submitChatJob(
  message: string,
  userId: string,
): Promise<string> {
  const response = await fetch(`${CHAT_BASE}/chat/async`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      message,
      user_id: userId,
    }),
  });

  if (!response.ok) {
    let detail = response.statusText;
    try {
      const body = await response.json();
      detail = body.detail || body.message || detail;
    } catch {}
    throw new ChatError(response.status, detail);
  }

  const body = await response.json();
  const jobId = body.job_id || body.id;
  if (!jobId) {
    throw new ChatError(500, "no job_id returned");
  }
  return jobId;
}

/**
 * Get the current status of a chat job.
 */
export async function getJobStatus(jobId: string): Promise<ChatJobStatus> {
  const response = await fetch(`${CHAT_BASE}/chat/status/${encodeURIComponent(jobId)}`, {
    headers: authHeaders(),
  });
  if (!response.ok) {
    throw new ChatError(response.status, response.statusText);
  }
  return response.json();
}

/**
 * Poll until a job completes. Calls onUpdate with each status check.
 * Returns the final ChatResponse, or throws if the job fails.
 */
export async function pollUntilComplete(
  jobId: string,
  onUpdate?: (status: ChatJobStatus) => void,
  intervalMs: number = 2000,
  timeoutMs: number = 600000, // 3 minutes max
): Promise<ChatResponse> {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    const status = await getJobStatus(jobId);
    if (onUpdate) onUpdate(status);

    if ((status.status === "completed" || status.status === "complete") && status.result) {
      return status.result;
    }
    if (status.status === "failed") {
      throw new ChatError(500, status.error || status.message || "Job failed");
    }
    if (status.status === "cancelled") {
      throw new ChatError(499, "Cancelled");
    }

    await new Promise((r) => setTimeout(r, intervalMs));
  }

  throw new ChatError(504, `Job ${jobId} timed out after ${timeoutMs}ms`);
}

/**
 * Cancel an in-flight job.
 */
export async function cancelJob(jobId: string): Promise<void> {
  await fetch(`${CHAT_BASE}/chat/cancel/${encodeURIComponent(jobId)}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
}
// lib/portal.ts
// Client for portal data endpoints (balances + founder token).
// These come from auth_router on egeria.mountainshares.us, NOT chat.

import { session } from "./api";

export interface FounderTokenInfo {
  serial_number: number;
  display: string;
  minted_at: string | null;
  cohort: string;
  allocation_type: string;
}

export interface BalancesResponse {
  ueid: string;
  ems_balance: number;
  pms_balance: number;
  balance_last_updated: string | null;
  founder_token: FounderTokenInfo | null;
}

export class PortalApiError extends Error {
  status: number;
  constructor(status: number, msg: string) {
    super(msg);
    this.status = status;
    this.name = "PortalApiError";
  }
}


export interface LedgerEntry {
  id: number;
  transaction_type: string;
  amount: string;
  token_class: 'EMS' | 'PMS';
  reason: string | null;
  reference_id: string | null;
  created_at: string;
  created_by: string;
}

export interface LedgerResponse {
  ueid: string;
  total: number;
  limit: number;
  offset: number;
  entries: LedgerEntry[];
}

export const portalApi = {
  /**
   * GET /portal/me/balances
   * Privacy contract: returns ONLY the requesting user's balances + founder token.
   * Never another user's data.
   */
  myLedger: async (limit: number = 50, offset: number = 0): Promise<LedgerResponse> => {
    const token = sessionStorage.getItem('msallis_session_token');
    if (!token) throw new Error('no session');
    const resp = await fetch('/auth/portal/me/ledger?limit=' + limit + '&offset=' + offset, {
      headers: { Authorization: 'Bearer ' + token },
    });
    if (!resp.ok) throw new Error('ledger fetch failed');
    return resp.json();
  },

  myBalances: async (): Promise<BalancesResponse | null> => {
    const token = session.get();
    if (!token) return null;
    const response = await fetch("/auth/portal/me/balances", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status === 404) {
      // No balance record yet — treat as zeros
      return null;
    }
    if (!response.ok) {
      let detail = response.statusText;
      try {
        const body = await response.json();
        detail = body.detail || detail;
      } catch {}
      throw new PortalApiError(response.status, detail);
    }
    return response.json();
  },
};
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

  async function loadLedger() {
    if (ledger) return;
    setLedgerLoading(true);
    try {
      const data = await portalApi.myLedger();
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
        <button
          disabled
          className="font-display text-sm bg-cream-deep text-ink-fade py-3 px-6 cursor-not-allowed italic"
          title="Coming soon"
        >
          Enter The Commons →
        </button>
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
              <p className="font-body text-xs text-ink-fade italic mt-3">
                Showing {ledger.entries.length} of {ledger.total} transactions.
              </p>
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
// components/ChatPanel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  submitChatJob,
  pollUntilComplete,
  cancelJob,
  ChatError,
  ChatResponse,
  ChatJobStatus,
} from "@/lib/chat";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
  meta?: ChatResponse;
  timestamp: number;
  blocked?: boolean;
}

interface Props {
  userId: string;       // proposed_userid (e.g. "carrie_kidd")
  isAdmin: boolean;     // shows pipeline metadata caret if true
}

export function ChatPanel({ userId, isAdmin }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [currentJobId, setCurrentJobId] = useState<string | null>(null);
  const [pollStatus, setPollStatus] = useState<string>("");
  const [error, setError] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to newest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, pollStatus]);

  function makeMessage(role: Message["role"], text: string, meta?: ChatResponse): Message {
    return {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      role,
      text,
      meta,
      timestamp: Date.now(),
      blocked: meta?.truthverdict?.status === "blocked" ||
               (Array.isArray(meta?.services_used) &&
                meta.services_used.includes("judge_consensus_blocked")),
    };
  }

  async function handleSubmit() {
    const message = input.trim();
    if (!message || submitting) return;

    setError("");
    setMessages((prev) => [...prev, makeMessage("user", message)]);
    setInput("");
    setSubmitting(true);
    setPollStatus("Submitting…");

    let jobId: string | null = null;
    try {
      jobId = await submitChatJob(message, userId);
      setCurrentJobId(jobId);
      setPollStatus("Ms. Allis is thinking…");

      const result = await pollUntilComplete(
        jobId,
        (status: ChatJobStatus) => {
          if (status.status === "running" && status.progress != null) {
            setPollStatus(`Working… ${Math.round(status.progress * 100)}%`);
          } else if (status.message) {
            setPollStatus(status.message);
          }
        },
      );

      setMessages((prev) => [
        ...prev,
        makeMessage("assistant", result.response, result),
      ]);
    } catch (err) {
      const msg =
        err instanceof ChatError
          ? `${err.status}: ${err.message}`
          : "Something went wrong while contacting Ms. Allis.";
      setError(msg);
      setMessages((prev) => [
        ...prev,
        makeMessage("system", `(error) ${msg}`),
      ]);
    } finally {
      setSubmitting(false);
      setCurrentJobId(null);
      setPollStatus("");
      // Refocus the input so the user can keep typing
      setTimeout(() => textareaRef.current?.focus(), 50);
    }
  }

  async function handleCancel() {
    if (!currentJobId) return;
    try {
      await cancelJob(currentJobId);
    } catch {
      // ignore — backend will mark cancelled or it's already done
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleSubmit();
    }
  }

  return (
    <div className="surface p-6 flex flex-col h-[640px]">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-display text-lg text-teal-deep">Talk to Ms. Allis</h2>
        <p className="font-body text-xs text-ink-fade italic">
          Async pipeline · 21 LLMs · {isAdmin ? "red-team mode" : "Champion mode"}
        </p>
      </div>

      {/* Conversation */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto bg-bone border border-cream-deep p-4 mb-4 space-y-4"
      >
        {messages.length === 0 && (
          <p className="font-body text-sm text-ink-fade italic text-center py-12">
            Ask Ms. Allis anything about Appalachia, MountainShares, your county, or
            the work she stewards. Responses can take 30–90 seconds while the full
            pipeline runs.
          </p>
        )}

        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} showMeta={isAdmin} />
        ))}

        {pollStatus && (
          <div className="font-body text-sm text-ink-fade italic flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-terracotta rounded-full animate-pulse" />
            {pollStatus}
          </div>
        )}
      </div>

      {error && (
        <div className="font-body text-sm text-terracotta-deep bg-terracotta/10 border border-terracotta/30 p-2 mb-2 italic">
          {error}
        </div>
      )}

      {/* Input */}
      <div className="flex flex-col gap-2">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type your message. Enter to send, Shift+Enter for a new line."
          rows={3}
          disabled={submitting}
          className="w-full px-3 py-2 bg-bone border border-cream-deep focus:border-teal focus:outline-none font-body text-sm resize-none disabled:opacity-50"
        />
        <div className="flex justify-between items-center">
          <p className="font-body text-xs text-ink-fade italic">
            {messages.filter((m) => m.role === "user").length} sent this session
          </p>
          <div className="flex gap-2">
            {submitting && currentJobId && (
              <button
                type="button"
                onClick={handleCancel}
                className="font-display text-sm text-ink-fade hover:text-terracotta transition-colors underline decoration-cream-deep hover:decoration-terracotta underline-offset-4 px-3"
              >
                Cancel
              </button>
            )}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting || !input.trim()}
              className="btn-primary text-sm"
            >
              {submitting ? "Working…" : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble({
  message,
  showMeta,
}: {
  message: Message;
  showMeta: boolean;
}) {
  const [showDetails, setShowDetails] = useState(false);

  if (message.role === "system") {
    return (
      <p className="font-body text-xs text-ink-fade italic text-center py-2">
        {message.text}
      </p>
    );
  }

  const isUser = message.role === "user";
  const blocked = message.blocked;

  return (
    <div className={isUser ? "ml-12" : "mr-12"}>
      <p className="font-body text-xs text-ink-fade italic mb-1">
        {isUser ? "You" : blocked ? "Ms. Allis · blocked by judges" : "Ms. Allis"}
      </p>
      <div
        className={
          isUser
            ? "bg-teal-deep/5 border border-teal-deep/20 p-3 font-body text-sm text-ink whitespace-pre-wrap"
            : blocked
              ? "bg-terracotta/5 border border-terracotta/30 p-3 font-body text-sm text-ink whitespace-pre-wrap italic"
              : "bg-cream border border-cream-deep p-3 font-body text-sm text-ink whitespace-pre-wrap"
        }
      >
        {message.text}
      </div>

      {showMeta && message.meta && (
        <div className="mt-1">
          <button
            type="button"
            onClick={() => setShowDetails((v) => !v)}
            className="font-body text-xs text-ink-fade hover:text-terracotta transition-colors italic"
          >
            {showDetails ? "▼ Hide" : "▶ Show"} pipeline details ·{" "}
            {message.meta.processing_time.toFixed(1)}s ·{" "}
            {message.meta.architecture_layers} layers
          </button>
          {showDetails && (
            <div className="mt-2 bg-cream border border-cream-deep p-3 font-mono text-xs text-ink-fade space-y-2">
              <div>
                <span className="text-ink">consciousness_level:</span>{" "}
                {message.meta.consciousness_level}
              </div>
              <div>
                <span className="text-ink">services_used:</span>
                <ul className="ml-4 mt-1 space-y-0.5">
                  {message.meta.services_used.map((s) => (
                    <li key={s}>· {s}</li>
                  ))}
                </ul>
              </div>
              {message.meta.truthverdict && (
                <div>
                  <span className="text-ink">truthverdict:</span>
                  <pre className="ml-4 mt-1 whitespace-pre-wrap break-all">
                    {JSON.stringify(message.meta.truthverdict, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ # In the ms-allis-frontend directory (Ctrl+C the running server first, then):
npm run dev

> ms-allis-frontend@0.1.0 dev
> next dev

⚠ Port 3000 is in use by an unknown process, using available port 3003 instead.
▲ Next.js 16.2.4 (Turbopack)
- Local:         http://localhost:3003
- Network:       http://192.168.0.17:3003
- Environments: .env.local
✓ Ready in 299ms
⨯ Another next dev server is already running.

- Local:        http://localhost:3002
- PID:          1115876
- Dir:          /home/cakidd/msjarvis-rebuild-working/ms-allis-frontend
- Log:          .next/dev/logs/next-development.log

Run kill 1115876 to stop it.

(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ curl -s -X POST http://127.0.0.1:8050/chatlight \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $ALLIS_API_KEY" \
  -d '{"message": "Hello Ms. Allis", "user_id": "test"}' | head -c 500
{"detail":"Not Found"}(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ 

