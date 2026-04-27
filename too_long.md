(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ curl -i http://localhost:8092/static/dashboard.html | head -40hboard.html | head -40
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    22  100    22    0     0   8899      0 --:--:-- --:--:-- --:--:-- 11000
HTTP/1.1 404 Not Found
date: Mon, 27 Apr 2026 22:31:37 GMT
server: uvicorn
content-length: 22
content-type: application/json

(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ grep -RniE "StaticFiles|mount\\(|dashboard.html|ems_balance|mountainshares_balances|wallet|ledger|transaction" \|ledger|transaction" \
~/msjarvis-rebuild-working/msjarvis-rebuild/services | head -200
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/truly_unpaired_services.txt:465:ms_jarvis_ueid_wallet_integration
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_config:4:Visibility: 30+ Services (Consciousness I-Containers/fractal DGM/WOAH, 23 Ollama LLMs base metalAI, UEID biometric/wallet, GIS 1002 rows Mount Hope WV, ChromaDB/Redis perpetual, biblical/genealogy ex: Paul Tarsus to Edward I/Strong).
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_config:30:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "h4h_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_config:63:    description="""Thorough Whitebox for H4H Research: Full visibility into consciousness layers (I-Containers, WOAH depth-7, fractal DGM), base metalAI (23 Ollama LLMs, GPU mgmt), biometric/wallet (UEID security proxies), GIS (1002 rows: Mount Hope lat 37.9 Fayette WV ancestry hub to Paul Tarsus Damascus/Edward I/Strong Puritan genealogy), perpetual storage (ChromaDB/Redis RAG), 30+ microservices (no blackbox). Examples: /gis/query?location=Mount Hope → Biblical ties; /consciousness/chat?message=Damascus to WV roots → GIS-prepended WOAH analysis. Archive 8014 disabled.""",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_config:74:        {"name": "Biometric-Wallet", "description": "UEID proxies (immutable H4H identity/provenance/security)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_config:83:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_config:131:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_config:290:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_config:295:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_config:364:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_query_router.py:246:        "variable wallet",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/remaining_services.txt:535:ms_jarvis_ueid_wallet_integration
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/implement_safe_optimizations.py:201:            self.session.mount("http://", adapter)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/implement_safe_optimizations.py:202:            self.session.mount("https://", adapter)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:67:    "ueid_wallet_registry": {"file": "/home/ms-jarvis/msjarvis-rebuild/data/ueid_wallet_registry.db", "type": "registry", "size_kb": 32, "purpose": "UEID wallet and authentication", "status": "ACTIVE"}
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:4:Visibility: 30+ Services (Consciousness I-Containers/fractal DGM/WOAH, 23 Ollama LLMs base metalAI, UEID biometric/wallet, GIS 1002 rows Mount Hope WV, ChromaDB/Redis perpetual, biblical/genealogy ex: Paul Tarsus to Edward I/Strong).
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:30:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "h4h_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:63:    description="""Thorough Whitebox for H4H Research: Full visibility into consciousness layers (I-Containers, WOAH depth-7, fractal DGM), base metalAI (23 Ollama LLMs, GPU mgmt), biometric/wallet (UEID security proxies), GIS (1002 rows: Mount Hope lat 37.9 Fayette WV ancestry hub to Paul Tarsus Damascus/Edward I/Strong Puritan genealogy), perpetual storage (ChromaDB/Redis RAG), 30+ microservices (no blackbox). Examples: /gis/query?location=Mount Hope → Biblical ties; /consciousness/chat?message=Damascus to WV roots → GIS-prepended WOAH analysis. Archive 8014 disabled.""",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:74:        {"name": "Biometric-Wallet", "description": "UEID proxies (immutable H4H identity/provenance/security)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:83:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:131:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:290:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:295:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:364:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:65:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "research_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:123:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:128:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:196:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:361:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:366:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:457:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:732:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1095:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "research_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1153:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1158:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1226:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1391:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1396:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1487:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1762:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2124:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "research_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2182:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2187:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2255:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2420:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2425:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2516:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2791:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3154:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "research_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3212:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3217:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3285:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3450:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3455:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3546:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3821:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.proxy_final.py:154:alert(j.status==='success'?'OK Complete! Wallet: '+j.wallet_id:'Error: '+j.detail);}};
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.proxy_final.py:169:        "wallet_id": f"0x{uuid.uuid4().hex[:40]}",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment_9327.log:3:INFO:__main__:🔐 Wallet storage: ../blockchain/wallets (NEVER commit to GitHub)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/create_immutable_security_layer.py:39:        wallet_address TEXT UNIQUE NOT NULL,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/create_immutable_security_layer.py:40:        wallet_private_key_encrypted TEXT NOT NULL,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/create_immutable_security_layer.py:74:        wallet_address, wallet_private_key_encrypted, created_at, locked
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:2:wallet_service.py — MountainShares custodial wallet management
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:6:in Redis. Master key lives in ~/.msallis/wallet_master.key (chmod 600), with override via
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:7:the MSALLIS_WALLET_MASTER_KEY environment variable for production deployments.
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:10:    wallet:<userid> = hash {
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:34:# Enable HD wallet features for mnemonic support if we ever want them later.
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:35:Account.enable_unaudited_hdwallet_features()
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:38:class WalletError(Exception):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:39:    """Base class for wallet errors."""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:42:class WalletAlreadyExistsError(WalletError):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:46:class WalletNotFoundError(WalletError):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:50:class WalletService:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:52:    Manages custodial Ethereum wallets for Ms. Allis users.
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:59:    DEFAULT_MASTER_KEY_PATH = Path.home() / ".msallis" / "wallet_master.key"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:72:        env_key = os.getenv("MSALLIS_WALLET_MASTER_KEY")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:76:        key_path = path or WalletService.DEFAULT_MASTER_KEY_PATH
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:87:    def _wallet_key(self, userid: str) -> str:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:88:        return f"wallet:{userid}"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:90:    def create_wallet(self, userid: str) -> dict:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:93:        Raises WalletAlreadyExistsError if a wallet already exists for this userid.
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:95:        key = self._wallet_key(userid)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:97:            raise WalletAlreadyExistsError(f"wallet already exists for {userid}")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:120:    def get_wallet_public(self, userid: str) -> dict:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:121:        """Returns public-safe wallet info — never the private key."""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:122:        record = self.redis.hgetall(self._wallet_key(userid))
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:124:            raise WalletNotFoundError(f"no wallet for {userid}")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:145:        record = self.redis.hgetall(self._wallet_key(userid))
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:147:            raise WalletNotFoundError(f"no wallet for {userid}")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:153:            raise WalletError("master key cannot decrypt this wallet — wrong key?") from e
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py:160:        self.redis.rpush(f"wallet:audit:{userid}", audit_entry)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_BACKUP.py:67:    "ueid_wallet_registry": {"file": "/home/ms-jarvis/msjarvis-rebuild/data/ueid_wallet_registry.db", "type": "registry", "size_kb": 32, "purpose": "UEID wallet and authentication", "status": "ACTIVE"}
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_BACKUP.py:428:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_BACKUP.py:441:    """Stage 2: Verify identity matches, generate Arbitrium Wallet, create public profile"""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_sedpatch:9:from fastapi.staticfiles import StaticFiles
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_sedpatch:444:# --- Static dashboard mounting (expects static/dashboard.html) ---
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_sedpatch:447:    app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_sedpatch:459:    Serves static/dashboard.html if present, otherwise a minimal stub.
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_sedpatch:461:    dashboard_path = STATIC_DIR / "dashboard.html"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_sedpatch:477:      <p>dashboard.html not found; using fallback shell.</p>
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_gate_v3:17:from fastapi.staticfiles import StaticFiles
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_gate_v3:652:    app.mount("/static", StaticFiles(directory=str(STATICDIR)), name="static")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_gate_v3:670:  <p>dashboard.html not found, using fallback shell.</p>
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.working_backup:32:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "h4h_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.working_backup:76:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.working_backup:85:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.working_backup:132:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.working_backup:291:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.working_backup:296:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.working_backup:365:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/METHOD_AUDIT_SEG_ai:160:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_full_neurobio_chat.py:50:async def get_or_create_ueid_with_wallet(user_id: str) -> Dict[str, str]:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/METHOD_AUDIT_SEG_ai:180:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_geo_ueid_integration.py:81:async def register_entity_in_geo(ueid: str, wallet_address: str, home_location: str = "Mount Hope, WV"):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:43:class WalletInfo(BaseModel):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:56:        self.wallets_dir = Path("../blockchain/wallets")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:61:        self.wallets_dir.mkdir(parents=True, exist_ok=True)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:69:    def create_secure_wallet(self, wallet_name: str) -> Dict[str, str]:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:70:        """Create new wallet with secure key storage (encrypted)"""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:76:        wallet_data = {
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:81:        wallet_path = self.wallets_dir / f"{wallet_name}.json"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:82:        with open(wallet_path, 'w') as f:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:83:            json.dump(wallet_data, f, indent=2)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:86:        os.chmod(wallet_path, 0o600)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:88:        logger.info(f"🔐 Created secure wallet: {account.address}")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:89:        logger.warning("⚠️  CRITICAL: Backup wallet file and NEVER commit to GitHub!")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:93:            "wallet_file": str(wallet_path),
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:94:            "warning": "Backup this wallet file securely - never use GitHub"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:97:    def get_wallet_balance(self, wallet_name: str, network: str = "arbitrum") -> Dict:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:98:        """Check wallet balance"""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:100:        wallet_path = self.wallets_dir / f"{wallet_name}.json"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:101:        if not wallet_path.exists():
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:102:            raise ValueError(f"Wallet {wallet_name} not found")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:104:        with open(wallet_path) as f:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:105:            wallet_data = json.load(f)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:108:        balance_wei = w3.eth.get_balance(wallet_data["address"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:112:            "address": wallet_data["address"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:118:    def deploy_contract(self, contract_source: str, network: str, wallet_name: str) -> Dict:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:121:        # Load wallet
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:122:        wallet_path = self.wallets_dir / f"{wallet_name}.json"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:123:        if not wallet_path.exists():
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:124:            raise ValueError(f"Wallet {wallet_name} not found")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:126:        with open(wallet_path) as f:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:127:            wallet_data = json.load(f)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:140:            "wallet": wallet_data["address"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:154:@app.post("/wallet/create")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:155:async def create_wallet(wallet_name: str):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:156:    """Create new secure wallet for Ms. Jarvis"""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:158:        result = blockchain_manager.create_secure_wallet(wallet_name)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:163:@app.get("/wallet/{wallet_name}/balance")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:164:async def get_balance(wallet_name: str, network: str = "arbitrum"):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:165:    """Check wallet balance"""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:167:        result = blockchain_manager.get_wallet_balance(wallet_name, network)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:173:async def deploy_mountainshares(network: str = "arbitrum-sepolia", wallet_name: str = "msjarvis_deployer"):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:191:        "next_steps": "Add deployment key and fund wallet"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:196:    logger.info("🔐 Wallet storage: ../blockchain/wallets (NEVER commit to GitHub)")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_FIXED.py:72:    "ueid_wallet_registry": {"file": "/home/ms-jarvigrep: /home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/alert_venv/lib64: No such file or directory
s/msjarvis-rebuild/data/ueid_wallet_registry.db", "type": "registry", "size_kb": 32, "purpose": "UEID wallet and authentication", "status": "ACTIVE"}
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/MS_JARVIS_STATUS_REPORT.md:164:- ✅ Blockchain transaction analysis
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.PRE_GUARDS_20251105_171934:4:Visibility: 30+ Services (Consciousness I-Containers/fractal DGM/WOAH, 23 Ollama LLMs base metalAI, UEID biometric/wallet, GIS 1002 rows Mount Hope WV, ChromaDB/Redis perpetual, biblical/genealogy ex: Paul Tarsus to Edward I/Strong).
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.PRE_GUARDS_20251105_171934:32:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "h4h_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.PRE_GUARDS_20251105_171934:76:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.PRE_GUARDS_20251105_171934:85:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.PRE_GUARDS_20251105_171934:133:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.PRE_GUARDS_20251105_171934:292:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.PRE_GUARDS_20251105_171934:297:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.PRE_GUARDS_20251105_171934:366:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/auth_api_patch.py:20:from wallet_service import WalletService, WalletAlreadyExistsError
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/auth_api_patch.py:61:wallet_svc = WalletService(redis_client=redis.from_url(REDIS_URL))
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_localnet_fixed2:9:from fastapi.staticfiles import StaticFiles
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_localnet_fixed2:444:# --- Static dashboard mounting (expects static/dashboard.html) ---
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_localnet_fixed2:447:    app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_localnet_fixed2:459:    Serves static/dashboard.html if present, otherwise a minimal stub.
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_localnet_fixed2:461:    dashboard_path = STATIC_DIR / "dashboard.html"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py.bak_localnet_fixed2:477:      <p>dashboard.html not found; using fallback shell.</p>
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:321:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.CONSTITUTIONAL_BACKUP.py:344:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:566:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_main_gateway.backup_1762220815.py:428:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:732:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_main_gateway.py:247:@app.get("/wallet/{ueid}", tags=["Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:733:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_main_gateway.py:251:@app.post("/wallet/transfer", tags=["Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:752:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.ORIGINAL_SWAGGER.py:295:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:829:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_main_gateway.py.corrupted37_backup_1762223499.py:316:@app.get("/wallet/{ueid}", tags=["Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:835:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_main_gateway.py.corrupted37_backup_1762223499.py:357:@app.post("/wallet/transfer", tags=["Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:865:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.pre_manifest.backup.py:296:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:914:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.BEFORE_69DGM_INTEGRATION.py:307:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1128:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_BACKUP.py:428:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1195:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_main_gateway.py.30endpoints_backup.py:316:@app.get("/wallet/{ueid}", tags=["Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1284:/home/ms-jarvis/msjarvis-rebuild/services/registration_biometric_production_final.py:655:@app.post("/register/stage2-biometric", tags=["Registration"], summary="Stage 2: Biometric Verification & Wallet Generation")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1459:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.backup.py:294:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1525:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:154:@app.post("/wallet/create")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1526:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py:163:@app.get("/wallet/{wallet_name}/balance")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1572:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_ueid_wallet_integration.py:103:@app.post("/ueid/create_with_wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1573:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_ueid_wallet_integration.py:159:@app.get("/ueid/{ueid}/wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1574:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_ueid_wallet_integration.py:180:@app.post("/transaction/log")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1575:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_ueid_wallet_integration.py:195:@app.get("/health")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1683:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_FINAL.py:428:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1722:/home/ms-jarvis/msjarvis-rebuild/services/ms_jarvis_ueid_system.py:175:@app.post("/ueid/link_wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dir_endpoints.txt:1736:/home/ms-jarvis/msjarvis-rebuild/services/stage2_biometric.py:195:@app.get("/wallet/{ueid}", tags=["Wallet"])
/home/cakidd/msjarvis-rebuild-workigrep: /home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/__pycache__/create_immutable_security_layer.cpython-310.pyc: binary file matches
ng/msjarvis-rebuild/services/ms_jarvis_main_gateway.backup_error.py:67:    "ueid_wallet_registry": {"file": "/home/ms-jarvis/msjarvis-rebuild/data/ueid_wallet_registry.db", "type": "registry", "size_kb": 32, "purpose": "UEID wallet and authentication", "status": "ACTIVE"}
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_GIS:32:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "research_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_GIS:74:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_GIS:79:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_GIS:145:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_GIS:314:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
grep: /home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/__pycache__/wallet_service.cpython-310.pyc: binary file matches
grep: /home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/__pycache__/registration_pipeline.cpython-310.pyc: binary file matches
grep: /home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/__pycache__/auth_api.cpython-310.pyc: binary file matches
grep: /home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/__pycache__/auth_router.cpython-310.pyc: binary file matches
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ 

