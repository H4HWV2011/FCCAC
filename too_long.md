(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # Find where the unified gateway actually runsg/msjarvis-rebuild$ # Find where the unified gateway actually runs
docker ps | grep -i "unified\|gateway"

# Check what container has the chroma proxy route active
docker ps --format "{{.Names}}" | while read name; do
  result=$(docker exec $name grep -r "proxy_chroma\|chroma/{path" \
    /app/services 2>/dev/null | grep -v ".venv")
  if [ ! -z "$result" ]; then
    echo "=== FOUND IN: $name ==="
    echo "$result"
  fi
done

# Also check what port the unified gateway exposes
docker inspect jarvis-unified-gateway 2>/dev/null | \
  grep -A5 "PortBindings"
ec3a1fe6bfaf   msjarvis-rebuild-jarvis-unified-gateway             "/bin/sh -c 'pip ins…"   24 hours ago   Up 15 hours              127.0.0.1:18018->8001/tcp                                                                                      jarvis-unified-gateway
=== FOUND IN: jarvis-auth-api ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-blood-brain-barrier ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-unified-gateway ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-main-brain ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: nbb_woah_algorithms ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-brain-orchestrator ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-consciousness-bridge ===
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-20llm-production ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-local-resources ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-spiritual-rag ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):

=== FOUND IN: jarvis-confidence-decay ===
/app/services/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
/app/services/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/msjarvis-rebuild/backups/fix-20260411-080355/ms_jarvis_unified_gateway.py.bak:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/msjarvis-rebuild/backups/fix-20260411-080355/ms_jarvis_unified_gateway.py.bak:async def proxy_chroma(path: str, request: Request):
/app/services/logs/ch40_closeout/ms_jarvis_unified_gateway.snapshot.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/logs/ch40_closeout/ms_jarvis_unified_gateway.snapshot.py:async def proxy_chroma(path: str, request: Request):
/app/services/backups/fix-20260411-080158/ms_jarvis_unified_gateway.py.bak:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/backups/fix-20260411-080158/ms_jarvis_unified_gateway.py.bak:async def proxy_chroma(path: str, request: Request):
/app/services/backups/fix-20260411-080527/ms_jarvis_unified_gateway.py.bak:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/backups/fix-20260411-080527/ms_jarvis_unified_gateway.py.bak:async def proxy_chroma(path: str, request: Request):
/app/services/backups/fix-20260411-080124/ms_jarvis_unified_gateway.py.bak:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/backups/fix-20260411-080124/ms_jarvis_unified_gateway.py.bak:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-judge-truth ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-eeg-beta ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-eeg-theta ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-eeg-delta ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-mountainshares-coordinator ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-ms-token-service ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-fifth-dgm ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-hilbert-state ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):
=== FOUND IN: jarvis-community-stake-registry ===
/app/services/ms_jarvis_unified_gateway.py:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak_bbb_obs_20260415-125908:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225542:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-225131:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224852:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.autopatch.20260415-221952:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak-20260419-1422:async def proxy_chroma(path: str, request: Request):
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
/app/services/ms_jarvis_unified_gateway.py.bak.20260415-224730:async def proxy_chroma(path: str, request: Request):


