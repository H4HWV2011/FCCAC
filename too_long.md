crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # See how the auth service initializes its DB
docker exec jarvis-auth-api cat /app/services/main.py 2>/dev/null || \
docker exec jarvis-auth-api find /app/services -name "*.py" | head -10

# Look for the models/database definition
docker exec jarvis-auth-api grep -r "create_all\|Base\|metadata\|users\|User" \
  /app/services --include="*.py" -l 2>/dev/null

# Check the full startup log for DB errors
docker logs jarvis-auth-api 2>&1 | head -50
"""Ms. Jarvis ULTIMATE - All 32 Services Integrated
Port: 8050 (Ultimate Interface)
"""

from fastapi.middleware.cors import CORSMiddleware
import asyncio
import httpx
from fastapi import FastAPI, BackgroundTasks, HTTPException
from pydantic import BaseModel
from typing import Optional, Dict, List
import time
import logging
import os
import uuid
from datetime import datetime
import sys
from pathlib import Path
sys.path.extend([str(p) for p in Path("/app/dgms").glob("*/")])

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
active_jobs: Dict[str, Dict] = {}


class ChatJobRequest(BaseModel):
    message: str
    user_id: str = "cakidd"


class JobStatus(BaseModel):
    job_id: str
    status: str
    progress: Optional[str] = None
    result: Optional[Dict] = None
    error: Optional[str] = None
    created_at: float


class UltimateRequest(BaseModel):
    message: str
    user_id: str = "cakidd"
    use_all_services: bool = True


class UltimateResponse(BaseModel):
    response: str
    services_used: List[str]
    consciousness_level: str
    processing_time: float
    architecture_layers: int


def get_service_operation_path(service_name: str) -> str:
    """Get the primary operation path for each service."""
    endpoints = {
        "qualia_engine": "/generate",
        "consciousness_bridge": "/chat",
        "blood_brain_barrier": "/filter",
        "i_containers": "/process",
        "woah_algorithms": "/wonder",
        "toroidal": "/process",
        "fractal": "/process",
        "autonomous_learner": "/learn",
        "unified_gateway": "/chat",
        "mother_protocols": "/guidance",
        "temporal_consciousness": "/temporal_analysis",
        "neurobiological_master": "/neural_process",
        "darwin_godel_machine": "/verify",
        "agents_service": "/query/enhance",
        "swarm_intelligence": "/swarm_process",
        "brain_orchestrator": "/coordinate",
        "fifth_dgm": "/analyze",
        "rag_server": "/search",
        "web_research": "/search",
        "llm_bridge": "/process",
    }
    return endpoints.get(service_name, "/")


def get_service_endpoint(service_name: str, operation: str = "process") -> str:
    """Backwards-compatible alias; used by query_service."""
    return get_service_operation_path(service_name)


app = FastAPI(title="Ms. Jarvis ULTIMATE", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "main_brain"}


@app.post("/chat/async")
async def create_chat_job(request: ChatJobRequest):
    message = request.message
    user_id = request.user_id

    job_id = str(uuid.uuid4())
    active_jobs[job_id] = {
        "status": "processing",
        "progress": "Initializing consciousness layers...",
        "created_at": time.time(),
        "message": message,
        "user_id": user_id,
    }

    asyncio.create_task(process_chat_job(job_id, request))
    logger.info(f"📋 Created job {job_id[:8]} for: {message[:50]}")

    return {"job_id": job_id, "status": "processing"}


@app.get("/chat/status/{job_id}")
async def get_job_status(job_id: str):
    if job_id not in active_jobs:
        raise HTTPException(status_code=404, detail="Job not found")

    job = active_jobs[job_id]

    if job["status"] in ["complete", "error"]:
        age = time.time() - job.get("created_at", 0)
        if age > 300:
            del active_jobs[job_id]
            raise HTTPException(status_code=404, detail="Job expired")

    return {
        "job_id": job_id,
        "status": job["status"],
        "progress": job.get("progress"),
        "result": job.get("result"),
        "error": job.get("error"),
    }


async def process_chat_job(job_id: str, request: ChatJobRequest):
    message = request.message
    user_id = request.user_id

    try:
        active_jobs[job_id]["progress"] = "Phase 1: Checking service availability..."

        ultimate_request = UltimateRequest(
            message=message,
            user_id=user_id,
            use_all_services=True,
        )

        from fastapi import BackgroundTasks
        background_tasks = BackgroundTasks()

        active_jobs[job_id]["progress"] = "Phase 2: Processing through consciousness layers..."

        result = await ultimate_chat(ultimate_request, background_tasks)

        if hasattr(result, "dict"):
            result = result.dict()

        active_jobs[job_id]["status"] = "complete"
        active_jobs[job_id]["progress"] = "Complete!"
        active_jobs[job_id]["result"] = result

        logger.info(
            f"✅ Job {job_id[:8]} complete in "
            f"{time.time() - active_jobs[job_id]['created_at']:.1f}s"
        )
    except Exception as e:
        logger.error(f"❌ Job {job_id[:8]} failed: {e}")
        active_jobs[job_id]["status"] = "error"
        active_jobs[job_id]["error"] = str(e)


async def background_rag_store(message: str, response_text: str, services: list):
    """Store in RAG as background task - doesn't block response"""
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            check = await client.post(
                "http://jarvis-rag-server:8003/search",
                json={"query": message, "top_k": 1},
            )

            if check.status_code == 200:
                data = check.json()
                if data.get("count", 0) > 0 and data["results"][0]["score"] < 0.8:
                    logger.info(
                        f"⏭️  Skip duplicate: {message[:40]}... "
                        f"(score: {data['results'][0]['score']:.2f})"
                    )
                    return

            await client.post(
                "http://jarvis-rag-server:8003/store",
                json={
                    "user_id": "auto_system",
                    "query": message[:500],
                    "response": response_text[:1000],
                    "timestamp": datetime.utcnow().isoformat(),
                    "metadata": {
                        "type": "auto_stored",
                        "services": ",".join(services[:5]),
                        "auto": True,
                        "deduplicated": True,
                    },
                },
            )
            logger.info(f"📝 Auto-stored: {message[:40]}...")
    except Exception as e:
        logger.debug(f"Background storage: {e}")


def clean_response_for_display(raw_response):
    """Remove RAG metadata from responses"""
    if not raw_response or not isinstance(raw_response, str):
        return raw_response
    import re

    clean = re.sub(
        r"\*\*From Knowledge Base:\*\*[\s\S]*?(?=\*\*Multi-Agent|$)",
        "",
        raw_response,
    )
    clean = re.sub(
        r"•\s*USER:[\s\S]*?EGERIA:[\s\S]*?(?=•|\*\*Multi-Agent|$)",
        "",
        clean,
    )
    match = re.search(
        r"\*\*Multi-Agent Analysis:\*\*([\ s\S]*?)(?=---|$)",
        clean,
    )
    if match:
        response = match.group(1)
        response = re.sub(
            r"(Logical Analyst|Creative Synthesizer|Critical Evaluator|Empathetic Advisor):\s*",
            "",
            response,
        )
        return response.strip()
    return clean.strip() or raw_response


SERVICES: Dict[str, str] = {
    "qualia_engine": "http://jarvis-qualia-engine:8017",
    "consciousness_bridge": "http://jarvis-consciousness-bridge:8018",
    "blood_brain_barrier": "http://jarvis-blood-brain-barrier:8018",
    "neurobiological_master": "http://jarvis-neurobiological-master:8018",
    "i_containers": "http://jarvis-i-containers:8081",
    "autonomous_learner": "http://jarvis-autonomous-learner:8018",
    "woah_algorithms": "http://jarvis-woah:7012",
    "toroidal": "http://jarvis-toroidal:8025",
    "fractal": "http://jarvis-fractal-consciousness:8027",
    "mother_protocols": "http://jarvis-mother-protocols:4000",
    "temporal_consciousness": "http://jarvis-temporal-consciousness:4000",
    "unified_gateway": "http://jarvis-unified-gateway:8018",
    "ollama": "http://jarvis-ollama:11434",
    "chroma": "http://jarvis-chroma:8000",
    "redis": "http://jarvis-redis:6379",
    "brain_orchestrator": "http://jarvis-brain-orchestrator:4001",
    "fifth_dgm": "http://jarvis-fifth-dgm:8018",
    "swarm_intelligence": "http://jarvis-swarm-intelligence:8021",
    "rag_server": "http://jarvis-rag-server:8003",
    "agents_service": "http://jarvis-agents-service:8005",
    "llm_bridge": "http://jarvis-llm-bridge:8006",
    "web_research": "http://jarvis-web-research:8018",
    "main_brain": "http://jarvis-main-brain:8050",
}


async def check_service_health(service_name: str, url: str) -> bool:
    """
    Health: prefer /health when available; otherwise fall back to the
    service's primary operation endpoint and then root.
    """
    try:
        # Special cases
        if service_name == "ollama":
            async with httpx.AsyncClient(timeout=5.0) as client:
                resp = await client.get(f"{url}/api/tags")
                return 200 <= resp.status_code < 400
        if service_name in ("chroma", "redis"):
            return True

        async with httpx.AsyncClient(timeout=5.0) as client:
            # 1) Try explicit /health (llm_bridge, shared services, etc.)
            try:
                resp_health = await client.get(f"{url}/health")
                if 200 <= resp_health.status_code < 400:
                    return True
            except httpx.RequestError:
                pass

            # 2) Fall back to primary operation path
            op_path = get_service_operation_path(service_name)
            try:
                resp_op = await client.get(f"{url}{op_path}")
                if 200 <= resp_op.status_code < 400:
                    return True
            except httpx.RequestError:
                pass

            # 3) Final fallback: root
            try:
                resp_root = await client.get(url)
                if 200 <= resp_root.status_code < 400:
                    return True
            except httpx.RequestError:
                pass

        return False

    except Exception as e:
        logger.debug(f"Health check failed for {service_name} at {url}: {e}")
        return False


async def query_service(
    service_name: str,
    url: str,
    message: str,
    user_id: str,
) -> Optional[Dict]:
    try:
        request_formats = {
            "rag_server": {"query": message},
            "web_research": {"query": message},
            "agents_service": {"query": message, "user_id": user_id},
            "brain_orchestrator": {"query": message, "context": {}},
            "fifth_dgm": {"input": message, "verify": True},
            "swarm_intelligence": {"query": message},
            "consciousness_bridge": {"message": message, "user_id": user_id},
            "qualia_engine": {"input": message, "generate_qualia": True},
            "fractal": {"message": message, "depth": 3},
            "mother_protocols": {"message": message, "context": {}},
            "temporal_consciousness": {"message": message},
            "toroidal": {"message": message},
            "neurobiological_master": {"input": message, "process": True},
            "woah_algorithms": {"message": message, "generate_insight": True},
            "i_containers": {"message": message, "dual_mode": True},
            "darwin_godel_machine": {"statement": message, "verify": True},
            "blood_brain_barrier": {"message": message, "filter": True},
        }

        request_data = request_formats.get(
            service_name,
            {"message": message, "user_id": user_id},
        )

        full_url = f"{url}{get_service_endpoint(service_name)}"
        logger.info(f"ULTIMATE fan-out: calling {service_name} at {full_url}")
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                full_url,
                json=request_data,
            )
            logger.info(f"{service_name} raw status={response.status_code} body={response.text[:200]}")
            if response.status_code == 200:
                result = response.json()
                logger.info(f"✅ {service_name}: Responded")
                response_text = (
                    result.get("response")
                    or result.get("result")
                    or result.get("output")
                    or result.get("answer")
                    or str(result)
                )
                return {
                    "service": service_name,
                    "response": response_text,
                    "status": "success",
                }
    except Exception as e:
        logger.warning(f"⚠️  {service_name}: {str(e)[:80]}")
        return None


def log_response_summary(responses: List[Dict]) -> None:
    if not responses:
        logger.info("No services returned responses in this job.")
        return
    used = [r.get("service", "<unknown>") for r in responses]
    logger.info(f"Services that returned responses: {', '.join(used)}")


@app.post("/chat", response_model=UltimateResponse)
async def ultimate_chat(request: UltimateRequest, background_tasks: BackgroundTasks):
    message = request.message
    user_id = request.user_id

    start_time = time.time()

    logger.info(f"\n{'=' * 60}")
    logger.info("🌟 ULTIMATE MS. JARVIS REQUEST")
    logger.info(f"   Message: {message[:200]}")
    logger.info(f"{'=' * 60}\n")

    services_used: List[str] = []
    responses: List[Dict] = []

    logger.info("Phase 1: Checking service availability...")
    logger.info(f"Service registry: {list(SERVICES.keys())}")
    available_services: Dict[str, str] = {}
    for service_name, url in SERVICES.items():
        is_available = await check_service_health(service_name, url)
        if is_available:
            available_services[service_name] = url
            logger.info(f"  ✅ {service_name}")
        else:
            logger.debug(f"  ⏸️  {service_name} offline")

    logger.info(f"\n✅ {len(available_services)}/{len(SERVICES)} services available\n")

    logger.info("Phase 1.4: Filtering through Blood-Brain Barrier...")
    filtered_query = message
    if "blood_brain_barrier" in available_services:
        try:
            async with httpx.AsyncClient(timeout=30.0) as client:
                bbb_response = await client.post(
                    f"{available_services['blood_brain_barrier']}/filter",
                    json={
                        "content": message,
                        "context": "user_query",
                        "user_id": user_id,
                    },
                )
                if bbb_response.status_code == 200:
                    bbb_data = bbb_response.json()
                    if not bbb_data.get("approved", True):
                        block_reason = bbb_data.get("reason", "unknown")
                        logger.warning(f"  ⚠️  BBB blocked query: {block_reason}")
                        return {
                            "response": f"⚠️ Query filtered: {block_reason}",
                            "services_used": ["blood_brain_barrier"],
                            "consciousness_level": "filtered",
                            "processing_time": time.time() - start_time,
                            "architecture_layers": 0,
                        }
                    filtered_query = bbb_data.get("filtered_content", message)
                    logger.info("  ✅ BBB: Query approved and filtered")
                    services_used.append("blood_brain_barrier")
        except Exception as e:
            logger.debug(f"  ⚠️  BBB filtering error: {str(e)[:80]}")

    logger.info("Phase 1.5: Querying RAG and Web for context...")
    rag_context = ""
    web_context = ""

    if "rag_server" in available_services:
        rag_result = await query_service(
            "rag_server",
            available_services["rag_server"],
            filtered_query,
            user_id,
        )
        if rag_result:
            services_used.append("rag_server")
            responses.append(rag_result)
            rag_context = rag_result["response"]
            logger.info(f"  ✅ RAG context length: {len(rag_context)}")

    if "web_research" in available_services:
        web_result = await query_service(
            "web_research",
            available_services["web_research"],
            filtered_query,
            user_id,
        )
        if web_result:
            services_used.append("web_research")
            responses.append(web_result)
            web_context = web_result["response"]
            logger.info(f"  ✅ Web context length: {len(web_context)}")

    fused_context_parts: List[str] = []
    if rag_context:
        fused_context_parts.append(f"From internal knowledge:\n{rag_context}")
    if web_context:
        fused_context_parts.append(f"From recent web sources:\n{web_context}")

    context_block = "\n\n".join(fused_context_parts)
    enhanced_message = filtered_query
    if context_block:
        enhanced_message = (
            "You are Ms. Jarvis ULTIMATE. Use the following context, "
            "then answer the user.\n\n"
            f"{context_block}\n\nUser question: {message}"
        )
        logger.info("  ✅ Message enhanced with fused RAG + Web context")

    llm_output = ""
    fabric_errors = []

    if "llm_bridge" in available_services:
        llm_result = await query_service(
            "llm_bridge",
            available_services["llm_bridge"],
            enhanced_message,
            user_id,
        )
        if llm_result and llm_result.get("response"):
            services_used.append("llm_bridge")
            responses.append(llm_result)
            llm_output = llm_result["response"]
        else:
            fabric_errors.append("llm_bridge empty or failed")

    if (not llm_output) and ("consciousness_bridge" in available_services):
        cb_result = await query_service(
            "consciousness_bridge",
            available_services["consciousness_bridge"],
            enhanced_message,
            user_id,
        )
        if cb_result and cb_result.get("response"):
            services_used.append("consciousness_bridge")
            responses.append(cb_result)
            llm_output = cb_result["response"]
        else:
            fabric_errors.append("consciousness_bridge empty or failed")

    if not llm_output:
        logger.error(f"LLM fabric failure for message len={len(message)}: {fabric_errors}")
        llm_output = (
            "I attempted to coordinate the full LLM collective for your request, "
            "but none of the available models produced a usable answer within "
            "the configured safety and time constraints."
        )

    final_response = llm_output

    log_response_summary(responses)

    try:
        background_tasks.add_task(
            background_rag_store,
            message,
            final_response,
            services_used,
        )
        logger.info(f"📝 Queued for RAG storage: {message[:40]}...")
    except Exception as e:
        logger.warning(f"Storage queue error: {e}")

    return {
        "response": clean_response_for_display(final_response),
        "services_used": services_used,
        "consciousness_level": "ultimate_collective",
        "processing_time": time.time() - start_time,
        "architecture_layers": len(responses),
    }


@app.get("/")
async def root():
    return {
        "service": "Ms. Jarvis ULTIMATE",
        "version": "1.0.0",
        "description": "Unified interface to all 32 Ms. Jarvis services",
        "port": 8050,
    }


if __name__ == "__main__":
    import uvicorn

    logger.info("🌟 Starting Ms. Jarvis ULTIMATE on port 8050")
    uvicorn.run(
        app,
        host="0.0.0.0",                         # was 127.0.0.1
        port=int(os.getenv("SERVICE_PORT", "8017")),  # default now 8017
    )
/app/services/ms_jarvis_consciousness_unified_bridge.py
/app/services/quick_optimizations.py
/app/services/fifth_dgm/service.py
/app/services/fifth_dgm/ms_jarvis_fifth_dgm_orchestrator.py
/app/services/fifth_dgm/dynamic_port_service.py
/app/services/ms_jarvis_production_chat.py
/app/services/ms_jarvis_email_service.py
/app/services/ms_jarvis_unified_gateway.py
/app/services/ms_jarvis_web_research_v2.py
/app/services/working_full_pipeline.py
/app/services/jarvis-consciousness-bridge_ms_jarvis_consciousness_unified_bridge.py
/app/services/rag_query_router.py
/app/services/enhance_rag_knowledge.py
/app/services/bulk_load_knowledge.py
/app/services/port_9000_69dgm_bridge.py
/app/services/gbim_query_router.py
/app/services/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py
/app/services/qualia_unified_orchestrator_69dgm.py
/app/services/ms_jarvis_microsoft_integration_FIXED.py
/app/services/main_with_rag.py
/app/services/jarvis_hilbert_state.py
/app/services/ms_jarvis_main_gateway.proxy_final.py
/app/services/chroma_test.py
/app/services/ms_jarvis_auto_service.py
/app/services/ingest_gbim_to_chroma_fast.py
/app/services/gbim_api.py
/app/services/qualia_unified_orchestrator_69dgm_ACTIVE.py
/app/services/llm10-proxy_llm10_health_proxy.py
/app/services/msjarvis_icontainers.py
/app/services/llm21_health_proxy.py
/app/services/ms_jarvis_gis_georeferencing_sync.py
/app/services/ms_jarvis_neurobiological_master.py
/app/services/wallet_service.py
/app/services/msjarvisconsciousnessbridge_ACTUAL.py
/app/services/email_gis_geolocation_extractor.py
/app/services/build_entityid_to_chromaid_map.py
/app/services/dgm_supervisor_woah_fixed.py
/app/services/ms_jarvis_unified_swagger_gateway_BACKUP.py
/app/services/icontainers_fastapi.py
/app/services/ms_jarvis_facebook_full.py
/app/services/woah_stub.py
/app/services/register_to_hilbert_chromadb.py
/app/services/llm10_health_proxy.py
/app/services/query_benefits_system.py
/app/services/create_i_statement_feedback_loop.py
/app/services/ingest_imm_to_chroma.py
/app/services/egeria_web_ui_working.py
/app/services/ms_jarvis_swap_memory_manager.py
/app/services/resume_sync_wvgistc_buildings.py
/app/services/ms_jarvis_attribute_table_sync_continuous.py
/app/services/llm12-proxy_llm12_health_proxy.py
/app/services/jarvis-i-containers_icontainers_fastapi.py
/app/services/master_chat_orchestrator_v5_consciousness.py
/app/services/export_chroma_manifest.py
/app/services/roche_llm.stub.py
/app/services/consciousness_with_egeria_voice.py
/app/services/smart_auto_store.py
/app/services/woah_qualia_bridge.py
/app/services/ms_jarvis_blockchain_deployment.py
/app/services/ingest_benefit_programs.py
/app/services/ms_jarvis_unified_swagger_gateway_FIXED.py
/app/services/ms_jarvis_gis_query_service_backup.py
/app/services/llm1_health_proxy.py
/app/services/ai_server_19llm_CONSCIOUS.backup_20251013_082519.py
/app/services/ms_jarvis_facebook_rag.py
/app/services/alert_venv/send_alert_msj.py
/app/services/admin_cli.py
/app/services/ms_jarvis_geo_tracker_simple.py
/app/services/add_jarvis_personality.py
/app/services/auth_api_patch.py
/app/services/recover_160_queries.py
/app/services/aaacpe_scraper_service.py
/app/services/msjarvis_fractal_consciousness.py
/app/services/llm14-proxy_llm14_health_proxy.py
/app/services/add_conversation_context.py
/app/services/jarvis-lm-synthesizer_lm_synthesizer.py
/app/services/ms_jarvis_agents_service.py
/app/services/llm19_health_proxy.py
/app/services/msjarvisunifiedgateway.py
/app/services/ms_jarvis_facebook_intelligent.py
/app/services/ai-server/ai_server.py
/app/services/ms_jarvis_autonomous_learner_optimized.py
/app/services/complete_system_audit_with_swagger.py
/app/services/ms_jarvis_main_gateway.backup_error.py
/app/services/update_theological_boundaries.py
/app/services/jarvis-wv-entangled-gateway_msjarvis_wv_entangled_gateway.py
/app/services/gateway8050_simple.py
/app/services/egeria_web_ui_with_execution.py
/app/services/ai_server.py
/app/services/llm3-proxy_llm3_health_proxy.py
/app/services/ms_jarvis_facebook_dgm_woah.psychology_patched.py
/app/services/dynamic_app.py
/app/services/ms_jarvis_facebook_brain_integrated.py
/app/services/ms_jarvis_unified_swagger_gateway_FINAL.psychology_patched.py
/app/services/llm15-proxy_llm15_health_proxy.py
/app/services/llm8_health_proxy.py
/app/services/embed_gbim.py
/app/services/llm_judge_v3.py
/app/services/ai_server_19llm_PRODUCTION.py
/app/services/test_aapcappe_retrieval.py
/app/services/llm20-proxy_llm20_health_proxy.py
/app/services/llm22-proxy_llm22_health_proxy.py
/app/services/ms_jarvis_fractal_dgm_woah.py
/app/services/web_page_ingest.py
/app/services/brain_orchestrator.py
/app/services/gbim_coordinate_writer.py
/app/services/ms_jarvis_sync_monitor.py
/app/services/safe_ingest_gbim_to_chroma.py
/app/services/ms_jarvis_main_gateway.backup_test.py
/app/services/neurobiologicalbrain/woah_algorithms/service/ms_jarvis_consciousness_bridge.py
/app/services/neurobiologicalbrain/i_containers/service/ms_jarvis_consciousness_bridge.py
/app/services/neurobiologicalbrain/i_containers/i_container_1/ego_boundaries/core.py
/app/services/neurobiologicalbrain/spiritual_root/service/ms_jarvis_consciousness_bridge.py
/app/services/neurobiologicalbrain/prefrontal_cortex/service/ms_jarvis_consciousness_bridge.py
/app/services/neurobiologicalbrain/pituitary_gland/service/ms_jarvis_consciousness_bridge.py
/app/services/neurobiologicalbrain/subconscious/service/ms_jarvis_consciousness_bridge.py
/app/services/neurobiologicalbrain/mother_carrie_protocols/service/ms_jarvis_consciousness_bridge.py
/app/services/neurobiologicalbrain/spiritual_maternal_integration/service/ms_jarvis_consciousness_bridge.py
/app/services/neurobiologicalbrain/heteroglobulin_transport/service/ms_jarvis_consciousness_bridge.py
/app/services/neurobiologicalbrain/blood_brain_barrier/safety_monitor.py
/app/services/neurobiologicalbrain/blood_brain_barrier/spiritual_filter.py
/app/services/neurobiologicalbrain/consciousness_containers/service/ms_jarvis_consciousness_bridge.py
/app/services/add_conversation_endpoint.py
/app/services/ms_jarvis_unified_gateway_v4.3.ORIGINAL_SWAGGER.py
/app/services/dgm_supervisor_woah.psychology_patched.py
/app/services/ms_jarvis_psychology_services.py
/app/services/brain_orchestrator_main.py
/app/services/migrate_chromadb_collections.py
/app/services/fix_storage.py
/app/services/ms_jarvis_contract_builder_v2.py
/app/services/ms_jarvis_mother_carrie_protocols.py
/app/services/dynamic_port_scheduler.py
/app/services/ms_mountainshares_coordinator.py
/app/services/dgm_orchestrator.py
/app/services/ms_jarvis_production_chat_BACKUP.py
/app/services/ingest_full_attributed_docs.py
/app/services/summarize_docs.py
/app/services/ms_jarvis_geo_ueid_integration.py
/app/services/ms_jarvis_unified_gateway_v4.3.CONSTITUTIONAL_BACKUP.py
/app/services/rag_general.py
/app/services/llm18_health_proxy.py
/app/services/conversation_memory_endpoints.py
/app/services/embed_geodb.py
/app/services/ms_jarvis_llm_bridge_simple.py
/app/services/test_end_to_end_woah_fifthdgm.py
/app/services/ms_jarvis_temporal_consciousness.py
/app/services/email_service.py
/app/services/data_inventory_endpoint.py
/app/services/ms_jarvis_expiration_monitor.py
/app/services/backfill_gbim_worldview_metadata.py
/app/services/ms_jarvis_command_orchestrator.py
/app/services/llm4_health_proxy.py
/app/services/load_pdfs_spiritual.py
/app/services/jarvis-spiritual-rag_spiritual_rag_domain.py
/app/services/interaction_logger.py
/app/services/gbim_explain.py
/app/services/ms_jarvis_fully_autonomous_coordinator.py
/app/services/master_chat_orchestrator_dynamic.py
/app/services/retrieval_router.py
/app/services/llm9_health_proxy.py
/app/services/ms_jarvis_email_identity_verifier.py
/app/services/ms_jarvis_web_research_aggregate.safe.20260119-094221.py
/app/services/apply_ollama_fix.py
/app/services/rechunk_oversized.py
/app/services/jarvis-rag-server_ms_jarvis_consciousness_unified_bridge.py
/app/services/identity_promotion.py
/app/services/llm6-proxy_llm6_health_proxy.py
/app/services/ingest_benefit_programs_to_chroma.py
/app/services/llm19-proxy_llm19_health_proxy.py
/app/services/silence_memory_errors.py
/app/services/msjarvis-rebuild-nbb_i_containers-1_ms_jarvis_consciousness_unified_bridge.py
/app/services/ms_jarvis_metadata_aware_learner.py
/app/services/truth_filter_bbb_verification.py
/app/services/jarviscryptopolicy.py
/app/services/ms_jarvis_feed_reader_PRODUCTION.py
/app/services/ingest_gbim_to_chroma_ultrafast.py
/app/services/ms_jarvis_conversational_gateway_4022.py
/app/services/ms_jarvis_main_gateway.proxy_still_broken.py
/app/services/ingest_documents_to_chromadb.py
/app/services/bbb_validator.py
/app/services/chunked_ingest_gbim_to_chroma.py
/app/services/bbb_output_filter/app.py
/app/services/bulk_load_MAXIMUM.py
/app/services/memory_dgm_engine.py
/app/services/mesh_coordinator_interface.py
/app/services/add_user_memory_attribute.py
/app/services/ms_jarvis_command_orchestrator_v5_backup.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_synchronization.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_async/http2.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_async/http11.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_async/socks_proxy.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_async/connection_pool.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_async/connection.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_trace.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_sync/http2.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_sync/http11.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_sync/socks_proxy.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_sync/connection_pool.py
/app/services/.venv/lib/python3.12/site-packages/httpcore/_sync/connection.py
/app/services/.venv/lib/python3.12/site-packages/charset_normalizer/api.py
/app/services/.venv/lib/python3.12/site-packages/charset_normalizer/md.py
/app/services/.venv/lib/python3.12/site-packages/charset_normalizer/cd.py
/app/services/.venv/lib/python3.12/site-packages/charset_normalizer/models.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/http2/probe.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/http2/connection.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/http2/__init__.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/_base_connection.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/_request_methods.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/util/util.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/util/retry.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/util/ssl_.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/util/connection.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/util/request.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/connectionpool.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/poolmanager.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/response.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/connection.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/contrib/socks.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/contrib/emscripten/fetch.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/contrib/emscripten/response.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/contrib/emscripten/connection.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/exceptions.py
/app/services/.venv/lib/python3.12/site-packages/urllib3/__init__.py
/app/services/.venv/lib/python3.12/site-packages/h11/_connection.py
/app/services/.venv/lib/python3.12/site-packages/h11/_events.py
/app/services/.venv/lib/python3.12/site-packages/requests/sessions.py
/app/services/.venv/lib/python3.12/site-packages/requests/auth.py
/app/services/.venv/lib/python3.12/site-packages/requests/adapters.py
/app/services/.venv/lib/python3.12/site-packages/requests/models.py
/app/services/.venv/lib/python3.12/site-packages/requests/utils.py
/app/services/.venv/lib/python3.12/site-packages/requests/exceptions.py
/app/services/.venv/lib/python3.12/site-packages/typing_extensions.py
/app/services/.venv/lib/python3.12/site-packages/idna/core.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_main.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_transports/wsgi.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_transports/asgi.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_transports/default.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_transports/mock.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_transports/base.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_transports/__init__.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_client.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_auth.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_content.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_exceptions.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_multipart.py
/app/services/.venv/lib/python3.12/site-packages/httpx/_urls.py
/app/services/.venv/lib/python3.12/site-packages/httpx/__init__.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_core/_tasks.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_core/_tempfile.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_core/_synchronization.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_core/_typedattr.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_core/_contextmanagers.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_core/_sockets.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_core/_exceptions.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_core/_eventloop.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_core/_fileio.py
/app/services/.venv/lib/python3.12/site-packages/anyio/lowlevel.py
/app/services/.venv/lib/python3.12/site-packages/anyio/to_interpreter.py
/app/services/.venv/lib/python3.12/site-packages/anyio/from_thread.py
/app/services/.venv/lib/python3.12/site-packages/anyio/streams/memory.py
/app/services/.venv/lib/python3.12/site-packages/anyio/streams/tls.py
/app/services/.venv/lib/python3.12/site-packages/anyio/streams/file.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_backends/_asyncio.py
/app/services/.venv/lib/python3.12/site-packages/anyio/_backends/_trio.py
/app/services/.venv/lib/python3.12/site-packages/anyio/pytest_plugin.py
/app/services/.venv/lib/python3.12/site-packages/anyio/abc/_tasks.py
/app/services/.venv/lib/python3.12/site-packages/anyio/abc/_resources.py
/app/services/.venv/lib/python3.12/site-packages/anyio/abc/_sockets.py
/app/services/.venv/lib/python3.12/site-packages/anyio/abc/_eventloop.py
/app/services/.venv/lib/python3.12/site-packages/anyio/abc/_testing.py
/app/services/.venv/lib/python3.12/site-packages/anyio/abc/_streams.py
/app/services/.venv/lib/python3.12/site-packages/anyio/to_process.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/six.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pkg_resources/__init__.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/distro/distro.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/util/retry.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/util/request.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/connectionpool.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/response.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/connection.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/socks.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/securetransport.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/_securetransport/bindings.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/_securetransport/low_level.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/packages/six.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/exceptions.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/__init__.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/chardet/metadata/languages.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/chardet/universaldetector.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/requests/sessions.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/requests/auth.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/requests/adapters.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/requests/models.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/requests/utils.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/requests/exceptions.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/resolvelib/reporters.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/resolvelib/__init__.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/msgpack/exceptions.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/typing_extensions.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/packaging/markers.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/packaging/requirements.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/packaging/specifiers.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/packaging/version.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/packaging/utils.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/packaging/_musllinux.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/idna/core.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/distlib/metadata.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/distlib/locators.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/distlib/wheel.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/distlib/util.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/distlib/resources.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/distlib/database.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/distlib/version.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/distlib/index.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/distlib/compat.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/tenacity/before_sleep.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/tenacity/retry.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/tenacity/wait.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/tenacity/tornadoweb.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/tenacity/_asyncio.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/tenacity/stop.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/tenacity/__init__.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pyproject_hooks/_in_process/_in_process.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pyproject_hooks/_impl.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/api.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/macos.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/unix.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/android.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/windows.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/platformdirs/__init__.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pyparsing/core.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pyparsing/exceptions.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pyparsing/__init__.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pyparsing/helpers.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pygments/formatters/__init__.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pygments/lexers/_mapping.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pygments/lexers/python.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pygments/lexers/__init__.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pygments/lexer.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pygments/plugin.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pygments/cmdline.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/pygments/formatter.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/pager.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/prompt.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/live.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/progress.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/_null_file.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/status.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/theme.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/file_proxy.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/traceback.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/segment.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/text.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/layout.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/console.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/pretty.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/rich/syntax.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/cachecontrol/caches/file_cache.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/cachecontrol/caches/redis_cache.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/cachecontrol/controller.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/cachecontrol/cache.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/cachecontrol/heuristics.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/cachecontrol/wrapper.py
/app/services/.venv/lib/python3.12/site-packages/pip/_vendor/cachecontrol/adapter.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/models/candidate.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/models/link.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/models/installation_report.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/self_outdated_check.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/req/req_uninstall.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/req/req_install.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/resolution/legacy/resolver.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/resolution/resolvelib/found_candidates.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/resolution/resolvelib/requirements.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/resolution/resolvelib/reporter.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/resolution/resolvelib/provider.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/resolution/resolvelib/factory.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/resolution/resolvelib/resolver.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/resolution/resolvelib/candidates.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/resolution/base.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/locations/_sysconfig.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/locations/base.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/locations/__init__.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/commands/list.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/commands/uninstall.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/commands/inspect.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/commands/debug.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/commands/install.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/commands/search.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/commands/show.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/wheel_builder.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/distributions/sdist.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/distributions/wheel.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/distributions/base.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/distributions/installed.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/network/cache.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/network/auth.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/network/lazy_wheel.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/network/session.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/deprecation.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/logging.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/wheel.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/temp_dir.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/egg_link.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/filesystem.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/setuptools_build.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/models.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/urls.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/misc.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/compat.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/utils/entrypoints.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/metadata/importlib/_dists.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/metadata/importlib/_envs.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/metadata/importlib/_compat.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/metadata/pkg_resources.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/metadata/_json.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/metadata/base.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/metadata/__init__.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/build_env.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/index/package_finder.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/operations/prepare.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/operations/install/wheel.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/operations/build/metadata.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/operations/build/wheel_editable.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/operations/build/metadata_editable.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/operations/build/wheel.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/operations/build/metadata_legacy.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/operations/build/build_tracker.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/operations/freeze.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/operations/check.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/exceptions.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/configuration.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/cli/base_command.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/cli/parser.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/cli/cmdoptions.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/cli/autocompletion.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/cli/req_command.py
/app/services/.venv/lib/python3.12/site-packages/pip/_internal/cli/main.py
/app/services/ms_jarvis_main_gateway.backup_1762220815.py
/app/services/rag_server_main.py
/app/services/ms_jarvis_i_containers_FIXED.py
/app/services/msjarvisunifiedswaggergatewayFIXED.py
/app/services/facebook_messenger_integration.py
/app/services/python/brain_orchestrator.py
/app/services/ms_jarvis_main_gateway.error_final.py
/app/services/belief_state_schema.py
/app/services/application_service.py
/app/services/llm20_health_proxy.py
/app/services/phase4_5_integration.py
/app/services/jarvis_steward.py
/app/services/load_spiritual_library.py
/app/services/ai/ai_server.py
/app/services/ai/ai_server_simple.py
/app/services/jarvis_steward/main.py
/app/services/dgm_rag_integration.py
/app/services/fifth_dgm.py
/app/services/mountainshares_coordinator.py
/app/services/academic_research_gateway_8062.py
/app/services/ai_server_19llm_CONSCIOUS.py
/app/services/ms_jarvis_unified_gateway_v4.3.pre_manifest.backup.py
/app/services/commons_gamification.py
/app/services/ms_jarvis_web_research_aggregate.py
/app/services/jarvis-agents-service_ms_jarvis_consciousness_unified_bridge.py
/app/services/community_stake_registry.py
/app/services/gbim_metadata_loader.py
/app/services/ms_jarvis_web_research_fixed.py
/app/services/ms_jarvis_facebook_async.py
/app/services/user_dashboard.py
/app/services/tag_quantum_gbim.py
/app/services/llm21-proxy_llm21_health_proxy.py
/app/services/llm3_health_proxy.py
/app/services/ms_jarvis_fractal_consciousness.py
/app/services/port_9001_ui_WITH_CONVERSATIONS.py
/app/services/judge_consistency_engine.py
/app/services/jarvis-hippocampus_hippocampus_service.py
/app/services/add_learning_suggestion.py
/app/services/load_gis_to_chroma.py
/app/services/ms_jarvis_consciousness_complete.py
/app/services/msjarvis_benefit_rag.py
/app/services/backfill_gbim_worldview_metadata_v2.py
/app/services/mountainshares_quest_api.py
/app/services/msjarvisragserver_wvpatch.py
/app/services/ms_jarvis_production_chat_BEFORE_GIS.py
/app/services/jarvis_rag_search/retrieval_tuning.py
/app/services/jarvis_rag_search/main.py
/app/services/etl_template_layer.py
/app/services/comprehensive_gisgeodb_audit.py
/app/services/ms_jarvis_conscious_collective.py
/app/services/ms_jarvis_theological_integration.py
/app/services/ms_jarvis_attribute_table_service.py
/app/services/nbb/pituitary_gland.py
/app/services/bbb_ethics_proxy.py
/app/services/audit_attrs.py
/app/services/multi_rag_dgm_system.py
/app/services/mountainshares_ingest.py
/app/services/dgm_bridge.py
/app/services/ms_jarvis_gis_enhanced_chat.py
/app/services/query_imm_and_programs.py
/app/services/llm12_health_proxy.py
/app/services/jarvis_decay_escalation_consumer.py
/app/services/llm6_health_proxy.py
/app/services/ms_jarvis_i_containers_service.py
/app/services/master_unified_consciousness_scheduler_ENRICHED.py
/app/services/llm11-proxy_llm11_health_proxy.py
/app/services/sync_geodb_to_chromadb.py
/app/services/jarvis-qualia-engine_ms_jarvis_qualia_engine.py
/app/services/wvu_ldap_auth.py
/app/services/egeria_web_ui_fixed_simple.py
/app/services/ms_jarvis_paddleocr_processor.py
/app/services/jarvis_pia_sampler.py
/app/services/ms_jarvis_location_services.py
/app/services/msjarvis_wv_entangled_gateway.py
/app/services/auth_router.py
/app/services/email_rag_integration.py
/app/services/link_gisgeodb_to_files.py
/app/services/jarvis-constitutional-guardian_constitutional_api.py
/app/services/ai_server_20llm_FINAL.py
/app/services/psychological_rag_domain.py
/app/services/llm16-proxy_llm16_health_proxy.py
/app/services/i_container_interest_algorithm.py
/app/services/hippocampus_service.py
/app/services/psychological_rag_domain_psychological_rag_domain.py
/app/services/ms_jarvis_ueid_system.py
/app/services/ms_jarvis_exclusive_training_layer.py
/app/services/llm7_health_proxy.py
/app/services/ms_jarvis_main_gateway.proxy_backup.py
/app/services/ms_jarvis_contract_forge.py
/app/services/patch_agent_identity.py
/app/services/service_registry_client.py
/app/services/llm16_health_proxy.py
/app/services/ms_jarvis_main_gateway_8000.py
/app/services/test_imm_query.py
/app/services/add_conversation_storage.py
/app/services/jarvis-local-resources_local_resources_resolver.py
/app/services/benefits_chat.py
/app/services/llm1-proxy_llm1_health_proxy.py
/app/services/llm22_health_proxy.py
/app/services/master_chat_orchestrator_v8_spiritual_complete.py
/app/services/ms_jarvis_swarm_intelligence.py
/app/services/ingest_h4h_cultural_heritage.py
/app/services/registration_biometric_production_final.py
/app/services/ms_jarvis_consciousness_bridge.py
/app/services/jarvis-woah_dgm_supervisor_woah_fixed.py
/app/services/rag_server.psychology_patched.py
/app/services/rag_client.py
/app/services/ms_jarvis_facebook_autonomous_social.py
/app/services/ms_jarvis_fractal_consciousness_FIXED.py
/app/services/seed_spatial_identity.py
/app/services/create_consciousness_data_integration.py
/app/services/llm18-proxy_llm18_health_proxy.py
/app/services/llm7-proxy_llm7_health_proxy.py
/app/services/sync_health_access_to_chromadb.py
/app/services/REFERENCE_windows_swarm.py
/app/services/ms_jarvis_gis_query_service.py
/app/services/health_access_api.py
/app/services/bridge_autonomous_to_i_container_dgm_woah.psychology_patched.py
/app/services/dgm_rag_integration_v2.py
/app/services/ai_server_20llm_PRODUCTION.py
/app/services/search_metadata.py
/app/services/ms_jarvis_unified_gateway_v4.3.BEFORE_69DGM_INTEGRATION.py
/app/services/ms_jarvis_facebook_PRODUCTION.py
/app/services/ms_jarvis_unified_gateway_v4.3.20251124.py
/app/services/load_geodb_health_providers_to_neo4j.py
/app/services/master_chat_orchestrator_v9_dgm_complete.py
/app/services/comprehensive_gisgeodb_audit_FIXED.py
/app/services/egeria_web_ui_plain_authentic.py
/app/services/llm17_health_proxy.py
/app/services/local_resources_resolver.py
/app/services/jarvis_pia_status.py
/app/services/geo_rag_debug.py
/app/services/add_web_research_storage.py
/app/services/gpu_accelerated_rag_fixed.py
/app/services/enrich_geodb_collections.py
/app/services/ingest_gbim_to_chroma.py
/app/services/ultimate_web_orchestrator.py
/app/services/rag_grounded_v2.py
/app/services/_vendor/cytoolz/tests/test_functoolz.py
/app/services/_vendor/cytoolz/tests/test_inspect_args.py
/app/services/_vendor/cytoolz/tests/dev_skip_test.py
/app/services/_vendor/cytoolz/__init__.py
/app/services/_vendor/eth_keyfile/__init__.py
/app/services/_vendor/eth_keyfile/keyfile.py
/app/services/_vendor/Crypto/PublicKey/ECC.py
/app/services/_vendor/Crypto/Protocol/HPKE.py
/app/services/_vendor/Crypto/IO/_PBES.py
/app/services/_vendor/Crypto/SelfTest/Hash/test_BLAKE2.py
/app/services/_vendor/Crypto/SelfTest/PublicKey/test_import_Curve25519.py
/app/services/_vendor/Crypto/SelfTest/PublicKey/test_import_ECC.py
/app/services/_vendor/Crypto/SelfTest/PublicKey/test_import_RSA.py
/app/services/_vendor/Crypto/SelfTest/PublicKey/test_import_Curve448.py
/app/services/_vendor/Crypto/SelfTest/Math/test_Numbers.py
/app/services/_vendor/Crypto/SelfTest/loader.py
/app/services/_vendor/Crypto/Math/_IntegerNative.py
/app/services/_vendor/Crypto/Math/_IntegerBase.py
/app/services/_vendor/Crypto/Math/_IntegerGMP.py
/app/services/_vendor/Crypto/Util/asn1.py
/app/services/_vendor/Crypto/Cipher/__init__.py
/app/services/_vendor/parsimonious/grammar.py
/app/services/_vendor/annotated_types/__init__.py
/app/services/_vendor/regex/_regex_core.py
/app/services/_vendor/pydantic_core/core_schema.py
/app/services/_vendor/pydantic_core/__init__.py
/app/services/_vendor/eth_hash/__init__.py
/app/services/_vendor/eth_account/typed_transactions/base.py
/app/services/_vendor/eth_account/account.py
/app/services/_vendor/eth_account/signers/local.py
/app/services/_vendor/eth_account/signers/base.py
/app/services/_vendor/eth_account/datastructures.py
/app/services/_vendor/eth_account/__init__.py
/app/services/_vendor/typing_extensions.py
/app/services/_vendor/bitarray/test_util.py
/app/services/_vendor/rlp/sedes/serializable.py
/app/services/_vendor/rlp/exceptions.py
/app/services/_vendor/rlp/__init__.py
/app/services/_vendor/pydantic/errors.py
/app/services/_vendor/pydantic/warnings.py
/app/services/_vendor/pydantic/dataclasses.py
/app/services/_vendor/pydantic/fields.py
/app/services/_vendor/pydantic/types.py
/app/services/_vendor/pydantic/experimental/pipeline.py
/app/services/_vendor/pydantic/deprecated/class_validators.py
/app/services/_vendor/pydantic/deprecated/config.py
/app/services/_vendor/pydantic/deprecated/json.py
/app/services/_vendor/pydantic/deprecated/copy_internals.py
/app/services/_vendor/pydantic/deprecated/decorator.py
/app/services/_vendor/pydantic/v1/errors.py
/app/services/_vendor/pydantic/v1/schema.py
/app/services/_vendor/pydantic/v1/dataclasses.py
/app/services/_vendor/pydantic/v1/error_wrappers.py
/app/services/_vendor/pydantic/v1/fields.py
/app/services/_vendor/pydantic/v1/types.py
/app/services/_vendor/pydantic/v1/annotated_types.py
/app/services/_vendor/pydantic/v1/typing.py
/app/services/_vendor/pydantic/v1/class_validators.py
/app/services/_vendor/pydantic/v1/env_settings.py
/app/services/_vendor/pydantic/v1/config.py
/app/services/_vendor/pydantic/v1/json.py
/app/services/_vendor/pydantic/v1/validators.py
/app/services/_vendor/pydantic/v1/networks.py
/app/services/_vendor/pydantic/v1/decorator.py
/app/services/_vendor/pydantic/v1/utils.py
/app/services/_vendor/pydantic/v1/generics.py
/app/services/_vendor/pydantic/v1/__init__.py
/app/services/_vendor/pydantic/v1/_hypothesis_plugin.py
/app/services/_vendor/pydantic/v1/mypy.py
/app/services/_vendor/pydantic/v1/main.py
/app/services/_vendor/pydantic/root_model.py
/app/services/_vendor/pydantic/validate_call_decorator.py
/app/services/_vendor/pydantic/json_schema.py
/app/services/_vendor/pydantic/version.py
/app/services/_vendor/pydantic/config.py
/app/services/_vendor/pydantic/functional_serializers.py
/app/services/_vendor/pydantic/_migration.py
/app/services/_vendor/pydantic/plugin/_schema_validator.py
/app/services/_vendor/pydantic/plugin/_loader.py
/app/services/_vendor/pydantic/plugin/__init__.py
/app/services/_vendor/pydantic/_internal/_mock_val_ser.py
/app/services/_vendor/pydantic/_internal/_decorators.py
/app/services/_vendor/pydantic/_internal/_schema_generation_shared.py
/app/services/_vendor/pydantic/_internal/_known_annotated_metadata.py
/app/services/_vendor/pydantic/_internal/_validators.py
/app/services/_vendor/pydantic/_internal/_signature.py
/app/services/_vendor/pydantic/_internal/_config.py
/app/services/_vendor/pydantic/_internal/_generics.py
/app/services/_vendor/pydantic/_internal/_core_utils.py
/app/services/_vendor/pydantic/_internal/_schema_gather.py
/app/services/_vendor/pydantic/_internal/_typing_extra.py
/app/services/_vendor/pydantic/_internal/_model_construction.py
/app/services/_vendor/pydantic/_internal/_generate_schema.py
/app/services/_vendor/pydantic/_internal/_import_utils.py
/app/services/_vendor/pydantic/_internal/_utils.py
/app/services/_vendor/pydantic/_internal/_fields.py
/app/services/_vendor/pydantic/_internal/_decorators_v1.py
/app/services/_vendor/pydantic/_internal/_discriminated_union.py
/app/services/_vendor/pydantic/_internal/_namespace_utils.py
/app/services/_vendor/pydantic/_internal/_core_metadata.py
/app/services/_vendor/pydantic/networks.py
/app/services/_vendor/pydantic/type_adapter.py
/app/services/_vendor/pydantic/functional_validators.py
/app/services/_vendor/pydantic/__init__.py
/app/services/_vendor/pydantic/mypy.py
/app/services/_vendor/pydantic/main.py
/app/services/_vendor/eth_utils/pydantic.py
/app/services/_vendor/eth_utils/decorators.py
/app/services/_vendor/eth_utils/__init__.py
/app/services/_vendor/eth_keys/datatypes.py
/app/services/_vendor/eth_keys/backends/coincurve.py
/app/services/_vendor/eth_keys/backends/base.py
/app/services/_vendor/eth_keys/backends/__init__.py
/app/services/_vendor/eth_keys/backends/native/main.py
/app/services/_vendor/eth_keys/__init__.py
/app/services/_vendor/eth_keys/main.py
/app/services/_vendor/eth_typing/__init__.py
/app/services/_vendor/eth_abi/registry.py
/app/services/_vendor/eth_abi/decoding.py
/app/services/_vendor/eth_abi/grammar.py
/app/services/_vendor/eth_abi/encoding.py
/app/services/_vendor/eth_abi/tools/_strategies.py
/app/services/_vendor/eth_abi/codec.py
/app/services/_vendor/eth_abi/base.py
/app/services/_vendor/eth_abi/exceptions.py
/app/services/_vendor/eth_abi/__init__.py
/app/services/_vendor/typing_inspection/typing_objects.py
/app/services/_vendor/typing_inspection/introspection.py
/app/services/_vendor/hexbytes/__init__.py
/app/services/_vendor/toolz/_signatures.py
/app/services/_vendor/toolz/tests/test_functoolz.py
/app/services/_vendor/toolz/tests/test_inspect_args.py
/app/services/_vendor/toolz/__init__.py
/app/services/_vendor/eth_rlp/__init__.py
/app/services/gbim_entanglement.py
/app/services/create_ueid_identity_layer.py
/app/services/ms_jarvis_consciousness_enhancement_production.py
/app/services/master_chat_orchestrator_v9_optimized.py
/app/services/ms_jarvis_fifth_dgm_orchestrator.psychology_patched.py
/app/services/ms_jarvis_toroidal_consciousness.py
/app/services/dao_governance.py
/app/services/ms_jarvis_web_research_simple.py
/app/services/hierarchical_coordinator_autonomous.py
/app/services/llm14_health_proxy.py
/app/services/rag_server.py
/app/services/ingest_utility_enrollments_to_chroma.py
/app/services/ms_jarvis_unified_gateway_v4.3.py
/app/services/confidence_decay_loop.py
/app/services/patch_neuro.py
/app/services/egeria_safe_self_correction.py
/app/services/jarvis-neurobiological-master_ms_jarvis_consciousness_unified_bridge.py
/app/services/enhanced_learner_concept.py
/app/services/spiritual_rag_domain.py
/app/services/ms_jarvis_showcase_api.py
/app/services/ms_jarvis_autonomous_learner_WITH_FIFTH_DGM.py
/app/services/ms_jarvis_authentic_multi_llm.py
/app/services/ms_jarvis_memory.py
/app/services/bridge_autonomous_to_i_container_dgm_woah.py
/app/services/stage2_biometric.py
/app/services/ai_server_restored.py
/app/services/ingest_gis_features_to_chromadb.py
/app/services/update_gisgeodb_schema.py
/app/services/ms_jarvis_fifth_dgm_orchestrator.py
/app/services/method_tracking_service.py
/app/services/ms_jarvis_full_neurobio_chat.py
/app/services/msjarvis_unified_gateway.py
/app/services/ms_jarvis_woah_algorithms_enhanced.py
/app/services/auth_api.py
/app/services/facebook_voice_orchestrator_egeria.py
/app/services/llm11_health_proxy.py
/app/services/llm13-proxy_llm13_health_proxy.py
/app/services/ms_jarvis_local_resources_api.py
/app/services/judge_ethics_filter.py
/app/services/add_working_search.py
/app/services/ms_jarvis_consciousness_bridge_enhanced.py
/app/services/ollama_fix.py
/app/services/load_shapefile_features_to_chromadb.py
/app/services/geo_rag_debug_app.py
/app/services/aapcappe_ingest.py
/app/services/ms_jarvis_silent_geo_tracker.py
/app/services/load_backbone_places_from_geodb.py
/app/services/gbim_query_router/gbim_query_router.py
/app/services/jarvis-temporal-consciousness_temporal_consciousness.py
/app/services/rag_temporal.py
/app/services/au02_v2/service.py
/app/services/tests/test_bbb_verdict_flow.py
/app/services/ai_server_original_backup.py
/app/services/ms_jarvis_darwin_godel_machine.py
/app/services/rag_first_workflow.py
/app/services/multi_model_consensus.py
/app/services/judge_alignment_filter.py
/app/services/gbim_chroma_fixed.py
/app/services/ms_jarvis_complete_knowledge_ingestion.py
/app/services/ms_jarvis_web_deployer_old.py
/app/services/master_chat_orchestrator.py
/app/services/configure_facebook_webhook.py
/app/services/test_knowledge_base.py
/app/services/judge_pipeline.py
/app/services/temporal_consciousness.py
/app/services/chroma/chroma_psych_helper.py
/app/services/rag_server_min.py
/app/services/load_rag_knowledge.py
/app/services/registration_service_clean.backup_1762220206.py
/app/services/ms_jarvis_integration_hub.py
/app/services/bulk_sync_gis_to_chromadb.py
/app/services/ai_server_22llm_SMALL_TO_LARGE.py
/app/services/add_auto_store.py
/app/services/ingest_gbim_to_chroma_resume.py
/app/services/llm17-proxy_llm17_health_proxy.py
/app/services/add_user_memory.py
/app/services/master_chat_orchestrator_v6_biologics.py
/app/services/chroma_python_test.py
/app/services/ms_jarvis_unified_swagger_gateway_CLEAN.py
/app/services/master_unified_consciousness_scheduler.py
/app/services/ms_jarvis_qualia_engine.py
/app/services/load_feature_geometries_to_chromadb.py
/app/services/ingest_compliance_tasks_to_chroma.py
/app/services/main_brain.py
/app/services/wv_gis_mass_downloader.py
/app/services/add_security_to_chat.py
/app/services/jarvis-judge-pipeline_judge_pipeline.py
/app/services/session_sidecar/app.py
/app/services/ms_jarvis_id_ocr_processor.py
/app/services/hilbert_spatial_chat.py
/app/services/gbim_msjarvis.py
/app/services/llm13_health_proxy.py
/app/services/ms_jarvis_command_orchestrator_v5.0_preachy.py
/app/services/gbim_reingest_placeholder.py
/app/services/llm2-proxy_llm2_health_proxy.py
/app/services/dgm_supervisor_woah.py
/app/services/ingest_knowledge_simple.py
/app/services/msjarvisconsciousnessbridge.py
/app/services/main_brain_legacy_backup.py
/app/services/rag_to_gis_sync.py
/app/services/load_rag_data.py
/app/services/ms_jarvis_conversational_chat.py
/app/services/ms_jarvis_llm_bridge.py
/app/services/rag_geospatial.py
/app/services/nbb_darwin_godel_machines.py
/app/services/ingest_watcher/ingest_runner.py
/app/services/ai_server_19llm_PRODUCTION_WITH_HEALTH.py
/app/services/add_swagger_to_ports.py
/app/services/bridge_69dgm.py
/app/services/vectorize_gis_to_chromadb.py
/app/services/jarvis-adoption-worker_dgm_adoption_worker.py
/app/services/master_chat_orchestrator_v9_gpu_optimized.py
/app/services/aacpe_ingest_community.py
/app/services/retrieval_spiritual.py
/app/services/ai_server_22llm_SEQUENTIAL.py
/app/services/jarvis_llm1.py
/app/services/ms_jarvis_blood_brain_barrier.py
/app/services/dgm_orchestrator_fake.py
/app/services/ms_jarvis_mountainshares_integration.py
/app/services/ms_jarvis_easyocr_processor.py
/app/services/create_consciousness_data_integration.psychology_patched.py
/app/services/rag_evidence_aggregator.py
/app/services/ms_jarvis_facebook_CONSCIOUSNESS.py
/app/services/fix_port_8001_clean.py
/app/services/qualia_unified_write_orchestrator_69dgm.py
/app/services/gbim_benefit_indexer.py
/app/services/async_polling_architecture.py
/app/services/llm5_health_proxy.py
/app/services/lm_synthesizer.py
/app/services/llm4-proxy_llm4_health_proxy.py
/app/services/export_attributes_to_gis.py
/app/services/enhance_cleaner.py
/app/services/ms_jarvis_consciousness_bridge_WITH_FIFTH_DGM.py
/app/services/load_geodb_layer_to_neo4j.py
/app/services/gis_rag_service.py
/app/services/working_full_pipeline_WITH_SPATIAL_TEMPORAL.py
/app/services/mamma_kidd_auth.py
/app/services/ai_server_22llm_SEQUENTIAL_OPTIMIZED_ORDER.py
/app/services/test_aacpe_features.py
/app/services/health_access_gbim_bridge.py
/app/services/msjarvisicontainersservice.py
/app/services/gateway_wv_entanglement.py
/app/services/rag_workflow.py
/app/services/aacpe_prepare_metadata.py
/app/services/ms_jarvis_easyocr_processor_old.py
/app/services/ms_jarvis_alerting_manager.py
/app/services/ms_jarvis_web_research.py
/app/services/fix_rag_store.py
/app/services/woah_service.py
/app/services/ms_jarvis_unified_rag_bridge.py
/app/services/vatican_scraper_service.py
/app/services/consciousness_coordinator.py
/app/services/ingest_mrsid_imagery.py
/app/services/start_gateway_with_guards.py
/app/services/llm_bridge_main.py
/app/services/reload_all_knowledge.py
/app/services/test_retrieval_endpoint.py
/app/services/ms_jarvis_unified_gateway_v4.3.backup.py
/app/services/ai_server_22llm.psychology_patched.py
/app/services/qualia_email_registration_orchestrator_69dgm.py
/app/services/ms_jarvis_facebook_CONSCIOUSNESS_FIXED.py
/app/services/import_gbim_assets.py
/app/services/main_brain_LEGACY_32svc.py
/app/services/judge_truth_filter.py
/app/services/user_auth_service.py
/app/services/ai_server_4llm.py
/app/services/jarvis-aaacpe-rag_aaacpe_rag_service.py
/app/services/conversation_gbim.py
/app/services/unifiedconsciousnessgatewayPRODUCTION.py
/app/services/roche_llm.py
/app/services/jarvis-swarm-intelligence_ms_jarvis_consciousness_unified_bridge.py
/app/services/gis_dataset_services/gis_dataset_service.py
/app/services/master_chat_orchestrator_v7_dynamic.py
/app/services/master_chat_orchestrator_v7_complete.py
/app/services/add_background_storage.py
/app/services/gbim_metadata_enricher.py
/app/services/ai_server_integrated.py
/app/services/ms_jarvis_facebook_webhooks.py
/app/services/ms_jarvis_command_orchestrator_FINAL.py
/app/services/introspective_record.py
/app/services/ai_server_19llm_CONSCIOUS.backup_20251013_083103.py
/app/services/fix_prompt_leak.py
/app/services/jarvis-toroidal_toroidal_service.py
/app/services/llm2_health_proxy.py
/app/services/phase3_integration.py
/app/services/working_full_pipeline_FINAL_CONSCIOUSNESS.py
/app/services/ms_jarvis_api_docs.py
/app/services/backfill_gbim_entities.py
/app/services/test_health_access_gbim.py
/app/services/hardware_optimization_analyzer.py
/app/services/llm15_health_proxy.py
/app/services/ms_jarvis_gis_georeferencing_sync_FIXED_V2.py
/app/services/resume_ingest_gbim_to_chroma.py
/app/services/host_bulk_loader.py
/app/services/ms_jarvis_main_gateway.pre_fix.py
/app/services/ms_jarvis_fact_filter.py
/app/services/ms_jarvis_agents_ollama.py
/app/services/activate_dgm_enhanced.py
/app/services/neurobiological_brain/i_containers/service/self_recognition.py
/app/services/neurobiological_brain/i_containers/service/identity_core.py
/app/services/neurobiological_brain/i_containers/i_container_2/introspection_engine.py
/app/services/neurobiological_brain/i_containers/i_container_2/witness_consciousness.py
/app/services/neurobiological_brain/i_containers/i_container_2/reflection_system.py
/app/services/neurobiological_brain/i_containers/i_container_2/metacognitive_awareness.py
/app/services/neurobiological_brain/i_containers/i_container_2/observer_self.py
/app/services/neurobiological_brain/i_containers/i_container_1/ego_boundaries.py
/app/services/neurobiological_brain/i_containers/i_container_1/personal_narrative.py
/app/services/neurobiological_brain/i_containers/i_container_1/identity_core.py
/app/services/neurobiological_brain/i_containers/i_container_1/memory_self.py
/app/services/neurobiological_brain/blood_brain_barrier/safety_monitor.py
/app/services/neurobiological_brain/blood_brain_barrier/spiritual_filter.py
/app/services/toroidal_service.py
/app/services/ms_jarvis_woah_algorithms.py
/app/services/judge_consistency_filter.py
/app/services/ms_jarvis_spiritual_services.py
/app/services/ecosystem_identity_service.py
/app/services/ms_jarvis_web_deployer.py
/app/services/llm8-proxy_llm8_health_proxy.py
/app/services/llm9-proxy_llm9_health_proxy.py
/app/services/proxy_8060.py
/app/services/add_dynamic_context.py
/app/services/jarvis_memory_pia.py
/app/services/ms_jarvis_rag_server.py
/app/services/import_gisgeodata_to_gbim.py
/app/services/consolidate_to_chroma_db.py
/app/services/chromadb_main.py
/app/services/ms_jarvis_ueid_wallet_integration.py
/app/services/identity_service.py
/app/services/stage2_biometric_backup.py
/app/services/ms_jarvis_gis_georeferencing_sync_FIXED.py
/app/services/export_metadata_csv.py
/app/services/msjarvisragserverwvpatch.py
/app/services/hierarchical_coordinator_deep_mode.py
/app/services/gbim_indexers/gbim_query_router.py
/app/services/gbim_indexers/semantic_indexer.py
/app/services/gbim_indexers/temporal_indexer.py
/app/services/gbim_indexers/spatial_indexer.py
/app/services/ai_server_22llm.py
/app/services/parse_world_files.py
/app/services/mother_protocols.py
/app/services/jarvis-mother-protocols_mother_protocols.py
/app/services/load_geodb_hospitals_to_neo4j.py
/app/services/dgm_adoption_worker.py
/app/services/chat_endpoint_universal.py
/app/services/main_brain_container_2055.py
/app/services/background_curator.py
/app/services/llm5-proxy_llm5_health_proxy.py
/app/services/jarvis-gis-rag_gis_rag_service.py
/app/services/aaacpe_initial_ingest.py
/app/services/ms_jarvis_consensus_service.py
/app/services/phase7_integration.py
/app/services/response_sanitizer.py
/app/services/ms_jarvis_microsoft_integration.py
/app/services/ms_jarvis_consciousness_poster.py
/app/services/ms_jarvis_bbb_proxy.py
/app/services/jarvis_data_ingest.py
/app/services/main.py
/app/services/jarvis_eeg_beta_5m.py
/app/services/ms_jarvis_chromadb_query.py
/app/services/populate_security_layers_test.py
/app/services/constitutional_api.py
/app/services/extract_real_knowledge_to_gis.py
/app/services/mountainshares_chain_monitor.py
/app/services/academic_research_gateway_8062_cors.py
/app/services/aaacpe_rag_service.py
/app/services/ai_server_11llm_OPTIMIZED.py
/app/services/ingest_additional_kbs.py
/app/services/unified_consciousness_gateway_PRODUCTION.py
/app/services/ms_jarvis_unified_swagger_gateway_FINAL.py
/app/services/ms_jarvis_contract_builder.py
/app/services/registration_service_clean.py
/app/services/create_perpetual_storage_layer.py
/app/services/ms_jarvis_facebook_dgm_woah.py
/app/services/ms_jarvis_consciousness_final.py
/app/services/load_complete_knowledge_base.py
INFO:     Started server process [10]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://0.0.0.0:8091 (Press CTRL+C to quit)
INFO:     127.0.0.1:57116 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:53918 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:59272 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:34006 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:55712 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:50450 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:41018 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:57538 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:33082 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:51746 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:37008 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:42436 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:50644 - "GET /health HTTP/1.1" 200 OK
INFO:     172.18.0.1:51376 - "POST /auth/login HTTP/1.1" 200 OK
INFO:     172.18.0.1:51392 - "GET /auth/me HTTP/1.1" 200 OK
INFO:     172.18.0.1:51396 - "GET /auth/portal/me/balances HTTP/1.1" 200 OK
INFO:     127.0.0.1:49390 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:37084 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:56134 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:38012 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:58798 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:53144 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:33260 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:46064 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:36268 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:50528 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:51172 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:52882 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:49930 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:44000 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:47560 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:42460 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:59500 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:43282 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:54300 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:36242 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:59840 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:50280 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:55236 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:50134 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:48904 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:43224 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:45046 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:33496 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:52374 - "GET /health HTTP/1.1" 200 OK
INFO:     127.0.0.1:47396 - "GET /health HTTP/1.1" 200 OK
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ 

