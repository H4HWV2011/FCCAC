crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # 1) Find wallet-related tables in the DB that DID work
docker exec -it msjarvis-db psql -U postgres -d msjarvisgis -c "\dt"

# 2) Search for EMS/balance references in the codebase
grep -RniE "ems_balance|mountainshares_balances|transaction|ledger|wallet|ueid" ~/msjarvis-rebuild-working/msjarvis-rebuild | head -n 200

# 3) See what the API actually returns right now
curl -s -H 'X-API-Key: super-secret-key' http://localhost/status | jq .
curl -s -H 'X-API-Key: super-secret-key' http://localhost/architecture | jq .
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/backfill_existing_users.py:7:from services.wallet_service import WalletService
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/backfill_existing_users.py:15:    ws    = WalletService(r)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/backfill_existing_users.py:25:        has_wallet = bool(r.get(f"wallet:{userid}:address"))
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/backfill_existing_users.py:27:        if has_uei and has_wallet:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/backfill_existing_users.py:30:        actions = ([] if has_uei else ["UEI"]) + ([] if has_wallet else ["wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/backfill_existing_users.py:38:        if not has_wallet:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/backfill_existing_users.py:39:            w = ws.create_wallet(userid)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/backfill_existing_users.py:40:            print(f"    ✓ Wallet: {w['address']}")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/egeria_autonomous_inquiry.py:55:                (ueid, learning_action, data_processed)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/truly_unpaired_services.txt:55:create_ueid_identity_layer
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/truly_unpaired_services.txt:401:ms_jarvis_geo_ueid_integration
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/truly_unpaired_services.txt:464:ms_jarvis_ueid_system
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/truly_unpaired_services.txt:465:ms_jarvis_ueid_wallet_integration
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:4:Visibility: 30+ Services (Consciousness I-Containers/fractal DGM/WOAH, 23 Ollama LLMs base metalAI, UEID biometric/wallet, GIS 1002 rows Mount Hope WV, ChromaDB/Redis perpetual, biblical/genealogy ex: Paul Tarsus to Edward I/Strong).
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:30:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "h4h_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:63:    description="""Thorough Whitebox for H4H Research: Full visibility into consciousness layers (I-Containers, WOAH depth-7, fractal DGM), base metalAI (23 Ollama LLMs, GPU mgmt), biometric/wallet (UEID security proxies), GIS (1002 rows: Mount Hope lat 37.9 Fayette WV ancestry hub to Paul Tarsus Damascus/Edward I/Strong Puritan genealogy), perpetual storage (ChromaDB/Redis RAG), 30+ microservices (no blackbox). Examples: /gis/query?location=Mount Hope → Biblical ties; /consciousness/chat?message=Damascus to WV roots → GIS-prepended WOAH analysis. Archive 8014 disabled.""",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:74:        {"name": "Biometric-Wallet", "description": "UEID proxies (immutable H4H identity/provenance/security)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:83:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:131:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:290:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:291:def ueid():
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:294:        "type": "Immutable UEID",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:295:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:361:@app.get("/ueid/proxy", tags=["UEID-Proxy"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:364:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_config:366:        "whitebox": "Immutable UEID Security Layer: Ties to 30 Services for H4H Provenance",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:81:UEID_URL = "http://jarvis-ueid-service:4030"              # currently stubbed in code
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:273:async def get_or_create_ueid(user_id: str) -> str:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:274:    """Temporary stub UEID until real service is up."""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:275:    return f"UEID_STUB_{user_id}"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:278:async def get_or_create_conversation(ueid: str, user_id: str) -> str:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:290:async def log_message_to_ueid(
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:291:    conversation_id: str, ueid: str, message: str, response_text: str
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:293:    """UEID logging stub (no-op until UEID service exists)."""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:304:    # Step 0: UEID + conversation (stubbed UEID)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:305:    ueid = await get_or_create_ueid(request.user_id)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:306:    conversation_id = await get_or_create_conversation(ueid, request.user_id)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:307:    processing_layers["ueid"] = ueid
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:354:    # UEID logging stub
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_production_chat.py:355:    await log_message_to_ueid(conversation_id, ueid, request.message, response_text)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/rag_query_router.py:246:        "variable wallet",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/remaining_services.txt:125:create_ueid_identity_layer
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/remaining_services.txt:471:ms_jarvis_geo_ueid_integration
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/remaining_services.txt:534:ms_jarvis_ueid_system
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/remaining_services.txt:535:ms_jarvis_ueid_wallet_integration
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:64:    "geo_ueid_registry": {"file": "/home/ms-jarvis/msjarvis-rebuild/data/geo_ueid_registry.db", "type": "registry", "size_kb": 28, "purpose": "Geographic UEID registry", "status": "ACTIVE"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:66:    "ueid_registry": {"file": "/home/ms-jarvis/msjarvis-rebuild/data/ueid_registry.db", "type": "registry", "size_kb": 69, "purpose": "UEID master registry", "status": "ACTIVE"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:67:    "ueid_wallet_registry": {"file": "/home/ms-jarvis/msjarvis-rebuild/data/ueid_wallet_registry.db", "type": "registry", "size_kb": 32, "purpose": "UEID wallet and authentication", "status": "ACTIVE"}
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:127:@app.get("/databases", tags=["Data"], summary="Databases (GISGEODB, ChromaDB, UEID, Identity)")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:205:    return {"data_inventory": {"rag_service": {"input": "text queries", "output": "retrieved documents", "database": "chromadb+gisgeodb"}, "dgm_systems": {"input": "system state", "output": "autonomous decisions", "storage": "ueid_registry"}, "consciousness_layers": {"input": "multi-modal", "output": "unified consciousness state", "storage": "all databases"}}}
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:209:    return {"rag_stats": {"vectordb": "chromadb", "size": "active", "documents_indexed": "indexed", "gisgeodb_size_mb": 5.5, "ueid_records": 69, "capabilities": ["spatial_search", "identity_verification", "multi_modal_retrieval"]}}
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:344:async def verify_registration(ueid: str):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:345:    """Verify a registration and get UEID details"""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:348:        r = requests.get(f"http://localhost:8065/verify/{ueid}", timeout=10)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py:406:    """Stage 1: Create UEID, send 2FA verification email"""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:4:Visibility: 30+ Services (Consciousness I-Containers/fractal DGM/WOAH, 23 Ollama LLMs base metalAI, UEID biometric/wallet, GIS 1002 rows Mount Hope WV, ChromaDB/Redis perpetual, biblical/genealogy ex: Paul Tarsus to Edward I/Strong).
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:30:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "h4h_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:63:    description="""Thorough Whitebox for H4H Research: Full visibility into consciousness layers (I-Containers, WOAH depth-7, fractal DGM), base metalAI (23 Ollama LLMs, GPU mgmt), biometric/wallet (UEID security proxies), GIS (1002 rows: Mount Hope lat 37.9 Fayette WV ancestry hub to Paul Tarsus Damascus/Edward I/Strong Puritan genealogy), perpetual storage (ChromaDB/Redis RAG), 30+ microservices (no blackbox). Examples: /gis/query?location=Mount Hope → Biblical ties; /consciousness/chat?message=Damascus to WV roots → GIS-prepended WOAH analysis. Archive 8014 disabled.""",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:74:        {"name": "Biometric-Wallet", "description": "UEID proxies (immutable H4H identity/provenance/security)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:83:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:131:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:290:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:291:def ueid():
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:294:        "type": "Immutable UEID",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:295:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:361:@app.get("/ueid/proxy", tags=["UEID-Proxy"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:364:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.bak_chroma:366:        "whitebox": "Immutable UEID Security Layer: Ties to 30 Services for H4H Provenance",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:65:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "research_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:123:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:128:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:196:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:361:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:362:def ueid():
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:365:        "type": "Immutable UEID",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:366:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:454:@app.get("/ueid/proxy", tags=["UEID-Proxy"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:457:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:459:        "whitebox": "Immutable UEID Security Layer: Ties to 30 Services for RESEARCH Provenance",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:732:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:734:    ueid: str,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:752:                             "ueid": ueid,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1095:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "research_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1153:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1158:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1226:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1391:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1392:def ueid():
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1395:        "type": "Immutable UEID",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1396:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1484:@app.get("/ueid/proxy", tags=["UEID-Proxy"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1487:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1489:        "whitebox": "Immutable UEID Security Layer: Ties to 30 Services for RESEARCH Provenance",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1762:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1764:    ueid: str,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:1782:                             "ueid": ueid,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2124:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "research_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2182:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2187:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2255:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2420:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2421:def ueid():
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2424:        "type": "Immutable UEID",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2425:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2513:@app.get("/ueid/proxy", tags=["UEID-Proxy"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2516:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2518:        "whitebox": "Immutable UEID Security Layer: Ties to 30 Services for RESEARCH Provenance",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2791:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2793:    ueid: str,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:2811:                             "ueid": ueid,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3154:    "biometric_wallet": {"type": "UEID Immutable", "proxies": ["identity", "provenance", "research_wallet"]},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3212:        {"name": "Biometric-Wallet", "description": "Biometric wallet with immutable identity and provenance proxies"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3217:        {"name": "UEID-Proxy", "description": "Biometric wallet security (ties to 30 services)."},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3285:            "biometric_wallet": SERVICES["biometric_wallet"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3450:@app.get("/biometric/ueid", tags=["Biometric-Wallet"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3451:def ueid():
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3454:        "type": "Immutable UEID",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3455:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3543:@app.get("/ueid/proxy", tags=["UEID-Proxy"])
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3546:        "proxies": SERVICES["biometric_wallet"]["proxies"],
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3548:        "whitebox": "Immutable UEID Security Layer: Ties to 30 Services for RESEARCH Provenance",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3821:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3823:    ueid: str,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915:3841:                             "ueid": ueid,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:44:        ueid TEXT UNIQUE,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:91:    c.execute("SELECT ueid FROM identity_hashes WHERE name_dob_hash = ?", (name_dob_hash,))
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:110:    ueid = f"MS-JARVIS-{uuid.uuid4().hex[:16].upper()}"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:112:                 (name_dob_hash, ueid, email, dl_verified, dl_path, created_at) 
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:114:              (name_dob_hash, ueid, email, 1 if dl_verified else 0, dl_path))
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:120:    <p>Your UEID: <strong>{ueid}</strong></p>
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:122:    <p><a href="https://jarvis.mountainshares.us/register/complete?ueid={ueid}">→ Complete Registration</a></p>
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:125:    background_tasks.add_task(send_email, email, f"OK DL Verified [{ueid}]", email_html)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:129:        "ueid": ueid,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:136:async def complete_form(ueid: str = None):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:137:    if not ueid:
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:138:        return HTMLResponse('''<h1>Complete Registration</h1><p>UEID required</p>''', status_code=400)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:141:<div class="container"><h1>Complete Registration</h1><p><strong>UEID: {ueid}</strong></p>
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:151:const f=new FormData();f.append('ueid','{ueid}');f.append('display_name',document.getElementById('u').value);
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:154:alert(j.status==='success'?'OK Complete! Wallet: '+j.wallet_id:'Error: '+j.detail);}};
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:160:    ueid: str = Form(...),
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:168:        "ueid": ueid,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.proxy_final.py:169:        "wallet_id": f"0x{uuid.uuid4().hex[:40]}",
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_blockchain_deployment_9327.log:3:INFO:__main__:🔐 Wallet storage: ../blockchain/wallets (NEVER commit to GitHub)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/mesh_probe.sh:4:  curl -s -X POST "http://localhost:42015/get_user_context?ueid=$u"
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_main_gateway.error_final_9676.log:3:    email_html = f'<html><body style="font-family:Arial;"><h2>Driver's License Verified</h2><p>Your UEID: <strong>{ueid}</strong></p><p>License has been verified and stored.</p><p><a href="https://jarvis.mountainshares.us/register/complete?ueid={ueid}">Complete Registration</a></p></body></html>'
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/bridge_manifest_FULL_BACKUP.csv:125:bridge_cross_dgm.py,ms_jarvis_main_gateway,create_ueid_identity_layer,9147
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/bridge_manifest_FULL_BACKUP.csv:471:bridge_cross_dgm.py,ms_jarvis_main_gateway,ms_jarvis_geo_ueid_integration,9759
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/bridge_manifest_FULL_BACKUP.csv:534:bridge_cross_dgm.py,ms_jarvis_main_gateway,ms_jarvis_ueid_system,9316
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/bridge_manifest_FULL_BACKUP.csv:535:bridge_cross_dgm.py,ms_jarvis_main_gateway,ms_jarvis_ueid_wallet_integration,9247
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:12:  • Arbitrum Wallet Private Key (encrypted)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:42:    CREATE TABLE IF NOT EXISTS ueid_immutable_security (
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:44:        ueid TEXT UNIQUE NOT NULL,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:46:        wallet_address TEXT UNIQUE NOT NULL,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:47:        wallet_private_key_encrypted TEXT NOT NULL,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:54:    print("✅ ueid_immutable_security (WRITE-ONCE, NEVER DELETE)")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:59:    BEFORE UPDATE ON ueid_immutable_security
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:68:    BEFORE DELETE ON ueid_immutable_security
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:77:    CREATE TABLE IF NOT EXISTS ueid_immutable_access_log (
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:79:        ueid TEXT NOT NULL,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:84:        FOREIGN KEY (ueid) REFERENCES ueid_immutable_security(ueid)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:87:    print("✅ ueid_immutable_access_log (COMPLETE AUDIT TRAIL)")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:94:    CREATE TABLE IF NOT EXISTS ueid_searchable_gis (
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:96:        ueid TEXT NOT NULL,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:105:        FOREIGN KEY (ueid) REFERENCES ueid_identity(ueid),
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:109:    print("✅ ueid_searchable_gis (PUBLIC, SEARCHABLE, NO PII)")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:113:    CREATE INDEX IF NOT EXISTS idx_ueid_searchable_gis_county 
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:114:    ON ueid_searchable_gis(county, state)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:117:    CREATE INDEX IF NOT EXISTS idx_ueid_searchable_gis_coordinates 
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:118:    ON ueid_searchable_gis(latitude, longitude)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:127:    CREATE TABLE IF NOT EXISTS ueid_chromadb_gis_vectors (
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:129:        ueid TEXT NOT NULL,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:135:        FOREIGN KEY (ueid) REFERENCES ueid_identity(ueid)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:138:    print("✅ ueid_chromadb_gis_vectors (VECTORIZED GIS DATA)")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:147:    CREATE VIEW IF NOT EXISTS v_ueid_public_gis AS
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:149:        usg.ueid,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:157:    FROM ueid_searchable_gis usg
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:158:    WHERE usg.ueid IS NOT NULL
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:160:    print("✅ v_ueid_public_gis (PUBLIC VIEW, NO SENSITIVE DATA)")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:164:    CREATE VIEW IF NOT EXISTS v_ueid_security_audit AS
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:166:        uis.ueid,
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:170:    FROM ueid_immutable_security uis
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:171:    LEFT JOIN ueid_immutable_access_log uial ON uis.ueid = uial.ueid
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:172:    GROUP BY uis.ueid
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:174:    print("✅ v_ueid_security_audit (RESTRICTED, AUDIT ONLY)")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:186:    print("  • Arbitrum Wallet Address + Private Key (encrypted)")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:192:    print("  • UEID to GIS records mapping")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:206:    print("  v_ueid_public_gis: Searchable geographic data only")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/create_immutable_security_layer.py:207:    print("  v_ueid_security_audit: Restricted security audit trail")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:64:    "geo_ueid_registry": {"file": "/home/ms-jarvis/msjarvis-rebuild/data/geo_ueid_registry.db", "type": "registry", "size_kb": 28, "purpose": "Geographic UEID registry", "status": "ACTIVE"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:66:    "ueid_registry": {"file": "/home/ms-jarvis/msjarvis-rebuild/data/ueid_registry.db", "type": "registry", "size_kb": 69, "purpose": "UEID master registry", "status": "ACTIVE"},
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:67:    "ueid_wallet_registry": {"file": "/home/ms-jarvis/msjarvis-rebuild/data/ueid_wallet_registry.db", "type": "registry", "size_kb": 32, "purpose": "UEID wallet and authentication", "status": "ACTIVE"}
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:127:@app.get("/databases", tags=["Data"], summary="Databases (GISGEODB, ChromaDB, UEID, Identity)")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:205:    return {"data_inventory": {"rag_service": {"input": "text queries", "output": "retrieved documents", "database": "chromadb+gisgeodb"}, "dgm_systems": {"input": "system state", "output": "autonomous decisions", "storage": "ueid_registry"}, "consciousness_layers": {"input": "multi-modal", "output": "unified consciousness state", "storage": "all databases"}}}
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:209:    return {"rag_stats": {"vectordb": "chromadb", "size": "active", "documents_indexed": "indexed", "gisgeodb_size_mb": 5.5, "ueid_records": 69, "capabilities": ["spatial_search", "identity_verification", "multi_modal_retrieval"]}}
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:345:@app.get("/registration/verify/{ueid}", tags=["Registration"], summary="Verify Registration")
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:346:async def verify_registration(ueid: str):
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:347:    """Verify a registration and get UEID details"""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:350:        r = requests.get(f"http://localhost:8065/verify/{ueid}", timeout=10)
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:408:    """Stage 1: Create UEID, send 2FA verification email"""
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services-576-recovered/ms_jarvis_unified_swagger_gateway_BACKUP.py:428:@app.post("/register/stage2", tags=["Registration"], summary="Stage 2: Verify Identity & Generate Wallet")
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ 

