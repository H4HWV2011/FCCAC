(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # Run from ~/msjarvis-rebuild-working/msjarvis-rebuild
# Step 1 — discover what entrypoint each container actually runs
echo "=== CONTAINER ENTRYPOINTS ==="
for name in $(docker ps --format '{{.Names}}' | grep jarvis); do
  cmd=$(docker inspect "$name" --format '{{join .Config.Cmd " "}}')
  entry=$(docker inspect "$name" --format '{{join .Config.Entrypoint " "}}')
  echo "$name CMD: $cmd | ENTRY: $entry"
done
=== CONTAINER ENTRYPOINTS ===
jarvis-auth-api CMD: sh -lc cd /app/services && python3 -m uvicorn auth_api:app --host 0.0.0.0 --port 8091 | ENTRY: 
jarvis-i-containers CMD: python3.10 -m uvicorn ms_jarvis_i_containers_service:app --host 0.0.0.0 --port 8015 | ENTRY: /opt/nvidia/nvidia_entrypoint.sh
jarvis-rag-server CMD: uvicorn ms_jarvis_rag_server:app --host 0.0.0.0 --port 8003 | ENTRY: 
jarvis-blood-brain-barrier CMD: python3 ms_jarvis_blood_brain_barrier.py | ENTRY: 
jarvis-unified-gateway CMD: /bin/sh -c pip install redis httpx --quiet && python3 ms_jarvis_unified_gateway.py | ENTRY: 
jarvis-contract-forge CMD: uvicorn ms_jarvis_contract_forge:app --host 0.0.0.0 --port 8091 | ENTRY: 
jarvis-main-brain CMD: sh -lc cd /app/services && python3 -m uvicorn main_brain:app --host 0.0.0.0 --port 8050 | ENTRY: 
jarvis-anvil CMD: anvil --host 0.0.0.0 --port 8545 --chain-id 137 --accounts 5 --balance 10000 --block-time 2 | ENTRY: sh -c
jarvis-brain-orchestrator CMD: python3 brain_orchestrator.py | ENTRY: 
jarvis-neurobiological-master CMD: python3 ms_jarvis_neurobiological_master.py | ENTRY: 
edec949df4bf_jarvis-qualia-engine CMD: python3 ms_jarvis_qualia_engine.py | ENTRY: 
jarvis-consciousness-bridge CMD: python3 /app/services/msjarvisconsciousnessbridge.py | ENTRY: 
jarvis-fractal-consciousness CMD: python3 /app/services/msjarvis_fractal_consciousness.py | ENTRY: 
jarvis-20llm-production CMD: python3 ai_server_20llm_PRODUCTION.py | ENTRY: 
jarvis-woah CMD: uvicorn woah_service:app --host 0.0.0.0 --port 7012 | ENTRY: 
jarvis-ollama CMD: serve | ENTRY: /bin/ollama
jarvis-chroma CMD: run /config.yaml | ENTRY: dumb-init -- chroma
jarvis-lm-synthesizer CMD: python lm_synthesizer.py | ENTRY: 
jarvis-local-resources CMD: uvicorn local_resources_resolver:app --host 0.0.0.0 --port 8055 | ENTRY: 
jarvis-spiritual-rag CMD: python3 jarvis-spiritual-rag_spiritual_rag_domain.py | ENTRY: 
jarvis-constitutional-guardian CMD: python3 jarvis-constitutional-guardian_constitutional_api.py | ENTRY: 
jarvis-gbim-query-router CMD: bash -c pip install redis fastapi uvicorn httpx psycopg2-binary --quiet && python3 gbim_query_router.py | ENTRY: 
jarvis-gbim-temporal-indexer CMD: uvicorn temporal_indexer:app --host 0.0.0.0 --port 8000 | ENTRY: 
jarvis-gbim-spatial-indexer CMD: uvicorn spatial_indexer:app --host 0.0.0.0 --port 8000 | ENTRY: 
jarvis-gbim-benefit-indexer CMD: python3 gbim_benefit_indexer.py | ENTRY: 
jarvis-confidence-decay CMD:  | ENTRY: python3 services/confidence_decay_loop.py
jarvis-memory CMD: uvicorn ms_jarvis_memory:app --host 0.0.0.0 --port 8056 | ENTRY: 
jarvis-swarm-intelligence CMD: python3 ms_jarvis_swarm_intelligence.py | ENTRY: 
jarvis-judge-truth CMD: python3 judge_truth_filter.py | ENTRY: 
jarvis-judge-alignment CMD: python3 judge_alignment_filter.py | ENTRY: 
jarvis-judge-ethics CMD: python3 judge_ethics_filter.py | ENTRY: 
jarvis-judge-consistency CMD: python3 judge_consistency_engine.py | ENTRY: 
jarvis-judge-pipeline CMD: python3 judge_pipeline.py | ENTRY: 
jarvis-eeg-beta CMD: /bin/sh -c pip install fastapi uvicorn httpx redis --quiet && python3 jarvis_eeg_beta_5m.py | ENTRY: 
jarvis-eeg-theta CMD: /bin/sh -c pip install fastapi uvicorn httpx redis --quiet && python3 jarvis_eeg_theta_60s.py | ENTRY: 
jarvis-eeg-delta CMD: /bin/sh -c pip install fastapi uvicorn httpx redis --quiet && python3 jarvis_eeg_delta_30s.py | ENTRY: 
jarvis-decay-escalation-consumer CMD: python -u jarvis_decay_escalation_consumer.py | ENTRY: 
jarvis-aaacpe-scraper CMD: uvicorn aaacpe_scraper_service:app --host 0.0.0.0 --port 8033 | ENTRY: 
jarvis-autonomous-learner CMD: uvicorn ms_jarvis_autonomous_learner_optimized:app --host 0.0.0.0 --port 8020 | ENTRY: 
msjarvis-rebuild-nbb_spiritual_root-1 CMD: uvicorn spiritual_root:app --host 0.0.0.0 --port 7003 | ENTRY: 
msjarvis-rebuild-nbb_i_containers-1 CMD: uvicorn i_containers:app --host 0.0.0.0 --port 7005 | ENTRY: 
msjarvis-rebuild-nbb_spiritual_maternal_integration-1 CMD: uvicorn spiritual_maternal_integration:app --host 0.0.0.0 --port 7009 | ENTRY: 
jarvis-mountainshares-coordinator CMD: sh -lc pip install fastapi uvicorn httpx psycopg2-binary -q 2>/dev/null && cd /app/services && uvicorn mountainshares_coordinator:app --host 0.0.0.0 --port 8080 | ENTRY: 
jarvis-ingest-watcher CMD: python3 /app/ingest_watcher.py | ENTRY: 
jarvis-ms-token-service CMD: sh -lc pip install fastapi uvicorn -q 2>/dev/null && cd /app/services && uvicorn token_service:app --host 0.0.0.0 --port 8083 | ENTRY: 
msjarvis-rebuild-nbb_prefrontal_cortex-1 CMD: /start.sh | ENTRY: 
jarvis-fifth-dgm CMD: python -m uvicorn ms_jarvis_fifth_dgm_orchestrator:app --host 0.0.0.0 --port 4002 | ENTRY: 
msjarvis-rebuild-nbb_consciousness_containers-1 CMD: uvicorn consciousness_containers:app --host 0.0.0.0 --port 7002 | ENTRY: 
jarvis-crypto-policy CMD: uvicorn jarviscryptopolicy:app --host 0.0.0.0 --port 8099 | ENTRY: 
jarvis-hilbert-state CMD: python3 -m uvicorn services.jarvis_hilbert_state:app --host 0.0.0.0 --port 8081 | ENTRY: 
msjarvis-rebuild-nbb_darwin_godel_machines-1 CMD: uvicorn nbb_darwin_godel_machines:app --host 0.0.0.0 --port 7003 | ENTRY: 
jarvis-community-stake-registry CMD: sh -lc pip install fastapi uvicorn -q 2>/dev/null && cd /app/services && uvicorn community_stake_registry:app --host 0.0.0.0 --port 8084 | ENTRY: 
jarvis-redis CMD: redis-server | ENTRY: docker-entrypoint.sh
jarvis-agents-service CMD: python3 ms_jarvis_agents_service.py | ENTRY: 
jarvis-stewardship-scheduler CMD: python3 jarvis_stewardship_scheduler.py | ENTRY: 
jarvis-aaacpe-rag CMD: uvicorn aaacpe_rag_service:app --host 0.0.0.0 --port 8032 | ENTRY: 
jarvis-69dgm-bridge CMD: python3 port_9000_69dgm_bridge.py | ENTRY: 
jarvis-pia-sampler CMD: sh -lc cd /app/services && python3 -m uvicorn main_brain:app --host 0.0.0.0 --port 8050 | ENTRY: 
jarvis-semaphore CMD: uvicorn jarvis-semaphore_msjarvis_semaphore:app --host 0.0.0.0 --port 8030 | ENTRY: 
jarvis-web-research CMD: python ms_jarvis_web_research_aggregate.py | ENTRY: 
jarvis-gbim-verifier CMD: python3 gbim_verification_loop.py | ENTRY: 
jarvis-mother-protocols CMD: python -m uvicorn mother_protocols:app --host 0.0.0.0 --port 4000 | ENTRY: 
jarvis-dao-governance CMD: sh -lc pip install fastapi uvicorn -q 2>/dev/null && cd /app/services && uvicorn dao_governance:app --host 0.0.0.0 --port 8082 | ENTRY: 
msjarvis-rebuild-nbb_pituitary_gland-1 CMD: uvicorn pituitary_gland:app --host 0.0.0.0 --port 80 | ENTRY: 
jarvis-hippocampus CMD: uvicorn hippocampus_service:app --host 0.0.0.0 --port 8011 | ENTRY: 
jarvis-temporal-consciousness CMD: python -m uvicorn temporal_consciousness:app --host 0.0.0.0 --port 7007 | ENTRY: 
msjarvis-rebuild-nbb_heteroglobulin_transport-1 CMD: uvicorn heteroglobulin_transport:app --host 0.0.0.0 --port 7006 | ENTRY: 
jarvis-steward CMD: uvicorn jarvis_steward:app --host 0.0.0.0 --port 8060 | ENTRY: 
msjarvis-rebuild-nbb_mother_carrie_protocols-1 CMD: uvicorn main:app --host 0.0.0.0 --port 7007 | ENTRY: 
msjarvis-rebuild-nbb_blood_brain_barrier-1 CMD: uvicorn blood_brain_barrier:app --host 0.0.0.0 --port 7001 | ENTRY: 
jarvis-ingest-api CMD: python3 -c import time; print("jarvis-ingest-api: deprecated stub"); time.sleep(86400) | ENTRY: 
jarvis-gbim-semantic-indexer CMD: uvicorn semantic_indexer:app --host 0.0.0.0 --port 8000 | ENTRY: 
msjarvis-rebuild-nbb_subconscious-1 CMD: uvicorn consciousness_bridge:app --host 0.0.0.0 --port 7011 | ENTRY: 
jarvis-local-resources-db CMD: postgres | ENTRY: docker-entrypoint.sh
msjarvis-rebuild-nbb_qualia_engine-1 CMD: uvicorn qualia_engine:app --host 0.0.0.0 --port 7008 | ENTRY: 
msjarvisgis-recovery CMD: postgres | ENTRY: docker-entrypoint.sh
jarvis-grafana CMD:  | ENTRY: /run.sh
jarvis-jaeger CMD:  | ENTRY: /go/bin/all-in-one-linux
jarvis-prometheus CMD: --config.file=/etc/prometheus/prometheus.yml | ENTRY: /bin/prometheus
jarvis-otel-collector CMD: --config=/etc/otelcol/config.yaml | ENTRY: /otelcol-contrib
jarvis-llm-judge-v3 CMD: python judge_pipeline.py | ENTRY: 
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # Step 2 — for each container that has the blanket mount,
# find exactly which .py files it has imported/open at runtime
echo "=== FILES ACTUALLY IN USE PER CONTAINER ==="
for name in $(docker ps --format '{{.Names}}' | grep jarvis); do
  echo "--- $name ---"
  docker exec "$name" sh -c \
    "ls /proc/*/fd 2>/dev/null | xargs ls -la 2>/dev/null | grep '/app/services.*\.py' | awk '{print \$NF}' | sort -u" \
    2>/dev/null || echo "(exec failed — distroless or no sh)"
done
=== FILES ACTUALLY IN USE PER CONTAINER ===
--- jarvis-auth-api ---
--- jarvis-i-containers ---
--- jarvis-rag-server ---
--- jarvis-blood-brain-barrier ---
--- jarvis-unified-gateway ---
--- jarvis-contract-forge ---
--- jarvis-main-brain ---
--- jarvis-anvil ---
--- jarvis-brain-orchestrator ---
--- jarvis-neurobiological-master ---
--- edec949df4bf_jarvis-qualia-engine ---
--- jarvis-consciousness-bridge ---
--- jarvis-fractal-consciousness ---
--- jarvis-20llm-production ---
--- jarvis-woah ---
--- jarvis-ollama ---
--- jarvis-chroma ---
--- jarvis-lm-synthesizer ---
--- jarvis-local-resources ---
--- jarvis-spiritual-rag ---
--- jarvis-constitutional-guardian ---
--- jarvis-gbim-query-router ---
--- jarvis-gbim-temporal-indexer ---
--- jarvis-gbim-spatial-indexer ---
--- jarvis-gbim-benefit-indexer ---
--- jarvis-confidence-decay ---
--- jarvis-memory ---
--- jarvis-swarm-intelligence ---
--- jarvis-judge-truth ---
--- jarvis-judge-alignment ---
--- jarvis-judge-ethics ---
--- jarvis-judge-consistency ---
--- jarvis-judge-pipeline ---
--- jarvis-eeg-beta ---
--- jarvis-eeg-theta ---
--- jarvis-eeg-delta ---
--- jarvis-decay-escalation-consumer ---
--- jarvis-aaacpe-scraper ---
--- jarvis-autonomous-learner ---
--- msjarvis-rebuild-nbb_spiritual_root-1 ---
--- msjarvis-rebuild-nbb_i_containers-1 ---
--- msjarvis-rebuild-nbb_spiritual_maternal_integration-1 ---
--- jarvis-mountainshares-coordinator ---
--- jarvis-ingest-watcher ---
--- jarvis-ms-token-service ---
--- msjarvis-rebuild-nbb_prefrontal_cortex-1 ---
--- jarvis-fifth-dgm ---
--- msjarvis-rebuild-nbb_consciousness_containers-1 ---
--- jarvis-crypto-policy ---
--- jarvis-hilbert-state ---
--- msjarvis-rebuild-nbb_darwin_godel_machines-1 ---
--- jarvis-community-stake-registry ---
--- jarvis-redis ---
--- jarvis-agents-service ---
--- jarvis-stewardship-scheduler ---
--- jarvis-aaacpe-rag ---
--- jarvis-69dgm-bridge ---
--- jarvis-pia-sampler ---
--- jarvis-semaphore ---
--- jarvis-web-research ---
--- jarvis-gbim-verifier ---
--- jarvis-mother-protocols ---
--- jarvis-dao-governance ---
--- msjarvis-rebuild-nbb_pituitary_gland-1 ---
--- jarvis-hippocampus ---
--- jarvis-temporal-consciousness ---
--- msjarvis-rebuild-nbb_heteroglobulin_transport-1 ---
--- jarvis-steward ---
--- msjarvis-rebuild-nbb_mother_carrie_protocols-1 ---
--- msjarvis-rebuild-nbb_blood_brain_barrier-1 ---
--- jarvis-ingest-api ---
--- jarvis-gbim-semantic-indexer ---
--- msjarvis-rebuild-nbb_subconscious-1 ---
--- jarvis-local-resources-db ---
--- msjarvis-rebuild-nbb_qualia_engine-1 ---
--- msjarvisgis-recovery ---
--- jarvis-grafana ---
--- jarvis-jaeger ---
--- jarvis-prometheus ---
--- jarvis-otel-collector ---
OCI runtime exec failed: exec failed: unable to start container process: exec: "sh": executable file not found in $PATH
(exec failed — distroless or no sh)
--- jarvis-llm-judge-v3 ---
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # Step 3 — for each container, find all imports in its entrypoint file
# so we know exactly which .py files it needs mounted
echo "=== STATIC IMPORT SCAN PER CONTAINER ==="
for name in $(docker ps --format '{{.Names}}' | grep jarvis); do
  entryfile=$(docker inspect "$name" --format '{{index .Config.Cmd 1}}' 2>/dev/null)
  echo "--- $name (entry: $entryfile) ---"
  docker exec "$name" sh -c \
    "grep -rh '^from \|^import ' /app/services/*.py 2>/dev/null | grep -v '.venv' | sort -u" \
    2>/dev/null | head -20
done
=== STATIC IMPORT SCAN PER CONTAINER ===
--- jarvis-auth-api (entry: -lc) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-i-containers (entry: -m) ---
--- jarvis-rag-server (entry: ms_jarvis_rag_server:app) ---
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import httpx
import logging
import os
--- jarvis-blood-brain-barrier (entry: ms_jarvis_blood_brain_barrier.py) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-unified-gateway (entry: -c) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-contract-forge (entry: ms_jarvis_contract_forge:app) ---
--- jarvis-main-brain (entry: -lc) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-anvil (entry: ) ---
--- jarvis-brain-orchestrator (entry: brain_orchestrator.py) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-neurobiological-master (entry: ms_jarvis_neurobiological_master.py) ---
from datetime import datetime
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any
import asyncio
import httpx
import logging
import os
import uvicorn
--- edec949df4bf_jarvis-qualia-engine (entry: ms_jarvis_qualia_engine.py) ---
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, Dict, Any
import logging
import os
import sys
import types
--- jarvis-consciousness-bridge (entry: /app/services/msjarvisconsciousnessbridge.py) ---
from . import config_spiritual
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
from chroma import HttpClient
from chroma_client import ms_jarvis_collection
from chroma_config import CHROMA_PATH
from chromadb import Client
from chromadb.config import Settings
from chromadb.config import Settings, DEFAULT_TENANT, DEFAULT_DATABASE
from chromadb_rag_helper import query_chromadb_rag
--- jarvis-fractal-consciousness (entry: /app/services/msjarvis_fractal_consciousness.py) ---
from collections import deque
from datetime import datetime
from fastapi import Depends, HTTPException, Header
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from typing import Optional
import asyncio
import httpx
import logging
import numpy as np
import os
import warnings
--- jarvis-20llm-production (entry: ai_server_20llm_PRODUCTION.py) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-woah (entry: woah_service:app) ---
--- jarvis-ollama (entry: ) ---
--- jarvis-chroma (entry: /config.yaml) ---
--- jarvis-lm-synthesizer (entry: lm_synthesizer.py) ---
--- jarvis-local-resources (entry: local_resources_resolver:app) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-spiritual-rag (entry: jarvis-spiritual-rag_spiritual_rag_domain.py) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-constitutional-guardian (entry: jarvis-constitutional-guardian_constitutional_api.py) ---
from __future__ import annotations
from chroma_client import ms_jarvis_collection
from chromadb.config import Settings
from collections import Counter
from collections import defaultdict, deque
from datetime import datetime
from datetime import datetime, timezone
from dgm_rag_integration_v2 import get_dgm_rag_integration
from fastapi import Depends, HTTPException, Header
from fastapi import Depends, Header
from fastapi import FastAPI
from fastapi import FastAPI, BackgroundTasks
from fastapi import FastAPI, BackgroundTasks, HTTPException, Depends, Header, status
from fastapi import FastAPI, HTTPException
from fastapi import FastAPI, HTTPException, Body
from fastapi import FastAPI, HTTPException, Query
from fastapi import FastAPI, Header, HTTPException, status, Depends
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
--- jarvis-gbim-query-router (entry: -c) ---
from fastapi import FastAPI, Body, Header, HTTPException
from pydantic import BaseModel
import httpx
import os
import os as _os
import psycopg2
import redis
import time as _time
--- jarvis-gbim-temporal-indexer (entry: temporal_indexer:app) ---
--- jarvis-gbim-spatial-indexer (entry: spatial_indexer:app) ---
--- jarvis-gbim-benefit-indexer (entry: gbim_benefit_indexer.py) ---
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, Dict
import logging
import os
import psycopg2
import psycopg2.extras
import redis
--- jarvis-confidence-decay (entry: ) ---
from datetime import datetime
from datetime import datetime, timedelta, timezone
from dynamic_port_service import DynamicPortService
from fastapi import Depends, HTTPException, Header
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from flask import Flask, jsonify
from neurobiological_brain.blood_brain_barrier.ethical_filter import EthicalFilter
from neurobiological_brain.blood_brain_barrier.safety_monitor import SafetyMonitor
from neurobiological_brain.blood_brain_barrier.spiritual_filter import SpiritualFilter
from neurobiological_brain.blood_brain_barrier.steganography_detection import SteganographyDetectionFilter
from neurobiological_brain.blood_brain_barrier.threat_detection import ThreatDetection
from neurobiological_brain.blood_brain_barrier.truth_verification import TruthVerificationFilter
from pathlib import Path
from pydantic import BaseModel
from service_discovery import ServiceDiscovery
from typing import Dict, Any
from typing import List, Optional
from typing import Optional
--- jarvis-memory (entry: ms_jarvis_memory:app) ---
from fastapi import FastAPI, HTTPException, HTTPException, Header
from fastapi.responses import JSONResponse
from pia_event_emitters import emit_phase3_annotation, emit_bbb_annotation
from pydantic import BaseModel
from typing import Optional, Any, Dict
import datetime as _dt
import json
import os
import redis
import redis, os, json, time, uuid
import time
import uuid
--- jarvis-swarm-intelligence (entry: ms_jarvis_swarm_intelligence.py) ---
from dataclasses import dataclass
from datetime import datetime
from fastapi import Depends, HTTPException, Header
from flask import Flask, jsonify, request
from flask_cors import CORS
from service_registry_client import get_service_url, register_service
from typing import List, Dict, Any
from typing import Optional
import asyncio
import json
import logging
import ollama
import os
import requests
--- jarvis-judge-truth (entry: judge_truth_filter.py) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-judge-alignment (entry: judge_alignment_filter.py) ---
--- jarvis-judge-ethics (entry: judge_ethics_filter.py) ---
--- jarvis-judge-consistency (entry: judge_consistency_engine.py) ---
--- jarvis-judge-pipeline (entry: judge_pipeline.py) ---
--- jarvis-eeg-beta (entry: -c) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-eeg-theta (entry: -c) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-eeg-delta (entry: -c) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-decay-escalation-consumer (entry: -u) ---
--- jarvis-aaacpe-scraper (entry: aaacpe_scraper_service:app) ---
--- jarvis-autonomous-learner (entry: ms_jarvis_autonomous_learner_optimized:app) ---
--- msjarvis-rebuild-nbb_spiritual_root-1 (entry: spiritual_root:app) ---
--- msjarvis-rebuild-nbb_i_containers-1 (entry: i_containers:app) ---
--- msjarvis-rebuild-nbb_spiritual_maternal_integration-1 (entry: spiritual_maternal_integration:app) ---
--- jarvis-mountainshares-coordinator (entry: -lc) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-ingest-watcher (entry: /app/ingest_watcher.py) ---
--- jarvis-ms-token-service (entry: -lc) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- msjarvis-rebuild-nbb_prefrontal_cortex-1 (entry: ) ---
--- jarvis-fifth-dgm (entry: -m) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- msjarvis-rebuild-nbb_consciousness_containers-1 (entry: consciousness_containers:app) ---
--- jarvis-crypto-policy (entry: jarviscryptopolicy:app) ---
--- jarvis-hilbert-state (entry: -m) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- msjarvis-rebuild-nbb_darwin_godel_machines-1 (entry: nbb_darwin_godel_machines:app) ---
--- jarvis-community-stake-registry (entry: -lc) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-redis (entry: ) ---
--- jarvis-agents-service (entry: ms_jarvis_agents_service.py) ---
from . import config_spiritual
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
from chroma import HttpClient
from chroma_client import ms_jarvis_collection
from chroma_config import CHROMA_PATH
from chromadb import Client
from chromadb.config import Settings
from chromadb.config import Settings, DEFAULT_TENANT, DEFAULT_DATABASE
from chromadb_rag_helper import query_chromadb_rag
from chromadbclient import get_collection  # adjust if your helper differs
--- jarvis-stewardship-scheduler (entry: jarvis_stewardship_scheduler.py) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-aaacpe-rag (entry: aaacpe_rag_service:app) ---
--- jarvis-69dgm-bridge (entry: port_9000_69dgm_bridge.py) ---
--- jarvis-pia-sampler (entry: -lc) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-semaphore (entry: jarvis-semaphore_msjarvis_semaphore:app) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- jarvis-web-research (entry: ms_jarvis_web_research_aggregate.py) ---
from __future__ import annotations
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from bs4 import BeautifulSoup
from chroma_client import ms_jarvis_collection
from chromadb.config import Settings
from collections import Counter
from collections import defaultdict, deque
from collections import deque
from contextlib import asynccontextmanager
from datetime import datetime
from datetime import datetime as _dt
from datetime import datetime, timedelta
from datetime import datetime, timedelta, timezone
from datetime import datetime, timezone
from dgm_rag_integration_v2 import get_dgm_rag_integration
from fastapi import APIRouter, HTTPException, Query
from fastapi import BackgroundTasks, HTTPException, Request
from fastapi import Depends, HTTPException, Header
from fastapi import Depends, Header
from fastapi import FastAPI
--- jarvis-gbim-verifier (entry: gbim_verification_loop.py) ---
--- jarvis-mother-protocols (entry: -m) ---
--- jarvis-dao-governance (entry: -lc) ---
from . import config_spiritual
from .application_service import (
from .bridge_cross_dgm_10001 import BridgeCrossDgm10001
from .bridge_cross_dgm_10002 import BridgeCrossDgm10002
from .chromadb_client import get_client
from .chromadb_client import get_client, CHROMA_PATH  # re-export
from .port_9000_69dgm_bridge import Port900069DgmBridge
from .token_service import TokenService
from .uei_service import UEIService, UEIError, EmailAlreadyRegisteredError, UEINotFoundError
from PIL import Image
from PyPDF2 import PdfReader
from __future__ import annotations
from application_service import (
from application_service import ApplicationService, CURRENT_AGREEMENT_VERSION
from application_service import ApplicationService, InvalidApplicationError, CURRENT_AGREEMENT_VERSION
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from auth_router import auth_router
from belief_state_schema import normalize_belief_state
from bs4 import BeautifulSoup
from bs4 import BeautifulSoup  # pip install beautifulsoup4
--- msjarvis-rebuild-nbb_pituitary_gland-1 (entry: pituitary_gland:app) ---
--- jarvis-hippocampus (entry: hippocampus_service:app) ---
--- jarvis-temporal-consciousness (entry: -m) ---
--- msjarvis-rebuild-nbb_heteroglobulin_transport-1 (entry: heteroglobulin_transport:app) ---
--- jarvis-steward (entry: jarvis_steward:app) ---
--- msjarvis-rebuild-nbb_mother_carrie_protocols-1 (entry: main:app) ---
--- msjarvis-rebuild-nbb_blood_brain_barrier-1 (entry: blood_brain_barrier:app) ---
--- jarvis-ingest-api (entry: -c) ---
--- jarvis-gbim-semantic-indexer (entry: semantic_indexer:app) ---
--- msjarvis-rebuild-nbb_subconscious-1 (entry: consciousness_bridge:app) ---
--- jarvis-local-resources-db (entry: ) ---
--- msjarvis-rebuild-nbb_qualia_engine-1 (entry: qualia_engine:app) ---
--- msjarvisgis-recovery (entry: ) ---
--- jarvis-grafana (entry: ) ---
--- jarvis-jaeger (entry: ) ---
--- jarvis-prometheus (entry: ) ---
--- jarvis-otel-collector (entry: ) ---
OCI runtime exec failed: exec failed: unable to start container process: exec: "sh": executable file not found in $PATH
--- jarvis-llm-judge-v3 (entry: judge_pipeline.py) ---
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # Step 4 — generate the exact replacement volume lines for each service
# This reads your actual compose file and rewrites every blanket mount
python3 << 'PYEOF'
import subprocess, os, re

COMPOSE = "./docker-compose.yml"
SERVICES_DIR = "./services"

# Get all .py files in services/ (excluding .venv, .bak, nested dirs)
all_py = sorted([
    f for f in os.listdir(SERVICES_DIR)
    if f.endswith('.py') and not f.endswith('.bak')
    and os.path.isfile(os.path.join(SERVICES_DIR, f))
])

print(f"Total .py files in ./services: {len(all_py)}")
for f in all_py:
    print(f"  {f}")
PYEOF
Total .py files in ./services: 1212
  ADDITIONAL_SERVICES.py
  ADDITIONAL_SERVICES_FINAL.py
  ConfigLoader.py
  INTEGRATION_IMPLEMENTATION.py
  REFERENCE_windows_swarm.py
  __init__.py
  aaacpe_initial_ingest.py
  aaacpe_rag_service.py
  aaacpe_scraper_service.py
  aacpe_ingest_community.py
  aacpe_prepare_metadata.py
  aapcappe_ingest.py
  academic_research_gateway_8062.py
  academic_research_gateway_8062_cors.py
  academic_whitebox_api.py
  activate_dgm.py
  activate_dgm_enhanced.py
  activate_egeria_persona.py
  add_auto_store.py
  add_background_call.py
  add_background_storage.py
  add_conversation_context.py
  add_conversation_endpoint.py
  add_conversation_storage.py
  add_dynamic_context.py
  add_fast_layer.py
  add_fifth_dgm_to_chat.py
  add_full_brain_class.py
  add_gpu_cleanup_correct.py
  add_gpu_cleanup_every_3.py
  add_identity_context.py
  add_jarvis_personality.py
  add_learning_suggestion.py
  add_mamma_greeting_simple.py
  add_messenger_to_gateway.py
  add_new_consciousness_services.py
  add_ready_endpoint.py
  add_security_to_chat.py
  add_semaphore.py
  add_simple_gpu_cleanup.py
  add_swagger_to_ports.py
  add_swagger_to_rag.py
  add_to_main_consciousness.psychology_patched.py
  add_to_main_consciousness.py
  add_user_memory.py
  add_user_memory_attribute.py
  add_web_research_storage.py
  add_working_search.py
  admin_cli.py
  advanced_service_dashboard.py
  agents_main.py
  ai_server.py
  ai_server_11llm_OPTIMIZED.py
  ai_server_11llm_OPTIMIZED_app_root.py
  ai_server_19llm_CONSCIOUS.backup_20251013_082519.py
  ai_server_19llm_CONSCIOUS.backup_20251013_083103.py
  ai_server_19llm_CONSCIOUS.backup_20251026_200122.py
  ai_server_19llm_CONSCIOUS.backup_20251110_135425.py
  ai_server_19llm_CONSCIOUS.py
  ai_server_19llm_PRODUCTION.py
  ai_server_19llm_PRODUCTION_WITH_HEALTH.py
  ai_server_20llm_FINAL.py
  ai_server_20llm_PRODUCTION.py
  ai_server_22llm.psychology_patched.py
  ai_server_22llm.psychology_patched_FIXED.py
  ai_server_22llm.py
  ai_server_22llm_FIXED.py
  ai_server_22llm_SEQUENTIAL.py
  ai_server_22llm_SEQUENTIAL_OPTIMIZED_ORDER.py
  ai_server_22llm_SMALL_TO_LARGE.py
  ai_server_4llm.py
  ai_server_integrated.py
  ai_server_original_backup.py
  ai_server_restored.py
  ai_teams_config.py
  application_service.py
  apply_ollama_fix.py
  async_polling_architecture.py
  attention_multimodal_fuser.py
  attention_pipeline.py
  attention_priority_scheduler.py
  attention_router.py
  audit_attrs.py
  audit_local_state.py
  auth.py
  auth_api.py
  auth_api_patch.py
  auth_router.py
  auto_fix_gateway.py
  auto_rag_builder.py
  autonomous_learner.py
  autonomous_learner_gisgeodb_wrapper.psychology_patched.py
  autonomous_learner_gisgeodb_wrapper.py
  autonomous_learner_topic_source.py
  backfill_gbim_entities.py
  backfill_gbim_worldview_metadata.py
  backfill_gbim_worldview_metadata_v2.py
  background_curator.py
  batch_normalize_beliefs.py
  batch_patch_services.py
  bbb_ethics_proxy.py
  bbb_validator.py
  belief_integrator.py
  belief_revision_engine.py
  belief_state_schema.py
  benefits_chat.py
  brain_orchestrator.py
  brain_orchestrator_main.py
  brain_orchestrator_stub.py
  bridge_69dgm.py
  bridge_autonomous_to_i_container_dgm_woah.psychology_patched.py
  bridge_autonomous_to_i_container_dgm_woah.py
  bridge_autonomous_to_i_container_fixed.py
  bridge_cross_dgm.py
  bridge_cross_dgm_10001.py
  bridge_cross_dgm_10002.py
  bridge_cross_dgm_10003.py
  bridge_cross_dgm_10004.py
  bridge_cross_dgm_10005.py
  bridge_cross_dgm_10006.py
  bridge_cross_dgm_10007.py
  bridge_cross_dgm_10008.py
  bridge_cross_dgm_10009.py
  bridge_cross_dgm_10010.py
  bridge_cross_dgm_10011.py
  bridge_cross_dgm_10012.py
  bridge_cross_dgm_10013.py
  bridge_cross_dgm_10014.py
  bridge_cross_dgm_10015.py
  bridge_cross_dgm_10016.py
  bridge_cross_dgm_10017.py
  bridge_cross_dgm_10018.py
  bridge_cross_dgm_10019.py
  bridge_cross_dgm_10020.py
  bridge_cross_dgm_10021.py
  bridge_cross_dgm_10022.py
  bridge_cross_dgm_10023.py
  bridge_cross_dgm_10024.py
  bridge_cross_dgm_10025.py
  bridge_cross_dgm_10026.py
  bridge_cross_dgm_10027.py
  bridge_cross_dgm_10028.py
  bridge_cross_dgm_10029.py
  bridge_cross_dgm_10030.py
  bridge_cross_dgm_10031.py
  bridge_cross_dgm_10032.py
  bridge_cross_dgm_10033.py
  bridge_cross_dgm_10034.py
  bridge_cross_dgm_10035.py
  bridge_cross_dgm_10036.py
  bridge_cross_dgm_10037.py
  bridge_cross_dgm_10038.py
  bridge_cross_dgm_10039.py
  bridge_cross_dgm_10040.py
  bridge_cross_dgm_10041.py
  bridge_cross_dgm_10042.py
  bridge_cross_dgm_10043.py
  bridge_cross_dgm_10044.py
  bridge_cross_dgm_10045.py
  bridge_cross_dgm_10046.py
  bridge_cross_dgm_10047.py
  bridge_cross_dgm_10048.py
  bridge_cross_dgm_10049.py
  bridge_cross_dgm_10050.py
  bridge_cross_dgm_10051.py
  bridge_cross_dgm_10052.py
  bridge_cross_dgm_10053.py
  bridge_cross_dgm_10054.py
  bridge_cross_dgm_10055.py
  bridge_cross_dgm_10056.py
  bridge_cross_dgm_10057.py
  bridge_cross_dgm_10058.py
  bridge_cross_dgm_10059.py
  bridge_cross_dgm_10060.py
  bridge_cross_dgm_10061.py
  bridge_cross_dgm_10062.py
  bridge_cross_dgm_10063.py
  bridge_cross_dgm_10064.py
  bridge_cross_dgm_10065.py
  bridge_cross_dgm_10066.py
  bridge_cross_dgm_10067.py
  bridge_cross_dgm_10068.py
  bridge_cross_dgm_10069.py
  build_additional_services.py
  build_entityid_to_chromaid_map.py
  build_project_impact_graph.py
  bulk_build_beliefs.py
  bulk_compose_rewrite.py
  bulk_load_MAXIMUM.py
  bulk_load_knowledge.py
  bulk_sync_gis_to_chromadb.py
  chat_endpoint_universal.py
  chat_server.py
  chroma_client.py
  chroma_client_old.py
  chroma_config.py
  chroma_health_monitor.py
  chroma_health_proxy.py
  chroma_health_utils.py
  chroma_python_test.py
  chroma_test.py
  chromadb_client.py
  chromadb_main.py
  chromadb_rag_helper.py
  chromadb_rest_bridge.py
  chromadb_v2_to_gis_sync.py
  chunked_ingest_gbim_to_chroma.py
  clean_compose.py
  clean_integration.py
  cloudflare_domain_integration.py
  commons_gamification.py
  community_stake_registry.py
  complete_fix.py
  complete_memory_fix.py
  complete_system_audit.py
  complete_system_audit_with_swagger.py
  comprehensive_gisgeodb_audit.py
  comprehensive_gisgeodb_audit_FIXED.py
  comprehensive_storage_fix.py
  comprehensive_url_fix.py
  confidence_decay_loop.py
  config_spiritual.py
  configure_facebook_webhook.py
  connection_pooling.py
  consciousness_coordinator.psychology_patched.py
  consciousness_coordinator.py
  consciousness_feed_integration.psychology_patched.py
  consciousness_feed_integration.py
  consciousness_gateway.py
  consciousness_with_egeria_voice.py
  consciousness_working.py
  consolidate_to_chroma_db.py
  constitutional_api.PROD_BACKUP.py
  constitutional_api.py
  constitutional_api_fixed.py
  constitutional_guardian.PROD_BACKUP.py
  constitutional_guardian.py
  context_manager.py
  contract_generator.py
  conversation_gbim.py
  conversation_memory_endpoints.py
  count_collections.py
  count_collections_local.py
  cpu_optimization.py
  create_autonomous_learner_tables.py
  create_consciousness_data_integration.psychology_patched.py
  create_consciousness_data_integration.py
  create_dual_consciousness_i_containers.psychology_patched.py
  create_dual_consciousness_i_containers.py
  create_geodb_nodes.py
  create_i_statement_feedback_loop.py
  create_immutable_security_layer.py
  create_perpetual_storage_layer.py
  create_tile_index.py
  create_ueid_identity_layer.py
  crypto_client.py
  dao_governance.py
  data_inventory_endpoint.py
  dedupe_compose.py
  dgm_adoption_worker.py
  dgm_bridge.py
  dgm_connector_registry.py
  dgm_orchestrator.py
  dgm_orchestrator_fake.py
  dgm_rag_integration.py
  dgm_rag_integration_v2.py
  dgm_supervisor_woah.psychology_patched.py
  dgm_supervisor_woah.py
  dgm_supervisor_woah_fixed.py
  dgm_supervisor_woah_simple.py
  disable_aggressive_cleaning.py
  domain_service_router.py
  download_nltk_data.py
  dynamic_app.py
  dynamic_port_scheduler.py
  dynamic_port_service.py
  dynamic_port_service_enhanced.py
  ecosystem_identity_service.py
  egeria_active_heartbeat.py
  egeria_api_proxy.py
  egeria_autonomous_inquiry.py
  egeria_autonomous_inquiry_active.py
  egeria_code_execution_engine.py
  egeria_facebook_perpetual_scheduler.py
  egeria_multi_mode_system.py
  egeria_safe_self_correction.py
  egeria_status_poller.py
  egeria_web_ui.py
  egeria_web_ui_FIXED.py
  egeria_web_ui_dynamic.py
  egeria_web_ui_final_biological.py
  egeria_web_ui_fixed_simple.py
  egeria_web_ui_plain_authentic.py
  egeria_web_ui_v3_consciousness.py
  egeria_web_ui_with_execution.py
  egeria_web_ui_working.py
  email_auto_checker.py
  email_gis_geolocation_extractor.py
  email_rag_integration.py
  email_service.py
  embed_and_add.py
  embed_and_query.py
  embed_gbim.py
  embed_geodb.py
  enable_22llm_routing.py
  enhance_agent_prompts.py
  enhance_cleaner.py
  enhance_pituitary_warmth.py
  enhance_rag_first.py
  enhance_rag_knowledge.py
  enhanced_learner_concept.py
  enrich_geodb_collections.py
  enrich_geodb_layers.py
  etl_from_csv_template.py
  etl_from_manifest.py
  etl_template_layer.py
  export_attributes_to_gis.py
  export_chroma_manifest.py
  export_geodb_attrs.py
  export_metadata_csv.py
  extract_all_chromadb_to_gis.py
  extract_all_chromadbs_to_gis.py
  extract_binder4_text.py
  extract_chroma_sqlite_to_gis.py
  extract_real_knowledge_to_gis.py
  extract_shapefile_features_to_csv.py
  facebook_chat_unified.py
  facebook_consciousness_daemon.py
  facebook_daemon_polling.py
  facebook_messenger_integration.py
  facebook_poster.py
  facebook_poster_autonomous.py
  facebook_poster_fast.py
  facebook_poster_working.py
  facebook_voice_orchestrator_egeria.py
  fifth_dgm.py
  fifth_dgm_app.py
  fifth_dgm_integration.py
  fifth_dgm_main.py
  file_metadata_matching_algorithm.py
  fill_null_coordinates_mount_hope.py
  final_model_optimization.py
  fix_agent_prompts.py
  fix_all_consciousness_services.py
  fix_autonomous.py
  fix_autonomous_learner_endpoint.py
  fix_autonomous_learner_indent.py
  fix_background_storage.py
  fix_chat_server.py
  fix_chroma_url.py
  fix_consciousness_endpoints.py
  fix_context_flow.py
  fix_creator_recognition.py
  fix_fastapi_lifespan.py
  fix_gpu_and_retry.py
  fix_import.py
  fix_indentation.py
  fix_judge_and_memory.py
  fix_judge_authentic.py
  fix_judge_response.py
  fix_judge_synthesis.py
  fix_main_brain_endpoints.py
  fix_model_names.py
  fix_model_unloading.py
  fix_multi_rag_chromadb.py
  fix_new_service_endpoints.py
  fix_orchestrator_init.py
  fix_orchestrator_scope.py
  fix_persona.py
  fix_persona_hang.py
  fix_port_8001_clean.py
  fix_port_8051_handler.py
  fix_prompt_leak.py
  fix_query_service_endpoints.py
  fix_rag_store.py
  fix_response_parsing.py
  fix_semaphore.py
  fix_storage.py
  fix_swagger.py
  fix_timeouts_add_22llm.py
  fix_web_research.py
  fix_woah_discovery.py
  fractal_adapter.py
  fraud_detection_ai.py
  gateway8050_simple.py
  gateway_messenger_integration.py
  gateway_verify_fixed.py
  gateway_wv_entanglement.py
  gbim_api.py
  gbim_benefit_indexer.py
  gbim_chroma.py
  gbim_chroma_fixed.py
  gbim_coordinate_writer.py
  gbim_core.py
  gbim_dashboard.py
  gbim_entangled_summary.py
  gbim_entanglement.py
  gbim_explain.py
  gbim_gis_bridge.py
  gbim_metadata_enricher.py
  gbim_metadata_loader.py
  gbim_msjarvis.py
  gbim_query_router.py
  gbim_reingest_placeholder.py
  gbim_semantic_indexer.py
  gbim_spatial_indexer.py
  gbim_temporal_indexer.py
  gbim_v0_retrieval.py
  gbim_verification_loop.py
  gdb_integration_service.py
  generate_services.py
  geo_rag_debug.py
  geo_rag_debug_app.py
  geobim_health_shim_8051.py
  geobim_integrated.py
  geobim_mysql.py
  geobim_mysql_v2.py
  geodb_adapter.py
  geodb_core.py
  geospatial_resolver.py
  gis_chat_integration.py
  gis_command_module.py
  gis_rag_service.py
  gisgeodb_learner_hook.py
  gisgeodb_storage.py
  gisgeodbdirectaccess.py
  gpu_accelerated_rag.py
  gpu_accelerated_rag_fixed.py
  guards.py
  guards_api_module.py
  hardware_optimization_analyzer.py
  harmony4hope_deployment_manager.py
  health_access_api.py
  health_access_gbim_bridge.py
  health_access_query.py
  health_check_cache.py
  hierarchical_coordinator_autonomous.py
  hierarchical_coordinator_deep_mode.py
  hierarchical_integration.py
  hilbert_spatial_chat.py
  hippocampus_service.py
  host_bulk_loader.py
  i_container_interest_algorithm.py
  icontainers_fastapi.py
  identity_promotion.py
  identity_service.py
  immutable_core_enforcement.py
  implement_judge_pituitary_fixed.py
  implement_safe_optimizations.py
  import_gbim_assets.py
  import_gis_geodata_to_gbim.py
  import_gisgeodata_to_gbim.py
  index_all_extracted_gis.py
  infrastructure_endpoints.py
  ingest_additional_kbs.py
  ingest_benefit_programs.py
  ingest_benefit_programs_to_chroma.py
  ingest_compliance_tasks_to_chroma.py
  ingest_csv_to_gisgeodb.py
  ingest_documents_to_chromadb.py
  ingest_full_attributed_docs.py
  ingest_gbim_to_chroma.py
  ingest_gbim_to_chroma_fast.py
  ingest_gbim_to_chroma_resume.py
  ingest_gbim_to_chroma_ultrafast.py
  ingest_gis_features_to_chromadb.py
  ingest_h4h_cultural_heritage.py
  ingest_hospitals.py
  ingest_imm_to_chroma.py
  ingest_knowledge_simple.py
  ingest_mrsid_imagery.py
  ingest_utility_enrollments_to_chroma.py
  ingestcsvtogisgeodb.py
  inject_egeria_persona.py
  inject_gisgeodb_into_learner.py
  inspect_geodb_collection.py
  integrate_all_services.py
  integrate_complete_architecture.py
  integrate_consciousness_into_swarm.py
  integrate_fifth_dgm_autonomous_learner.py
  integrate_full_brain.py
  integrate_full_neural_architecture.py
  integrate_i_container_interests.py
  integrate_i_container_to_schedulers.py
  integrate_orchestrator_flow.py
  integrate_spatial_temporal.py
  interaction_logger.py
  internet_tunnel_service.py
  introspective_record.py
  introspective_verdict_bridge.py
  jarvis-69dgm-bridge_jarvis-fractal-consciousness_baseline.py
  jarvis-aaacpe-rag_aaacpe_rag_service.py
  jarvis-adoption-worker_dgm_adoption_worker.py
  jarvis-agents-service_ms_jarvis_consciousness_unified_bridge.py
  jarvis-consciousness-bridge_ms_jarvis_consciousness_unified_bridge.py
  jarvis-constitutional-guardian_constitutional_api.py
  jarvis-fifth-dgm_service_discovery.py
  jarvis-gis-rag_gis_rag_service.py
  jarvis-hippocampus_hippocampus_service.py
  jarvis-i-containers_icontainers_fastapi.py
  jarvis-judge-pipeline_judge_pipeline.py
  jarvis-lm-synthesizer_lm_synthesizer.py
  jarvis-local-resources_local_resources_resolver.py
  jarvis-mother-protocols_mother_protocols.py
  jarvis-neurobiological-master_ms_jarvis_consciousness_unified_bridge.py
  jarvis-psychology-services_psychology_integration_adapter.py
  jarvis-qualia-engine_ms_jarvis_qualia_engine.py
  jarvis-rag-server_ms_jarvis_consciousness_unified_bridge.py
  jarvis-semaphore_msjarvis_semaphore.py
  jarvis-spiritual-rag_spiritual_rag_domain.py
  jarvis-swarm-intelligence_ms_jarvis_consciousness_unified_bridge.py
  jarvis-temporal-consciousness_temporal_consciousness.py
  jarvis-toroidal_toroidal_service.py
  jarvis-woah_dgm_supervisor_woah_fixed.py
  jarvis-wv-entangled-gateway_msjarvis_wv_entangled_gateway.py
  jarvis_data_ingest.py
  jarvis_decay_escalation_consumer.py
  jarvis_eeg_beta_5m.py
  jarvis_eeg_delta_30s.py
  jarvis_eeg_theta_60s.py
  jarvis_ensemble.py
  jarvis_hilbert_state.py
  jarvis_llm1.py
  jarvis_memory_pia.py
  jarvis_pia_sampler.py
  jarvis_pia_status.py
  jarvis_steward.py
  jarvis_stewardship_scheduler.py
  jarvis_synth_llm.py
  jarvisarchiveapi.py
  jarviscryptopolicy.py
  judge_10070.py
  judge_10071.py
  judge_10072.py
  judge_10073.py
  judge_10074.py
  judge_10075.py
  judge_10076.py
  judge_10077.py
  judge_10078.py
  judge_10079.py
  judge_10080.py
  judge_10081.py
  judge_10082.py
  judge_10083.py
  judge_10084.py
  judge_10085.py
  judge_10086.py
  judge_10087.py
  judge_10088.py
  judge_10089.py
  judge_10090.py
  judge_10091.py
  judge_10092.py
  judge_10093.py
  judge_10094.py
  judge_10095.py
  judge_10096.py
  judge_10097.py
  judge_10098.py
  judge_10099.py
  judge_10100.py
  judge_10101.py
  judge_10102.py
  judge_10103.py
  judge_10104.py
  judge_10105.py
  judge_10106.py
  judge_10107.py
  judge_10108.py
  judge_10109.py
  judge_10110.py
  judge_10111.py
  judge_10112.py
  judge_10113.py
  judge_10114.py
  judge_10115.py
  judge_10116.py
  judge_10117.py
  judge_10118.py
  judge_10119.py
  judge_10120.py
  judge_10121.py
  judge_10122.py
  judge_10123.py
  judge_10124.py
  judge_10125.py
  judge_10126.py
  judge_10127.py
  judge_10128.py
  judge_10129.py
  judge_10130.py
  judge_10131.py
  judge_10132.py
  judge_10133.py
  judge_10134.py
  judge_10135.py
  judge_alignment_filter.py
  judge_client.py
  judge_consistency_engine.py
  judge_consistency_filter.py
  judge_ethics_filter.py
  judge_pipeline.py
  judge_to_pituitary_bridge.py
  judge_truth_filter.py
  judgesigner.py
  layer2_port9000_bridge.py
  link_gisgeodb_to_files.py
  list_geodb_collections.py
  llm1-proxy_llm1_health_proxy.py
  llm10-proxy_llm10_health_proxy.py
  llm10_health_proxy.py
  llm11-proxy_llm11_health_proxy.py
  llm11_health_proxy.py
  llm12-proxy_llm12_health_proxy.py
  llm12_health_proxy.py
  llm13-proxy_llm13_health_proxy.py
  llm13_health_proxy.py
  llm14-proxy_llm14_health_proxy.py
  llm14_health_proxy.py
  llm15-proxy_llm15_health_proxy.py
  llm15_health_proxy.py
  llm16-proxy_llm16_health_proxy.py
  llm16_health_proxy.py
  llm17-proxy_llm17_health_proxy.py
  llm17_health_proxy.py
  llm18-proxy_llm18_health_proxy.py
  llm18_health_proxy.py
  llm19-proxy_llm19_health_proxy.py
  llm19_health_proxy.py
  llm1_health_proxy.py
  llm2-proxy_llm2_health_proxy.py
  llm20-proxy_llm20_health_proxy.py
  llm20_health_proxy.py
  llm21-proxy_llm21_health_proxy.py
  llm21_health_proxy.py
  llm22-proxy_llm22_health_proxy.py
  llm22_health_proxy.py
  llm2_health_proxy.py
  llm3-proxy_llm3_health_proxy.py
  llm3_health_proxy.py
  llm4-proxy_llm4_health_proxy.py
  llm4_health_proxy.py
  llm5-proxy_llm5_health_proxy.py
  llm5_health_proxy.py
  llm6-proxy_llm6_health_proxy.py
  llm6_health_proxy.py
  llm7-proxy_llm7_health_proxy.py
  llm7_health_proxy.py
  llm8-proxy_llm8_health_proxy.py
  llm8_health_proxy.py
  llm9-proxy_llm9_health_proxy.py
  llm9_health_proxy.py
  llm_belief_utils.py
  llm_bridge_main.py
  llm_conscious_OPTIMIZED.py
  llm_consensus_19_PRODUCTION.py
  llm_consensus_20_FINAL.py
  llm_consensus_22.py
  llm_consensus_22_OPTIMIZED_ORDER.py
  llm_consensus_22_SMALL_TO_LARGE.py
  llm_ensemble_router.py
  llm_judge_v3.py
  lm_judge_helper.py
  lm_synthesizer.py
  load_backbone_places_from_geodb.py
  load_complete_knowledge_base.py
  load_feature_geometries_to_chromadb.py
  load_geodb_health_providers_to_neo4j.py
  load_geodb_hospitals_to_neo4j.py
  load_geodb_layer_to_neo4j.py
  load_gis_to_chroma.py
  load_pdfs_spiritual.py
  load_rag_data.py
  load_rag_knowledge.py
  load_shapefile_features_to_chromadb.py
  load_spiritual_library.py
  local_resources_resolver.py
  location_scraper_service.py
  logging_conf.py
  main.py
  main_brain.py
  main_brain_LEGACY_32svc.py
  main_brain_container_2055.py
  main_brain_legacy_backup.py
  main_brain_psychology_patch.py
  main_brian.py
  main_qualia.py
  main_with_rag.py
  mamma_kidd_auth.py
  manifest_endpoints.py
  manual_storage_patch.py
  master_chat_orchestrator.py
  master_chat_orchestrator_dynamic.py
  master_chat_orchestrator_v5_consciousness.py
  master_chat_orchestrator_v6_biologics.py
  master_chat_orchestrator_v7_complete.py
  master_chat_orchestrator_v7_dynamic.py
  master_chat_orchestrator_v8_spiritual_complete.py
  master_chat_orchestrator_v9_dgm_complete.py
  master_chat_orchestrator_v9_gpu_optimized.py
  master_chat_orchestrator_v9_optimized.py
  master_unified_consciousness_scheduler.py
  master_unified_consciousness_scheduler_ENRICHED.py
  memory_dgm_engine.py
  memory_dgm_gateway.py
  memory_manager.py
  mesh_coordinator_interface.py
  messenger_service_fixed.py
  method_tracker_decorator.py
  method_tracking_helper.py
  method_tracking_service.py
  metrics_service.py
  migrate_blood_brain_barrier.py
  migrate_chromadb_collections.py
  migrate_gis2chroma.py
  migrate_neurobiological_master.py
  modify_autonomous_learning_cycle.py
  mother_carrie_logging.py
  mother_protocols.py
  mountainshares_chain_monitor.py
  mountainshares_coordinator.py
  mountainshares_gbim_suggester.py
  mountainshares_ingest.py
  mountainshares_quest_api.py
  mountainshares_registry.py
  move_huggingface_to_cpu.py
  ms_egeria_facebook_autopost.py
  ms_jarvis_agents_ollama.py
  ms_jarvis_agents_service.py
  ms_jarvis_alerting_manager.py
  ms_jarvis_api_docs.py
  ms_jarvis_attribute_table_service.py
  ms_jarvis_attribute_table_sync_continuous.py
  ms_jarvis_authentic_multi_llm.py
  ms_jarvis_auto_service.py
  ms_jarvis_autonomous_learner_FIXED.py
  ms_jarvis_autonomous_learner_WITH_FIFTH_DGM.py
  ms_jarvis_autonomous_learner_optimized.py
  ms_jarvis_bbb_proxy.py
  ms_jarvis_blockchain_deployment.py
  ms_jarvis_blood_brain_barrier.py
  ms_jarvis_brain.py
  ms_jarvis_brain_orchestrator_advanced.py
  ms_jarvis_chromadb_query.py
  ms_jarvis_cleanup_manager.py
  ms_jarvis_command_orchestrator.py
  ms_jarvis_command_orchestrator_FINAL.py
  ms_jarvis_command_orchestrator_v5.0_preachy.py
  ms_jarvis_command_orchestrator_v5_backup.py
  ms_jarvis_complete_knowledge_ingestion.py
  ms_jarvis_conscious_collective.py
  ms_jarvis_consciousness_bridge.py
  ms_jarvis_consciousness_bridge_WITH_FIFTH_DGM.py
  ms_jarvis_consciousness_bridge_enhanced.py
  ms_jarvis_consciousness_bridge_parallel_woah.py
  ms_jarvis_consciousness_bridge_service.py
  ms_jarvis_consciousness_bridge_woah.psychology_patched.py
  ms_jarvis_consciousness_bridge_woah.py
  ms_jarvis_consciousness_complete.py
  ms_jarvis_consciousness_enhancement_production.py
  ms_jarvis_consciousness_final.py
  ms_jarvis_consciousness_poster.py
  ms_jarvis_consciousness_poster_FIXED.py
  ms_jarvis_consciousness_unified_bridge.py
  ms_jarvis_consensus_service.py
  ms_jarvis_contract_builder.py
  ms_jarvis_contract_builder_v2.py
  ms_jarvis_contract_forge.py
  ms_jarvis_conversational_chat.py
  ms_jarvis_conversational_gateway_4022.py
  ms_jarvis_daily_backup.py
  ms_jarvis_darwin_godel_machine.py
  ms_jarvis_dynamic_model_selector.py
  ms_jarvis_easyocr_processor.py
  ms_jarvis_easyocr_processor_old.py
  ms_jarvis_email_identity_verifier.py
  ms_jarvis_email_monitor.py
  ms_jarvis_email_service.py
  ms_jarvis_eternal_watchdog.py
  ms_jarvis_exclusive_training_layer.py
  ms_jarvis_expiration_monitor.py
  ms_jarvis_facebook_CONSCIOUSNESS.py
  ms_jarvis_facebook_CONSCIOUSNESS_FIXED.py
  ms_jarvis_facebook_DGM.py
  ms_jarvis_facebook_PRODUCTION.py
  ms_jarvis_facebook_async.py
  ms_jarvis_facebook_autonomous_social.py
  ms_jarvis_facebook_brain_integrated.py
  ms_jarvis_facebook_dgm_woah.psychology_patched.py
  ms_jarvis_facebook_dgm_woah.py
  ms_jarvis_facebook_full.py
  ms_jarvis_facebook_intelligent.py
  ms_jarvis_facebook_poster.py
  ms_jarvis_facebook_poster_8040.py
  ms_jarvis_facebook_poster_FIXED.py
  ms_jarvis_facebook_poster_temp.py
  ms_jarvis_facebook_poster_v3.py
  ms_jarvis_facebook_rag.py
  ms_jarvis_facebook_webhook.py
  ms_jarvis_facebook_webhooks.py
  ms_jarvis_fact_filter.py
  ms_jarvis_feed_reader_PRODUCTION.py
  ms_jarvis_feed_reader_WORKING.py
  ms_jarvis_fifth_dgm_orchestrator.psychology_patched.py
  ms_jarvis_fifth_dgm_orchestrator.py
  ms_jarvis_fractal_consciousness.py
  ms_jarvis_fractal_consciousness_FIXED.py
  ms_jarvis_fractal_dgm_woah.py
  ms_jarvis_full_neurobio_chat.py
  ms_jarvis_fully_autonomous_coordinator.py
  ms_jarvis_generate_frontend.py
  ms_jarvis_geo_tracker_simple.py
  ms_jarvis_geo_ueid_integration.py
  ms_jarvis_gis_enhanced_chat.py
  ms_jarvis_gis_georeferencing_sync.py
  ms_jarvis_gis_georeferencing_sync_FIXED.py
  ms_jarvis_gis_georeferencing_sync_FIXED_V2.py
  ms_jarvis_gis_query_service.py
  ms_jarvis_gis_query_service_backup.py
  ms_jarvis_gis_query_with_bbb_gisgeodb.psychology_patched.py
  ms_jarvis_gis_query_with_bbb_gisgeodb.py
  ms_jarvis_i_containers_FIXED.py
  ms_jarvis_i_containers_service.py
  ms_jarvis_id_ocr_processor.py
  ms_jarvis_integration_hub.py
  ms_jarvis_layer2_dgm.psychology_patched.py
  ms_jarvis_layer2_dgm.py
  ms_jarvis_layer2_woah.py
  ms_jarvis_link_reader_scheduled.py
  ms_jarvis_link_reader_scheduled_FIXED.py
  ms_jarvis_llm_bridge.py
  ms_jarvis_llm_bridge_simple.py
  ms_jarvis_local_resources_api.py
  ms_jarvis_location_services.py
  ms_jarvis_main_gateway.backup_1762220815.py
  ms_jarvis_main_gateway.backup_error.py
  ms_jarvis_main_gateway.backup_test.py
  ms_jarvis_main_gateway.broken_final.py
  ms_jarvis_main_gateway.error_final.py
  ms_jarvis_main_gateway.pre_fix.py
  ms_jarvis_main_gateway.proxy_backup.py
  ms_jarvis_main_gateway.proxy_final.py
  ms_jarvis_main_gateway.proxy_still_broken.py
  ms_jarvis_main_gateway.py
  ms_jarvis_main_gateway.py.30endpoints_backup.py
  ms_jarvis_main_gateway.py.corrupted37_backup_1762223499.py
  ms_jarvis_main_gateway.py.full_backup_1762223304.py
  ms_jarvis_main_gateway_8000.py
  ms_jarvis_memory.py
  ms_jarvis_memory_service.py
  ms_jarvis_messenger_ui.py
  ms_jarvis_messenger_ui_final.py
  ms_jarvis_messenger_ui_fixed.py
  ms_jarvis_metadata_aware_learner.py
  ms_jarvis_microsoft_integration.py
  ms_jarvis_microsoft_integration_FIXED.py
  ms_jarvis_mother_carrie_protocols.py
  ms_jarvis_mountainshares_integration.py
  ms_jarvis_neurobiological_master.py
  ms_jarvis_paddleocr_processor.py
  ms_jarvis_production_chat.py
  ms_jarvis_production_chat_BACKUP.py
  ms_jarvis_production_chat_BEFORE_GIS.py
  ms_jarvis_psychology_services.py
  ms_jarvis_qualia_engine.py
  ms_jarvis_rag_server.py
  ms_jarvis_ram_watchdog.py
  ms_jarvis_seamless_monitor.py
  ms_jarvis_service_factory.py
  ms_jarvis_showcase_api.py
  ms_jarvis_silent_geo_tracker.py
  ms_jarvis_simple_web_ui.py
  ms_jarvis_spiritual_services.py
  ms_jarvis_substack_reader.py
  ms_jarvis_swap_memory_manager.py
  ms_jarvis_swarm_intelligence.py
  ms_jarvis_sync_monitor.py
  ms_jarvis_temporal_consciousness.py
  ms_jarvis_theological_integration.py
  ms_jarvis_toroidal_consciousness.py
  ms_jarvis_truth_filter_gisgeodb.py
  ms_jarvis_ueid_system.py
  ms_jarvis_ueid_wallet_integration.py
  ms_jarvis_unified_gateway.py
  ms_jarvis_unified_gateway_v4.3.20251124.py
  ms_jarvis_unified_gateway_v4.3.BEFORE_69DGM_INTEGRATION.py
  ms_jarvis_unified_gateway_v4.3.CONSTITUTIONAL_BACKUP.py
  ms_jarvis_unified_gateway_v4.3.ORIGINAL_SWAGGER.py
  ms_jarvis_unified_gateway_v4.3.backup.py
  ms_jarvis_unified_gateway_v4.3.pre_manifest.backup.py
  ms_jarvis_unified_gateway_v4.3.py
  ms_jarvis_unified_rag_bridge.py
  ms_jarvis_unified_swagger_gateway.py
  ms_jarvis_unified_swagger_gateway_BACKUP.py
  ms_jarvis_unified_swagger_gateway_CLEAN.py
  ms_jarvis_unified_swagger_gateway_COMPLETE.py
  ms_jarvis_unified_swagger_gateway_FINAL.psychology_patched.py
  ms_jarvis_unified_swagger_gateway_FINAL.py
  ms_jarvis_unified_swagger_gateway_FIXED.py
  ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py
  ms_jarvis_unified_swagger_gateway_PROD.py
  ms_jarvis_unified_swagger_gateway_SECURED.py
  ms_jarvis_venv_scheduler.py
  ms_jarvis_venv_scheduler_FIXED.py
  ms_jarvis_venv_scheduler_SIMPLE.py
  ms_jarvis_web_deployer.py
  ms_jarvis_web_deployer_old.py
  ms_jarvis_web_research.py
  ms_jarvis_web_research_aggregate.py
  ms_jarvis_web_research_aggregate.safe.20260119-094221.py
  ms_jarvis_web_research_fixed.py
  ms_jarvis_web_research_simple.py
  ms_jarvis_web_research_v2.py
  ms_jarvis_woah_algorithms.py
  ms_jarvis_woah_algorithms_enhanced.py
  ms_mountainshares_analytics.py
  ms_mountainshares_coordinator.py
  ms_mountainshares_indexer.py
  msjarvis-rebuild-nbb_blood_brain_barrier-1_ms_jarvis_consciousness_bridge.py
  msjarvis-rebuild-nbb_consciousness_containers-1_main.py
  msjarvis-rebuild-nbb_heteroglobulin_transport-1_main.py
  msjarvis-rebuild-nbb_i_containers-1_ms_jarvis_consciousness_unified_bridge.py
  msjarvis-rebuild-nbb_mother_carrie_protocols-1_main.py
  msjarvis-rebuild-nbb_pituitary_gland-1_main.py
  msjarvis-rebuild-nbb_prefrontal_cortex-1_main.py
  msjarvis-rebuild-nbb_qualia_engine-1_ms_jarvis_consciousness_bridge.py
  msjarvis-rebuild-nbb_spiritual_maternal_integration-1_main.py
  msjarvis-rebuild-nbb_spiritual_root-1_main.py
  msjarvis-rebuild-nbb_subconscious-1_main.py
  msjarvis-rebuild-nbb_woah_algorithms-1_service_discovery.py
  msjarvis_autolearner_minimal.py
  msjarvis_bbb_proxy.py
  msjarvis_benefit_rag.py
  msjarvis_client.py
  msjarvis_fractal_consciousness.py
  msjarvis_gateway_v2_final.py
  msjarvis_gateway_with_judge_filtering.py
  msjarvis_icontainers.py
  msjarvis_semaphore.py
  msjarvis_unified_gateway.py
  msjarvis_woah_algorithms.py
  msjarvis_woah_algorithms_service.py
  msjarvis_woah_runner.py
  msjarvis_wv_entangled_gateway.py
  msjarvisautonomouslearner.py
  msjarvisconsciousnessbridge.py
  msjarvisconsciousnessbridge_ACTUAL.py
  msjarvisfractalconsciousness.py
  msjarvisicontainersservice.py
  msjarvismaingateway.py
  msjarvisragserver_wvpatch.py
  msjarvisragserverwvpatch.py
  msjarvistoroidalconsciousness.py
  msjarvisunifiedgateway.py
  msjarvisunifiedswaggergateway.py
  msjarvisunifiedswaggergatewayFINAL.py
  msjarvisunifiedswaggergatewayFIXED.py
  multi_model_consensus.py
  multi_rag_dgm_system.py
  my_service.py
  nbb_darwin_godel_machines.py
  nbb_darwin_godel_machines_msjarvis-rebuild-nbb_spiritual_root-1_main.py
  neuro_adapter.py
  neuro_blood_brain_barrier.py
  neuro_consciousness_containers.py
  neuro_i_containers.py
  neuro_master_service.py
  neuro_prefrontal_cortex.py
  neuro_qualia_engine.py
  neuro_subconscious.py
  neurobiological_integration.py
  oauth2_callback.py
  oauth2_handler.py
  ollama_fix.py
  optimize_egeria_complete.py
  optimize_models_for_vram.py
  optimized_timeouts.py
  otel_tracing.py
  override_launcher.py
  parallel_processing.py
  parse_world_files.py
  patch_agent_identity.py
  patch_autonomous_learner_gisgeodb.py
  patch_fractal.py
  patch_learner_clean.py
  patch_mother_persona.py
  patch_neuro.py
  patch_qualia.py
  performance_optimization_analyzer.py
  phase1_integration.py
  phase2_integration.py
  phase3_integration.py
  phase4_5_integration.py
  phase6_integration.py
  phase7_integration.py
  pia_event_emitters.py
  pituitary_gland.py
  polling_client.py
  populate_redetermination_tracker.py
  populate_security_layers_test.py
  port_9000_69dgm_bridge.py
  port_9000_academic_extension.py
  port_9000_chat_wrapper_69dgm.py
  port_9001_ARCHITECTURE_CORRECT.py
  port_9001_FINAL_FIX.py
  port_9001_FINAL_WORKING.py
  port_9001_proxy_simple.py
  port_9001_ui_DIRECT.py
  port_9001_ui_FIXED.py
  port_9001_ui_MYSQL.py
  port_9001_ui_MYSQL_PROD.py
  port_9001_ui_WITH_CONVERSATIONS.py
  port_9001_ui_WORKING.py
  port_9001_ui_wrapper.py
  port_manager.py
  port_manager_fixed.py
  private_identity_ledger.py
  probe_services.py
  process_comprehensive_gis.py
  process_gis_shapefiles.py
  process_statewide_gis_bulk.py
  pronoun_fixer.py
  proxy_8060.py
  psychological_rag_domain.py
  psychological_rag_domain_psychological_rag_domain.py
  psychology_integration_adapter.py
  psychology_loop_closer.py
  public_form_simplified.py
  qualia_adapter.py
  qualia_email_registration_orchestrator_69dgm.py
  qualia_unified_orchestrator_69dgm.py
  qualia_unified_orchestrator_69dgm_ACTIVE.py
  qualia_unified_write_orchestrator_69dgm.py
  qualiaunifiedorchestrator69dgm.py
  quantum_dashboard.py
  quantum_insight_llm.py
  quantum_state_engine.py
  query_benefits_system.py
  query_imm_and_programs.py
  quick_optimizations.py
  rag_5100_ensemble.py
  rag_5100_ensemble_fast.py
  rag_5100_final.py
  rag_client.py
  rag_command_module.py
  rag_direct_debug.py
  rag_evidence_aggregator.py
  rag_first_workflow.py
  rag_general.py
  rag_geospatial.py
  rag_geospatial_context.py
  rag_grounded_v2.py
  rag_heartbeat_monitor.py
  rag_local_resources.py
  rag_query_router.py
  rag_server.psychology_patched.py
  rag_server.py
  rag_server_main.py
  rag_server_min.py
  rag_simple.py
  rag_temporal.py
  rag_temporal_heartbeat.py
  rag_to_gis_sync.py
  rag_topic_router.py
  rag_workflow.py
  rebuild_query_service.py
  rechunk_oversized.py
  recover_160_queries.py
  recover_chromadb_FIXED.py
  recover_chromadb_to_gisgeodb.py
  redirect_4015_to_4020.py
  register_agents_from_csv.py
  register_agents_from_csv_strict.py
  register_hilbert_services.py
  register_services.py
  register_to_hilbert_chromadb.py
  registration_biometric_production_final.py
  registration_pipeline.py
  registration_service.py
  registration_service_clean.backup_1762220206.py
  registration_service_clean.py
  reload_all_knowledge.py
  remove_duplicate_inits.py
  replace_dolphin_phi.py
  response_filter.py
  response_sanitizer.py
  restore_pia_wiring.py
  resume_ingest_gbim_to_chroma.py
  resume_sync_wvgistc_buildings.py
  retrieval_router.py
  retrieval_spiritual.py
  roche_llm.py
  roche_llm.stub.py
  run_autonomous_learner_once.py
  run_gateway_with_guards.py
  safe_ingest_gbim_to_chroma.py
  safe_integration.py
  sanctuary_construction_monitor.py
  sanctuary_construction_monitor_gateway.py
  schema_aware_topic_planner.py
  schema_registry.py
  search_metadata.py
  seed_spatial_identity.py
  service_discovery.py
  service_discovery_glassbox.py
  service_registry_client.py
  services_msjarvisunifiedgatewayv4_3.py
  services_safe.py
  session_sidecar_client.py
  set_intelligent_accuracy_scores.py
  silence_memory_errors.py
  simple_orchestrator_fix.py
  simple_prompt_fix.py
  smart_auto_store.py
  spiritual_rag_domain.py
  stage2_biometric.py
  stage2_biometric_backup.py
  stakeholder_health_access_tests.py
  stakeholder_health_access_tests_v2.py
  start_facebook_4021.py
  start_gateway_with_guards.py
  substack_rss_reader.py
  summarize_docs.py
  swagger_chat_integration.py
  swagger_gateway.py
  swagger_gateway_FIXED.py
  swarm_intelligence_main.py
  swarm_watchdog.py
  switch_to_small_models.py
  sync_geodb_to_chromadb.py
  sync_health_access_to_chromadb.py
  system_dashboard.py
  tag_quantum_gbim.py
  talk_to_jarvis.py
  temporal_consciousness.py
  test.py
  test_aacpe_features.py
  test_aapcappe_corpus.py
  test_aapcappe_retrieval.py
  test_chroma_client.py
  test_chromadb_heartbeat.py
  test_chromadb_v2_heartbeat.py
  test_ddg_verbose.py
  test_end_to_end_woah_fifthdgm.py
  test_fifth_dgm_integration.py
  test_full_brain_integration.py
  test_gbim_llm_summary.py
  test_gbim_semantic_query.py
  test_geodb_llm_summary.py
  test_gis_chat.py
  test_health_access_gbim.py
  test_imm_query.py
  test_knowledge_base.py
  test_method_tracking.py
  test_multi_collection_query.py
  test_rag.py
  test_retrieval_endpoint.py
  test_spatial_awareness.py
  token_service.py
  topic_entanglement.py
  toroidal_service.py
  trigger_entangled_assets.py
  truth_filter_bbb_verification.py
  truth_filter_service.py
  uei_service.py
  ultimate_web_orchestrator.py
  unified_consciousness_gateway_PRODUCTION.py
  unified_orchestrator.py
  unifiedconsciousnessgatewayPRODUCTION.py
  update_carrie_keywords.py
  update_facebook_poster.py
  update_gisgeodb_schema.py
  update_production_to_v9.py
  update_services_to_use_port_manager.py
  update_theological_boundaries.py
  update_web_chat.py
  update_web_research_package.py
  use_existing_models.py
  use_reliable_models_only.py
  user_auth_service.py
  user_dashboard.py
  vatican_scraper_service.py
  vectorize_gis_to_chromadb.py
  verify_and_document_system.py
  verify_benefit_chroma_sync.py
  wallet_service.py
  web_chat_server.py
  web_connectivity_analyzer.py
  web_page_ingest.py
  web_research.py
  web_research_fail_tracker.py
  web_research_main.py
  web_research_proxy_8007.py
  webhook_notifications.py
  website_deployment_manager.py
  wire_layers_into_chat.py
  wire_learner_to_gisgeodb.py
  wire_qualia_to_port8001.py
  woah_command_module.py
  woah_metrics_router.py
  woah_optimizer.py
  woah_policy_update.py
  woah_population_state.py
  woah_qualia_bridge.py
  woah_service.py
  woah_stub.py
  working_full_pipeline.py
  working_full_pipeline_FINAL_CONSCIOUSNESS.py
  working_full_pipeline_WITH_SPATIAL_TEMPORAL.py
  wv_gis_mass_downloader.py
  wvu_ldap_auth.py
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # Step 5 — after reviewing step 4 output, run the actual import graph per container
# This tells us EXACTLY which files each service needs
python3 << 'PYEOF'
import subprocess, re, os

SERVICES_DIR = "./services"

def get_imports(pyfile):
    """Extract local module imports from a .py file."""
    try:
        with open(pyfile) as f:
            content = f.read()
    except:
        return set()
    imports = set()
    for line in content.splitlines():
        m = re.match(r'^(?:from|import)\s+([\w]+)', line.strip())
        if m:
            mod = m.group(1)
            candidate = os.path.join(SERVICES_DIR, f"{mod}.py")
            if os.path.exists(candidate):
                imports.add(f"{mod}.py")
    return imports

def resolve_all_imports(entrypoint_file):
    """Recursively resolve all local imports from an entrypoint."""
    needed = set()
PYEOF   print(f"    - ./services/{f}:/app/services/{f}")th_api:app" or "python auth_api.py"

=== DETECTED ENTRYPOINTS ===
  jarvis-auth-api: auth_api.py
  jarvis-i-containers: ms_jarvis_i_containers_service.py
  jarvis-rag-server: ms_jarvis_rag_server.py
  jarvis-blood-brain-barrier: ms_jarvis_blood_brain_barrier.py
  jarvis-unified-gateway: ms_jarvis_unified_gateway.py
  jarvis-contract-forge: ms_jarvis_contract_forge.py
  jarvis-main-brain: main_brain.py
  jarvis-brain-orchestrator: brain_orchestrator.py
  jarvis-neurobiological-master: ms_jarvis_neurobiological_master.py
  edec949df4bf_jarvis-qualia-engine: ms_jarvis_qualia_engine.py
  jarvis-consciousness-bridge: msjarvisconsciousnessbridge.py
  jarvis-fractal-consciousness: msjarvis_fractal_consciousness.py
  jarvis-20llm-production: ai_server_20llm_PRODUCTION.py
  jarvis-woah: woah_service.py
  jarvis-lm-synthesizer: lm_synthesizer.py
  jarvis-local-resources: local_resources_resolver.py
  jarvis-spiritual-rag: rag_spiritual_rag_domain.py
  jarvis-constitutional-guardian: guardian_constitutional_api.py
  jarvis-gbim-query-router: gbim_query_router.py
  jarvis-gbim-temporal-indexer: temporal_indexer.py
  jarvis-gbim-spatial-indexer: spatial_indexer.py
  jarvis-gbim-benefit-indexer: gbim_benefit_indexer.py
  jarvis-memory: ms_jarvis_memory.py
  jarvis-swarm-intelligence: ms_jarvis_swarm_intelligence.py
  jarvis-judge-truth: judge_truth_filter.py
  jarvis-judge-alignment: judge_alignment_filter.py
  jarvis-judge-ethics: judge_ethics_filter.py
  jarvis-judge-consistency: judge_consistency_engine.py
  jarvis-judge-pipeline: judge_pipeline.py
  jarvis-eeg-beta: jarvis_eeg_beta_5m.py
  jarvis-eeg-theta: jarvis_eeg_theta_60s.py
  jarvis-eeg-delta: jarvis_eeg_delta_30s.py
  jarvis-decay-escalation-consumer: jarvis_decay_escalation_consumer.py
  jarvis-aaacpe-scraper: aaacpe_scraper_service.py
  jarvis-autonomous-learner: ms_jarvis_autonomous_learner_optimized.py
  msjarvis-rebuild-nbb_spiritual_root-1: spiritual_root.py
  msjarvis-rebuild-nbb_i_containers-1: i_containers.py
  msjarvis-rebuild-nbb_spiritual_maternal_integration-1: spiritual_maternal_integration.py
  jarvis-mountainshares-coordinator: mountainshares_coordinator.py
  jarvis-ingest-watcher: ingest_watcher.py
  jarvis-ms-token-service: token_service.py
  jarvis-fifth-dgm: ms_jarvis_fifth_dgm_orchestrator.py
  msjarvis-rebuild-nbb_consciousness_containers-1: consciousness_containers.py
  jarvis-crypto-policy: jarviscryptopolicy.py
  jarvis-hilbert-state: jarvis_hilbert_state.py
  msjarvis-rebuild-nbb_darwin_godel_machines-1: nbb_darwin_godel_machines.py
  jarvis-community-stake-registry: community_stake_registry.py
  jarvis-agents-service: ms_jarvis_agents_service.py
  jarvis-stewardship-scheduler: jarvis_stewardship_scheduler.py
  jarvis-aaacpe-rag: aaacpe_rag_service.py
  jarvis-69dgm-bridge: port_9000_69dgm_bridge.py
  jarvis-pia-sampler: main_brain.py
  jarvis-semaphore: semaphore_msjarvis_semaphore.py
  jarvis-web-research: ms_jarvis_web_research_aggregate.py
  jarvis-gbim-verifier: gbim_verification_loop.py
  jarvis-mother-protocols: mother_protocols.py
  jarvis-dao-governance: dao_governance.py
  msjarvis-rebuild-nbb_pituitary_gland-1: pituitary_gland.py
  jarvis-hippocampus: hippocampus_service.py
  jarvis-temporal-consciousness: temporal_consciousness.py
  msjarvis-rebuild-nbb_heteroglobulin_transport-1: heteroglobulin_transport.py
  jarvis-steward: jarvis_steward.py
  msjarvis-rebuild-nbb_mother_carrie_protocols-1: main.py
  msjarvis-rebuild-nbb_blood_brain_barrier-1: blood_brain_barrier.py
  jarvis-ingest-api: api.py
  jarvis-gbim-semantic-indexer: semantic_indexer.py
  msjarvis-rebuild-nbb_subconscious-1: consciousness_bridge.py
  msjarvis-rebuild-nbb_qualia_engine-1: qualia_engine.py
  jarvis-llm-judge-v3: judge_pipeline.py

=== REQUIRED FILES PER CONTAINER ===

  jarvis-auth-api:
    - ./services/application_service.py:/app/services/application_service.py
    - ./services/auth_api.py:/app/services/auth_api.py
    - ./services/auth_router.py:/app/services/auth_router.py
    - ./services/email_service.py:/app/services/email_service.py
    - ./services/registration_pipeline.py:/app/services/registration_pipeline.py
    - ./services/registration_service.py:/app/services/registration_service.py
    - ./services/token_service.py:/app/services/token_service.py
    - ./services/uei_service.py:/app/services/uei_service.py
    - ./services/wallet_service.py:/app/services/wallet_service.py

  jarvis-i-containers:
    - ./services/ms_jarvis_i_containers_service.py:/app/services/ms_jarvis_i_containers_service.py

  jarvis-rag-server:
    - ./services/ms_jarvis_rag_server.py:/app/services/ms_jarvis_rag_server.py

  jarvis-blood-brain-barrier:
    - ./services/ms_jarvis_blood_brain_barrier.py:/app/services/ms_jarvis_blood_brain_barrier.py

  jarvis-unified-gateway:
    - ./services/ms_jarvis_unified_gateway.py:/app/services/ms_jarvis_unified_gateway.py
    - ./services/services_safe.py:/app/services/services_safe.py
    - ./services/session_sidecar_client.py:/app/services/session_sidecar_client.py

  jarvis-contract-forge:
    - ./services/ms_jarvis_contract_forge.py:/app/services/ms_jarvis_contract_forge.py

  jarvis-main-brain:
    - ./services/application_service.py:/app/services/application_service.py
    - ./services/auth_router.py:/app/services/auth_router.py
    - ./services/create_immutable_security_layer.py:/app/services/create_immutable_security_layer.py
    - ./services/email_service.py:/app/services/email_service.py
    - ./services/identity_service.py:/app/services/identity_service.py
    - ./services/main_brain.py:/app/services/main_brain.py
    - ./services/registration_pipeline.py:/app/services/registration_pipeline.py
    - ./services/registration_service.py:/app/services/registration_service.py
    - ./services/token_service.py:/app/services/token_service.py
    - ./services/uei_service.py:/app/services/uei_service.py

  jarvis-brain-orchestrator:
    - ./services/brain_orchestrator.py:/app/services/brain_orchestrator.py
    - ./services/pia_event_emitters.py:/app/services/pia_event_emitters.py

  jarvis-neurobiological-master:
    - ./services/ms_jarvis_neurobiological_master.py:/app/services/ms_jarvis_neurobiological_master.py

  edec949df4bf_jarvis-qualia-engine:
    - ./services/ms_jarvis_qualia_engine.py:/app/services/ms_jarvis_qualia_engine.py

  jarvis-consciousness-bridge:
    - ./services/msjarvisconsciousnessbridge.py:/app/services/msjarvisconsciousnessbridge.py

  jarvis-fractal-consciousness:
    - ./services/msjarvis_fractal_consciousness.py:/app/services/msjarvis_fractal_consciousness.py

  jarvis-20llm-production:
    - ./services/ai_server_20llm_PRODUCTION.py:/app/services/ai_server_20llm_PRODUCTION.py
    - ./services/llm_consensus_20_FINAL.py:/app/services/llm_consensus_20_FINAL.py

  jarvis-woah:
    - ./services/woah_service.py:/app/services/woah_service.py

  jarvis-lm-synthesizer:
    - ./services/lm_synthesizer.py:/app/services/lm_synthesizer.py

  jarvis-local-resources:
    - ./services/local_resources_resolver.py:/app/services/local_resources_resolver.py

  jarvis-spiritual-rag:
    - ./services/rag_spiritual_rag_domain.py:/app/services/rag_spiritual_rag_domain.py

  jarvis-constitutional-guardian:
    - ./services/guardian_constitutional_api.py:/app/services/guardian_constitutional_api.py

  jarvis-gbim-query-router:
    - ./services/gbim_query_router.py:/app/services/gbim_query_router.py

  jarvis-gbim-temporal-indexer:
    - ./services/temporal_indexer.py:/app/services/temporal_indexer.py

  jarvis-gbim-spatial-indexer:
    - ./services/spatial_indexer.py:/app/services/spatial_indexer.py

  jarvis-gbim-benefit-indexer:
    - ./services/gbim_benefit_indexer.py:/app/services/gbim_benefit_indexer.py

  jarvis-memory:
    - ./services/ms_jarvis_memory.py:/app/services/ms_jarvis_memory.py

  jarvis-swarm-intelligence:
    - ./services/ms_jarvis_swarm_intelligence.py:/app/services/ms_jarvis_swarm_intelligence.py
    - ./services/service_registry_client.py:/app/services/service_registry_client.py

  jarvis-judge-truth:
    - ./services/judge_truth_filter.py:/app/services/judge_truth_filter.py
    - ./services/judgesigner.py:/app/services/judgesigner.py
    - ./services/lm_judge_helper.py:/app/services/lm_judge_helper.py

  jarvis-judge-alignment:
    - ./services/judge_alignment_filter.py:/app/services/judge_alignment_filter.py
    - ./services/judgesigner.py:/app/services/judgesigner.py

  jarvis-judge-ethics:
    - ./services/judge_ethics_filter.py:/app/services/judge_ethics_filter.py
    - ./services/judgesigner.py:/app/services/judgesigner.py
    - ./services/lm_judge_helper.py:/app/services/lm_judge_helper.py

  jarvis-judge-consistency:
    - ./services/judge_consistency_engine.py:/app/services/judge_consistency_engine.py
    - ./services/judgesigner.py:/app/services/judgesigner.py

  jarvis-judge-pipeline:
    - ./services/judge_pipeline.py:/app/services/judge_pipeline.py
    - ./services/judgesigner.py:/app/services/judgesigner.py

  jarvis-eeg-beta:
    - ./services/jarvis_eeg_beta_5m.py:/app/services/jarvis_eeg_beta_5m.py

  jarvis-eeg-theta:
    - ./services/jarvis_eeg_theta_60s.py:/app/services/jarvis_eeg_theta_60s.py

  jarvis-eeg-delta:
    - ./services/jarvis_eeg_delta_30s.py:/app/services/jarvis_eeg_delta_30s.py

  jarvis-decay-escalation-consumer:
    - ./services/jarvis_decay_escalation_consumer.py:/app/services/jarvis_decay_escalation_consumer.py

  jarvis-aaacpe-scraper:
    - ./services/aaacpe_scraper_service.py:/app/services/aaacpe_scraper_service.py

  jarvis-autonomous-learner:
    - ./services/ms_jarvis_autonomous_learner_optimized.py:/app/services/ms_jarvis_autonomous_learner_optimized.py
    - ./services/topic_entanglement.py:/app/services/topic_entanglement.py

  msjarvis-rebuild-nbb_spiritual_root-1:
    - ./services/spiritual_root.py:/app/services/spiritual_root.py

  msjarvis-rebuild-nbb_i_containers-1:
    - ./services/i_containers.py:/app/services/i_containers.py

  msjarvis-rebuild-nbb_spiritual_maternal_integration-1:
    - ./services/spiritual_maternal_integration.py:/app/services/spiritual_maternal_integration.py

  jarvis-mountainshares-coordinator:
    - ./services/mountainshares_coordinator.py:/app/services/mountainshares_coordinator.py

  jarvis-ingest-watcher:
    - ./services/ingest_watcher.py:/app/services/ingest_watcher.py

  jarvis-ms-token-service:
    - ./services/token_service.py:/app/services/token_service.py

  jarvis-fifth-dgm:
    - ./services/dynamic_port_service.py:/app/services/dynamic_port_service.py
    - ./services/ms_jarvis_fifth_dgm_orchestrator.py:/app/services/ms_jarvis_fifth_dgm_orchestrator.py
    - ./services/psychology_integration_adapter.py:/app/services/psychology_integration_adapter.py
    - ./services/rag_client.py:/app/services/rag_client.py
    - ./services/service_discovery.py:/app/services/service_discovery.py

  msjarvis-rebuild-nbb_consciousness_containers-1:
    - ./services/consciousness_containers.py:/app/services/consciousness_containers.py

  jarvis-crypto-policy:
    - ./services/jarviscryptopolicy.py:/app/services/jarviscryptopolicy.py

  jarvis-hilbert-state:
    - ./services/jarvis_hilbert_state.py:/app/services/jarvis_hilbert_state.py

  msjarvis-rebuild-nbb_darwin_godel_machines-1:
    - ./services/nbb_darwin_godel_machines.py:/app/services/nbb_darwin_godel_machines.py

  jarvis-community-stake-registry:
    - ./services/community_stake_registry.py:/app/services/community_stake_registry.py

  jarvis-agents-service:
    - ./services/ms_jarvis_agents_service.py:/app/services/ms_jarvis_agents_service.py

  jarvis-stewardship-scheduler:
    - ./services/jarvis_stewardship_scheduler.py:/app/services/jarvis_stewardship_scheduler.py

  jarvis-aaacpe-rag:
    - ./services/aaacpe_rag_service.py:/app/services/aaacpe_rag_service.py

  jarvis-69dgm-bridge:
    - ./services/dgm_rag_integration_v2.py:/app/services/dgm_rag_integration_v2.py
    - ./services/port_9000_69dgm_bridge.py:/app/services/port_9000_69dgm_bridge.py

  jarvis-pia-sampler:
    - ./services/application_service.py:/app/services/application_service.py
    - ./services/auth_router.py:/app/services/auth_router.py
    - ./services/create_immutable_security_layer.py:/app/services/create_immutable_security_layer.py
    - ./services/email_service.py:/app/services/email_service.py
    - ./services/identity_service.py:/app/services/identity_service.py
    - ./services/main_brain.py:/app/services/main_brain.py
    - ./services/registration_pipeline.py:/app/services/registration_pipeline.py
    - ./services/registration_service.py:/app/services/registration_service.py
    - ./services/token_service.py:/app/services/token_service.py
    - ./services/uei_service.py:/app/services/uei_service.py

  jarvis-semaphore:
    - ./services/semaphore_msjarvis_semaphore.py:/app/services/semaphore_msjarvis_semaphore.py

  jarvis-web-research:
    - ./services/ms_jarvis_web_research_aggregate.py:/app/services/ms_jarvis_web_research_aggregate.py
    - ./services/web_research_fail_tracker.py:/app/services/web_research_fail_tracker.py

  jarvis-gbim-verifier:
    - ./services/gbim_verification_loop.py:/app/services/gbim_verification_loop.py

  jarvis-mother-protocols:
    - ./services/mother_protocols.py:/app/services/mother_protocols.py

  jarvis-dao-governance:
    - ./services/dao_governance.py:/app/services/dao_governance.py

  msjarvis-rebuild-nbb_pituitary_gland-1:
    - ./services/pituitary_gland.py:/app/services/pituitary_gland.py

  jarvis-hippocampus:
    - ./services/hippocampus_service.py:/app/services/hippocampus_service.py

  jarvis-temporal-consciousness:
    - ./services/temporal_consciousness.py:/app/services/temporal_consciousness.py

  msjarvis-rebuild-nbb_heteroglobulin_transport-1:
    - ./services/heteroglobulin_transport.py:/app/services/heteroglobulin_transport.py

  jarvis-steward:
    - ./services/jarvis_steward.py:/app/services/jarvis_steward.py

  msjarvis-rebuild-nbb_mother_carrie_protocols-1:
    - ./services/main.py:/app/services/main.py

  msjarvis-rebuild-nbb_blood_brain_barrier-1:
    - ./services/blood_brain_barrier.py:/app/services/blood_brain_barrier.py

  jarvis-ingest-api:
    - ./services/api.py:/app/services/api.py

  jarvis-gbim-semantic-indexer:
    - ./services/semantic_indexer.py:/app/services/semantic_indexer.py

  msjarvis-rebuild-nbb_subconscious-1:
    - ./services/consciousness_bridge.py:/app/services/consciousness_bridge.py

  msjarvis-rebuild-nbb_qualia_engine-1:
    - ./services/qualia_engine.py:/app/services/qualia_engine.py

  jarvis-llm-judge-v3:
    - ./services/judge_pipeline.py:/app/services/judge_pipeline.py
    - ./services/judgesigner.py:/app/services/judgesigner.py
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ 

