
crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ grep -r "chat.mountainshares\|Ms. Allis is resting\|BRAIN_URL\|/chat" \
  ~/msjarvis-rebuild-working/ms-allis-frontend \
  --include="*.tsx" --include="*.ts" \
  --exclude-dir=node_modules --exclude-dir=.next -l
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/components/ChatPanel.tsx
/home/cakidd/msjarvis-rebuild-working/ms-allis-frontend/lib/chat.ts
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ docker exec jarvis-unified-gateway find /app -name "*.py" | head -20
/app/services/ms_jarvis_unified_gateway.py
/app/services/session_sidecar_client.py
/app/services/services_safe.py
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ docker exec jarvis-unified-gateway find / -name "*.py" -path "*/app/*" 2>/dev/null | head -10
/app/services/ms_jarvis_unified_gateway.py
/app/services/session_sidecar_client.py
/app/services/services_safe.py
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ cat ~/msjarvis-rebuild-working/ms-allis-frontend/lib/chat.ts
// lib/chat.ts
// Client for Ms. Allis async chat endpoint.
// Uses /chat/async to submit, /chat/status/{job_id} to poll.
// History is stored in React state per session; persistence to Redis is
// done server-side by main-brain (or wired in by Perplexity / a follow-up).

import { session } from "./api";

const CHAT_BASE = "";

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

  let _transientFails = 0;
  while (Date.now() - start < timeoutMs) {
    let status;
    try {
      status = await getJobStatus(jobId);
      _transientFails = 0;
    } catch (err) {
      if (err instanceof ChatError && [502, 503, 504].includes(err.status)) {
        _transientFails = (_transientFails || 0) + 1;
        if (_transientFails >= 5) throw new ChatError(err.status, "Lost connection to Ms. Allis");
        await new Promise((r) => setTimeout(r, intervalMs));
        continue;
      }
      throw err;
    }
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
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ cat ~/msjarvis-rebuild-working/ms-allis-frontend/lib/chat.ts
// lib/chat.ts
// Client for Ms. Allis async chat endpoint.
// Uses /chat/async to submit, /chat/status/{job_id} to poll.
// History is stored in React state per session; persistence to Redis is
// done server-side by main-brain (or wired in by Perplexity / a follow-up).

import { session } from "./api";

const CHAT_BASE = "";

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

  let _transientFails = 0;
  while (Date.now() - start < timeoutMs) {
    let status;
    try {
      status = await getJobStatus(jobId);
      _transientFails = 0;
    } catch (err) {
      if (err instanceof ChatError && [502, 503, 504].includes(err.status)) {
        _transientFails = (_transientFails || 0) + 1;
        if (_transientFails >= 5) throw new ChatError(err.status, "Lost connection to Ms. Allis");
        await new Promise((r) => setTimeout(r, intervalMs));
        continue;
      }
      throw err;
    }
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
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ cat ~/msjarvis-rebuild-working/ms-allis-frontend/components/ChatPanel.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { session } from "@/lib/api";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export function ChatPanel({
  userId,
  isAdmin,
}: {
  userId: string;
  isAdmin: boolean;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setError("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);
    try {
      const brainUrl = process.env.NEXT_PUBLIC_BRAIN_URL ?? "";
      const res = await fetch(`${brainUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(session.get() ? { Authorization: `Bearer ${session.get()}` } : {}) },
        body: JSON.stringify({ message: text, user_id: userId || "anonymous" }),
      });
      if (res.status >= 400) throw new Error(`Brain returned ${res.status}`);
      const data = await res.json();
      const reply = data.response ?? "Ms. Allis did not return a response.";
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (err) {
      setError("Ms. Allis is resting right now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="surface flex flex-col" style={{ minHeight: "420px", maxHeight: "600px" }}>
      <div className="px-5 py-3 border-b border-cream-deep flex items-center gap-2">
        <span className="font-display text-sm text-teal-deep">Ms. Egeria Allis</span>
        <span className="font-body text-xs text-ink-fade italic">· MountainShares AI</span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages.length === 0 && loading === false && (
          <p className="font-body text-sm text-ink-fade italic text-center mt-8">
            Ask Ms. Allis anything about MountainShares, your community, or West Virginia.
          </p>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-prose px-4 py-2 font-body text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-teal-deep text-cream-light"
                  : "bg-bone border border-cream-deep text-ink"
              }`}
              style={{ borderRadius: "4px" }}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div
              className="bg-bone border border-cream-deep px-4 py-2 font-body text-sm text-ink-fade italic"
              style={{ borderRadius: "4px" }}
            >
              Ms. Allis is thinking…
            </div>
          </div>
        )}
        {error.length > 0 && (
          <p className="font-body text-xs text-terracotta-deep italic text-center">{error}</p>
        )}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSend} className="border-t border-cream-deep px-4 py-3 flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Ms. Allis…"
          disabled={loading}
          className="flex-1 px-3 py-2 bg-bone border border-cream-deep focus:border-teal focus:outline-none font-body text-sm disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || input.trim().length === 0}
          className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "…" : "Send"}
        </button>
      </form>
    </div>
  );
}
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ docker exec jarvis-unified-gateway ls /
docker exec jarvis-unified-gateway ls /app 2>/dev/null || \
docker exec jarvis-unified-gateway ls /usr/src 2>/dev/null || \
docker exec jarvis-unified-gateway ls /srv 2>/dev/null
app
bin
boot
dev
etc
home
lib
lib64
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var
services
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/ms-allis-frontend$ 

