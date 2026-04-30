crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # Commit the DB fix note (optional but good practice)
git add docker-compose.yml
git commit -m "fix: add ecosystem schema to both postgres instances, fix local-resources-db ownership"
On branch feature/OI-C3-DGM-HOOK
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   .dockerignore
	modified:   Dockerfile.brain
	modified:   Dockerfile.swarm
	modified:   config/Caddyfile
	modified:   docker-compose-core.yml
	modified:   docker-compose.override.yml
	modified:   ms_jarvis_rag_server.py
	modified:   msjarvis-rebuild/gbim_query_router.py
	modified:   msjarvis-rebuild/ms_jarvis_neurobiological_master.py
	modified:   neurobiological_brain/i_containers/service/ms_jarvis_i_containers_service.py
	modified:   requirements.txt
	modified:   services/Dockerfile-llm1-proxy
	modified:   services/Dockerfile-llm10-proxy
	modified:   services/Dockerfile-llm11-proxy
	modified:   services/Dockerfile-llm12-proxy
	modified:   services/Dockerfile-llm13-proxy
	modified:   services/Dockerfile-llm14-proxy
	modified:   services/Dockerfile-llm15-proxy
	modified:   services/Dockerfile-llm16-proxy
	modified:   services/Dockerfile-llm17-proxy
	modified:   services/Dockerfile-llm18-proxy
	modified:   services/Dockerfile-llm19-proxy
	modified:   services/Dockerfile-llm2-proxy
	modified:   services/Dockerfile-llm20-proxy
	modified:   services/Dockerfile-llm21-proxy
	modified:   services/Dockerfile-llm22-proxy
	modified:   services/Dockerfile-llm3-proxy
	modified:   services/Dockerfile-llm4-proxy
	modified:   services/Dockerfile-llm5-proxy
	modified:   services/Dockerfile-llm6-proxy
	modified:   services/Dockerfile-llm7-proxy
	modified:   services/Dockerfile-llm8-proxy
	modified:   services/Dockerfile-llm9-proxy
	modified:   services/Dockerfile.indexer
	modified:   services/__init__.py
	modified:   services/aaacpe_scraper_service.py
	deleted:    services/ai_server_11llm_OPTIMIZED.py
	deleted:    services/ai_server_11llm_OPTIMIZED_app_root.py
	modified:   services/ai_server_20llm_PRODUCTION.py
	deleted:    services/ai_server_20llm_PRODUCTION.py.backup_before_full_synthesis
	deleted:    services/ai_server_20llm_PRODUCTION.py.backup_identity_fix
	deleted:    services/ai_server_20llm_PRODUCTION.py.backup_presedfix
	deleted:    services/ai_server_20llm_PRODUCTION.py.backup_response_length
	deleted:    services/ai_server_20llm_PRODUCTION.py.backup_synthesis
	modified:   services/auth_router.py
	modified:   services/brain_orchestrator.py
	deleted:    services/brain_orchestrator_stub.py
	deleted:    services/commons_gamification.py
	deleted:    services/dgm_rag_integration.py
	deleted:    services/egeria_autonomous_inquiry.py
	modified:   services/email_service.py
	deleted:    services/entityid_to_chromaid.pkl
	modified:   services/gbim_indexers/gbim_query_router.py
	modified:   services/gbim_query_router/Dockerfile
	modified:   services/gbim_query_router/gbim_query_router.py
	modified:   services/identity_promotion.py
	modified:   services/ingest_watcher/ingest_runner.py
	modified:   services/ingest_watcher/requirements.txt
	modified:   services/jarvis-constitutional-guardian_constitutional_api.py
	deleted:    services/jarvis-judge-pipeline_judge_pipeline.py.backup_beforesynth
	deleted:    services/jarvis-lm-synthesizer_lm_synthesizer.py.backup_urlfix
	deleted:    services/jarvis-lm-synthesizer_lm_synthesizer.py.bak.20260309-205425
	deleted:    services/jarvis-lm-synthesizer_lm_synthesizer.py.bak.20260309-205439
	deleted:    services/jarvis-lm-synthesizer_lm_synthesizer.py.bak.20260309-205523
	deleted:    services/jarvis-lm-synthesizer_lm_synthesizer.py.bak.20260309-205659
	deleted:    services/jarvis-lm-synthesizer_lm_synthesizer.py.bak.20260309-205746
	deleted:    services/jarvis-semaphore_msjarvis_semaphore.py.backup
	modified:   services/judge_pipeline.py
	modified:   services/judge_truth_filter.py
	deleted:    services/llm1-proxy_llm1_health_proxy.py
	deleted:    services/llm1-proxy_llm1_health_proxy.py.backup_numpredict
	deleted:    services/llm10-proxy_llm10_health_proxy.py
	deleted:    services/llm10-proxy_llm10_health_proxy.py.backup_numpredict
	deleted:    services/llm11-proxy_llm11_health_proxy.py
	deleted:    services/llm11-proxy_llm11_health_proxy.py.backup_numpredict
	deleted:    services/llm12-proxy_llm12_health_proxy.py
	deleted:    services/llm12-proxy_llm12_health_proxy.py.backup_numpredict
	deleted:    services/llm13-proxy_llm13_health_proxy.py
	deleted:    services/llm13-proxy_llm13_health_proxy.py.backup_numpredict
	deleted:    services/llm14-proxy_llm14_health_proxy.py
	deleted:    services/llm14-proxy_llm14_health_proxy.py.backup_numpredict
	deleted:    services/llm15-proxy_llm15_health_proxy.py
	deleted:    services/llm15-proxy_llm15_health_proxy.py.backup_numpredict
	deleted:    services/llm16-proxy_llm16_health_proxy.py
	deleted:    services/llm16-proxy_llm16_health_proxy.py.backup_numpredict
	deleted:    services/llm17-proxy_llm17_health_proxy.py
	deleted:    services/llm17-proxy_llm17_health_proxy.py.backup_numpredict
	deleted:    services/llm18-proxy_llm18_health_proxy.py
	deleted:    services/llm18-proxy_llm18_health_proxy.py.backup_numpredict
	deleted:    services/llm19-proxy_llm19_health_proxy.py
	deleted:    services/llm19-proxy_llm19_health_proxy.py.backup_numpredict
	deleted:    services/llm2-proxy_llm2_health_proxy.py
	deleted:    services/llm2-proxy_llm2_health_proxy.py.backup_numpredict
	deleted:    services/llm20-proxy_llm20_health_proxy.py
	deleted:    services/llm20-proxy_llm20_health_proxy.py.backup_numpredict
	deleted:    services/llm21-proxy_llm21_health_proxy.py
	deleted:    services/llm21-proxy_llm21_health_proxy.py.backup_numpredict
	deleted:    services/llm22-proxy_llm22_health_proxy.py
	deleted:    services/llm22-proxy_llm22_health_proxy.py.backup_numpredict
	deleted:    services/llm3-proxy_llm3_health_proxy.py
	deleted:    services/llm3-proxy_llm3_health_proxy.py.backup_numpredict
	deleted:    services/llm4-proxy_llm4_health_proxy.py
	deleted:    services/llm4-proxy_llm4_health_proxy.py.backup_numpredict
	deleted:    services/llm5-proxy_llm5_health_proxy.py
	deleted:    services/llm5-proxy_llm5_health_proxy.py.backup_numpredict
	deleted:    services/llm6-proxy_llm6_health_proxy.py
	deleted:    services/llm6-proxy_llm6_health_proxy.py.backup_numpredict
	deleted:    services/llm7-proxy_llm7_health_proxy.py
	deleted:    services/llm7-proxy_llm7_health_proxy.py.backup_numpredict
	deleted:    services/llm8-proxy_llm8_health_proxy.py
	deleted:    services/llm8-proxy_llm8_health_proxy.py.backup_numpredict
	deleted:    services/llm9-proxy_llm9_health_proxy.py
	deleted:    services/llm9-proxy_llm9_health_proxy.py.backup_numpredict
	modified:   services/llm_consensus_20_FINAL.py
	modified:   services/main_brain.py
	modified:   services/main_brain_container_2055.py
	modified:   services/ms_jarvis_contract_forge.py
	modified:   services/ms_jarvis_i_containers_service.py
	deleted:    services/ms_jarvis_i_containers_service.py.bak
	deleted:    services/ms_jarvis_qualia_engine.py.before_uvicorn_fix
	modified:   services/ms_jarvis_rag_server.py
	modified:   services/ms_jarvis_unified_gateway.py
	deleted:    services/ms_jarvis_unified_gateway.py.checkpoint.20260329_211609
	deleted:    services/ms_jarvis_unified_gateway.py.checkpoint.20260329_212043
	deleted:    services/ms_jarvis_unified_gateway.py.checkpoint.20260329_213555
	deleted:    services/ms_jarvis_unified_gateway.py.checkpoint.20260329_214153
	modified:   services/msjarvisconsciousnessbridge_ACTUAL.py
	deleted:    services/nbb_darwin_godel_machines.py.backup_1772889398
	deleted:    services/nbb_darwin_godel_machines.py.backup_20260307_1121
	deleted:    services/port_9000_69dgm_bridge.py.backup_20260307_070432
	deleted:    services/port_9000_69dgm_bridge.py.backup_20260307_072514
	deleted:    services/port_9000_69dgm_bridge.py.backup_20260307_072741
	deleted:    services/port_9000_69dgm_bridge.py.backup_20260307_072757
	modified:   services/requirements.txt
	modified:   services/token_service.py
	deleted:    services/woah_stub.py
	modified:   ui/index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	Dockerfile.forge
	Dockerfile.session-sidecar
	README-msallis-v1.md
	"\\"
	_archive/
	admin_cli.py
	auth_api.py
	backfill_existing_users.py
	cloudflared.deb
	conftest.py
	docker-compose.yml.OI-C3-AU02-V2-backup
	migrations/
	ms-allis-auth-install/
	msjarvis-rebuild/egeria_clean.py
	msjarvis-rebuild/egeria_web_ui_working.py
	msjarvis-rebuild/ms_jarvis_unified_gateway.py
	msjarvis-rebuild/safe_integration.py
	msjarvisconsciousnessbridge_edit.py
	neurobiological_brain/prefrontal_cortex/service/prefrontal_cortex.py
	neurobiologicalbrainicontainersservice/
	probe_supersession.sh
	pytest.ini
	requirements-brain.txt
	services/.dockerignore
	services/.env.registration
	services/.env.stage2
	services/20LLM_DEPLOYMENT_SUMMARY.md
	services/ADDITIONAL_SERVICES_FINAL.py
	services/ADD_ALL_INTEGRATIONS.sh
	services/ADD_DELETE_ENDPOINT.sh
	services/ADD_MEMORY_TO_8050.sh
	services/ADD_METADATA_FILTERING.sh
	services/ADD_RAG_METADATA_FILTERING.sh
	services/ADD_RAG_RETRIEVAL_8050.sh
	services/ADD_STORE_ENDPOINT.sh
	services/ADVANCED_MODULES_ROADMAP.md
	services/AGI_EVALUATION_SUITE.sh
	services/AGI_TEST_SUITE.sh
	services/AGI_TEST_V2.sh
	services/ARCHITECTURE_OPTIONS.md
	services/AaaCPE_Appalachian_Dialect_Knowledge.txt
	services/BUILD_EGERIA_WEB_UI.sh
	services/CHECK_AND_BUILD_MEMORY.sh
	services/CHECK_AND_FIX_PORT.sh
	services/CHECK_MS_JARVIS_STATUS.sh
	services/CLEANUP_OLLAMA.sh
	services/COLLECTIVE_INTEGRATION_PLAN.md
	services/COLLECT_ALL_DOCS_FOR_NOTEBOOKLM.sh
	services/COMPARE_4_VS_22.sh
	services/COMPLETE_DISCOVERY_REPORT.md
	services/COMPLETE_PORT_MAP.sh
	services/COMPLETE_PORT_SCAN.sh
	services/COMPLETE_SESSION_ACCOMPLISHMENTS.md
	services/COMPLETE_START_SYSTEM.sh
	services/COMPLETE_SYSTEM_STATUS.md
	services/COMPLETE_SYSTEM_SUMMARY.md
	services/COMPREHENSIVE_PORT_AUDIT_20251009_234234.txt
	services/COMPREHENSIVE_SYSTEM_TEST.sh
	services/CONSCIOUSNESS_ARCHITECTURE_EXPLAINED.md
	services/CONSTITUTIONAL_SCHEDULER_ENTRY.txt
	services/CONSTITUTIONAL_SYSTEM_MANIFEST.md
	services/CREATE_ULTIMATE_JARVIS.sh
	services/CRITICAL_FIXES_NEEDED.md
	services/CURRENT_STATUS.md
	services/DEPLOYMENT_ORDER.txt
	services/DEPLOYMENT_STATUS_REPORT.md
	services/DEPLOY_22LLM_COLLECTIVE.sh
	services/DIAGNOSE.sh
	services/Dockerfile-chroma-proxy
	services/Dockerfile.autonomous_complete
	services/Dockerfile.autonomous_learner_complete
	services/Dockerfile.constitutional_guardian
	services/Dockerfile.email
	services/Dockerfile.gateway
	services/Dockerfile.icontainers_fastapi
	services/Dockerfile.nbb_*
	services/Dockerfile.nbb_base
	services/Dockerfile.psychological_rag
	services/Dockerfile.psychology_services
	services/Dockerfile.rag
	services/Dockerfile.roche_llm
	services/Dockerfile.roche_llm.disabled
	services/Dockerfile.semaphore
	services/Dockerfile.toroidal
	services/Dockerfile.web_research
	services/Dockerfile.webdeploy
	services/Dockerfile.woah_algorithms
	services/EGERIA_AGI_TEST_RESULTS_SUMMARY.md
	services/EGERIA_IDENTITY.md
	services/EMERGENCY_PROMPT_LEAK_FIX.sh
	services/FEATURE_ENHANCEMENTS.md
	services/FIFTH_DGM_RESTORED.md
	services/FINAL_8_LAYER_STARTUP.sh
	services/FINAL_DEPLOYMENT_SUMMARY.md
	services/FINAL_EMOTIONAL_BALANCE.sh
	services/FINAL_FIX.sh
	services/FINAL_PERSONA_FIX.sh
	services/FINAL_RECOMMENDATION.md
	services/FINAL_STATUS_SUMMARY.md
	services/FINAL_SYSTEM_REPORT.md
	services/FIX_BOTH_ISSUES.sh
	services/FIX_CONSCIOUSNESS_BRIDGE.sh
	services/FIX_CONSCIOUSNESS_INTEGRATION.sh
	services/FIX_CONSCIOUS_COLLECTIVE_AUTO.sh
	services/FIX_FAST_MODE.sh
	services/FIX_HEALTH_ENDPOINTS.sh
	services/FIX_MEMORY_STORAGE.sh
	services/FIX_MODEL_IDENTITY.sh
	services/FIX_RAG_FILTERING.sh
	services/FIX_SYNTHESIS_PROMPT.sh
	services/FIX_TIMEOUT_ISSUE.sh
	services/FIX_TONE_AND_CONCISENESS.sh
	services/FIX_ULTIMATE.sh
	services/FIX_UNIFIED_SELF.sh
	services/FULL_DEPLOYMENT_MANIFEST.txt
	services/FULL_INTEGRATION_WORKFLOW.sh
	services/FULL_PORT_AUDIT.sh
	services/FULL_PORT_SCAN.sh
	services/FULL_SERVICE_AUDIT.sh
	services/FULL_SYSTEM_AUDIT.sh
	services/GPU_OPTIMIZATION_GUIDE.md
	services/GUARANTEED_8_LAYER_START.sh
	services/IDENTIFY_SERVICES.sh
	services/IMMUTABLE_MANIFEST.md
	services/INSPECT_JARVIS_INTERNALS.sh
	services/INTEGRATE_8020_8050.sh
	services/INTEGRATE_CONSCIOUSNESS.sh
	services/INTEGRATE_CONSCIOUSNESS_TO_DEEP_MODE.sh
	services/INTEGRATE_PROPERLY.sh
	services/INTEGRATION_HUB_SUCCESS.md
	services/INTEGRATION_IMPLEMENTATION.py
	services/INTEGRATION_IMPLEMENTATION.py.pre_dynamic_discovery
	services/INTEGRATION_PLAN.sh
	services/JARVIS_DASHBOARD.sh
	services/JARVIS_HEALTH_CHECK.sh
	services/LOAD_AAACPE_RAG.sh
	services/LOCATION_AWARENESS_SUCCESS.md
	services/MAMMA_KIDD_PROTOCOL_GUIDE.md
	services/MAMMA_KIDD_QUICK_REFERENCE.txt
	services/METHOD_AUDIT_RAW.txt
	services/METHOD_AUDIT_SEG_aa
	services/METHOD_AUDIT_SEG_ab
	services/METHOD_AUDIT_SEG_ac
	services/METHOD_AUDIT_SEG_ad
	services/METHOD_AUDIT_SEG_ae
	services/METHOD_AUDIT_SEG_af
	services/METHOD_AUDIT_SEG_ag
	services/METHOD_AUDIT_SEG_ah
	services/METHOD_AUDIT_SEG_ai
	services/METHOD_AUDIT_SEG_aj
	services/METHOD_AUDIT_SEG_ak
	services/METHOD_AUDIT_SEG_al
	services/METHOD_AUDIT_SEG_am
	services/METHOD_AUDIT_SEG_an
	services/METHOD_AUDIT_SEG_ao
	services/METHOD_AUDIT_SEG_ap
	services/METHOD_AUDIT_SEG_aq
	services/MS_JARVIS_COMPLETE_AUDIT.md
	services/MS_JARVIS_DEEP_MODE_DEPLOYMENT.md
	services/MS_JARVIS_DEPLOYMENT_SUCCESS.md
	services/MS_JARVIS_FINAL_DEPLOYMENT.sh
	services/MS_JARVIS_FINAL_VICTORY_REPORT.md
	services/MS_JARVIS_PRODUCTION_FINAL.sh
	services/MS_JARVIS_STATUS_REPORT.md
	services/MS_JARVIS_ULTIMATE_AUDIT_20251010_002719.txt
	services/Modelfile.egeria
	services/MountainShares6.pdf
	services/OLLAMA_HEALTH_FEATURES.md
	services/OPTIMIZE_GPU.sh
	services/PORTS_REGISTRY_RAW.txt
	services/PORT_AUDIT.sh
	services/PORT_AUDIT_RAW.txt
	services/PORT_AUDIT_SEG_aa
	services/PORT_AUDIT_SEG_ab
	services/PORT_AUDIT_SEG_ac
	services/PORT_AUDIT_SEG_ad
	services/PORT_AUDIT_SEG_ae
	services/PORT_SEG_aa
	services/PORT_SEG_ab
	services/PORT_SEG_ac
	services/PORT_SEG_ad
	services/PORT_SERVICE_AUDIT.sh
	services/PRODUCTION_DEPLOYMENT_COMPLETE.md
	services/PRODUCTION_DEPLOYMENT_SUITE.sh
	services/PRODUCTION_MS_JARVIS_START.sh
	services/PRODUCTION_STATUS_REPORT.txt
	services/REFERENCE_windows_swarm.py
	services/REMOVE_MODEL_REFERENCES.sh
	services/REROUTE_SERVICES.sh
	services/RESTART_PLAN.md
	services/RESTORATION_CERTIFICATE.txt
	services/RESTORATION_CERTIFICATE_CORRECTED.txt
	services/RESTORE_ALL_INTEGRATIONS.sh
	services/RESTORE_NATURAL_PERSONALITY.sh
	services/SAFE_INTEGRATION_PLAN.md
	services/SATURDAY_SUMMARY.md
	services/SCHEDULER_REFERENCE.md
	services/SET_MAX_RESPONSE.sh
	services/SPATIOTEMPORAL_CONSCIOUSNESS.md
	services/START_19LLM_PRODUCTION.sh
	services/START_20LLM_FINAL.sh
	services/START_ALL_SYSTEMS.sh
	services/START_COMPLETE_SYSTEM.sh
	services/START_CONSCIOUS_COLLECTIVE.sh
	services/START_MS_JARVIS_PRODUCTION.sh
	services/STOP_ALL_SYSTEMS.sh
	services/SWAGGER_ENDPOINTS.md
	services/SWITCH_TO_22LLM_DEFAULT.sh
	services/SYSTEM_AUDIT_20251009_233918.txt
	services/SYSTEM_AUDIT_ANALYSIS.md
	services/SYSTEM_STATUS_FINAL.md
	services/TEST_CRITICAL_FIXES.sh
	services/TEST_IMPROVED_RESPONSE.sh
	services/TEST_WITH_CLEANUP.sh
	services/TODAYS_COMPLETE_ACHIEVEMENT.md
	services/TODAYS_PROGRESS.md
	services/TRUE_BRAIN_ARCHITECTURE.md
	services/ULTIMATE_PORT_AUDIT_20251010_094847.txt
	services/ULTIMATE_SESSION_SUMMARY.md
	services/UPDATE_COORDINATOR_FOR_DEEP_MODE.sh
	services/UPDATE_JARVIS_PERSONA.sh
	services/UPDATE_NAME_TO_EGERIA.sh
	services/WATCHDOG.sh
	services/WORKING_START.sh
	services/WVU_API_DOCUMENTATION.md
	services/_evaluate_for_i_container
	services/_redirects
	services/_vendor/
	services/aaacpe_initial_ingest.py
	services/aaacpe_rag_service.py
	services/aacpe_ingest_community.py
	services/aacpe_prepare_metadata.py
	services/aapcappe_ingest.py
	services/academic_research_gateway_8062.py
	services/academic_research_gateway_8062_cors.py
	services/academic_whitebox_api.py
	services/activate_sanctuary_cherubim_guards.sh
	services/add_chat_route.sh
	services/add_full_brain_class.py.pre_dynamic_discovery
	services/add_proactive_cleanup_working.sh
	services/add_to_consciousness_engine.txt
	services/add_to_startup.sh
	services/advanced_service_dashboard.py
	services/agent_llm_batch.sh
	services/agent_llm_batch_all.sh
	services/agents_main.py
	services/agi_test.sh
	services/ai-server/
	services/ai/
	services/ai_server.py.pre_dynamic_discovery
	services/ai_server_20llm_FINAL.py,
	services/ai_server_20llm_PRODUCTION.py.pre_dynamic_discovery
	services/ai_server_20llm_PRODUCTION.py.pre_expert_responses
	services/ai_server_22llm.psychology_patched.py.pre_dynamic_discovery
	services/ai_server_22llm.psychology_patched_FIXED.py
	services/ai_server_22llm.py.pre_dynamic_discovery
	services/ai_server_22llm.py.pre_judge_integration
	services/ai_server_integrated.py.pre_dynamic_discovery
	services/ai_teams_config.py
	services/alert_venv/
	services/alerting_config.json
	services/alertingconfig.json
	services/all_actual_services.txt
	services/all_build_dirs.txt
	services/all_service_ports.txt
	services/all_services_compose_blocks.txt
	services/all_services_compose_blocks_dynamic.txt
	services/analyze_advanced_modules.sh
	services/apk-list.txt
	services/app.js
	services/application_service.py
	services/apt-list.txt
	services/async_polling_architecture.py
	services/attention_multimodal_fuser.py
	services/attention_pipeline.py
	services/attention_priority_scheduler.py
	services/audit_all_services.sh
	services/audit_all_services_complete.sh
	services/audit_docker_services.sh
	services/audit_performance.sh
	services/audit_service_connectivity.sh
	services/auth_api.py
	services/auth_api_patch.py
	services/auto_fix_gateway.py
	services/auto_fix_gateway.py.pre_dynamic_discovery
	services/auto_memory_service_probe.sh
	services/auto_rag_builder.py
	services/auto_stop_after_monongalia.sh
	services/autonomous_learner_gisgeodb_wrapper.py
	services/autonomous_learner_topic_source.py
	services/available_models.txt
	services/backup_chroma_autonomous_learning.json
	services/backup_chroma_mountainshares_knowledge.json
	services/backup_chroma_research_history.json
	services/batch_copy_docs.sh
	services/bbb_ethics_proxy.py
	services/bbb_requirements.txt
	services/bbb_validator.py
	services/belief_state_schema.py
	services/benefits_chat.py
	services/brain.js
	services/bridge/
	services/bridge_autonomous_to_i_container_dgm_woah.py
	services/bridge_autonomous_to_i_container_fixed.py
	services/bridge_openapi.json
	services/build_autonomous.sh
	services/build_compose.sh
	services/build_dir_audit.txt
	services/chat_endpoint_universal.py
	services/chat_interface.html
	services/chat_response.json
	services/chat_server.py
	services/chat_with_jarvis.sh
	services/check_agent_prompts.sh
	services/check_mamma_kidd_protocol.sh
	services/check_msjarvis_status.sh
	services/check_permissions.sh
	services/chroma/
	services/chroma_python_test.py
	services/chroma_test.py
	services/chromadb_rag_helper.py.pre_dynamic_discovery
	services/chromadb_rest_bridge.py
	services/chromadb_v2_to_gis_sync.py
	services/chromadb_v2_to_gis_sync.py.pre_dynamic_discovery
	services/chunked_ingest_gbim_to_chroma.py
	services/clean_and_dedupe_services.sh
	services/clean_integration.py.pre_dynamic_discovery
	services/clean_service_candidates.txt
	services/cleanup_manifest.txt
	services/cloudflare_auth_helper.sh
	services/complete_system_audit_with_swagger.py.pre_dynamic_discovery
	services/comprehensive_port_audit.sh
	services/comprehensive_url_fix.py.PORT8000_BACKUP
	services/comprehensive_url_fix.py.pre_dynamic_discovery
	services/configure_facebook_webhook.py
	services/connect_full_brain.sh
	services/connect_holy_spirit_to_existing_email.sh
	services/connection_pooling.py
	services/consciousness_coordinator.psychology_patched.py.pre_dynamic_discovery
	services/consciousness_coordinator.py.BACKUP
	services/consciousness_coordinator.py.pre_dynamic_discovery
	services/consciousness_with_egeria_voice.py
	services/consolidate_to_chroma_db.py
	services/constitutional_api.py
	services/constitutional_api.py.pre_usc
	services/constitutional_api.py.pre_versions
	services/constitutional_api_fixed.py
	services/constitutional_guardian.py
	services/constitutional_principles.json.mcp_backup
	services/conversation_memory_endpoints.py
	services/copy_all_missing_services.sh
	services/copy_architecture_docs.sh
	services/copy_complete_brain_structure.sh
	services/core/
	services/cpu_optimization.py
	services/create_adapter_wrappers.sh
	services/create_immutable_security_layer.py
	services/create_mamma_kidd_auth.sh
	services/create_sanctuary_monitor.sh
	services/cron_health_check.sh
	services/data_inventory_endpoint.py
	services/dedup_compose.sh
	services/deep_dive_modules.sh
	services/deep_excavation.sh
	services/deep_module_search.sh
	services/deploy_to_mountainshares.sh
	services/deploy_warm_persona_final.sh
	services/designed_ports.txt
	services/dgm_connectors_active.json
	services/dgm_connectors_resolved.json
	services/dgm_services_state.json
	services/dgm_supervisor_woah.py
	services/dgm_supervisor_woah_fixed.py
	services/diagnostic_ms_jarvis.sh
	services/dir_endpoints.txt
	services/docker-compose.deduped.yml
	services/docker_cleanup_and_optimize.sh
	services/domain_service_router.py
	services/download_everything_appalachian.sh
	services/download_priority_counties.sh
	services/dpkg-list.txt
	services/dynamic_app.py
	services/dynamic_port_scheduler.py
	services/dynamic_port_scheduler.py.BROKEN_REDIS
	services/dynamic_port_service.py
	services/dynamic_port_service_enhanced.py
	services/ecosystem_identity_service.py
	services/egeria_core_identity.txt
	services/egeria_facebook_perpetual_scheduler.py.pre_dynamic_discovery
	services/egeria_persona_config.json
	services/egeria_system_prompt.txt
	services/egeria_true_identity.txt
	services/egeria_web_ui.py.old
	services/egeria_web_ui.py.old-timeout-version
	services/egeria_web_ui_fixed_simple.py.pre_dynamic_discovery
	services/egeria_web_ui_plain_authentic.py.pre_dynamic_discovery
	services/egeria_web_ui_with_execution.py.pre_dynamic_discovery
	services/egeria_web_ui_working.py.pre_dynamic_discovery
	services/email_service.env
	services/email_strategy.txt
	services/embed_and_add.py.pre_dynamic_discovery
	services/embed_and_query.py.pre_dynamic_discovery
	services/emergency_memory_cleanup.sh
	services/enable_auto_web_search.sh
	services/enable_harmony4hope_website_access_CORRECTED.sh
	services/enable_holy_spirit_file_writing.sh
	services/enable_website_building_capabilities.sh
	services/eternal_watchdog.sh.disabled
	services/etl_from_csv_template.py
	services/etl_from_manifest.py
	services/etl_template_layer.py
	services/examine_ai_server_complete.sh
	services/examine_app_brain_backendlib.sh
	services/examine_existing_code.sh
	services/examine_extracted_services.sh
	services/examine_geospatial_agents.sh
	services/explore_16mb_directory.sh
	services/explore_both_systems.sh
	services/export_docs_for_notebook.sh
	services/extract_all_archives_deep_dive.sh
	services/extract_all_big_archives.sh
	services/extract_all_gis_comprehensive.sh
	services/extract_all_remaining_services.sh
	services/extract_and_search_archives.sh
	services/extract_complete_real.sh
	services/extract_service_tarballs.sh
	services/extract_user_jarvis_files.sh
	services/facebook_chat_unified.py.pre_dynamic_discovery
	services/facebook_daemon_polling.py.pre_dynamic_discovery
	services/facebook_post.sh
	services/facebook_token.env
	services/fifth_dgm.py
	services/fifth_dgm_integration.py
	services/fifth_dgm_main.py
	services/file_metadata_matching_algorithm.py
	services/final_cleanup_integration.sh
	services/final_model_optimization.py
	services/final_synthesis_fix.sh
	services/final_validation_test.sh
	services/finalize_integration.sh
	services/find_actual_service_implementations.sh
	services/find_advanced_modules.sh
	services/find_complete_brain_structure.sh
	services/find_custom_services.sh
	services/find_dgm_service.sh
	services/find_web_and_deeper_python.sh
	services/fix_404_endpoints.sh
	services/fix_and_restart_msjarvis.sh
	services/fix_autonomous_learner_endpoint.py.pre_dynamic_discovery
	services/fix_autonomous_research.sh
	services/fix_both_issues_final.sh
	services/fix_chat_api.sh
	services/fix_chroma_url.py.PORT8000_BACKUP
	services/fix_chroma_url.py.pre_dynamic_discovery
	services/fix_egeria_final.sh
	services/fix_egeria_persona.sh
	services/fix_egeria_pronouns.sh
	services/fix_egeria_warm_response.patch
	services/fix_email_service_env_loading.sh
	services/fix_llm_bridges.sh
	services/fix_mother_carrie_principles.sh
	services/fix_ollama_connection.sh
	services/fix_persona.sh
	services/fix_persona_naming.sh
	services/fix_proactive_cleanup_correctly.sh
	services/fix_redis_and_continue.sh
	services/fix_web_persona.sh
	services/fix_woah_discovery.py.pre_dynamic_discovery
	services/fractal_adapter.py
	services/full_brain_architecture.md
	services/full_rebuild.sh
	services/full_system_audit.sh
	services/full_system_health_check.sh
	services/gateway_mesh_context.sh
	services/gateway_messenger_integration.py
	services/gateway_wv_entanglement.py
	services/gbim_chroma_fixed.py
	services/gbim_coordinate_writer.py
	services/gbim_dashboard.py
	services/gbim_entangled_summary.py
	services/gbim_entanglement.py
	services/gbim_explain.py
	services/gbim_metadata_enricher.py
	services/gbim_metadata_loader.py
	services/gbim_msjarvis.py
	services/gbim_reingest_placeholder.py
	services/gbim_v0_retrieval.py
	services/gdb_integration_service.py
	services/geo/
	services/geo_rag_debug_app.py
	services/geobim_health_shim_8051.py
	services/geobim_integrated.py
	services/geobim_integrated.py.running_backup
	services/geobim_mysql.py
	services/geobim_mysql_v2.py
	services/geodb_export_plan.yaml
	services/geodb_export_plan_all.yaml
	services/geodb_geom_tables.tsv
	services/get_cloudflare_zone_id.sh
	services/gis_chat_integration.py
	services/gis_command_module.py
	services/gis_download_plan.json
	services/gisgeodb_learner_hook.py
	services/gisgeodb_storage.py
	services/gisgeodbdirectaccess.py
	services/gpu_accelerated_rag_fixed.py
	services/hardware_optimization_analyzer.py
	services/harmony4hope_deployment_manager.py
	services/health_access_gbim_bridge.py
	services/health_access_query.py
	services/health_check.sh
	services/health_check_cache.py
	services/hello.txt
	services/hierarchical_coordinator_AUTONOMOUS.md
	services/hierarchical_coordinator_autonomous.py
	services/hierarchical_coordinator_autonomous.py.pre_dynamic_discovery
	services/hierarchical_coordinator_deep_mode.py
	services/hierarchical_coordinator_deep_mode.py.pre_dynamic_discovery
	services/hierarchical_integration.py
	services/hierarchical_integration.py.pre_dynamic_discovery
	services/hierarchical_method.txt
	services/hilbert_spatial_chat.py
	services/host_bulk_loader.py
	services/i_container_interest_algorithm.py
	services/icontainers_fastapi.py
	services/icontainers_fastapi.py.pre_adapter_1771176105
	services/identify_unknown_services.sh
	services/immutable_core_enforcement.py
	services/implement_conversation_fixes.sh
	services/implement_enhancements.sh
	services/implement_gpu_optimization.sh
	services/implement_judge_pituitary_fixed.py.pre_dynamic_discovery
	services/implement_storage_optimization.sh
	services/import_gbim_assets.py
	services/import_gis_geodata_to_gbim.py
	services/import_gisgeodata_to_gbim.py
	services/improve_jarvis.sh
	services/index.html
	services/index.js
	services/index_all_extracted_gis.py
	services/infra_status.json
	services/infrastructure_endpoints.py
	services/ingest_watcher/Dockerfile
	services/ingestcsvtogisgeodb.py
	services/inject_egeria_persona.py
	services/inject_gisgeodb_into_learner.py
	services/inspect_geodb_collection.py
	services/inspect_key_services.sh
	services/install_research_layer.sh
	services/integrate_advanced_modules.sh
	services/integrate_all_services.py.pre_dynamic_discovery
	services/integrate_brain_orchestrator.sh
	services/integrate_discovered_services.sh
	services/integrate_full_brain.py.pre_dynamic_discovery
	services/integrate_mamma_kidd_protocol.sh
	services/integrate_mother_protocol.sh
	services/integrate_phase1.sh
	services/integrate_phase2.sh
	services/integrate_phase3.sh
	services/integrate_phase4_5.sh
	services/integrate_rag.sh
	services/integration_layer.placeholder_1768012705/
	services/interaction_logger.py
	services/internet_tunnel_service.py
	services/introduce_self.sh
	services/inventory_services.sh
	services/investigate_coordination.sh
	services/jarvis_authentic_persona.txt
	services/jarvis_ensemble.py
	services/jarvis_identity.db
	services/jarvis_llm1.py
	services/jarvis_steward/
	services/jarvis_synth_llm.py
	services/jarvisarchiveapi.py
	services/judge_pk.b64
	services/judge_to_pituitary_bridge.py
	services/knowledge_docs_attributes.geojson
	services/knowledge_growth_endpoint.txt
	services/launch_advanced.sh
	services/launch_all_bridges.sh
	services/launch_dashboard_background.sh
	services/launch_service.sh
	services/launch_web_services.sh
	services/layer2_port9000_bridge.py
	services/leak_test.sh
	services/link_gisgeodb_to_files.py
	services/list_geodb_collections.py
	services/live_ports.txt
	services/llm/
	services/llm15_health_proxy.py
	services/llm17_health_proxy.py
	services/llm19_health_proxy.py
	services/llm1_health_proxy.py
	services/llm21_health_proxy.py
	services/llm4_health_proxy.py
	services/llm7_health_proxy.py
	services/llm8_health_proxy.py
	services/llm9_health_proxy.py
	services/llm_belief_utils.py
	services/llm_bridge_main.py
	services/llm_conscious_OPTIMIZED.py
	services/llm_consensus_19_PRODUCTION.py
	services/llm_consensus_22.py
	services/llm_consensus_22_OPTIMIZED_ORDER.py
	services/llm_consensus_22_SMALL_TO_LARGE.py
	services/llm_ensemble_router.py
	services/llm_ensemble_router.py.pre_dynamic_discovery
	services/load_knowledge.sh
	services/local_resources_resolver.py
	services/location_scraper_service.py
	services/logging_conf.py
	services/main.py
	services/main.py.BACKUP
	services/main.py.current.safebak
	services/main.py.from_container
	services/main.py.fromcontainer.llmbridge
	services/main.py.working_backup_20251020_110429
	services/main_brain.py.pre_judges
	services/main_brain_attrs_patch.sh
	services/main_brain_legacy_backup.py
	services/main_brain_psychology_patch.py
	services/main_brian.py
	services/main_qualia.py
	services/main_with_rag.py
	services/make_holy_spirit_connection_tools_available.sh
	services/make_persistent.sh
	services/mamma_kidd_auth.py
	services/manage_msjarvis.sh
	services/manifest_endpoints.py
	services/manifest_endpoints.py.pre_dynamic_discovery
	services/manual_storage_patch.py
	services/master_chat_orchestrator.py
	services/master_chat_orchestrator.py.pre_dynamic_discovery
	services/master_chat_orchestrator_dynamic.py
	services/master_chat_orchestrator_v5_consciousness.py
	services/master_chat_orchestrator_v5_consciousness.py.pre_dynamic_discovery
	services/master_chat_orchestrator_v6_biologics.py
	services/master_chat_orchestrator_v6_biologics.py.pre_dynamic_discovery
	services/master_chat_orchestrator_v7_complete.py
	services/master_chat_orchestrator_v7_complete.py.pre_dynamic_discovery
	services/master_chat_orchestrator_v7_dynamic.py
	services/master_chat_orchestrator_v8_spiritual_complete.py
	services/master_chat_orchestrator_v8_spiritual_complete.py.pre_dynamic_discovery
	services/master_chat_orchestrator_v9_dgm_complete.py
	services/master_chat_orchestrator_v9_dgm_complete.py.pre_dynamic_discovery
	services/master_chat_orchestrator_v9_gpu_optimized.py
	services/master_chat_orchestrator_v9_gpu_optimized.py.pre_dynamic_discovery
	services/master_chat_orchestrator_v9_optimized.py
	services/master_chat_orchestrator_v9_optimized.py.pre_dynamic_discovery
	services/master_system_audit.sh
	services/master_unified_consciousness_scheduler.py
	services/master_unified_consciousness_scheduler_ENRICHED.py
	services/mega_deep_archive_search.sh
	services/memory_dgm_engine.py
	services/memory_dgm_gateway.py
	services/memory_manager.py
	services/memory_probe.sh
	services/mesh_agent_batch.sh
	services/mesh_broadcast_event.sh
	services/mesh_cohort_selfsum.sh
	services/mesh_context_probe.sh
	services/mesh_coordinator_interface.py
	services/mesh_crossagent_memory_search.sh
	services/mesh_dream_summary.sh
	services/mesh_emotion_map.json
	services/mesh_emotion_map.sh
	services/mesh_explore_chain.sh
	services/mesh_feed_back_insight.sh
	services/mesh_interest_timeline.sh
	services/mesh_memory_dashboard.sh
	services/mesh_memory_probe.sh
	services/mesh_probe.sh
	services/mesh_scenario_drill.sh
	services/mesh_social_graph.sh
	services/mesh_tag_topk.sh
	services/mesh_topn_context.sh
	services/mesh_trend_detection.sh
	services/messenger_service_fixed.py
	services/method_tracker_decorator.py
	services/method_tracking_helper.py
	services/method_tracking_service.py
	services/metrics_service.py
	services/modify_autonomous_learning_cycle.py
	services/monitor_ms_jarvis_memory.sh
	services/monitor_orchestrator.sh
	services/mother_carrie_logging.py
	services/mountainshares_chain_monitor.py
	services/mountainshares_gbim_suggester.py
	services/mountainshares_ingest.py
	services/mountainshares_quest_api.py
	services/mountainshares_registry.py
	services/move_huggingface_to_cpu.py
	services/ms_egeria_facebook_autopost.py
	services/ms_jarvis_ULTIMATE.py.OLD
	services/ms_jarvis_agents_ollama.py
	services/ms_jarvis_agents_service.py
	services/ms_jarvis_api_docs.py
	services/ms_jarvis_attribute_table_service.py
	services/ms_jarvis_attribute_table_sync_continuous.py
	services/ms_jarvis_attribute_table_sync_continuous.py.BROKEN
	services/ms_jarvis_authentic_multi_llm.py
	services/ms_jarvis_authentic_multi_llm.py.pre_dynamic_discovery
	services/ms_jarvis_auto_service.py
	services/ms_jarvis_autonomous_learner.py.norag.20260119-091256
	services/ms_jarvis_autonomous_learner.py.stub.20260119-091524
	services/ms_jarvis_autonomous_learner_FIXED.py
	services/ms_jarvis_autonomous_learner_WITH_FIFTH_DGM.py
	services/ms_jarvis_autonomous_learner_optimized.py.pre_dynamic_discovery
	services/ms_jarvis_autonomous_learner_optimized.py.pre_rag_1765237169
	services/ms_jarvis_autonomous_learner_optimized.py.pre_rag_1765237222
	services/ms_jarvis_bbb_proxy.py
	services/ms_jarvis_blockchain_deployment.py
	services/ms_jarvis_blood_brain_barrier.py.pre_constitutional
	services/ms_jarvis_brain.py
	services/ms_jarvis_brain.py.PORT8000_BACKUP
	services/ms_jarvis_brain.py.pre_dynamic_discovery
	services/ms_jarvis_brain_orchestrator_advanced.py
	services/ms_jarvis_chromadb_query.py
	services/ms_jarvis_cleanup_manager.py
	services/ms_jarvis_command_orchestrator.py
	services/ms_jarvis_command_orchestrator.py.pre_dynamic_discovery
	services/ms_jarvis_command_orchestrator_FINAL.py
	services/ms_jarvis_command_orchestrator_FINAL.py.pre_dynamic_discovery
	services/ms_jarvis_command_orchestrator_v5.0_preachy.py
	services/ms_jarvis_command_orchestrator_v5.0_preachy.py.pre_dynamic_discovery
	services/ms_jarvis_command_orchestrator_v5_backup.py
	services/ms_jarvis_command_orchestrator_v5_backup.py.pre_dynamic_discovery
	services/ms_jarvis_complete_knowledge_ingestion.py
	services/ms_jarvis_conscious_collective.py
	services/ms_jarvis_consciousness_bridge.py.original
	services/ms_jarvis_consciousness_bridge.py.phase1_working
	services/ms_jarvis_consciousness_bridge.py.pre_agent_identity
	services/ms_jarvis_consciousness_bridge.py.pre_dynamic_discovery
	services/ms_jarvis_consciousness_bridge.py.pre_identity_integration
	services/ms_jarvis_consciousness_bridge.py.safe_backup
	services/ms_jarvis_consciousness_bridge.py.working_backup
	services/ms_jarvis_consciousness_bridge_WITH_FIFTH_DGM.py
	services/ms_jarvis_consciousness_bridge_enhanced.py
	services/ms_jarvis_consciousness_bridge_parallel_woah.py
	services/ms_jarvis_consciousness_bridge_service.py
	services/ms_jarvis_consciousness_bridge_woah.py
	services/ms_jarvis_consciousness_complete.py
	services/ms_jarvis_consciousness_complete.py.pre_dynamic_discovery
	services/ms_jarvis_consciousness_enhancement_production.py
	services/ms_jarvis_consciousness_final.py
	services/ms_jarvis_consciousness_final.py.pre_dynamic_discovery
	services/ms_jarvis_consciousness_poster.py
	services/ms_jarvis_consciousness_poster_FIXED.py
	services/ms_jarvis_consciousness_poster_FIXED.py.pre_dynamic_discovery
	services/ms_jarvis_consensus_service.py
	services/ms_jarvis_consensus_service.py.pre_dynamic_discovery
	services/ms_jarvis_contract_builder.py
	services/ms_jarvis_contract_builder_v2.py
	services/ms_jarvis_conversational_chat.py
	services/ms_jarvis_conversational_gateway_4022.py
	services/ms_jarvis_conversational_gateway_4022.py.pre_dynamic_discovery
	services/ms_jarvis_daily_backup.py
	services/ms_jarvis_darwin_godel_machine.py
	services/ms_jarvis_dynamic_model_selector.py
	services/ms_jarvis_easyocr_processor.py
	services/ms_jarvis_email_identity_verifier.py
	services/ms_jarvis_email_monitor.py
	services/ms_jarvis_email_service.py
	services/ms_jarvis_eternal_watchdog.py
	services/ms_jarvis_eternal_watchdog.py.NEW
	services/ms_jarvis_eternal_watchdog.py.ORIGINAL
	services/ms_jarvis_exclusive_training_layer.py
	services/ms_jarvis_expiration_monitor.py
	services/ms_jarvis_facebook_CONSCIOUSNESS.py
	services/ms_jarvis_facebook_CONSCIOUSNESS_FIXED.py
	services/ms_jarvis_facebook_CONSCIOUSNESS_FIXED.py.pre_dynamic_discovery
	services/ms_jarvis_facebook_DGM.py
	services/ms_jarvis_facebook_DGM.py.pre_dynamic_discovery
	services/ms_jarvis_facebook_PRODUCTION.py
	services/ms_jarvis_facebook_ULTIMATE.py.OLD
	services/ms_jarvis_facebook_async.py
	services/ms_jarvis_facebook_autonomous_social.py
	services/ms_jarvis_facebook_brain_integrated.py
	services/ms_jarvis_facebook_dgm_woah.py
	services/ms_jarvis_facebook_full.py
	services/ms_jarvis_facebook_intelligent.py
	services/ms_jarvis_facebook_poster.py
	services/ms_jarvis_facebook_poster_8040.py
	services/ms_jarvis_facebook_poster_FIXED.py
	services/ms_jarvis_facebook_poster_temp.py
	services/ms_jarvis_facebook_poster_v3.py
	services/ms_jarvis_facebook_rag.py
	services/ms_jarvis_facebook_webhook.py
	services/ms_jarvis_facebook_webhooks.py
	services/ms_jarvis_fact_filter.py
	services/ms_jarvis_feed_reader_PRODUCTION.py
	services/ms_jarvis_feed_reader_WORKING.py
	services/ms_jarvis_fifth_dgm_orchestrator.psychology_patched.py.pre_dynamic_discovery
	services/ms_jarvis_fifth_dgm_orchestrator.py
	services/ms_jarvis_fifth_dgm_orchestrator.py.pre_dynamic_discovery
	services/ms_jarvis_fractal_consciousness.py
	services/ms_jarvis_fractal_consciousness_FIXED.py
	services/ms_jarvis_fractal_dgm_woah.py
	services/ms_jarvis_full_neurobio_chat.py
	services/ms_jarvis_full_neurobio_chat.py.pre_dynamic_discovery
	services/ms_jarvis_fully_autonomous_coordinator.py
	services/ms_jarvis_generate_frontend.py
	services/ms_jarvis_generate_frontend.py.pre_dynamic_discovery
	services/ms_jarvis_geo_ueid_integration.py
	services/ms_jarvis_geographic_research.js
	services/ms_jarvis_gis_enhanced_chat.py
	services/ms_jarvis_gis_enhanced_chat.py.pre_dynamic_discovery
	services/ms_jarvis_gis_georeferencing_sync.py
	services/ms_jarvis_gis_georeferencing_sync_FIXED.py
	services/ms_jarvis_gis_georeferencing_sync_FIXED_V2.py
	services/ms_jarvis_gis_query_service.py
	services/ms_jarvis_gis_query_service_backup.py
	services/ms_jarvis_gis_query_with_bbb_gisgeodb.py
	services/ms_jarvis_i_containers_FIXED.py
	services/ms_jarvis_i_containers_service.py.broken
	services/ms_jarvis_id_ocr_processor.py
	services/ms_jarvis_integration_hub.py
	services/ms_jarvis_layer2_dgm.py
	services/ms_jarvis_layer2_woah.py
	services/ms_jarvis_link_reader_scheduled.py
	services/ms_jarvis_link_reader_scheduled_FIXED.py
	services/ms_jarvis_llm_bridge.py
	services/ms_jarvis_llm_bridge.py.broken
	services/ms_jarvis_llm_bridge.py.pre_dynamic_discovery
	services/ms_jarvis_local_resources_api.py
	services/ms_jarvis_location_services.py
	services/ms_jarvis_main_gateway.broken_final.py
	services/ms_jarvis_main_gateway.error_final
	services/ms_jarvis_main_gateway.error_final.py
	services/ms_jarvis_main_gateway.pre_fix.py
	services/ms_jarvis_main_gateway.proxy_backup.py
	services/ms_jarvis_main_gateway.proxy_final.py
	services/ms_jarvis_main_gateway.proxy_still_broken.py
	services/ms_jarvis_main_gateway.py
	services/ms_jarvis_main_gateway.py.30endpoints_backup.py
	services/ms_jarvis_main_gateway.py.broken
	services/ms_jarvis_main_gateway.py.corrupted37_backup_1762223499.py
	services/ms_jarvis_main_gateway.py.full_backup_1762223304.py
	services/ms_jarvis_main_gateway.py.locked_backup
	services/ms_jarvis_main_gateway_8000.py
	services/ms_jarvis_memory_service.py
	services/ms_jarvis_messenger_ui.py
	services/ms_jarvis_messenger_ui_final.py
	services/ms_jarvis_messenger_ui_fixed.py
	services/ms_jarvis_metadata_aware_learner.py
	services/ms_jarvis_microsoft_integration.py
	services/ms_jarvis_microsoft_integration_FIXED.py
	services/ms_jarvis_mother_carrie_protocols.py
	services/ms_jarvis_mountainshares_integration.py
	services/ms_jarvis_paddleocr_processor.py
	services/ms_jarvis_production_chat.py
	services/ms_jarvis_production_chat.py.pre_dynamic_discovery
	services/ms_jarvis_production_chat_BACKUP.py
	services/ms_jarvis_production_chat_BACKUP.py.pre_dynamic_discovery
	services/ms_jarvis_production_chat_BEFORE_GIS.py
	services/ms_jarvis_production_chat_BEFORE_GIS.py.pre_dynamic_discovery
	services/ms_jarvis_psychology_services.py
	services/ms_jarvis_ram_watchdog.py
	services/ms_jarvis_service_factory.py
	services/ms_jarvis_showcase_api.py
	services/ms_jarvis_silent_geo_tracker.py
	services/ms_jarvis_simple_web_ui.py
	services/ms_jarvis_spiritual_services.py
	services/ms_jarvis_substack_reader.py
	services/ms_jarvis_swap_memory_manager.py
	services/ms_jarvis_swarm_intelligence.py
	services/ms_jarvis_swarm_intelligence.py.pre_dynamic_discovery
	services/ms_jarvis_sync_monitor.py
	services/ms_jarvis_temporal_consciousness.py
	services/ms_jarvis_theological_integration.py
	services/ms_jarvis_toroidal_consciousness.py
	services/ms_jarvis_truth_filter_gisgeodb.py
	services/ms_jarvis_ueid_system.py
	services/ms_jarvis_ueid_wallet_integration.py
	services/ms_jarvis_unified_gateway.py.BEFORE_REAL_CHAT_1768842649
	services/ms_jarvis_unified_gateway.py.FORCED_UNIFIED_BACKUP
	services/ms_jarvis_unified_gateway.py.WORKING_1768842334
	services/ms_jarvis_unified_gateway.py.pre_constitutional
	services/ms_jarvis_unified_gateway_v4.3.20251124.py
	services/ms_jarvis_unified_gateway_v4.3.CONSTITUTIONAL_BACKUP.py
	services/ms_jarvis_unified_gateway_v4.3.ORIGINAL_SWAGGER.py
	services/ms_jarvis_unified_gateway_v4.3.py
	services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_1762777467
	services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_AUTH_1762778121
	services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_CHAT_1762778286
	services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_CORRECT_20251109_141823
	services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_DNSADD_202511100838
	services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_GIS
	services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_JWT_202511100840
	services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_MICROSERVICES
	services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_OPENCHAT_202511100915
	services/ms_jarvis_unified_gateway_v4.3.py.BACKUP_SWAGGER_EXPANSION_20251109_141525
	services/ms_jarvis_unified_gateway_v4.3.py.BEFORE_INVESTIGATION
	services/ms_jarvis_unified_gateway_v4.3.py.FINAL_BACKUP_1762710032
	services/ms_jarvis_unified_gateway_v4.3.py.PRE_GUARDS_20251105_171934
	services/ms_jarvis_unified_gateway_v4.3.py.REGISTRY_FIX_BACKUP
	services/ms_jarvis_unified_gateway_v4.3.py.original
	services/ms_jarvis_unified_gateway_v4.3.py.pre_dynamic_discovery
	services/ms_jarvis_unified_gateway_v4.3.py.working_backup
	services/ms_jarvis_unified_rag_bridge.py
	services/ms_jarvis_unified_swagger_gateway.py.pre_dynamic_discovery
	services/ms_jarvis_unified_swagger_gateway_CLEAN.py
	services/ms_jarvis_unified_swagger_gateway_COMPLETE.py
	services/ms_jarvis_unified_swagger_gateway_COMPLETE.py.pre_dynamic_discovery
	services/ms_jarvis_unified_swagger_gateway_FINAL.py
	services/ms_jarvis_unified_swagger_gateway_FINAL.py.layer2_backup
	services/ms_jarvis_unified_swagger_gateway_FIXED.py
	services/ms_jarvis_unified_swagger_gateway_FIXED.py.broken
	services/ms_jarvis_unified_swagger_gateway_FIXED.py.new
	services/ms_jarvis_unified_swagger_gateway_FIXED.py.pre_dynamic_discovery
	services/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py
	services/ms_jarvis_unified_swagger_gateway_PROD.py
	services/ms_jarvis_unified_swagger_gateway_SECURED.py
	services/ms_jarvis_venv_scheduler.py
	services/ms_jarvis_venv_scheduler_FIXED.final_bak
	services/ms_jarvis_venv_scheduler_FIXED.py
	services/ms_jarvis_venv_scheduler_FIXED.safe
	services/ms_jarvis_venv_scheduler_FIXED.safe2
	services/ms_jarvis_venv_scheduler_FIXED.superbak
	services/ms_jarvis_venv_scheduler_FIXED.totalsafe
	services/ms_jarvis_venv_scheduler_FIXED.ultimate_bak
	services/ms_jarvis_venv_scheduler_FIXED.ultrasafe
	services/ms_jarvis_venv_scheduler_SIMPLE.py
	services/ms_jarvis_web_deployer.py
	services/ms_jarvis_web_research.py
	services/ms_jarvis_web_research.py.broken
	services/ms_jarvis_web_research.py.broken_backup
	services/ms_jarvis_web_research_aggregate.safe.20260119-094221.py
	services/ms_jarvis_web_research_fixed.py
	services/ms_jarvis_web_research_v2.py
	services/ms_jarvis_woah_algorithms_enhanced.py
	services/msjarvis.service
	services/msjarvis_autolearner_minimal.py
	services/msjarvis_bbb_proxy.py
	services/msjarvis_benefit_rag.py
	services/msjarvis_client.py
	services/msjarvis_gateway_v2_final.py
	services/msjarvis_gateway_v2_final.py.pre_dynamic_discovery
	services/msjarvis_gateway_with_judge_filtering.py
	services/msjarvis_gateway_with_judge_filtering.py.pre_dynamic_discovery
	services/msjarvis_geotiff_to_csv.sh
	services/msjarvis_icontainers.py
	services/msjarvis_ports_runtime.txt
	services/msjarvis_processes_runtime.txt
	services/msjarvis_semaphore.py
	services/msjarvis_shp_to_csv.sh
	services/msjarvis_unified_gateway.py
	services/msjarvis_woah_algorithms.py
	services/msjarvis_woah_algorithms_service.py
	services/msjarvis_woah_runner.py
	services/msjarvis_wv_entangled_gateway.py
	services/msjarvisautonomouslearner.py
	services/msjarvisconsciousnessbridge.py.FULL_BACKUP_BEFORE_BRIDGE_RESET
	services/msjarvisfractalconsciousness.py
	services/msjarvismaingateway.py
	services/msjarvisragserver_wvpatch.py
	services/msjarvisragserverwvpatch.py
	services/msjarvistoroidalconsciousness.py
	services/msjarvisunifiedgateway.py
	services/msjarvisunifiedswaggergateway.py
	services/msjarvisunifiedswaggergatewayFINAL.py
	services/msjarvisunifiedswaggergatewayFIXED.py
	services/msjarvisunifiedswaggergatewayFIXED.py.BEFORE_DOCKER_REWIRE
	services/msjarvisunifiedswaggergatewayFIXED.py.pre_dynamic_discovery
	services/multi_model_consensus.py
	services/multi_rag_dgm_system.py
	services/my_service.py
	services/netlify.toml
	services/neuro_adapter.py
	services/neuro_blood_brain_barrier.py
	services/neuro_consciousness_containers.py
	services/neuro_i_containers.py
	services/neuro_master_service.py
	services/neuro_prefrontal_cortex.py
	services/neuro_qualia_engine.py
	services/neuro_subconscious.py
	services/neurobiological_brain/Dockerfile
	services/neurobiological_brain/qualia_engine/
	services/neurobiological_integration.py
	services/neurobiological_integration.py.pre_dynamic_discovery
	services/neurobiologicalbrain/
	services/nohup.out
	services/npm-deps.json
	services/npm-packages.txt
	services/oauth2_callback.py
	services/oauth2_config.json
	services/oauth2_handler.py
	services/old_chroma_analysis.json
	services/ollama_fix.py
	services/open_ports.txt
	services/open_ports_full.txt
	services/openapitools.json
	services/optimize_egeria_complete.py
	services/optimize_models_for_vram.py
	services/optimized_timeouts.py
	services/override_launcher.py
	services/package-lock.json
	services/package.json
	services/paired_services.txt
	services/parallel_processing.py
	services/parse_world_files.py
	services/performance_optimization_analyzer.py
	services/performance_optimization_analyzer.py.pre_dynamic_discovery
	services/persona_fix.txt
	services/phase1_integration.py
	services/phase2_integration.py
	services/phase3_integration.py
	services/phase4_5_integration.py
	services/phase6_integration.py
	services/phase7_integration.py
	services/phase7_integration.py.pre_dynamic_discovery
	services/pid_code_backtrace.txt
	services/pid_dir_map.txt
	services/pid_port_map.txt
	services/pituitary_gland.py
	services/polling_client.py
	services/populate_redetermination_tracker.py
	services/populate_security_layers_test.py
	services/port_9000_chat_wrapper_69dgm.py
	services/port_9001_ARCHITECTURE_CORRECT.py
	services/port_9001_FINAL_FIX.py
	services/port_9001_FINAL_WORKING.py
	services/port_9001_ui_DIRECT.py
	services/port_9001_ui_FIXED.py
	services/port_9001_ui_MYSQL.py
	services/port_9001_ui_MYSQL_PROD.py
	services/port_9001_ui_WITH_CONVERSATIONS.py
	services/port_9001_ui_WORKING.py
	services/port_9001_ui_wrapper.py
	services/port_manager.py
	services/port_manager.py.broken_backup
	services/port_manager.py.broken_v2
	services/port_manager_fixed.py
	services/port_service_audit.txt
	services/ports_diff_msjarvis.txt
	services/post_every_4_hours.sh
	services/private_identity_ledger.py
	services/privkey.pem
	services/probe_services.py
	services/process_comprehensive_gis.py
	services/process_gis_shapefiles.py
	services/process_statewide_gis_bulk.py
	services/processed_gis/
	services/prod.yaml
	services/pronoun_fixer.py
	services/proxy_8060.py
	services/psychological_rag_domain.py
	services/psychology_integration_adapter.py
	services/psychology_loop_closer.py
	services/public_form_simplified.py
	services/python/
	services/python_commands.txt
	services/python_ports.txt
	services/qualia_adapter.py
	services/qualia_email_registration_orchestrator_69dgm.py
	services/qualia_unified_orchestrator_69dgm.py
	services/qualia_unified_orchestrator_69dgm_ACTIVE.py
	services/qualia_unified_write_orchestrator_69dgm.py
	services/qualiaunifiedorchestrator69dgm.py
	services/quantum_dashboard.py
	services/quantum_insight_llm.py
	services/quantum_state_engine.py
	services/query_benefits_system.py
	services/query_enhancer.js
	services/query_imm_and_programs.py
	services/quick_tone_test.sh
	services/rag/
	services/rag_5100_ensemble.py
	services/rag_5100_ensemble_fast.py
	services/rag_5100_ensemble_fast.py.pre_dynamic_discovery
	services/rag_5100_final.py
	services/rag_5100_final.py.pre_dynamic_discovery
	services/rag_client.py
	services/rag_command_module.py
	services/rag_command_module.py.pre_dynamic_discovery
	services/rag_direct_debug.py
	services/rag_evidence_aggregator.py
	services/rag_first_workflow.py
	services/rag_general.py
	services/rag_geospatial.py
	services/rag_geospatial_context.py
	services/rag_heartbeat_monitor.py
	services/rag_local_resources.py
	services/rag_query_router.py
	services/rag_server.py
	services/rag_server_main.py
	services/rag_server_main.py.RAG_WORKING_20260116
	services/rag_server_main.py.norag.20260119-091256
	services/rag_server_main.py.stub.20260119-091532
	services/rag_server_min.py
	services/rag_simple.py.pre_dynamic_discovery
	services/rag_temporal.py
	services/rag_temporal_heartbeat.py
	services/rag_to_gis_sync.py
	services/rag_topic_router.py
	services/rag_workflow.py
	services/read_architecture_docs.sh
	services/read_dgm_architecture.sh
	services/real_services.txt
	services/real_services_clean.txt
	services/real_services_detected.txt
	services/real_services_final.txt
	services/real_services_prod.txt
	services/rebuild_query_service.py
	services/recover_160_queries.py
	services/recover_chromadb_FIXED.py
	services/recover_chromadb_to_gisgeodb.py
	services/redirect_4015_to_4020.py
	services/register_agents_from_csv.py
	services/register_agents_from_csv.sh
	services/register_agents_from_csv_strict.py
	services/register_all_services.sh
	services/register_hilbert_services.py
	services/register_hilbert_services.py.pre_dynamic_discovery
	services/register_services.py
	services/register_to_hilbert_chromadb.py
	services/registration_biometric_production_final.py
	services/registration_facebook_form.html
	services/registration_pipeline.py
	services/registration_service.py
	services/registration_service_clean.py
	services/registration_service_clean.py.broken
	services/reload_all_knowledge.py
	services/remaining_services.txt
	services/remove_duplicate_inits.py
	services/replace_dolphin_phi.py
	services/requirements-freeze.txt
	services/requirements-list.txt
	services/requirements-rag.txt
	services/requirements.constitutional_guardian.txt
	services/requirements_semaphore.txt
	services/requirements_temporal.txt
	services/requirements_toroidal.txt
	services/response.json
	services/response_filter.py
	services/response_sanitizer.py
	services/rest_endpoints.txt
	services/restart_all_services.sh
	services/restart_and_verify_8008.sh
	services/restart_ms_jarvis_services.sh
	services/restore_pia_wiring.py
	services/restored_documents.json
	services/resume_ingest_gbim_to_chroma.py
	services/resume_sync_wvgistc_buildings.py
	services/retrieval_router.py
	services/retrieval_spiritual.py
	services/roche_llm.py
	services/roche_llm.stub.py
	services/route_declarations_clean.txt
	services/route_declarations_raw.txt
	services/rpm-list.txt
	services/run_agi_test_suite.sh
	services/run_autonomous_learner_once.py
	services/run_gateway_with_guards.py
	services/running_python_services.txt
	services/s
	services/safe_ingest_gbim_to_chroma.py
	services/safe_integration.py
	services/safe_integration.py.pre_dynamic_discovery
	services/sanctuary_construction_monitor.py
	services/sanctuary_construction_monitor_gateway.py
	services/schema_aware_topic_planner.py
	services/schema_registry.py
	services/search_different_perspective.sh
	services/search_metadata.py
	services/search_metadata.py:
	services/search_wsl_backup.sh
	services/seed_spatial_identity.py
	services/serve_full_brain.sh
	services/server.js
	services/service_api_check.txt
	services/service_api_report.txt
	services/service_discovery.py
	services/service_discovery_glassbox.py
	services/service_endpoints.json
	services/service_http_check.txt
	services/service_pid_directory_map.txt
	services/service_registry_client.py
	services/services_config.yaml
	services/services_list.txt
	services/services_manifest_progress.md
	services/services_msjarvisunifiedgatewayv4_3.py
	services/ses related to Ms. Jarvis
	services/session_sidecar/Dockerfile
	services/set_intelligent_accuracy_scores.py
	services/set_ultra_long_timeout.sh
	services/settings_snippet.txt
	services/setup_frontend.sh
	services/setup_holy_spirit_discovery.sh
	services/setup_holy_spirit_email_alert_both.sh
	services/setup_rag.sh
	services/setup_rag_standalone.sh
	services/silence_memory_errors
	services/silence_memory_errors.py
	services/simple_orchestrator_fix.py
	services/simple_prompt_fix.py
	services/smart_auto_store.py
	services/spiritual_rag_domain.py
	services/stage2_biometric.py
	services/stage2_biometric_backup.py
	services/stakeholder_health_access_tests.py
	services/stakeholder_health_access_tests_v2.py
	services/start_all_jarvis_services_manual.sh
	services/start_all_msjarvis_services.sh
	services/start_all_services.sh
	services/start_all_services_with_ports.sh
	services/start_and_integrate_web_research.sh
	services/start_cloudflare_tunnel.sh
	services/start_command_orchestrator.sh
	services/start_critical_msjarvis_services.sh
	services/start_dgm_woah.sh
	services/start_egeria_voice_service.sh
	services/start_email_service_with_env.sh
	services/start_facebook_4021.py
	services/start_gateway_with_guards.py
	services/start_gateway_with_guards.py.BACKUP
	services/start_gateway_with_guards.py.pre_dynamic_discovery
	services/start_hilbert_8235.sh
	services/start_mountainshares_deployment.sh
	services/start_msjarvis_complete.sh
	services/start_msjarvis_services_fixed.sh
	services/start_services_simple.sh
	services/start_swap_manager.sh
	services/static/
	services/stop_all_services.sh
	services/store_test.json
	services/stripe-config.js
	services/substack_rss_reader.py
	services/summarize_docs.py
	services/swagger-config.json
	services/swagger_chat_integration.py
	services/swagger_gateway.py.PORT8000_BACKUP
	services/swagger_gateway.py.pre_dynamic_discovery
	services/swagger_gateway_FIXED.py
	services/swagger_gateway_FIXED.py.pre_dynamic_discovery
	services/swarm_intelligence_main.py
	services/swarm_watchdog.py
	services/switch_to_22llm.sh
	services/switch_to_small_models.py
	services/system_dashboard.py
	services/system_dashboard.py.pre_dynamic_discovery
	services/tag_quantum_gbim.py
	services/talk.sh
	services/talk_safely.sh
	services/talk_safely_FIXED.sh
	services/talk_to_jarvis.py
	services/talk_with_save.sh
	services/temporal_consciousness.py
	services/test.py
	services/test_agi_capabilities.sh
	services/test_agi_full_responses.sh
	services/test_all_32_services.sh
	services/test_all_models.sh
	services/test_all_models_fixed.sh
	services/test_authentic_voice.sh
	services/test_email_after_consent.sh
	services/test_final_config.sh
	services/test_final_stable.sh
	services/test_full_brain_integration.py.pre_dynamic_discovery
	services/toroidal_service.py
	services/trigger_entangled_assets.py
	services/truly_unpaired_services.txt
	services/truth_filter_bbb_verification.py
	services/truth_filter_service.py
	services/udo ss -tulpn | grep -Ei 'msjarvis|uvicorn|docker-proxy' 
	services/uei_service.py
	services/ultimate_audit_with_scheduler.sh
	services/ultimate_chat_current.txt
	services/ultimate_msjarvis_audit.sh
	services/ultimate_web_orchestrator.py
	services/ultra_deep_dgm_search.sh
	services/unified_consciousness_gateway_PRODUCTION.py
	services/unified_consciousness_gateway_PRODUCTION.py.pre_dynamic_discovery
	services/unified_orchestrator.py
	services/unifiedconsciousnessgatewayPRODUCTION.py
	services/update_chat_endpoint.sh
	services/upgrade_node_and_setup.sh
	services/use_existing_models.py
	services/use_reliable_models_only.py
	services/user_auth_service.py
	services/user_dashboard.py
	services/user_registration_form.html
	services/vatican_scraper_service.py
	services/vectorize_gis_to_chromadb.py
	services/verify_facebook_deployment.sh
	services/view_docs.sh
	services/wallet_service.py
	services/watch_startup.sh
	services/web_chat_server.py
	services/web_connectivity_analyzer.py
	services/web_deployer.env
	services/web_page_ingest.py
	services/web_research.py
	services/web_research_main.py
	services/web_research_proxy_8007.py
	services/web_research_requirements.txt
	services/webhook_notifications.py
	services/website_deployment_manager.py
	services/wire_layers_into_chat.py
	services/wire_learner_to_gisgeodb.py
	services/wire_qualia_to_port8001.py
	services/woah_command_module.py
	services/woah_metrics_router.py
	services/woah_optimizer.py
	services/woah_policy_update.py
	services/woah_qualia_bridge.py
	services/working_full_pipeline.py
	services/working_full_pipeline_FINAL_CONSCIOUSNESS.py
	services/working_full_pipeline_WITH_SPATIAL_TEMPORAL.py
	services/wv_gis_mass_downloader.py
	services/wvu_ldap_auth.py
	services/yarn-packages.txt
	swarm_intelligence.py
	test_auth_api.py
	test_services.py
	tests/__init__.py
	tests/test_identity_services.py
	tests/test_registration_service.py
	ui/dashboard.html
	users.json

no changes added to commit (use "git add" and/or "git commit -a")
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ jarvis-unified-gateway  | INFO:httpx:HTTP Request: GET http://jarvis-consciousness-bridge:8020/health "HTTP/1.1 200 OK"
jarvis-unified-gateway  | INFO:httpx:HTTP Request: GET http://jarvis-neurobiological-master:8018/health "HTTP/1.1 200 OK"
jarvis-unified-gateway  | INFO:httpx:HTTP Request: GET http://jarvis-i-containers:8015/health "HTTP/1.1 200 OK"
jarvis-unified-gateway  | INFO:httpx:HTTP Request: GET http://jarvis-blood-brain-barrier:8016/health "HTTP/1.1 200 OK"
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # Check if local-resources-db has a named volume or bind mountme or bind mount
docker inspect jarvis-local-resources-db \
  --format='{{range .Mounts}}{{.Type}} {{.Source}} -> {{.Destination}}{{"\n"}}{{end}}'
bind /home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/data/local_resources -> /var/lib/postgresql/data

(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ 

