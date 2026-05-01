crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # 1. Show the ACTIVE running service files (what's actually executing right now)
find ~/msjarvis-rebuild-working/msjarvis-rebuild -maxdepth 4 \( -name "*.py" -o -name "*.js" -o -name "*.ts" \) | sort

# 2. Show which process is actually serving the chat/consciousness endpoint
ps aux | grep -E "python|uvicorn|gunicorn|node" | grep -v grep

# 3. Get the main gateway/orchestrator that handles POST /chat
cat ~/msjarvis-rebuild-working/msjarvis-rebuild/$(ls ~/msjarvis-rebuild-working/msjarvis-rebuild/ | grep -E "gateway|orchestrat|main|app" | head -1)

# 4. Get the consciousness bridge (most likely fan-out source)
cat ~/msjarvis-rebuild-working/msjarvis-rebuild/$(ls ~/msjarvis-rebuild-working/msjarvis-rebuild/ | grep -E "consciousness|bridge|unified" | head -1)
find: ‘/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/data/local_resources’: Permission denied
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/admin_cli.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/activate_dgm_enhanced.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/activate_dgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/activate_egeria_persona.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_auto_store.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_background_call.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_background_storage.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_conversation_context.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_conversation_endpoint.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_conversation_storage.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_dynamic_context.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_fast_layer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_fifth_dgm_to_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_full_brain_class.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_gpu_cleanup_correct.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_gpu_cleanup_every_3.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_identity_context.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ADDITIONAL_SERVICES.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_jarvis_personality.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_learning_suggestion.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_mamma_greeting_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_messenger_to_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_new_consciousness_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_ready_endpoint.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_security_to_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_semaphore.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_simple_gpu_cleanup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_swagger_to_ports.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_swagger_to_rag.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_to_main_consciousness.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_to_main_consciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_user_memory_attribute.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_user_memory.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_web_research_storage.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/add_working_search.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_11llm_OPTIMIZED_app_root.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_11llm_OPTIMIZED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_19llm_CONSCIOUS.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_19llm_PRODUCTION.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_19llm_PRODUCTION_WITH_HEALTH.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_20llm_FINAL.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_22llm_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_22llm.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_22llm_SEQUENTIAL_OPTIMIZED_ORDER.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_22llm_SEQUENTIAL.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_22llm_SMALL_TO_LARGE.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_4llm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_integrated.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_original_backup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ai_server_restored.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/apply_ollama_fix.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/audit_attrs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/audit_local_state.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/autonomous_learner_gisgeodb_wrapper.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/backfill_gbim_entities.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/backfill_gbim_worldview_metadata.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/backfill_gbim_worldview_metadata_v2.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/batch_normalize_beliefs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/batch_patch_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/brain_orchestrator_stub.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_autonomous_to_i_container_dgm_woah.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10001.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10002.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10003.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10004.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10005.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10006.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10007.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10008.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10009.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10010.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10011.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10012.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10013.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10014.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10015.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10016.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10017.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10018.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10019.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10020.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10021.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10022.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10023.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10024.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10025.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10026.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10027.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10028.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10029.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10030.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10031.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10032.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10033.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10034.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10035.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10036.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10037.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10038.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10039.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10040.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10041.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10042.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10043.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10044.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10045.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10046.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10047.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10048.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10049.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10050.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10051.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10052.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10053.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10054.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10055.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10056.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10057.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10058.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10059.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10060.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10061.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10062.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10063.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10064.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10065.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10066.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10067.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10068.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bridge_cross_dgm_10069.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/build_additional_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/build_entityid_to_chromaid_map.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/build_project_impact_graph.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bulk_build_beliefs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bulk_compose_rewrite.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bulk_load_knowledge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bulk_load_MAXIMUM.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/bulk_sync_gis_to_chromadb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/chroma_client_old.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/clean_compose.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/clean_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/complete_fix.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/complete_memory_fix.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/complete_system_audit.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/complete_system_audit_with_swagger.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/comprehensive_gisgeodb_audit_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/comprehensive_gisgeodb_audit.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/comprehensive_storage_fix.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/comprehensive_url_fix.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/consciousness_coordinator.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/consciousness_feed_integration.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/consciousness_working.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/constitutional_api.PROD_BACKUP.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/constitutional_guardian.PROD_BACKUP.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/count_collections_local.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/count_collections.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_autonomous_learner_tables.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_consciousness_data_integration.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_consciousness_data_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_dual_consciousness_i_containers.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_dual_consciousness_i_containers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_geodb_nodes.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_immutable_security_layer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_i_statement_feedback_loop.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_perpetual_storage_layer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_tile_index.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/create_ueid_identity_layer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/dedupe_compose.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/dgm_orchestrator_fake.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/dgm_supervisor_woah.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/dgm_supervisor_woah_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/disable_aggressive_cleaning.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/download_nltk_data.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/egeria_web_ui_dynamic.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/egeria_web_ui_final_biological.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/egeria_web_ui_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/egeria_web_ui_fixed_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/egeria_web_ui_plain_authentic.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/egeria_web_ui_v3_consciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/egeria_web_ui_with_execution.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/egeria_web_ui_working.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/embed_and_add.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/embed_and_query.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/embed_gbim.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/embed_geodb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/enable_22llm_routing.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/enhance_agent_prompts.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/enhance_cleaner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/enhanced_learner_concept.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/enhance_pituitary_warmth.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/enhance_rag_first.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/enhance_rag_knowledge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/enrich_geodb_collections.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/enrich_geodb_layers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/export_attributes_to_gis.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/export_chroma_manifest.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/export_geodb_attrs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/export_metadata_csv.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/extract_all_chromadbs_to_gis.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/extract_all_chromadb_to_gis.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/extract_binder4_text.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/extract_chroma_sqlite_to_gis.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/extract_real_knowledge_to_gis.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/extract_shapefile_features_to_csv.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/facebook_poster_working.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fill_null_coordinates_mount_hope.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_agent_prompts.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_all_consciousness_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_autonomous_learner_endpoint.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_autonomous_learner_indent.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_autonomous.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_background_storage.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_chat_server.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_chroma_url.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_consciousness_endpoints.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_context_flow.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_creator_recognition.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_fastapi_lifespan.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_gpu_and_retry.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_import.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_indentation.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_judge_and_memory.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_judge_authentic.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_judge_response.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_judge_synthesis.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_main_brain_endpoints.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_model_names.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_model_unloading.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_multi_rag_chromadb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_new_service_endpoints.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_orchestrator_init.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_orchestrator_scope.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_persona_hang.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_persona.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_port_8001_clean.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_port_8051_handler.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_prompt_leak.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_query_service_endpoints.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_rag_store.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_response_parsing.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_semaphore.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_storage.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_swagger.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_timeouts_add_22llm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_web_research.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/fix_woah_discovery.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/gateway8050_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/gateway_verify_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/generate_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/implement_judge_pituitary_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/implement_safe_optimizations.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_additional_kbs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_benefit_programs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_benefit_programs_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_compliance_tasks_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_csv_to_gisgeodb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_documents_to_chromadb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_full_attributed_docs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_gbim_to_chroma_fast.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_gbim_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_gbim_to_chroma_resume.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_gbim_to_chroma_ultrafast.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_gis_features_to_chromadb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_h4h_cultural_heritage.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_hospitals.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_imm_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_knowledge_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_mrsid_imagery.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ingest_utility_enrollments_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/integrate_all_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/integrate_complete_architecture.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/integrate_consciousness_into_swarm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/integrate_fifth_dgm_autonomous_learner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/integrate_full_brain.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/integrate_full_neural_architecture.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/integrate_i_container_interests.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/integrate_i_container_to_schedulers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/integrate_orchestrator_flow.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/integrate_spatial_temporal.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10070.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10071.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10072.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10073.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10074.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10075.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10076.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10077.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10078.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10079.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10080.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10081.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10082.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10083.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10084.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10085.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10086.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10087.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10088.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10089.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10090.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10091.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10092.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10093.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10094.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10095.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10096.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10097.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10098.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10099.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10100.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10101.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10102.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10103.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10104.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10105.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10106.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10107.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10108.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10109.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10110.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10111.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10112.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10113.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10114.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10115.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10116.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10117.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10118.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10119.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10120.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10121.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10122.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10123.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10124.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10125.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10126.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10127.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10128.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10129.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10130.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10131.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10132.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10133.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10134.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/judge_10135.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm10-proxy_llm10_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm11-proxy_llm11_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm12-proxy_llm12_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm13-proxy_llm13_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm14-proxy_llm14_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm15-proxy_llm15_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm16-proxy_llm16_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm17-proxy_llm17_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm18-proxy_llm18_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm19-proxy_llm19_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm1-proxy_llm1_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm20-proxy_llm20_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm21-proxy_llm21_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm22-proxy_llm22_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm2-proxy_llm2_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm3-proxy_llm3_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm4-proxy_llm4_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm5-proxy_llm5_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm6-proxy_llm6_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm7-proxy_llm7_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm8-proxy_llm8_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/llm9-proxy_llm9_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_backbone_places_from_geodb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_complete_knowledge_base.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_feature_geometries_to_chromadb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_geodb_health_providers_to_neo4j.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_geodb_hospitals_to_neo4j.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_geodb_layer_to_neo4j.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_gis_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_pdfs_spiritual.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_rag_data.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_rag_knowledge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_shapefile_features_to_chromadb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/load_spiritual_library.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/migrate_blood_brain_barrier.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/migrate_chromadb_collections.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/migrate_gis2chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/migrate_neurobiological_master.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_consciousness_bridge_woah.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_easyocr_processor_old.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_facebook_dgm_woah.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_fifth_dgm_orchestrator.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_geo_tracker_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_gis_query_with_bbb_gisgeodb.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_layer2_dgm.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_llm_bridge_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_unified_swagger_gateway_BACKUP.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_unified_swagger_gateway_FINAL.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_unified_swagger_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_web_deployer_old.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_web_research_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/patch_agent_identity.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/patch_autonomous_learner_gisgeodb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/patch_fractal.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/patch_learner_clean.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/patch_mother_persona.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/patch_neuro.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/patch_qualia.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/port_9001_proxy_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/rag_server.psychology_patched.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/rag_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/swagger_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/sync_geodb_to_chromadb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/sync_health_access_to_chromadb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_aacpe_features.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_aapcappe_corpus.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_aapcappe_retrieval.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_chroma_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_chromadb_heartbeat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_chromadb_v2_heartbeat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_ddg_verbose.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_end_to_end_woah_fifthdgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_fifth_dgm_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_full_brain_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_gbim_llm_summary.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_gbim_semantic_query.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_geodb_llm_summary.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_gis_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_health_access_gbim.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_imm_query.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_knowledge_base.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_method_tracking.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_multi_collection_query.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_rag.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_retrieval_endpoint.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/test_spatial_awareness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/update_carrie_keywords.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/update_facebook_poster.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/update_gisgeodb_schema.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/update_production_to_v9.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/update_services_to_use_port_manager.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/update_theological_boundaries.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/update_web_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/update_web_research_package.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/verify_and_document_system.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/verify_benefit_chroma_sync.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/woah_stub.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/ai_server_19llm_CONSCIOUS.backup_20251013_082519.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/ai_server_19llm_CONSCIOUS.backup_20251013_083103.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/ai_server_19llm_CONSCIOUS.backup_20251026_200122.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/ai_server_19llm_CONSCIOUS.backup_20251110_135425.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/integration_layer.backup.1768269372/coherent_identity.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/integration_layer.backup.1768269372/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/ms_jarvis_main_gateway.backup_1762220815.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/ms_jarvis_main_gateway.backup_error.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/ms_jarvis_main_gateway.backup_test.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/ms_jarvis_unified_gateway_v4.3.backup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/ms_jarvis_unified_gateway_v4.3.pre_manifest.backup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/registration_service_clean.backup_1762220206.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/auth_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/backfill_existing_users.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/brain_orchestrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/build/hippocampus/hippocampus_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/conftest.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/data/ingest_fayette_2026.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/data/ocr_patch.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/ems_bootstrap.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/jarviscryptopolicy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/judge_ethics_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/judge_pipeline.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/judge_truth_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/llm10_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/llm12_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/llm20_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/llm22_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/llm2_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/lm_judge_helper.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/load_all_attrs_csvs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/logs/ch40_closeout/main_brain.py.pre_otel_cleanup.snapshot.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/logs/ch40_closeout/ms_jarvis_unified_gateway.snapshot.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/logs/ch40_closeout/session_sidecar_app.snapshot.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/logs/ch40_closeout/session_sidecar_client.snapshot.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/ms-allis-auth-install/backend/auth_api_patch.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/ms-allis-auth-install/frontend/lib/api.ts
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/ms_jarvis_blood_brain_barrier.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/msjarvisconsciousnessbridge_edit.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/ms_jarvis_rag_server.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/msjarvis-rebuild/egeria_clean.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/msjarvis-rebuild/egeria_web_ui_working.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/msjarvis-rebuild/gbim_query_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/msjarvis-rebuild/ms_jarvis_neurobiological_master.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/msjarvis-rebuild/ms_jarvis_unified_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/msjarvis-rebuild/safe_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/blood_brain_barrier/service/blood_brain_barrier.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/consciousness_containers/service/consciousness_containers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/darwin_godel_machines/service/nbb_darwin_godel_machines.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/heteroglobulin_transport/service/heteroglobulin_transport.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_1/ego_boundaries.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_1/identity_core.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_1/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_1/memory_self.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_1/personal_narrative.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_1/self_recognition.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_2/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_2/introspection_engine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_2/metacognitive_awareness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_2/observer_self.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_2/reflection_system.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/i_container_2/witness_consciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiologicalbrainicontainersservice/agentsmain.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/service/i_containers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/service/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/service/msjarvisconsciousnessbridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/service/ms_jarvis_i_containers_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/i_containers/service/self_recognition.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/mother_carrie_protocols/service/main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/pituitary_gland/service/pituitary_gland.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/prefrontal_cortex/service/prefrontal_cortex.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/qualia_engine/service/qualia_engine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/spiritual_maternal_integration/service/spiritual_maternal_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/neurobiological_brain/spiritual_root/service/spiritual_root.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/observability/scripts/metrics/watchdog_metrics.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/patch_gate.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/patch_judges.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/aaacpe_scraper.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/check_topo_api2.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/check_topo_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/chroma_check.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/download_topo.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/download_wv_dem_full.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/download_wv_dem.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/download_wvgis_topo.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/get_3dep_wv.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/health_check.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/ingest_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/ingest_health_emergency_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/jarvis_auth_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/jarvis_token_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/log_session.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/mysql_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/oi38_seed_collections.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/seed_identity.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/seed_local_resources_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/seed_local_resources.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/sprint1_activate_signing.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/sprint2_community_data.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/sprint3_adversarial_tests.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/sprint5_chromadb_backfill.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/scripts/test_chroma_v2.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/service_discovery.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/aaacpe_initial_ingest.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/aaacpe_rag_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/aaacpe_scraper_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/aacpe_ingest_community.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/aacpe_prepare_metadata.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/aapcappe_ingest.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/academic_research_gateway_8062_cors.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/academic_research_gateway_8062.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/academic_whitebox_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ADDITIONAL_SERVICES_FINAL.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/admin_cli.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/advanced_service_dashboard.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/agents_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ai/ai_server.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ai/ai_server_simple.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ai_server_20llm_PRODUCTION.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ai_server_22llm.psychology_patched_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ai-server/ai_server.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ai_teams_config.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/alert_venv/send_alert_msj.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/alert_venv/send_alert_slack.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/app.js
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/application_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/async_polling_architecture.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/attention_multimodal_fuser.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/attention_pipeline.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/attention_priority_scheduler.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/au02_v2/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/au02_v2/service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/auth_api_patch.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/auth_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/auth_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/auto_fix_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/autonomous_learner_gisgeodb_wrapper.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/autonomous_learner_topic_source.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/auto_rag_builder.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bbb_ethics_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bbb_output_filter/app.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bbb_validator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/belief_state_schema.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/benefits_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/brain.js
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/brain_orchestrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bridge_autonomous_to_i_container_dgm_woah.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bridge_autonomous_to_i_container_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bridge/bridge_69dgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bridge/bridge_cross_dgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bridge/consciousness_feed_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bridge/dgm_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bridge/dgm_connector_registry.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/bridge/dgm_orchestrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/chat_endpoint_universal.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/chat_server.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/chroma/chroma_psych_helper.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/chroma_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/chromadb_rest_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/chromadb_v2_to_gis_sync.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/chroma_python_test.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/chroma_test.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/chunked_ingest_gbim_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/community_stake_registry.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/confidence_decay_loop.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/config_spiritual.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/configure_facebook_webhook.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/connection_pooling.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/consciousness_with_egeria_voice.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/consolidate_to_chroma_db.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/constitutional_api_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/constitutional_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/constitutional_guardian.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/conversation_gbim.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/conversation_memory_endpoints.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/core/auth.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/core/brain_orchestrator_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/core/ConfigLoader.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/core/consciousness_coordinator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/core/consciousness_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/core/context_manager.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/core/guards_api_module.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/core/guards.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/cpu_optimization.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/create_immutable_security_layer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/crypto_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dao_governance.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/data_inventory_endpoint.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dgm_adoption_worker.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dgm_rag_integration_v2.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dgm_supervisor_woah_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dgm_supervisor_woah.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/domain_service_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dynamic_app.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dynamic_port_scheduler.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dynamic_port_service_enhanced.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/dynamic_port_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ecosystem_identity_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/eeg_shared/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/eeg_shared/pia_state.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/email_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/etl_from_csv_template.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/etl_from_manifest.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/etl_template_layer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fifth_dgm_app.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fifth_dgm/dynamic_port_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fifth_dgm/fifth_dgm_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fifth_dgm/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fifth_dgm_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fifth_dgm_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fifth_dgm/ms_jarvis_fifth_dgm_orchestrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fifth_dgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fifth_dgm/service_discovery.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fifth_dgm/service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/file_metadata_matching_algorithm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/final_model_optimization.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/fractal_adapter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gateway_messenger_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gateway_wv_entanglement.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_benefit_indexer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_chroma_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_coordinate_writer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_dashboard.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_entangled_summary.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_entanglement.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_explain.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_indexers/gbim_query_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_indexers/semantic_indexer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_indexers/spatial_indexer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_indexers/temporal_indexer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_metadata_enricher.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_metadata_loader.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_msjarvis.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_query_router/gbim_query_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_query_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_reingest_placeholder.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_v0_retrieval.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gbim_verification_loop.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gdb_integration_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geo/api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geobim_health_shim_8051.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geobim_integrated.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geobim_mysql.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geobim_mysql_v2.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geo/context.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geo/encoding.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geo/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geo/neo4j_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geo_rag_debug_app.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/geo/similarity.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_chat_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_command_module.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/911centers_wvdem_032819_gcs84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/911centers_wvdem_032819_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/amtrackrails_federalrailroadadministration_200210_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/amtrackrails_federalrailroadadministration_200210_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/blockgroups_census_2000_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/blockgroups_census_2000_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/blockgroups_census_201111_gcs83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/blockgroups_census_201111_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/blockgroups_census_2020_utm83_full_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/blockgroups_census_2020_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/blockgroups_census_2020_wma84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/blocks_census_2020_utm83_full_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/blocks_census_2020_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/blocks_census_2020_wma84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/boundaryappalachianbasin_wvges_1996_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/bridges_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/calderl_reg_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulation_2500_census_201111_gcs83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulation_2500_census_201111_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulationover10k_census_201111_gcs83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulationover10k_uscensus_1990_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulationover10k_uscensus_1990_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulationover2500_uscensus_1990_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulationsover10k_census_2020_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulationsover10k_census_2020_wma84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulationsover2500_census_2020_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulationsover2500_census_2020_wma84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/citieswithpopulatoinover2500_uscensus_1990_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/coals2_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/coals2_utm27_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/coals2_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/communityboundary_min_att_20250121_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/communityboundary_min_att_20250121_wma84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/communityhealthproviders_wvhealthcareauthority_200802_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/correctionalinstitutions_hsip_20091230_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/correctionalinstitutions_hsip_20091230_wgs84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/countycityparkboundaries_20201104_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/countyseats_usgs_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/countyseats_usgs_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/courthousescounty_manysources_200203_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/cvfault_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/cvfault_utm27_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/cvfault_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/cvpoly_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/cvpoly_utm27_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/cvpoly_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/damsnoncoal_usgs_2002_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/dams_usarmycorpsofengineers_200010_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/dams_usarmycropsofengineers_200010_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/empowermentzonesandenterprisecommunitiesbytractuscens30c72907_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/empowermentzonesandenterprisecommunities_uscensus_2002_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/excursionpassengertrains_wvdof_200102_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/excursionpassengertrains_wvdof_200102_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/facilities_epa_200203_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/facilities_epa_200203_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/faultgl_reg_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/fault_reg_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/fire_departments_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/fire_dept_wvdem_092017_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/floodplainstructuresatrisk_usarmycorpsofengineers_200303_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/geographicalnamesonusgstopomaps_usgs_200601_ll27_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/geographicalnamesonusgstopomaps_usgs_200601_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/geographicnamesonusgstopomaps_current_usgs_20110801_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/geographicnamesonusgstopomaps_historical_usgs_20110801_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/geographicnamesonusgstopomaps_usgs_20110801_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/geolgyl_reg_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/geolgyp_reg_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/geotextl_reg_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/gis_dataset_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/glacagl_reg_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/glacal_reg_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/hazardmitigationbuyout_20250929_polygons_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/hazardmitigationbuyout_20250929_polygons_wma84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/healthruralfacilities_manysources_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/highered_wvemd_072420_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/highered_wvemd_072420_wgc84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/historicalaerialphotographycountycoverage_wvgistc_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/hospitals_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/hospitals_wvdem_040519_gcs84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/hospitals_wvdem_040519_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/impact_reg_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/indexgrid15minutequads_wvgistc_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/indexgrid15minutequads_wvgistc_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/indexgrid15minutewithcounties_wvgistc_utm27_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/indexgrid1minutequads_wvgistc_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/industrialbuildings_wvdo_200807_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/industrialparks_wvdo_200078_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/industrialsites_wvdo_200807_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/inedexgrid1minutequads_wvgistc_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/intermodalterminalfacilities_usdot_1997_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/intermodalterminalfacilities_usdot_1997_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/libraries_manysources_2001_ll27_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/libraries_manysources_2001_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/majorriversandlakesline_nhd_2002_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/majorriversandlakesline_nhd_2002_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/majorriversandlakespolygon_nhd_2002_poly_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/majorriversandlakespolygon_nhd_2002_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/manufacturingandbusiness_wvdo_200803_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/metfacp_reg_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/metropolitanandmicropolitanstatisticalareascensus201111gcs83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/metropolitanandmicropolitanstatisticalareascensus201111utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/metropolitanandmicropolitanstatisticalareas_census_2020_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/metropolitanandmicropolitanstatisticalareas_census_2020_wma84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/metropolitanstatisticalareas_uscensus_199901_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/metropolitanstatisticalareas_uscensus_199901_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/mineraloperations_usgs_200204_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/mineraloperations_usgs_200204_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/nationalatlasstreams_usgs_199903_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/nationalatlasstreams_usgs_199903_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/nationalregister_point_20200923_utm27_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/nationalwaterwaynetworkports_usarmycorpsofengineers_2001_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/nationalwaterwaynetworkports_usarmycorpsofengineers_2001_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/nationalwaterwaynetwork_usarmycorpsofengineers_2001_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/nationalwaterwaynetwork_usarmycorpsofengineers_2001_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/naviagablewaterways_usarmycropsofengineers_2006_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/navigablewaterwaysrivermiles_usarmycropsofengineers_2006_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/navigablewaterwaysstructures_usarmycorpsofengineers_2006_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/nursinghomes_wvdem_041219_gcs84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/nursinghomes_wvdem_041219_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/officebuildings_wvdo_200807_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/paroleoffices_manysources_2008_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/paroleoffices_manysources_2008_wgs84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/placesofworship_hsip_20080723_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/placesofworship_hsip_20080723_wgs84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/policedept_wvdem_012319_gcs84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/policedept_wvdem_012319_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/populatedplaces_census_201112_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/populatedplaces_census_20112_gcs83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/populatedplaces_census_2020_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/populatedplaces_census_2020_wma84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/populatedplaces_uscensus_1990_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/populatedplaces_uscensus_1990_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/populationdatablockgroups_uscensus_2000_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/populationdatablockgroups_uscensus_2000_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/pow_wvgistc_062919_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/pow_wvgistc_062919_wgs84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/publichealthdepts_hsip_20091229_gcs83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/publichealthdepts_hsip_20091229_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/railnetworkregion_usdot_200203_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/railnetworkregion_usdot_200203_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/railnetworkwv_usdot_200203_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/railnetworkwv_usdot_200203_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/railroads_rahalltransportationinstitute_2005_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/realtimestreamflowstations_usgs_200012_ll27_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/realtimestreamflowstations_usgs_200012_utm27_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/realtimestreamflowstations_usgs_200012_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/recreationalwwtrails_ofwv_20151117_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/regionalplanninganddevelopmentcouncil_wvdo_1971_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/regionalplanninganddevelopmentcouncil_wvdo_1971_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/sewertreatmentplants_wvdep_200203_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/solidwastefacilities_wvdep_200202_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/solidwastefacilities_wvdep_200202_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/springs_wvges_1986_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/springs_wvges_1986_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/stateofwvhousedistricts_wvlegislativeservices_2010_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/stateofwvsenatedistricts_wvlegislativeservices_2010_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/states_region_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/structurepointsnorth_samb_2003_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/structurepointssouth_samb_2003_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/structurepolygons_samb_2003_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/summits_gistc_052012_utm83_shp_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/summits_gistc_052012_wgs84_shp_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/surveycontrol_nationalgeodeticsurvey_102011_gcs83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/timberremovalvolume_usfs_1996_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towersam_fcc_200202_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towersasr_fcc_200202_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towersasr_fcc_200202_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towerscellular_fcc_200202_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towerscellular_fcc_200202_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towersfm_fcc_200202_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towersmicrowave_fcc_200202_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towersmicrowave_fcc_200202_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towerspager_fcc_200202_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towerspager_fcc_200202_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towersprivate_fcc_200202_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towersprivate_fcc_200202_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towers_wvpublicbroadcasting_2002_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/towers_wvpublicbroadcasting_2002_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/veteransaffairsfacilities_manysources_200503_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/veteransaffairsfacilities_manysources_200503_wgs84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/votingdistrictswv_legislativeservices_2002_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/votingdistrictswv_legislativeservices_2002_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/votingdistrictswv_uscensus_2000_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/weatherstations_nationalclimatedatacenter_1999_gcs83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/weatherstations_nationalclimatedatacenter_1999_utm27_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/windenergyresource_nationalrenewableenergylab_200901_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/windenergyresource_nationalrenewableenergylab_200901_wgs84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/workforceinvestmentareas_wvgistc_200208_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvgistcbuildingfootprints_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wv_microsoft_20180207_utm17n83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstatebounadary100k_usgs_200203_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstateboundary100k_usgs_200203_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstateboundary24k_usgs_200203_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstateboundary24k_usgs_200203_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstatehousedistricts_manysources_1992_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstatehousedistricts_manysources_1992_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstatehousedistricts_manysources_2002_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstatehousedistricts_manysources_2002_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstatesenatedistricts_manysources_1992_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstatesenatedistricts_manysources_1992_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstatesenatedistricts_manysources_2002_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wvstatesenatedistricts_manysources_2002_utm83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wv_tax_districts_ll83_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/wv_tax_districts_wma84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gis_dataset_services/zipcodetabulationarea_census_2020_wma84_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gisgeodbdirectaccess.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gisgeodb_learner_hook.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gisgeodb_storage.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/gpu_accelerated_rag_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/hardware_optimization_analyzer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/harmony4hope_deployment_manager.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/health_access_gbim_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/health_access_query.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/health_check_cache.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/hierarchical_coordinator_autonomous.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/hierarchical_coordinator_deep_mode.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/hierarchical_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/hilbert_spatial_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/host_bulk_loader.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/i_container_interest_algorithm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/icontainers_fastapi.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/identity_promotion.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/identity_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/immutable_core_enforcement.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/import_gbim_assets.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/import_gis_geodata_to_gbim.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/import_gisgeodata_to_gbim.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/index_all_extracted_gis.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/index.js
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/infrastructure_endpoints.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ingestcsvtogisgeodb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ingest_watcher/ingest_runner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ingest_watcher/ingest_watcher.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/inject_egeria_persona.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/inject_gisgeodb_into_learner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/inspect_geodb_collection.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/INTEGRATION_IMPLEMENTATION.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/integration_layer/coherent_identity.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/integration_layer/consciousness_merger.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/integration_layer/container_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/integration_layer/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/integration_layer.placeholder_1768012705/coherent_identity.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/integration_layer.placeholder_1768012705/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/integration_layer/unified_experience.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/interaction_logger.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/internet_tunnel_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/introspective_record.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/introspective_verdict_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-69dgm-bridge_jarvis-fractal-consciousness_baseline.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-aaacpe-rag_aaacpe_rag_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-adoption-worker_dgm_adoption_worker.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-agents-service_ms_jarvis_consciousness_unified_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvisarchiveapi.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-consciousness-bridge_ms_jarvis_consciousness_unified_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-constitutional-guardian_constitutional_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarviscryptopolicy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_data_ingest.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_decay_escalation_consumer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_eeg_beta_5m.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_eeg_delta_30s.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_eeg_theta_60s.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_ensemble.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-fifth-dgm_service_discovery.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-gis-rag_gis_rag_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_gis_rag/provider_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_hilbert_state.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-hippocampus_hippocampus_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-i-containers_icontainers_fastapi.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-judge-pipeline_judge_pipeline.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_llm1.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-lm-synthesizer_lm_synthesizer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-local-resources_local_resources_resolver.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_memory_pia.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-mother-protocols_mother_protocols.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-neurobiological-master_ms_jarvis_consciousness_unified_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_pia_sampler.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_pia_status.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-psychology-services_psychology_integration_adapter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-qualia-engine_ms_jarvis_qualia_engine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_rag_search/main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_rag_search/retrieval_tuning.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-rag-server_ms_jarvis_consciousness_unified_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-semaphore_msjarvis_semaphore.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-spiritual-rag_spiritual_rag_domain.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_steward/main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_steward.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_stewardship_scheduler.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-swarm-intelligence_ms_jarvis_consciousness_unified_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis_synth_llm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-temporal-consciousness_temporal_consciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-toroidal_toroidal_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-woah_dgm_supervisor_woah_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/jarvis-wv-entangled-gateway_msjarvis_wv_entangled_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/judge_alignment_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/judge_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/judge_consistency_engine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/judge_consistency_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/judge_ethics_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/judge_pipeline.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/judgesigner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/judge_to_pituitary_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/judge_truth_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/layer2_port9000_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/link_gisgeodb_to_files.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/list_geodb_collections.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm10_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm11_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm12_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm13_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm14_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm15_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm16_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm17_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm18_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm19_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm1_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm20_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm21_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm22_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm2_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm3_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm4_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm5_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm6_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm7_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm8_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm9_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm/ai_server_22llm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm/ai_server.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm_belief_utils.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm_bridge_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm_conscious_OPTIMIZED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm_consensus_19_PRODUCTION.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm_consensus_20_FINAL.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm_consensus_22_OPTIMIZED_ORDER.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm_consensus_22.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm_consensus_22_SMALL_TO_LARGE.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm_ensemble_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/llm_judge_v3.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/lm_judge_helper.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/lm_synthesizer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/local_resources_resolver.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/location_scraper_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/logging_conf.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain_container_2055.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain_LEGACY_32svc.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain_legacy_backup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain_psychology_patch.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_brian.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_qualia.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/main_with_rag.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/mamma_kidd_auth.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/manifest_endpoints.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/manual_storage_patch.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_chat_orchestrator_dynamic.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_chat_orchestrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_chat_orchestrator_v5_consciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_chat_orchestrator_v6_biologics.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_chat_orchestrator_v7_complete.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_chat_orchestrator_v7_dynamic.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_chat_orchestrator_v8_spiritual_complete.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_chat_orchestrator_v9_dgm_complete.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_chat_orchestrator_v9_gpu_optimized.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_chat_orchestrator_v9_optimized.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_unified_consciousness_scheduler_ENRICHED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/master_unified_consciousness_scheduler.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/memory_dgm_engine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/memory_dgm_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/memory_manager.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/mesh_coordinator_interface.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/messenger_service_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/method_tracker_decorator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/method_tracking_helper.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/method_tracking_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/metrics_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/modify_autonomous_learning_cycle.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/mother_carrie_logging.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/mother_protocols.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/mountainshares_chain_monitor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/mountainshares_coordinator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/mountainshares_gbim_suggester.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/mountainshares_ingest.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/mountainshares_quest_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/mountainshares_registry.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/move_huggingface_to_cpu.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_egeria_facebook_autopost.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_agents_ollama.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_agents_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_alerting_manager.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_api_docs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_attribute_table_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_attribute_table_sync_continuous.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_authentic_multi_llm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_autolearner_minimal.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_autonomous_learner_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_autonomous_learner_optimized.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_autonomous_learner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisautonomouslearner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_autonomous_learner_WITH_FIFTH_DGM.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_auto_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_bbb_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_bbb_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_benefit_rag.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blockchain_deployment.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blood_brain_barrier.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_brain_orchestrator_advanced.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_brain.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_chromadb_query.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_cleanup_manager.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_command_orchestrator_FINAL.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_command_orchestrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_command_orchestrator_v5.0_preachy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_command_orchestrator_v5_backup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_complete_knowledge_ingestion.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_conscious_collective.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisconsciousnessbridge_ACTUAL.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_bridge_enhanced.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_bridge_parallel_woah.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisconsciousnessbridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_bridge_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_bridge_WITH_FIFTH_DGM.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_bridge_woah.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_complete.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_enhancement_production.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_final.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_poster_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_poster.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consciousness_unified_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_consensus_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_contract_builder.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_contract_builder_v2.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_contract_forge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_conversational_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_conversational_gateway_4022.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_daily_backup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_darwin_godel_machine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_dynamic_model_selector.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_easyocr_processor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_email_identity_verifier.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_email_monitor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_email_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_eternal_watchdog.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_exclusive_training_layer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_expiration_monitor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_async.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_autonomous_social.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_brain_integrated.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_CONSCIOUSNESS_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_CONSCIOUSNESS.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_DGM.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_dgm_woah.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_full.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_intelligent.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_poster_8040.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_poster_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_poster.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_poster_temp.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_poster_v3.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_PRODUCTION.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_rag.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_webhook.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_facebook_webhooks.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_fact_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_feed_reader_PRODUCTION.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_feed_reader_WORKING.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_fifth_dgm_orchestrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_fractal_consciousness_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_fractal_consciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_fractal_consciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisfractalconsciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_fractal_dgm_woah.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_full_neurobio_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_fully_autonomous_coordinator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_gateway_v2_final.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_gateway_with_judge_filtering.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_generate_frontend.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_geographic_research.js
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_geo_ueid_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_gis_enhanced_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_gis_georeferencing_sync_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_gis_georeferencing_sync_FIXED_V2.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_gis_georeferencing_sync.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_gis_query_service_backup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_gis_query_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_gis_query_with_bbb_gisgeodb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_i_containers_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_icontainers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_i_containers_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_i_containers_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisicontainersservice.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_id_ocr_processor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_integration_hub.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_layer2_dgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_layer2_woah.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_link_reader_scheduled_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_link_reader_scheduled.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_llm_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_local_resources_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_location_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway_8000.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.broken_final.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.error_final.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.pre_fix.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.proxy_backup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.proxy_final.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.proxy_still_broken.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvismaingateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.py.30endpoints_backup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.py.corrupted37_backup_1762223499.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_main_gateway.py.full_backup_1762223304.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_memory.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_memory_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_messenger_ui_final.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_messenger_ui_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_messenger_ui.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_metadata_aware_learner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_microsoft_integration_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_microsoft_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_mother_carrie_protocols.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_mountainshares_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_neurobiological_master.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_paddleocr_processor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_production_chat_BACKUP.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_production_chat_BEFORE_GIS.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_production_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_psychology_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_qualia_engine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_rag_server.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisragserver_wvpatch.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisragserverwvpatch.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_ram_watchdog.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_blood_brain_barrier-1_ms_jarvis_consciousness_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_consciousness_containers-1_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_heteroglobulin_transport-1_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_i_containers-1_ms_jarvis_consciousness_unified_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_mother_carrie_protocols-1_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_pituitary_gland-1_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_prefrontal_cortex-1_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_qualia_engine-1_ms_jarvis_consciousness_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_spiritual_maternal_integration-1_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_spiritual_root-1_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_subconscious-1_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis-rebuild-nbb_woah_algorithms-1_service_discovery.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_seamless_monitor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_semaphore.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_service_factory.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_showcase_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_silent_geo_tracker.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_simple_web_ui.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_spiritual_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_substack_reader.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_swap_memory_manager.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_swarm_intelligence.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_sync_monitor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_temporal_consciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_theological_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_toroidal_consciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvistoroidalconsciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_truth_filter_gisgeodb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_ueid_system.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_ueid_wallet_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_unified_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisunifiedgateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.20251124.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.BEFORE_69DGM_INTEGRATION.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.CONSTITUTIONAL_BACKUP.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.ORIGINAL_SWAGGER.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_rag_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_CLEAN.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_COMPLETE.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_FINAL.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisunifiedswaggergatewayFINAL.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_FIXED_BACKUP.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisunifiedswaggergatewayFIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_PROD.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvisunifiedswaggergateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_SECURED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_venv_scheduler_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_venv_scheduler.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_venv_scheduler_SIMPLE.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_web_deployer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_web_research_aggregate.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_web_research_aggregate.safe.20260119-094221.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_web_research_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_web_research.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_web_research_v2.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_woah_algorithms_enhanced.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_woah_algorithms.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_woah_algorithms.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_woah_algorithms_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_woah_runner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvis_wv_entangled_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_mountainshares_analytics.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_mountainshares_coordinator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ms_mountainshares_indexer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/multi_model_consensus.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/multi_rag_dgm_system.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/my_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/nbb_darwin_godel_machines_msjarvis-rebuild-nbb_spiritual_root-1_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/nbb_darwin_godel_machines.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/nbb/pituitary_gland.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neuro_adapter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_brain/blood_brain_barrier/ethical_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiologicalbrain/blood_brain_barrier/ethical_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_brain/blood_brain_barrier/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiologicalbrain/blood_brain_barrier/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_brain/blood_brain_barrier/safety_monitor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiologicalbrain/blood_brain_barrier/safety_monitor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_brain/blood_brain_barrier/spiritual_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiologicalbrain/blood_brain_barrier/spiritual_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_brain/blood_brain_barrier/steganography_detection.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_brain/blood_brain_barrier/threat_detection.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_brain/blood_brain_barrier/truth_verification.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_brain/i_containers/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiologicalbrain/i_containers/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiologicalbrainicontainersservice/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_brain/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiologicalbrain/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiologicalbrain/neurobiological_brain/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_brain/qualia_engine/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neurobiological_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neuro_blood_brain_barrier.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neuro_consciousness_containers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neuro_i_containers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neuro_master_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neuro_prefrontal_cortex.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neuro_qualia_engine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/neuro_subconscious.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/oauth2_callback.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/oauth2_handler.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ollama_fix.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/optimized_timeouts.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/optimize_egeria_complete.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/optimize_models_for_vram.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/otel_tracing.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/override_launcher.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/parallel_processing.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/parse_world_files.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/performance_optimization_analyzer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/phase1_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/phase2_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/phase3_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/phase4_5_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/phase6_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/phase7_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/pia_event_emitters.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/pituitary_gland.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/polling_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/populate_redetermination_tracker.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/populate_security_layers_test.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9000_69dgm_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9000_academic_extension.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9000_chat_wrapper_69dgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9001_ARCHITECTURE_CORRECT.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9001_FINAL_FIX.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9001_FINAL_WORKING.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9001_ui_DIRECT.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9001_ui_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9001_ui_MYSQL_PROD.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9001_ui_MYSQL.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9001_ui_WITH_CONVERSATIONS.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9001_ui_WORKING.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_9001_ui_wrapper.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_manager_fixed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/port_manager.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/private_identity_ledger.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/probe_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/process_comprehensive_gis.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/process_gis_shapefiles.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/process_statewide_gis_bulk.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/pronoun_fixer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/proxy_8060.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/psychological_rag_domain_psychological_rag_domain.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/psychological_rag_domain.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/psychology_integration_adapter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/psychology_loop_closer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/public_form_simplified.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/python/brain_orchestrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/python/consciousness_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/qualia_adapter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/qualia_email_registration_orchestrator_69dgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/qualia_unified_orchestrator_69dgm_ACTIVE.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/qualia_unified_orchestrator_69dgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/qualiaunifiedorchestrator69dgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/qualia_unified_write_orchestrator_69dgm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/quantum_dashboard.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/quantum_insight_llm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/quantum_state_engine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/query_benefits_system.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/query_enhancer.js
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/query_imm_and_programs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/quick_optimizations.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_5100_ensemble_fast.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_5100_ensemble.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_5100_final.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/attention_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/autonomous_learner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/background_curator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/belief_integrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/belief_revision_engine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/chroma_config.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/chromadb_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/chromadb_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/chromadb_rag_helper.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/chroma_health_monitor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/chroma_health_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/chroma_health_utils.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_command_module.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/dgm_rag_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_direct_debug.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_evidence_aggregator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_first_workflow.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/gbim_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/gbim_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/gbim_core.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/gbim_gis_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/gbim_semantic_indexer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/gbim_spatial_indexer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/gbim_temporal_indexer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_general.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/geodb_adapter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/geodb_core.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/geo_rag_debug.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_geospatial_context.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_geospatial.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/geospatial_resolver.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/gis_rag_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/gpu_accelerated_rag.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_grounded_v2.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_heartbeat_monitor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag/hippocampus_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_local_resources.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_query_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_server_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_server_min.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_server.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_temporal_heartbeat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_temporal.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_to_gis_sync.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_topic_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rag_workflow.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rebuild_query_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/rechunk_oversized.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/recover_160_queries.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/recover_chromadb_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/recover_chromadb_to_gisgeodb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/redirect_4015_to_4020.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/REFERENCE_windows_swarm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/register_agents_from_csv.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/register_agents_from_csv_strict.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/register_hilbert_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/register_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/register_to_hilbert_chromadb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/registration_biometric_production_final.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/registration_pipeline.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/registration_service_clean.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/registration_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/reload_all_knowledge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/remove_duplicate_inits.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/replace_dolphin_phi.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/response_filter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/response_sanitizer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/restore_pia_wiring.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/resume_ingest_gbim_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/resume_sync_wvgistc_buildings.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/retrieval_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/retrieval_spiritual.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/roche_llm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/roche_llm.stub.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/routes/trail_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/run_autonomous_learner_once.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/run_gateway_with_guards.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/safe_ingest_gbim_to_chroma.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/safe_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/sanctuary_construction_monitor_gateway.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/sanctuary_construction_monitor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/schema_aware_topic_planner.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/schema_registry.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/search_metadata.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/seed_spatial_identity.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/server.js
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/service_discovery_glassbox.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/service_discovery.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/service_registry_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/services_msjarvisunifiedgatewayv4_3.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/services_safe.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/session_sidecar/app.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/session_sidecar_client.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/session_sidecar/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/set_intelligent_accuracy_scores.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/silence_memory_errors.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/simple_orchestrator_fix.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/simple_prompt_fix.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/smart_auto_store.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/spiritual_rag_domain.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/stage2_biometric_backup.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/stage2_biometric.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/stakeholder_health_access_tests.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/stakeholder_health_access_tests_v2.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/start_facebook_4021.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/start_gateway_with_guards.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/stripe-config.js
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/substack_rss_reader.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/summarize_docs.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/swagger_chat_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/swagger_gateway_FIXED.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/swarm_intelligence_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/swarm_watchdog.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/switch_to_small_models.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/system_dashboard.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tag_quantum_gbim.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/talk_to_jarvis.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/temporal_consciousness.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/test.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tests/test_bbb_verdict_flow.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/token_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/cloudflare_domain_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/commons_gamification.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/contract_generator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/egeria_active_heartbeat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/egeria_api_proxy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/egeria_autonomous_inquiry_active.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/egeria_autonomous_inquiry.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/egeria_code_execution_engine.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/egeria_facebook_perpetual_scheduler.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/egeria_multi_mode_system.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/egeria_safe_self_correction.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/egeria_status_poller.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/egeria_web_ui.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/email_auto_checker.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/email_gis_geolocation_extractor.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/email_rag_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/facebook_chat_unified.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/facebook_consciousness_daemon.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/facebook_daemon_polling.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/facebook_messenger_integration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/facebook_poster_autonomous.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/facebook_poster_fast.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/facebook_poster.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/facebook_voice_orchestrator_egeria.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/fraud_detection_ai.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/tools/health_access_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/topic_entanglement.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/toroidal_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/trigger_entangled_assets.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/truth_filter_bbb_verification.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/truth_filter_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/uei_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/ultimate_web_orchestrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/unified_consciousness_gateway_PRODUCTION.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/unifiedconsciousnessgatewayPRODUCTION.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/unified_orchestrator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/use_existing_models.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/user_auth_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/user_dashboard.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/use_reliable_models_only.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/vatican_scraper_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/vectorize_gis_to_chromadb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/annotated_types/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/annotated_types/test_cases.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/bcrypt/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/bitarray/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/bitarray/test_bitarray.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/bitarray/test_util.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/bitarray/util.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/Crypto/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/cytoolz/compatibility.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/cytoolz/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/cytoolz/_signatures.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/abi.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/base.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/codec.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/constants.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/decoding.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/encoding.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/exceptions.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/grammar.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/packed.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_abi/registry.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/account_local_actions.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/account.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/datastructures.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/messages.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/types.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_hash/abc.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_hash/auto.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_hash/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_hash/main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_hash/utils.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_keyfile/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_keyfile/keyfile.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_keys/constants.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_keys/datatypes.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_keys/exceptions.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_keys/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_keys/main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_keys/validation.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_rlp/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_rlp/main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_typing/abi.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_typing/bls.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_typing/discovery.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_typing/encoding.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_typing/enums.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_typing/evm.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_typing/exceptions.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_typing/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_typing/networks.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/abi.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/address.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/applicators.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/conversions.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/crypto.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/currency.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/debug.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/decorators.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/encoding.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/exceptions.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/functional.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/hexadecimal.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/humanize.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/logging.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/__main__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/module_loading.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/network.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/numeric.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/pydantic.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/toolz.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/types.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/units.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/hexbytes/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/hexbytes/main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/hexbytes/_utils.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/parsimonious/adhoc_expression.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/parsimonious/exceptions.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/parsimonious/expressions.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/parsimonious/grammar.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/parsimonious/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/parsimonious/nodes.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/parsimonious/utils.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/aliases.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/alias_generators.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/annotated_handlers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/class_validators.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/color.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/config.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic_core/core_schema.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic_core/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/dataclasses.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/datetime_parse.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/decorator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/env_settings.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/errors.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/error_wrappers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/fields.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/functional_serializers.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/functional_validators.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/generics.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/json.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/json_schema.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/_migration.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/mypy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/networks.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/parse.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/root_model.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/schema.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/tools.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/type_adapter.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/types.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/typing.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/utils.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/validate_call_decorator.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/validators.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/version.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/pydantic/warnings.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/regex/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/regex/_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/regex/_regex_core.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/rlp/atomic.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/rlp/codec.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/rlp/exceptions.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/rlp/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/rlp/lazy.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/rlp/utils.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/tlz/_build_tlz.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/tlz/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/toolz/compatibility.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/toolz/dicttoolz.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/toolz/functoolz.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/toolz/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/toolz/itertoolz.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/toolz/recipes.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/toolz/_signatures.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/toolz/utils.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/typing_extensions.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/typing_inspection/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/typing_inspection/introspection.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/typing_inspection/typing_objects.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wallet_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/web_chat_server.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/web_connectivity_analyzer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/webhook_notifications.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/web_page_ingest.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/web_research_fail_tracker.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/web_research_main.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/web_research_proxy_8007.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/web_research.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/website_deployment_manager.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wire_layers_into_chat.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wire_learner_to_gisgeodb.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wire_qualia_to_port8001.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/woah_command_module.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/woah_metrics_router.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/woah_optimizer.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/woah_policy_update.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/woah_population_state.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/woah_qualia_bridge.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/woah_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/working_full_pipeline_FINAL_CONSCIOUSNESS.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/working_full_pipeline.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/working_full_pipeline_WITH_SPATIAL_TEMPORAL.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wv_gis_mass_downloader.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/services/wvu_ldap_auth.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/swarm_intelligence.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/sync_chroma_metadata.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/test_auth_api.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/test_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/tests/__init__.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/tests/test_identity_services.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/tests/test_registration_service.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/tmp-aaacpe-patch/main_brain.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/tools/pia/pia_cycle.py
/home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/woah_stub.py
root        1826  0.0  0.0 112268  5428 ?        Ssl  Apr21   0:00 /usr/bin/python3 /usr/share/unattended-upgrades/unattended-upgrade-shutdown --wait-for-signal
root        2554  0.0  0.0   2712  1820 ?        Ss   Apr21   0:00 fusermount3 -o rw,nosuid,nodev,fsname=portal,auto_unmount,subtype=portal -- /run/user/1000/doc
cakidd     28730  0.0  0.0  23096  2392 pts/0    T    Apr21   0:00 python
root      128309  0.1  0.0  62240  2476 ?        Ss   Apr21  22:37 python judge_pipeline.py
root     1363992  0.1  0.0 1584472 2796 ?        Ssl  Apr22  15:59 /usr/local/bin/python3.11 /usr/local/bin/uvicorn semantic_indexer:app --host 0.0.0.0 --port 8000
root     1389048  0.1  0.0 161600  8400 ?        Ssl  Apr22  17:26 python -m uvicorn mother_protocols:app --host 0.0.0.0 --port 4000
root     1389894  0.1  0.0 311920 20128 ?        Ssl  Apr22  22:54 /usr/local/bin/python3.11 /usr/local/bin/uvicorn jarvis_steward:app --host 0.0.0.0 --port 8060
root     1391218  2.9  0.0 5710452 30416 ?       Ssl  Apr22 339:25 /usr/local/bin/python3.11 /usr/local/bin/uvicorn aaacpe_scraper_service:app --host 0.0.0.0 --port 8033
root     1391680  0.0  0.0  69180  4268 ?        Ss   Apr22   0:07 python -u jarvis_decay_escalation_consumer.py
root     1527098  0.1  0.0 239424  2952 ?        Ssl  Apr23  20:02 python3 gbim_benefit_indexer.py
root     1537323  0.1  0.0 162008  2948 ?        Ssl  Apr23  15:37 /usr/local/bin/python3.11 /usr/local/bin/uvicorn spatial_indexer:app --host 0.0.0.0 --port 8000
root     1537472  0.1  0.0 162008  2976 ?        Ssl  Apr23  15:38 /usr/local/bin/python3.11 /usr/local/bin/uvicorn temporal_indexer:app --host 0.0.0.0 --port 8000
root     1784244  0.1  0.0  59168  9036 ?        Ss   Apr28   5:55 /usr/local/bin/python3.11 /usr/local/bin/uvicorn ms_jarvis_contract_forge:app --host 0.0.0.0 --port 8091
cakidd   2532764  0.0  0.0 123528  6964 ?        Ss   Apr24   1:14 /mnt/spiritual_drive/msjarvis-rebuild/crypto-venv/bin/python3 /home/cakidd/msjarvis-rebuild-working/msjarvis-rebuild/msjarvis-rebuild/egeria_clean.py
root     2575241  0.2  0.0  54360 17124 ?        Ss   Apr29   3:39 python3.10 -m uvicorn ms_jarvis_i_containers_service:app --host 0.0.0.0 --port 8015
root     2626197  0.2  0.0 140400 22920 ?        Ssl  Apr29   3:17 python3 /app/services/msjarvisconsciousnessbridge.py
cakidd   2681224  0.1  0.0 245132 14860 ?        Ssl  Apr24  13:53 /usr/bin/python3 scripts/jarvis_auth_service.py
root     3032732  0.1  0.0  59920 13360 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm17_health_proxy:app --host 0.0.0.0 --port 8217
root     3032744  0.1  0.0  61736 12576 ?        Ss   12:26   1:09 python ms_jarvis_web_research_aggregate.py
root     3032773  0.0  0.0   2680   120 ?        Ss   12:26   0:00 sh -lc cd /app/services && python3 -m uvicorn main_brain:app --host 0.0.0.0 --port 8050
root     3032811  0.1  0.0 139436 21188 ?        Ssl  12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm12_health_proxy:app --host 0.0.0.0 --port 8212
root     3032879  0.1  0.0 170488 15520 ?        Ssl  12:26   0:47 python3 judge_truth_filter.py
root     3032944  0.1  0.0 139436 21292 ?        Ssl  12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm4_health_proxy:app --host 0.0.0.0 --port 8204
root     3033043  0.1  0.0  54860 16280 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn consciousness_containers:app --host 0.0.0.0 --port 7002
root     3033051  0.1  0.0  54860 14176 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn heteroglobulin_transport:app --host 0.0.0.0 --port 7006
root     3033080  0.1  0.0  59920 15732 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm20_health_proxy:app --host 0.0.0.0 --port 8220
root     3033149  0.1  0.0 170312 15980 ?        Ssl  12:26   0:47 python3 judge_alignment_filter.py
root     3033270  0.1  0.0  59920 15780 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm16_health_proxy:app --host 0.0.0.0 --port 8216
root     3033454  0.1  0.0  62068 12552 ?        Ss   12:26   1:02 /usr/local/bin/python3.11 /usr/local/bin/uvicorn jarviscryptopolicy:app --host 0.0.0.0 --port 8099
root     3033555  0.1  0.0  59916 15392 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm5_health_proxy:app --host 0.0.0.0 --port 8205
root     3033586  0.1  0.0  54512 12060 ?        Ss   12:26   1:04 /usr/local/bin/python3.12 /usr/local/bin/uvicorn i_containers:app --host 0.0.0.0 --port 7005
root     3033641  0.1  0.0  59920 14808 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm19_health_proxy:app --host 0.0.0.0 --port 8219
root     3033767  0.1  0.0 170252 20116 ?        Ssl  12:26   0:47 python3 judge_ethics_filter.py
root     3033774  0.1  0.0  51924 15308 ?        Ss   12:26   1:11 python3 jarvis-constitutional-guardian_constitutional_api.py
root     3033847  0.1  0.0  52012 13556 ?        Ss   12:26   1:09 python3 port_9000_69dgm_bridge.py
root     3033973  0.1  0.0  72292 13532 ?        Ss   12:26   1:12 python -m uvicorn ms_jarvis_fifth_dgm_orchestrator:app --host 0.0.0.0 --port 4002
root     3033988  0.1  0.0  59920 15652 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm8_health_proxy:app --host 0.0.0.0 --port 8208
root     3033995  0.1  0.0  59916 15100 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm3_health_proxy:app --host 0.0.0.0 --port 8203
root     3034022  0.1  0.0  60296 10040 ?        Ss   12:26   1:02 python3 jarvis-spiritual-rag_spiritual_rag_domain.py
root     3034088  0.1  0.0 135452 19188 ?        Ssl  12:26   1:03 /usr/local/bin/python3.11 /usr/local/bin/uvicorn ms_jarvis_memory:app --host 0.0.0.0 --port 8056
root     3034135  0.1  0.0 139444 21228 ?        Ssl  12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm9_health_proxy:app --host 0.0.0.0 --port 8209
root     3034190  0.1  0.0 170768 17772 ?        Ssl  12:26   0:47 python3 judge_pipeline.py
root     3034233  0.1  0.0  54864 15636 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn spiritual_root:app --host 0.0.0.0 --port 7003
root     3034326  0.1  0.0  59920 16200 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm6_health_proxy:app --host 0.0.0.0 --port 8206
root     3034358  0.1  0.0 264040 13300 ?        Ssl  12:26   0:51 python3 jarvis_stewardship_scheduler.py
root     3034382  0.1  0.0 139484 21256 ?        Ssl  12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm10_health_proxy:app --host 0.0.0.0 --port 8210
root     3034447  0.1  0.0 139444 21384 ?        Ssl  12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm1_health_proxy:app --host 0.0.0.0 --port 8201
root     3034493  0.1  0.0  59920 15560 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm21_health_proxy:app --host 0.0.0.0 --port 8221
root     3034548  0.1  0.0  59920 14476 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm11_health_proxy:app --host 0.0.0.0 --port 8211
root     3034640  0.1  0.0  62020 17228 ?        Ss   12:26   1:07 /usr/local/bin/python3.11 /usr/local/bin/uvicorn jarvis-semaphore_msjarvis_semaphore:app --host 0.0.0.0 --port 8030
root     3034660  0.1  0.0  54860 15972 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn main:app --host 0.0.0.0 --port 7007
root     3034756  0.1  0.0 139440 20620 ?        Ssl  12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm7_health_proxy:app --host 0.0.0.0 --port 8207
root     3034765  0.1  0.0 224688 10928 ?        Sl   12:26   0:51 python3 -m uvicorn main_brain:app --host 0.0.0.0 --port 8050
root     3034845  0.1  0.0 139436 21168 ?        Ssl  12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm2_health_proxy:app --host 0.0.0.0 --port 8202
root     3035014  0.1  0.0  59920 15860 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm22_health_proxy:app --host 0.0.0.0 --port 8222
root     3035041  0.1  0.0 162652 19688 ?        Ssl  12:26   0:48 python3 judge_consistency_engine.py
root     3035071  0.1  0.0 1520196 19532 ?       Ssl  12:26   1:06 python3 -m uvicorn services.jarvis_hilbert_state:app --host 0.0.0.0 --port 8081
root     3035160  0.1  0.0 1445588 15420 ?       Ssl  12:26   1:07 python3 /app/services/msjarvis_fractal_consciousness.py
root     3035161  0.1  0.0  59920 15692 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm18_health_proxy:app --host 0.0.0.0 --port 8218
root     3035173  0.1  0.3 5427652 98588 ?       Ssl  12:26   1:16 /usr/local/bin/python3.11 /usr/local/bin/uvicorn hippocampus_service:app --host 0.0.0.0 --port 8011
root     3035176  0.2  0.1 10016840 48308 ?      Ssl  12:26   1:31 /usr/local/bin/python3.11 /usr/local/bin/uvicorn aaacpe_rag_service:app --host 0.0.0.0 --port 8032
root     3035197  0.1  0.0  55948 15856 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn nbb_darwin_godel_machines:app --host 0.0.0.0 --port 7003
root     3035235  0.0  0.0   2680   884 ?        Ss   12:26   0:00 /bin/sh -c pip install fastapi uvicorn httpx redis --quiet && python3 jarvis_eeg_theta_60s.py
root     3035313  0.0  0.0   2680   808 ?        Ss   12:26   0:00 /bin/sh -c pip install fastapi uvicorn httpx redis --quiet && python3 jarvis_eeg_delta_30s.py
root     3035507  0.0  0.0   2680   884 ?        Ss   12:26   0:00 /bin/sh -c pip install fastapi uvicorn httpx redis --quiet && python3 jarvis_eeg_beta_5m.py
root     3035584  0.0  0.0 145188 17708 ?        Ss   12:26   0:05 python3 ms_jarvis_swarm_intelligence.py
root     3035631  0.1  0.0  57012 15804 ?        Ss   12:26   1:05 python3 ms_jarvis_agents_service.py
root     3035876  0.1  0.0 364772 19812 ?        Ssl  12:26   0:51 python3 ai_server_20llm_PRODUCTION.py
root     3035907  0.1  0.0  54860 16436 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn spiritual_maternal_integration:app --host 0.0.0.0 --port 7009
root     3035916  0.1  0.0 139456 20580 ?        Ssl  12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm13_health_proxy:app --host 0.0.0.0 --port 8213
root     3035942  0.1  0.0  62924 18884 ?        Ss   12:26   1:03 /usr/local/bin/python3.11 /usr/local/bin/uvicorn woah_service:app --host 0.0.0.0 --port 7012
root     3035952  0.1  0.0  59920 15872 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm15_health_proxy:app --host 0.0.0.0 --port 8215
root     3035961  0.1  0.1 214100 45556 ?        Ss   12:26   1:09 python3 ms_jarvis_blood_brain_barrier.py
root     3035970  0.2  0.1 255816 45080 ?        Ssl  12:26   1:44 /usr/local/bin/python3.12 /usr/local/bin/uvicorn pituitary_gland:app --host 0.0.0.0 --port 80
root     3035974  0.1  0.0  59920 16440 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn llm14_health_proxy:app --host 0.0.0.0 --port 8214
root     3035975  0.1  0.0  54864 15132 ?        Ss   12:26   1:05 /usr/local/bin/python3.12 /usr/local/bin/uvicorn blood_brain_barrier:app --host 0.0.0.0 --port 7001
root     3038437  0.2  0.1 247248 52892 ?        Sl   12:26   1:34 python3 jarvis_eeg_delta_30s.py
root     3038727  0.1  0.1 248288 60140 ?        Sl   12:26   1:03 python3 jarvis_eeg_theta_60s.py
root     3038758  0.0  0.0  67092  3692 ?        Ss   12:26   0:00 python3 services/confidence_decay_loop.py
root     3038808  0.1  0.1 248064 43208 ?        Sl   12:26   0:53 python3 jarvis_eeg_beta_5m.py
root     3045398  0.1  0.0 159020 13916 ?        Ssl  12:29   0:47 /usr/local/bin/python3.11 /usr/local/bin/uvicorn community_stake_registry:app --host 0.0.0.0 --port 8084
root     3045411  0.1  0.0 157592 12044 ?        Ssl  12:29   0:47 /usr/local/bin/python3.11 /usr/local/bin/uvicorn token_service:app --host 0.0.0.0 --port 8083
root     3045418  0.1  0.0 159080 15232 ?        Ssl  12:29   0:47 /usr/local/bin/python3.11 /usr/local/bin/uvicorn dao_governance:app --host 0.0.0.0 --port 8082
root     3045425  0.1  0.0 163496 13688 ?        Ssl  12:29   0:48 /usr/local/bin/python3.11 /usr/local/bin/uvicorn mountainshares_coordinator:app --host 0.0.0.0 --port 8080
root     3050233  0.1  0.0  96176 17696 ?        Ss   12:32   1:01 python3 gbim_query_router.py
root     3165254  0.2  0.1 252088 44864 ?        Ssl  13:44   1:32 /usr/local/bin/python3.12 /usr/local/bin/uvicorn prefrontal_cortex:app --host 0.0.0.0 --port 80
root     3177221  0.0  0.0 241300  5292 ?        Ssl  13:53   0:01 python -m ingest_watcher
root     3185351  0.1  0.0  59176 13980 ?        Ss   14:01   0:53 /usr/local/bin/python3.11 /usr/local/bin/uvicorn local_resources_resolver:app --host 0.0.0.0 --port 8055
root     3239155  0.0  0.0   2680   176 ?        Ss   14:55   0:00 sh -lc cd /app/services && python3 -m uvicorn auth_api:app --host 0.0.0.0 --port 8091
root     3239267  0.1  0.0 290760 18796 ?        Sl   14:55   0:47 python3 -m uvicorn auth_api:app --host 0.0.0.0 --port 8091
root     3336637  0.1  0.1 3986308 33484 ?       Ssl  16:27   0:43 /usr/local/bin/python3.11 /usr/local/bin/uvicorn ms_jarvis_autonomous_learner_optimized:app --host 0.0.0.0 --port 8020
root     3443470  0.1  0.0 141340 19248 ?        Ssl  Apr25  13:56 python lm_synthesizer.py
root     3573605  0.1  0.0 162460 10724 ?        Ssl  20:26   0:13 python3 brain_orchestrator.py
root     3573613  0.0  0.0   2680   112 ?        Ss   20:26   0:00 /bin/sh -c pip install redis httpx --quiet && python3 ms_jarvis_unified_gateway.py
root     3573780  0.2  0.2 385924 66596 ?        Sl   20:26   0:23 python3 ms_jarvis_unified_gateway.py
root     3580097  0.1  0.0 154128 13732 ?        Ssl  20:29   0:13 /usr/local/bin/python3.10 /usr/local/bin/uvicorn ms_jarvis_woah_algorithms:app --host 0.0.0.0 --port 8104 --app-dir /app/services
root     3587992  0.1  0.1 382880 54948 ?        Ssl  Apr25  11:28 python3 ms_jarvis_neurobiological_master.py
root     3628206  0.0  0.0  12268  5988 ?        Ss   21:11   0:00 python3 -c import time; print("jarvis-ingest-api: deprecated stub"); time.sleep(86400)
root     3635973  0.0  0.0   2680   932 ?        Ss   21:13   0:00 sh -lc cd /app/services && python3 -m uvicorn main_brain:app --host 0.0.0.0 --port 8050
root     3636089  0.2  0.1 468380 35476 ?        Sl   21:13   0:17 python3 -m uvicorn main_brain:app --host 0.0.0.0 --port 8050
root     3636385  0.1  0.0 138876 28096 ?        Ssl  21:14   0:13 /usr/local/bin/python3.11 /usr/local/bin/uvicorn ms_jarvis_rag_server:app --host 0.0.0.0 --port 8003
root     3783408  0.2  0.0  48668 25264 ?        Ss   23:08   0:01 python3 -m uvicorn qualia_engine:app --host 0.0.0.0 --port 8017 --app-dir /app/neurobiological_brain/qualia_engine/service
root     3792907  1.4  0.1 121392 39512 ?        Ssl  23:16   0:00 python3 gbim_verification_loop.py
geodb_id,lat,lon,bbox,label,sourcetable,country
21,4529402.42016778,591172.9315936005,"POLYGON((570128.4518367348 4502133.535768763,570128.4518367348 4558961.269764682,609943.9390462046 4558961.269764682,609943.9390462046 4502133.535768763,570128.4518367348 4502133.535768763))",Butler,boundaryappalachianbasin_wvges_1996_utm83,USA
27,4520773.983018066,831454.5921704532,"POLYGON((807025.4359620614 4506504.131938138,807025.4359620614 4534385.001114986,852991.6866574776 4534385.001114986,852991.6866574776 4506504.131938138,807025.4359620614 4506504.131938138))",Snyder,boundaryappalachianbasin_wvges_1996_utm83,USA
28,4503813.867960793,554812.505209657,"POLYGON((540315.7749495462 4481008.490005786,540315.7749495462 4523196.789983927,571878.0114681028 4523196.789983927,571878.0114681028 4481008.490005786,540315.7749495462 4481008.490005786))",Beaver,boundaryappalachianbasin_wvges_1996_utm83,USA
35,4224211.568469519,668498.6854025387,"POLYGON((665189.9208781201 4220621.906875103,665189.9208781201 4227703.124924608,671751.6549104507 4227703.124924608,671751.6549104507 4220621.906875103,665189.9208781201 4220621.906875103))",Staunton,boundaryappalachianbasin_wvges_1996_utm83,USA
43,4649640.475794614,579408.635082541,"POLYGON((539625.7736050218 4633318.267812736,539625.7736050218 4680198.409549645,614920.5674886965 4680198.409549645,614920.5674886965 4633318.267812736,539625.7736050218 4633318.267812736))",Erie,boundaryappalachianbasin_wvges_1996_utm83,USA
59,4148737.616723306,570125.3406967996,"POLYGON((546473.4973275035 4130596.573594483,546473.4973275035 4168110.0050534643,591047.3148529838 4168110.0050534643,591047.3148529838 4130596.573594483,546473.4973275035 4130596.573594483))",Craig,boundaryappalachianbasin_wvges_1996_utm83,USA
147,4615719.285892659,480669.11871293955,"POLYGON((460163.7612536094 4601451.040283975,460163.7612536094 4633150.667439412,500018.8705927008 4633150.667439412,500018.8705927008 4601451.040283975,460163.7612536094 4601451.040283975))",Lake,boundaryappalachianbasin_wvges_1996_utm83,USA
274,4213610.551538194,243651.29238340183,"POLYGON((229460.43098152522 4199210.971239382,229460.43098152522 4231445.627235814,257997.27427187588 4231445.627235814,257997.27427187588 4199210.971239382,229460.43098152522 4199210.971239382))",Montgomery,boundaryappalachianbasin_wvges_1996_utm83,USA
311,4071658.8362588477,188013.01636220032,"POLYGON((160879.73988726287 4054940.7133064396,160879.73988726287 4095563.1679462977,209960.064440765 4095563.1679462977,209960.064440765 4054940.7133064396,160879.73988726287 4054940.7133064396))",McCreary,boundaryappalachianbasin_wvges_1996_utm83,USA
312,4068662.507691989,260908.04177205267,"POLYGON((235146.41570380173 4052136.1110707424,235146.41570380173 4093354.0473115947,280114.03757151205 4093354.0473115947,280114.03757151205 4052136.1110707424,235146.41570380173 4052136.1110707424))",Bell,boundaryappalachianbasin_wvges_1996_utm83,USA
313,4072856.330875943,129991.16222294162,"POLYGON((115424.4427783647 4060278.5067968,115424.4427783647 4090690.088425198,142390.27076650376 4090690.088425198,142390.27076650376 4060278.5067968,115424.4427783647 4060278.5067968))",Clinton,boundaryappalachianbasin_wvges_1996_utm83,USA
1,4388354.905520831,697572.7598661756,"POLYGON((666459.9164527165 4367407.619635755,666459.9164527165 4400532.71429436,730635.9622513728 4400532.71429436,730635.9622513728 4367407.619635755,666459.9164527165 4367407.619635755))",Allegany,boundaryappalachianbasin_wvges_1996_utm83,USA
2,4376796.592944305,648244.726338414,"POLYGON((630194.2132885469 4339768.40809419,630194.2132885469 4398988.342503206,677400.4912976824 4398988.342503206,677400.4912976824 4339768.40809419,630194.2132885469 4339768.40809419))",Garrett,boundaryappalachianbasin_wvges_1996_utm83,USA
3,4608359.641580751,915713.5623213793,"POLYGON((894319.5452401137 4592057.141300856,894319.5452401137 4623425.581109653,939147.8736350131 4623425.581109653,939147.8736350131 4592057.141300856,894319.5452401137 4592057.141300856))",Wyoming,boundaryappalachianbasin_wvges_1996_utm83,USA
4,4601506.518589945,950161.1380448347,"POLYGON((931367.4416198481 4571117.789890493,931367.4416198481 4624770.268168511,965071.1105870807 4624770.268168511,965071.1105870807 4571117.789890493,931367.4416198481 4571117.789890493))",Lackawanna,boundaryappalachianbasin_wvges_1996_utm83,USA
5,4588962.256119359,696398.5446987046,"POLYGON((659296.1351690013 4563642.099959966,659296.1351690013 4612088.83667577,731018.0749701648 4612088.83667577,731018.0749701648 4563642.099959966,659296.1351690013 4563642.099959966))",Elk,boundaryappalachianbasin_wvges_1996_utm83,USA
6,4584260.802483544,603379.862059718,"POLYGON((583211.5678108935 4558398.94191936,583211.5678108935 4609626.80564158,626994.6553702521 4609626.80564158,626994.6553702521 4558398.94191936,583211.5678108935 4558398.94191936))",Venango,boundaryappalachianbasin_wvges_1996_utm83,USA
7,4597280.386807526,647032.0068668983,"POLYGON((623014.7733067134 4575828.378325993,623014.7733067134 4610409.268729244,670479.98435111 4610409.268729244,670479.98435111 4575828.378325993,623014.7733067134 4575828.378325993))",Forest,boundaryappalachianbasin_wvges_1996_utm83,USA
8,4591214.361405949,733153.7008637831,"POLYGON((714558.972739409 4567014.031309651,714558.972739409 4611399.784508182,751312.1570096774 4611399.784508182,751312.1570096774 4567014.031309651,714558.972739409 4567014.031309651))",Cameron,boundaryappalachianbasin_wvges_1996_utm83,USA
9,4584479.889131001,828869.2960068308,"POLYGON((783061.540863152 4554106.125437485,783061.540863152 4613524.086517376,881384.7957508318 4613524.086517376,881384.7957508318 4554106.125437485,783061.540863152 4554106.125437485))",Lycoming,boundaryappalachianbasin_wvges_1996_utm83,USA
10,4598227.743591013,874674.7606808927,"POLYGON((848459.0943349354 4579696.474000368,848459.0943349354 4612979.844182922,898696.7441411715 4612979.844182922,898696.7441411715 4579696.474000368,848459.0943349354 4579696.474000368))",Sullivan,boundaryappalachianbasin_wvges_1996_utm83,USA
11,4572578.191343555,561926.1536722445,"POLYGON((540043.4446370655 4546745.367951655,540043.4446370655 4593527.725733041,583548.1553790113 4593527.725733041,583548.1553790113 4546745.367951655,540043.4446370655 4546745.367951655))",Mercer,boundaryappalachianbasin_wvges_1996_utm83,USA
12,4570036.3774203975,781389.2959489513,"POLYGON((743153.4997774316 4540584.863927336,743153.4997774316 4597341.62537395,824109.5033243746 4597341.62537395,824109.5033243746 4540584.863927336,743153.4997774316 4540584.863927336))",Clinton,boundaryappalachianbasin_wvges_1996_utm83,USA
13,4561334.294460234,632060.80591422,"POLYGON((609245.9664941725 4536407.622125958,609245.9664941725 4588299.58766142,649886.7318812585 4588299.58766142,649886.7318812585 4536407.622125958,609245.9664941725 4536407.622125958))",Clarion,boundaryappalachianbasin_wvges_1996_utm83,USA
14,4570641.8977409,920089.1924695809,"POLYGON((892196.629388917 4539781.9640713055,892196.629388917 4598523.176171228,952543.0464091372 4598523.176171228,952543.0464091372 4539781.9640713055,892196.629388917 4539781.9640713055))",Luzerne,boundaryappalachianbasin_wvges_1996_utm83,USA
15,4555251.246747614,667767.1996503182,"POLYGON((649611.488786427 4530887.489511643,649611.488786427 4582640.651001579,692067.8889538641 4582640.651001579,692067.8889538641 4530887.489511643,649611.488786427 4530887.489511643))",Jefferson,boundaryappalachianbasin_wvges_1996_utm83,USA
16,4554338.907359924,885772.6220814072,"POLYGON((865100.6052819628 4524211.241980736,865100.6052819628 4583834.506201782,903122.4701736771 4583834.506201782,903122.4701736771 4524211.241980736,865100.6052819628 4524211.241980736))",Columbia,boundaryappalachianbasin_wvges_1996_utm83,USA
17,4534657.548173698,767339.5319953847,"POLYGON((720992.3534678231 4508855.948549931,720992.3534678231 4571997.821177476,823412.6229613629 4571997.821177476,823412.6229613629 4508855.948549931,720992.3534678231 4508855.948549931))",Centre,boundaryappalachianbasin_wvges_1996_utm83,USA
18,4213186.184863525,610729.6500182633,"POLYGON((583036.2801194824 4189169.3602920603,583036.2801194824 4236312.903389155,636467.6931636825 4236312.903389155,636467.6931636825 4189169.3602920603,583036.2801194824 4189169.3602920603))",Bath,boundaryappalachianbasin_wvges_1996_utm83,USA
19,4541863.198271723,712280.874081502,"POLYGON((684237.3744347505 4510341.582075003,684237.3744347505 4569849.742776197,748100.6996718583 4569849.742776197,748100.6996718583 4510341.582075003,684237.3744347505 4510341.582075003))",Clearfield,boundaryappalachianbasin_wvges_1996_utm83,USA
20,4531099.429841021,861476.7391352626,"POLYGON((843141.1453450721 4503298.428232733,843141.1453450721 4566958.170693071,889049.49517019 4566958.170693071,889049.49517019 4503298.428232733,843141.1453450721 4503298.428232733))",Northumberland,boundaryappalachianbasin_wvges_1996_utm83,USA
22,4519333.219099558,628745.2722826026,"POLYGON((609245.9664941725 4487542.632979181,609245.9664941725 4558961.269764682,650040.6310977892 4558961.269764682,650040.6310977892 4487542.632979181,609245.9664941725 4487542.632979181))",Armstrong,boundaryappalachianbasin_wvges_1996_utm83,USA
23,4550913.715826635,864477.6346779129,"POLYGON((853603.8930631083 4535207.674992072,853603.8930631083 4566387.224845207,876535.4481446852 4566387.224845207,876535.4481446852 4535207.674992072,853603.8930631083 4535207.674992072))",Montour,boundaryappalachianbasin_wvges_1996_utm83,USA
24,4542299.3156532245,831189.4936296178,"POLYGON((806524.0385214473 4524206.523256657,806524.0385214473 4563148.013760228,851518.3866517246 4563148.013760228,851518.3866517246 4524206.523256657,806524.0385214473 4524206.523256657))",Union,boundaryappalachianbasin_wvges_1996_utm83,USA
25,4538214.8048963705,555700.9708669318,"POLYGON((540043.4446370655 4522679.33864464,540043.4446370655 4553345.895772588,575181.2994378776 4553345.895772588,575181.2994378776 4522679.33864464,540043.4446370655 4522679.33864464))",Lawrence,boundaryappalachianbasin_wvges_1996_utm83,USA
26,4501959.740766167,661152.4808165891,"POLYGON((630175.5967320054 4470296.059206741,630175.5967320054 4530910.40876495,685162.2926709328 4530910.40876495,685162.2926709328 4470296.059206741,630175.5967320054 4470296.059206741))",Indiana,boundaryappalachianbasin_wvges_1996_utm83,USA
29,4501250.672553444,785889.2218607093,"POLYGON((762757.6040614104 4473408.85726089,762757.6040614104 4529030.384717074,812547.9489663497 4529030.384717074,812547.9489663497 4473408.85726089,762757.6040614104 4473408.85726089))",Mifflin,boundaryappalachianbasin_wvges_1996_utm83,USA
30,4485001.915555003,724650.6426824777,"POLYGON((702073.3480129489 4458281.7063631145,702073.3480129489 4514539.088018031,743386.3518754113 4514539.088018031,743386.3518754113 4458281.7063631145,702073.3480129489 4458281.7063631145))",Blair,boundaryappalachianbasin_wvges_1996_utm83,USA
31,4478262.414840028,755976.6711107523,"POLYGON((732141.777045934 4439476.33425493,732141.777045934 4514785.519643756,780394.5292382559 4514785.519643756,780394.5292382559 4439476.33425493,732141.777045934 4439476.33425493))",Huntingdon,boundaryappalachianbasin_wvges_1996_utm83,USA
32,4484765.166031249,693272.5810523299,"POLYGON((664745.3359926888 4456230.8495105645,664745.3359926888 4511645.310791984,722832.5426052739 4511645.310791984,722832.5426052739 4456230.8495105645,664745.3359926888 4456230.8495105645))",Cambria,boundaryappalachianbasin_wvges_1996_utm83,USA
33,4493269.718030421,804365.0050370834,"POLYGON((775327.9154324643 4462509.614776507,775327.9154324643 4512267.883051924,843506.9800165494 4512267.883051924,843506.9800165494 4462509.614776507,775327.9154324643 4462509.614776507))",Juniata,boundaryappalachianbasin_wvges_1996_utm83,USA
34,4463304.117423867,629888.9192732072,"POLYGON((593585.2128822922 4433232.526426373,593585.2128822922 4504145.595119481,671240.8932707737 4504145.595119481,671240.8932707737 4433232.526426373,593585.2128822922 4433232.526426373))",Westmoreland,boundaryappalachianbasin_wvges_1996_utm83,USA
36,4480117.229556156,585931.0421283526,"POLYGON((553792.5494790887 4450444.870456648,553792.5494790887 4502979.963126867,609943.9390462046 4502979.963126867,609943.9390462046 4450444.870456648,553792.5494790887 4450444.870456648))",Allegheny,boundaryappalachianbasin_wvges_1996_utm83,USA
37,4449221.142707924,563688.3758979175,"POLYGON((540315.7749495462 4422662.666751282,540315.7749495462 4481151.335476673,598301.0036609145 4481151.335476673,598301.0036609145 4422662.666751282,540315.7749495462 4422662.666751282))",Washington,boundaryappalachianbasin_wvges_1996_utm83,USA
38,4431561.528998333,714108.0850107148,"POLYGON((687034.0532058359 4399303.399333767,687034.0532058359 4466736.21766933,743983.4498979566 4466736.21766933,743983.4498979566 4399303.399333767,687034.0532058359 4399303.399333767))",Bedford,boundaryappalachianbasin_wvges_1996_utm83,USA
39,4426423.584874489,668109.4801908823,"POLYGON((635411.4820091585 4397833.49690599,635411.4820091585 4461572.634864277,698935.8341461241 4461572.634864277,698935.8341461241 4397833.49690599,635411.4820091585 4397833.49690599))",Somerset,boundaryappalachianbasin_wvges_1996_utm83,USA
40,4423381.877822617,746526.2885953087,"POLYGON((724145.5254496248 4400367.219428186,724145.5254496248 4449760.182857582,767223.4623270656 4449760.182857582,767223.4623270656 4400367.219428186,724145.5254496248 4400367.219428186))",Fulton,boundaryappalachianbasin_wvges_1996_utm83,USA
41,4419673.187521736,615188.9698683512,"POLYGON((584079.0734869007 4397425.047613697,584079.0734869007 4444079.653333172,645252.4892063527 4444079.653333172,645252.4892063527 4397425.047613697,584079.0734869007 4397425.047613697))",Fayette,boundaryappalachianbasin_wvges_1996_utm83,USA
42,4411929.807434655,565894.958504408,"POLYGON((540600.3580586779 4396819.033912935,540600.3580586779 4430392.075061814,593340.6713254859 4430392.075061814,593340.6713254859 4396819.033912935,540600.3580586779 4396819.033912935))",Greene,boundaryappalachianbasin_wvges_1996_utm83,USA
44,4636314.8169567315,872405.4667787501,"POLYGON((837217.2559220954 4610179.498833562,837217.2559220954 4661263.548255853,906379.9760958712 4661263.548255853,906379.9760958712 4610179.498833562,837217.2559220954 4610179.498833562))",Bradford,boundaryappalachianbasin_wvges_1996_utm83,USA
45,4631395.519449134,811016.0934194052,"POLYGON((780538.3898985463 4604746.428627583,780538.3898985463 4658082.590034993,843308.4051227941 4658082.590034993,843308.4051227941 4604746.428627583,780538.3898985463 4604746.428627583))",Tioga,boundaryappalachianbasin_wvges_1996_utm83,USA
46,4630875.782276326,642950.3504304198,"POLYGON((614533.3884420284 4609200.858515037,614533.3884420284 4651854.913231244,672883.6239564046 4651854.913231244,672883.6239564046 4609200.858515037,614533.3884420284 4609200.858515037))",Warren,boundaryappalachianbasin_wvges_1996_utm83,USA
47,4642939.280381068,931696.3174311057,"POLYGON((902124.5421321702 4621629.631196675,902124.5421321702 4664136.076401531,960960.1794563353 4664136.076401531,960960.1794563353 4621629.631196675,902124.5421321702 4621629.631196675))",Susquehanna,boundaryappalachianbasin_wvges_1996_utm83,USA
48,4631587.304175709,701729.4304203878,"POLYGON((669963.6861016424 4609367.868980282,669963.6861016424 4653357.989703145,732464.4046214127 4653357.989703145,732464.4046214127 4609367.868980282,669963.6861016424 4609367.868980282))",McKean,boundaryappalachianbasin_wvges_1996_utm83,USA
49,4626005.865582052,757857.4227731158,"POLYGON((731552.658648647 4595825.08785151,731552.658648647 4655198.199454156,783463.6211882038 4655198.199454156,783463.6211882038 4595825.08785151,731552.658648647 4595825.08785151))",Potter,boundaryappalachianbasin_wvges_1996_utm83,USA
50,4615277.1487684995,573778.0604586137,"POLYGON((539625.7736050218 4592282.194569539,539625.7736050218 4634260.689882124,614889.4515641067 4634260.689882124,614889.4515641067 4592282.194569539,539625.7736050218 4592282.194569539))",Crawford,boundaryappalachianbasin_wvges_1996_utm83,USA
51,4303928.925789267,710974.1943871846,"POLYGON((685361.266035628 4275998.057627036,685361.266035628 4331566.758819161,733864.6521909937 4331566.758819161,733864.6521909937 4275998.057627036,685361.266035628 4275998.057627036))",Shenandoah,boundaryappalachianbasin_wvges_1996_utm83,USA
52,4264787.058689943,685144.7713364144,"POLYGON((654242.3905898976 4231182.3817493515,654242.3905898976 4301696.184472798,719178.2922552926 4301696.184472798,719178.2922552926 4231182.3817493515,654242.3905898976 4231182.3817493515))",Rockingham,boundaryappalachianbasin_wvges_1996_utm83,USA
53,4246775.347206518,625237.06237968,"POLYGON((604686.6658397657 4227042.726212494,604686.6658397657 4272415.207477867,646936.0194638661 4272415.207477867,646936.0194638661 4227042.726212494,604686.6658397657 4227042.726212494))",Highland,boundaryappalachianbasin_wvges_1996_utm83,USA
54,4225684.367073682,663926.1625223833,"POLYGON((631284.1398201734 4195181.77145787,631284.1398201734 4260610.603847837,696829.745384487 4260610.603847837,696829.745384487 4195181.77145787,631284.1398201734 4195181.77145787))",Augusta,boundaryappalachianbasin_wvges_1996_utm83,USA
55,4186636.44579759,636804.466889924,"POLYGON((615898.549846663 4155654.443409277,615898.549846663 4216387.733421103,663601.8598831171 4216387.733421103,663601.8598831171 4155654.443409277,615898.549846663 4155654.443409277))",Rockbridge,boundaryappalachianbasin_wvges_1996_utm83,USA
56,4182717.65597506,587269.2997268963,"POLYGON((561318.6573396099 4162202.4015604807,561318.6573396099 4202081.696223271,623067.1426749802 4202081.696223271,623067.1426749802 4162202.4015604807,561318.6573396099 4162202.4015604807))",Alleghany,boundaryappalachianbasin_wvges_1996_utm83,USA
57,4182835.9383261837,636531.5862218321,"POLYGON((634729.5325623453 4180594.4399050595,634729.5325623453 4184896.727704082,638530.23989589 4184896.727704082,638530.23989589 4180594.4399050595,634729.5325623453 4180594.4399050595))",Lexington,boundaryappalachianbasin_wvges_1996_utm83,USA
58,4157237.8428022736,604985.8643214825,"POLYGON((581280.9405155851 4129592.474111489,581280.9405155851 4183759.9997295383,632518.2800708883 4183759.9997295383,632518.2800708883 4129592.474111489,581280.9405155851 4129592.474111489))",Botetourt,boundaryappalachianbasin_wvges_1996_utm83,USA
60,4124834.637766055,408575.4065391697,"POLYGON((385771.12737798446 4100020.719880164,385771.12737798446 4154232.2489713426,434510.7321484184 4154232.2489713426,434510.7321484184 4100020.719880164,385771.12737798446 4100020.719880164))",Buchanan,boundaryappalachianbasin_wvges_1996_utm83,USA
61,4129863.7777246367,526574.0945859691,"POLYGON((499319.0380874377 4111867.919217921,499319.0380874377 4147686.283715305,550951.9384174761 4147686.283715305,550951.9384174761 4111867.919217921,499319.0380874377 4111867.919217921))",Giles,boundaryappalachianbasin_wvges_1996_utm83,USA
62,4125419.801427158,582978.9382373051,"POLYGON((565583.3118276792 4107675.981428123,565583.3118276792 4141463.1752217677,602199.4944443286 4141463.1752217677,602199.4944443286 4107675.981428123,565583.3118276792 4107675.981428123))",Roanoke,boundaryappalachianbasin_wvges_1996_utm83,USA
63,4114624.8053458612,554283.1005045732,"POLYGON((533667.5046468078 4093013.139086006,533667.5046468078 4135361.817043182,573259.9923391021 4135361.817043182,573259.9923391021 4093013.139086006,533667.5046468078 4093013.139086006))",Montgomery,boundaryappalachianbasin_wvges_1996_utm83,USA
64,4109065.179429335,449969.1252448826,"POLYGON((419516.4851138327 4088110.339214094,419516.4851138327 4132534.9105979186,480226.81731759565 4132534.9105979186,480226.81731759565 4088110.339214094,419516.4851138327 4088110.339214094))",Tazewell,boundaryappalachianbasin_wvges_1996_utm83,USA
65,4125628.5018707328,593137.9547518743,"POLYGON((587681.9354153364 4120066.1763624176,587681.9354153364 4131168.2194963717,598072.8004747776 4131168.2194963717,598072.8004747776 4120066.1763624176,587681.9354153364 4120066.1763624176))",Roanoke City,boundaryappalachianbasin_wvges_1996_utm83,USA
66,4127292.3962452323,583109.4179360333,"POLYGON((578313.9299616546 4124773.0571262124,578313.9299616546 4130480.585657908,586620.3227108938 4130480.585657908,586620.3227108938 4124773.0571262124,578313.9299616546 4124773.0571262124))",Salem,boundaryappalachianbasin_wvges_1996_utm83,USA
67,4109928.2956900145,488353.96234440024,"POLYGON((459427.1785305023 4090771.6576388576,459427.1785305023 4128845.689902461,513274.68819725025 4128845.689902461,513274.68819725025 4090771.6576388576,459427.1785305023 4090771.6576388576))",Bland,boundaryappalachianbasin_wvges_1996_utm83,USA
68,4109648.333358038,380534.6673595046,"POLYGON((362439.92439212045 4091085.817694244,362439.92439212045 4129471.2669198387,399497.9640878596 4129471.2669198387,399497.9640878596 4091085.817694244,362439.92439212045 4091085.817694244))",Dickenson,boundaryappalachianbasin_wvges_1996_utm83,USA
69,4102001.2460993472,525599.480428614,"POLYGON((506193.6564941012 4082059.3200499616,506193.6564941012 4122302.882559316,542867.3973146443 4122302.882559316,542867.3973146443 4082059.3200499616,506193.6564941012 4082059.3200499616))",Pulaski,boundaryappalachianbasin_wvges_1996_utm83,USA
70,4093480.39133665,356052.09540745715,"POLYGON((332658.3453658345 4074858.000199619,332658.3453658345 4118115.569848746,384728.248991777 4118115.569848746,384728.248991777 4074858.000199619,332658.3453658345 4074858.000199619))",Wise,boundaryappalachianbasin_wvges_1996_utm83,USA
71,4088070.617147331,402560.49498246127,"POLYGON((375074.0586798919 4063850.304616252,375074.0586798919 4110951.82343805,431460.82951819134 4110951.82343805,431460.82951819134 4063850.304616252,375074.0586798919 4063850.304616252))",Russell,boundaryappalachianbasin_wvges_1996_utm83,USA
72,4085803.048411262,493141.65201099426,"POLYGON((465684.5606856211 4067943.0904679904,465684.5606856211 4103013.442863137,524036.5275513 4103013.442863137,524036.5275513 4067943.0904679904,465684.5606856211 4067943.0904679904))",Wythe,boundaryappalachianbasin_wvges_1996_utm83,USA
73,4077663.2194310245,452274.14616770105,"POLYGON((425955.85457870737 4054524.4458424924,425955.85457870737 4096829.434778607,477088.75988779846 4096829.434778607,477088.75988779846 4054524.4458424924,425955.85457870737 4054524.4458424924))",Smyth,boundaryappalachianbasin_wvges_1996_utm83,USA
86,4552688.364329539,456251.43619322433,"POLYGON((442837.5335494694 4528518.365809617,442837.5335494694 4577558.639672549,468454.56673338497 4577558.639672549,468454.56673338497 4528518.365809617,442837.5335494694 4528518.365809617))",Summit,boundaryappalachianbasin_wvges_1996_utm83,USA
74,4064526.3480533455,414262.62618891045,"POLYGON((380763.0766980613 4050373.770928456,380763.0766980613 4087174.577824057,445906.5515591423 4087174.577824057,445906.5515591423 4050373.770928456,380763.0766980613 4050373.770928456))",Washington,boundaryappalachianbasin_wvges_1996_utm83,USA
75,4064419.9215676957,310581.5439356843,"POLYGON((260702.90984903395 4051371.4936184604,260702.90984903395 4084726.4214119613,342475.71134022693 4084726.4214119613,342475.71134022693 4051371.4936184604,260702.90984903395 4051371.4936184604))",Lee,boundaryappalachianbasin_wvges_1996_utm83,USA
76,4064332.135093419,357027.1511593814,"POLYGON((322279.4907238071 4050373.770928456,322279.4907238071 4083705.1903897254,383993.89191413333 4083705.1903897254,383993.89191413333 4050373.770928456,322279.4907238071 4050373.770928456))",Scott,boundaryappalachianbasin_wvges_1996_utm83,USA
77,4610715.205233198,279282.2450407712,"POLYGON((260064.97739701948 4588823.985904494,260064.97739701948 4622237.113289738,320586.4208401224 4622237.113289738,320586.4208401224 4588823.985904494,260064.97739701948 4588823.985904494))",Lucas,boundaryappalachianbasin_wvges_1996_utm83,USA
78,4593857.809691337,485611.50739637966,"POLYGON((468325.11391850386 4576928.566349811,468325.11391850386 4617818.723433338,499921.8870730562 4617818.723433338,499921.8870730562 4576928.566349811,468325.11391850386 4576928.566349811))",Geauga,boundaryappalachianbasin_wvges_1996_utm83,USA
79,4586059.016638532,445517.9170067904,"POLYGON((419055.57471550256 4569122.564866201,419055.57471550256 4608997.846556854,469812.4868863137 4608997.846556854,469812.4868863137 4569122.564866201,419055.57471550256 4569122.564866201))",Cuyahoga,boundaryappalachianbasin_wvges_1996_utm83,USA
80,4600167.253443327,319328.86184047733,"POLYGON((298927.0944107927 4591460.515059921,298927.0944107927 4610503.279985699,351057.4491793335 4610503.279985699,351057.4491793335 4591460.515059921,298927.0944107927 4591460.515059921))",Ottawa,boundaryappalachianbasin_wvges_1996_utm83,USA
81,4581953.995537289,281158.89413091296,"POLYGON((259147.40241689078 4559844.982405636,259147.40241689078 4610004.468496534,299435.4828091216 4610004.468496534,299435.4828091216 4559844.982405636,259147.40241689078 4559844.982405636))",Wood,boundaryappalachianbasin_wvges_1996_utm83,USA
82,4572318.709049947,403941.8428340481,"POLYGON((387925.30700682517 4545937.95847526,387925.30700682517 4596461.807811693,427316.81395342754 4596461.807811693,427316.81395342754 4545937.95847526,387925.30700682517 4545937.95847526))",Lorain,boundaryappalachianbasin_wvges_1996_utm83,USA
83,4580210.40558273,320976.66218250815,"POLYGON((297650.26545782684 4568611.850851379,297650.26545782684 4596820.451347599,346429.10301979905 4596820.451347599,346429.10301979905 4568611.850851379,297650.26545782684 4568611.850851379))",Sandusky,boundaryappalachianbasin_wvges_1996_utm83,USA
84,4573593.264588852,519870.06343063916,"POLYGON((499453.72017397685 4553256.797818088,499453.72017397685 4593829.850501589,540069.1028544778 4593829.850501589,540069.1028544778 4553256.797818088,499453.72017397685 4553256.797818088))",Trumbull,boundaryappalachianbasin_wvges_1996_utm83,USA
85,4579407.438731847,366093.61938382586,"POLYGON((340498.7591362053 4571009.05128477,340498.7591362053 4590194.211143068,388062.57136625174 4590194.211143068,388062.57136625174 4571009.05128477,340498.7591362053 4571009.05128477))",Erie,boundaryappalachianbasin_wvges_1996_utm83,USA
87,4556971.628969383,483967.90114676196,"POLYGON((467898.55752330803 4536983.014808185,467898.55752330803 4577273.123570663,500029.02164872386 4577273.123570663,500029.02164872386 4536983.014808185,467898.55752330803 4536983.014808185))",Portage,boundaryappalachianbasin_wvges_1996_utm83,USA
88,4555836.7179388115,366380.57738790323,"POLYGON((346205.8952706281 4538564.763181902,346205.8952706281 4571996.269014742,388241.8393750038 4571996.269014742,388241.8393750038 4538564.763181902,346205.8952706281 4538564.763181902))",Huron,boundaryappalachianbasin_wvges_1996_utm83,USA
89,4551989.028489294,425076.68219734204,"POLYGON((401751.95494685136 4537244.182029172,401751.95494685136 4569652.173188124,443444.2102762119 4569652.173188124,443444.2102762119 4537244.182029172,401751.95494685136 4537244.182029172))",Medina,boundaryappalachianbasin_wvges_1996_utm83,USA
90,4554211.080271208,321702.2437545093,"POLYGON((296687.0808188909 4539254.454336231,296687.0808188909 4569187.5177633315,346243.8068692329 4569187.5177633315,346243.8068692329 4539254.454336231,296687.0808188909 4539254.454336231))",Seneca,boundaryappalachianbasin_wvges_1996_utm83,USA
91,4541801.943095501,276285.01268937293,"POLYGON((257652.01330129613 4520977.544688684,257652.01330129613 4560897.666428221,297264.5250546573 4560897.666428221,297264.5250546573 4520977.544688684,257652.01330129613 4520977.544688684))",Hancock,boundaryappalachianbasin_wvges_1996_utm83,USA
92,4540184.979298141,518880.39765400504,"POLYGON((493212.8746229752 4527463.671150038,493212.8746229752 4553357.961702083,540353.5494633449 4553357.961702083,540353.5494633449 4527463.671150038,493212.8746229752 4527463.671150038))",Mahoning,boundaryappalachianbasin_wvges_1996_utm83,USA
93,4522258.745196963,393216.36658290453,"POLYGON((379917.561330463 4490644.22288233,379917.561330463 4546484.459495318,405140.07068182377 4546484.459495318,405140.07068182377 4490644.22288233,379917.561330463 4490644.22288233))",Ashland,boundaryappalachianbasin_wvges_1996_utm83,USA
94,4523725.869147371,338589.1208806667,"POLYGON((322139.2055026168 4507610.421663907,322139.2055026168 4539772.478007243,355349.4263777275 4539772.478007243,355349.4263777275 4507610.421663907,322139.2055026168 4507610.421663907))",Crawford,boundaryappalachianbasin_wvges_1996_utm83,USA
95,4514777.971012679,370718.6090960186,"POLYGON((354212.998728377 4489818.812553176,354212.998728377 4539178.688448659,387499.66211229714 4539178.688448659,387499.66211229714 4489818.812553176,354212.998728377 4489818.812553176))",Richland,boundaryappalachianbasin_wvges_1996_utm83,USA
96,4520103.459860379,425563.8632373653,"POLYGON((405051.7260098574 4501973.40903916,405051.7260098574 4538233.9586311765,446328.0326731575 4538233.9586311765,446328.0326731575 4501973.40903916,405051.7260098574 4501973.40903916))",Wayne,boundaryappalachianbasin_wvges_1996_utm83,USA
97,4523468.15750355,306278.2313587004,"POLYGON((288447.82105369883 4506338.587635416,288447.82105369883 4540065.755139977,322947.62056345725 4540065.755139977,322947.62056345725 4506338.587635416,288447.82105369883 4506338.587635416))",Wyandot,boundaryappalachianbasin_wvges_1996_utm83,USA
98,4517799.682096886,469737.7042923453,"POLYGON((445719.44503062265 4498144.186732177,445719.44503062265 4537079.9139079135,493402.32224153593 4537079.9139079135,493402.32224153593 4498144.186732177,445719.44503062265 4498144.186732177))",Stark,boundaryappalachianbasin_wvges_1996_utm83,USA
99,4512956.691705805,518899.3597658341,"POLYGON((492957.53385251376 4492425.086158541,492957.53385251376 4530894.530014119,540431.8473121864 4530894.530014119,540431.8473121864 4492425.086158541,492957.53385251376 4492425.086158541))",Columbiana,boundaryappalachianbasin_wvges_1996_utm83,USA
100,4504104.481735982,275576.08323878486,"POLYGON((256258.5540503912 4486042.934867243,256258.5540503912 4521916.033846201,295729.66609922866 4521916.033846201,295729.66609922866 4486042.934867243,256258.5540503912 4486042.934867243))",Hardin,boundaryappalachianbasin_wvges_1996_utm83,USA
101,4491719.805701393,492795.3957001663,"POLYGON((473073.3134577632 4474534.7567208875,473073.3134577632 4508201.011029011,512431.9916741398 4508201.011029011,512431.9916741398 4474534.7567208875,473073.3134577632 4474534.7567208875))",Carroll,boundaryappalachianbasin_wvges_1996_utm83,USA
102,4487493.357387191,348332.7164547196,"POLYGON((328662.54050877015 4467148.428090072,328662.54050877015 4508568.404724004,363220.7467033899 4508568.404724004,363220.7467033899 4467148.428090072,328662.54050877015 4467148.428090072))",Morrow,boundaryappalachianbasin_wvges_1996_utm83,USA
103,4495250.091954453,317190.55688427814,"POLYGON((294826.31712181773 4478594.116901406,294826.31712181773 4508156.432048837,343114.9423126279 4508156.432048837,343114.9423126279 4478594.116901406,294826.31712181773 4478594.116901406))",Marion,boundaryappalachianbasin_wvges_1996_utm83,USA
104,4490494.47469917,421757.90600157366,"POLYGON((396952.84065585124 4477146.029285281,396952.84065585124 4502904.9064029725,445731.2470180728 4502904.9064029725,445731.2470180728 4477146.029285281,396952.84065585124 4477146.029285281))",Holmes,boundaryappalachianbasin_wvges_1996_utm83,USA
105,4476152.5626285225,460227.2994592641,"POLYGON((439756.8999169532 4450927.331346018,439756.8999169532 4501280.4639934115,477839.4488701725 4501280.4639934115,477839.4488701725 4450927.331346018,439756.8999169532 4450927.331346018))",Tuscarawas,boundaryappalachianbasin_wvges_1996_utm83,USA
106,4470302.862906899,520360.29228393774,"POLYGON((505085.53816409025 4444760.6586752245,505085.53816409025 4493988.036299438,533748.2533447534 4493988.036299438,533748.2533447534 4444760.6586752245,505085.53816409025 4444760.6586752245))",Jefferson,boundaryappalachianbasin_wvges_1996_utm83,USA
107,4472866.6494920235,379857.92565118964,"POLYGON((351831.72338022245 4454117.264612517,351831.72338022245 4492166.092250004,400525.58301860734 4492166.092250004,400525.58301860734 4454117.264612517,351831.72338022245 4454117.264612517))",Knox,boundaryappalachianbasin_wvges_1996_utm83,USA
108,4474180.902234835,265610.3625888283,"POLYGON((244135.538864246 4456044.362802069,244135.538864246 4490806.071154906,286878.7725861807 4490806.071154906,286878.7725861807 4456044.362802069,244135.538864246 4456044.362802069))",Logan,boundaryappalachianbasin_wvges_1996_utm83,USA
109,4463411.174601144,298758.4518257022,"POLYGON((283496.0850098147 4441896.238193369,283496.0850098147 4486059.636613335,315470.6658629798 4486059.636613335,315470.6658629798 4441896.238193369,283496.0850098147 4441896.238193369))",Union,boundaryappalachianbasin_wvges_1996_utm83,USA
110,4461123.838862877,422315.77246075735,"POLYGON((398645.0039939649 4444007.620964753,398645.0039939649 4478802.182421017,448430.0897779101 4478802.182421017,448430.0897779101 4444007.620964753,398645.0039939649 4444007.620964753))",Coshocton,boundaryappalachianbasin_wvges_1996_utm83,USA
111,4460539.217725855,329813.0379928364,"POLYGON((308632.8366832738 4442914.284279402,308632.8366832738 4479703.668488566,352407.2585810969 4479703.668488566,352407.2585810969 4442914.284279402,308632.8366832738 4442914.284279402))",Delaware,boundaryappalachianbasin_wvges_1996_utm83,USA
112,4459877.046581287,492802.22698976647,"POLYGON((471801.3003317408 4444760.6586752245,471801.3003317408 4475695.960882252,511966.39257563424 4475695.960882252,511966.39257563424 4444760.6586752245,471801.3003317408 4444760.6586752245))",Harrison,boundaryappalachianbasin_wvges_1996_utm83,USA
113,4438441.334201439,373853.6396811163,"POLYGON((347730.08837466995 4418426.085984819,347730.08837466995 4459640.129438381,399978.42694529664 4459640.129438381,399978.42694529664 4418426.085984819,347730.08837466995 4418426.085984819))",Licking,boundaryappalachianbasin_wvges_1996_utm83,USA
114,4446422.645373245,264343.77529502346,"POLYGON((241318.68130856205 4431631.668650419,241318.68130856205 4462180.998975674,288139.39501133515 4462180.998975674,288139.39501133515 4431631.668650419,241318.68130856205 4431631.668650419))",Champaign,boundaryappalachianbasin_wvges_1996_utm83,USA
115,4432932.206934468,458191.6491106977,"POLYGON((437746.92252710246 4409535.383444851,437746.92252710246 4451575.725155025,481300.4205206184 4451575.725155025,481300.4205206184 4409535.383444851,437746.92252710246 4409535.383444851))",Guernsey,boundaryappalachianbasin_wvges_1996_utm83,USA
116,4428832.199872096,501203.85108587134,"POLYGON((479967.38110477966 4409976.579246883,479967.38110477966 4445974.599396381,525374.39536332 4445974.599396381,525374.39536332 4409976.579246883,479967.38110477966 4409976.579246883))",Belmont,boundaryappalachianbasin_wvges_1996_utm83,USA
117,4423862.016731515,419542.7306577687,"POLYGON((394833.49322712375 4400597.900301518,394833.49322712375 4446131.430722385,441500.96902404574 4446131.430722385,441500.96902404574 4400597.900301518,394833.49322712375 4400597.900301518))",Muskingum,boundaryappalachianbasin_wvges_1996_utm83,USA
118,4425781.095363915,328455.9231737972,"POLYGON((306790.10743065015 4405911.740772952,306790.10743065015 4445330.156187157,350340.4285194129 4445330.156187157,350340.4285194129 4405911.740772952,306790.10743065015 4405911.740772952))",Franklin,boundaryappalachianbasin_wvges_1996_utm83,USA
119,4418401.1599076735,294723.18247611827,"POLYGON((272372.3458399271 4395935.741867604,272372.3458399271 4443363.643033243,312010.31652449985 4443363.643033243,312010.31652449985 4395935.741867604,272372.3458399271 4395935.741867604))",Madison,boundaryappalachianbasin_wvges_1996_utm83,USA
120,4422028.130616135,262176.5423024382,"POLYGON((239039.95571346395 4404968.572325568,239039.95571346395 4436282.332926336,285712.2563280066 4436282.332926336,285712.2563280066 4404968.572325568,239039.95571346395 4404968.572325568))",Clark,boundaryappalachianbasin_wvges_1996_utm83,USA
121,4401236.409959829,461203.94447271986,"POLYGON((440318.2232418376 4381079.3270494295,440318.2232418376 4422230.506148969,480362.8928115787 4422230.506148969,480362.8928115787 4381079.3270494295,440318.2232418376 4381079.3270494295))",Noble,boundaryappalachianbasin_wvges_1996_utm83,USA
122,4400712.781212497,360371.0311697217,"POLYGON((341197.63399856497 4379037.585577538,341197.63399856497 4421843.847880811,383371.63874724624 4421843.847880811,383371.63874724624 4379037.585577538,341197.63399856497 4379037.585577538))",Fairfield,boundaryappalachianbasin_wvges_1996_utm83,USA
123,4399015.7915580915,394241.4003082792,"POLYGON((374370.7936526189 4378238.343608441,374370.7936526189 4420767.518901244,412481.52169788326 4420767.518901244,412481.52169788326 4378238.343608441,374370.7936526189 4378238.343608441))",Perry,boundaryappalachianbasin_wvges_1996_utm83,USA
124,4397065.376157882,492820.54753022885,"POLYGON((472795.7041035382 4375890.276135795,472795.7041035382 4412949.264871243,515484.1826052277 4412949.264871243,515484.1826052277 4375890.276135795,472795.7041035382 4375890.276135795))",Monroe,boundaryappalachianbasin_wvges_1996_utm83,USA
125,4397562.353537004,252434.05010748026,"POLYGON((233186.13421924924 4381434.372167193,233186.13421924924 4415494.047101381,273263.86330811854 4415494.047101381,273263.86330811854 4381434.372167193,233186.13421924924 4381434.372167193))",Greene,boundaryappalachianbasin_wvges_1996_utm83,USA
126,4389021.177648136,326499.11484005844,"POLYGON((305284.4305000058 4368938.341531903,305284.4305000058 4408462.905966348,351352.5682678423 4408462.905966348,351352.5682678423 4368938.341531903,305284.4305000058 4368938.341531903))",Pickaway,boundaryappalachianbasin_wvges_1996_utm83,USA
127,4385934.410192803,426852.25496392866,"POLYGON((407498.1273755273 4367303.69982709,407498.1273755273 4402825.192670244,449881.951106288 4402825.192670244,449881.951106288 4367303.69982709,407498.1273755273 4367303.69982709))",Morgan,boundaryappalachianbasin_wvges_1996_utm83,USA
128,4381494.682667507,289013.8206178419,"POLYGON((270297.4301825351 4361072.483420148,270297.4301825351 4399136.48496601,306969.2044488509 4399136.48496601,306969.2044488509 4361072.483420148,270297.4301825351 4361072.483420148))",Fayette,boundaryappalachianbasin_wvges_1996_utm83,USA
129,4372410.119782684,373138.92690977873,"POLYGON((349454.74261736346 4357437.716714422,349454.74261736346 4390498.318814096,400963.0727522154 4390498.318814096,400963.0727522154 4357437.716714422,349454.74261736346 4357437.716714422))",Hocking,boundaryappalachianbasin_wvges_1996_utm83,USA
130,4367229.688057907,456934.80940721557,"POLYGON((426300.865140567 4340692.64771499,426300.865140567 4387816.886742653,496991.6404285064 4387816.886742653,496991.6404285064 4340692.64771499,426300.865140567 4340692.64771499))",Washington,boundaryappalachianbasin_wvges_1996_utm83,USA
131,4368796.034221763,227655.0118717928,"POLYGON((211179.43756094837 4348739.209661376,211179.43756094837 4387575.694901068,244428.22338647104 4387575.694901068,244428.22338647104 4348739.209661376,211179.43756094837 4348739.209661376))",Warren,boundaryappalachianbasin_wvges_1996_utm83,USA
132,4366326.50112074,258447.9154372438,"POLYGON((240643.77942643652 4344308.532697066,240643.77942643652 4384334.706344585,278701.1173278525 4384334.706344585,278701.1173278525 4344308.532697066,240643.77942643652 4344308.532697066))",Clinton,boundaryappalachianbasin_wvges_1996_utm83,USA
133,4354016.361828335,410217.1783806854,"POLYGON((388127.36174283084 4336554.439076885,388127.36174283084 4378912.927117737,437800.2703270556 4378912.927117737,437800.2703270556 4336554.439076885,388127.36174283084 4336554.439076885))",Athens,boundaryappalachianbasin_wvges_1996_utm83,USA
134,4355591.1483334815,322579.0378272847,"POLYGON((293320.1108391711 4336000.39184467,293320.1108391711 4376083.633407464,350545.16667373 4376083.633407464,350545.16667373 4336000.39184467,293320.1108391711 4336000.39184467))",Ross,boundaryappalachianbasin_wvges_1996_utm83,USA
135,4345152.629727224,372008.6909801553,"POLYGON((347951.01670175383 4320472.845997873,347951.01670175383 4361296.6718397215,391578.98351763934 4361296.6718397215,391578.98351763934 4320472.845997873,347951.01670175383 4320472.845997873))",Vinton,boundaryappalachianbasin_wvges_1996_utm83,USA
136,4340024.073063369,275500.9737861738,"POLYGON((251546.36829630387 4322041.482480221,251546.36829630387 4361218.696883213,297823.35751283914 4361218.696883213,297823.35751283914 4322041.482480221,251546.36829630387 4322041.482480221))",Highland,boundaryappalachianbasin_wvges_1996_utm83,USA
137,4325941.356991497,227524.40512956653,"POLYGON((213117.5883409505 4294988.181691977,213117.5883409505 4351175.669214647,242758.59292831126 4351175.669214647,242758.59292831126 4294988.181691977,213117.5883409505 4294988.181691977))",Clermont,boundaryappalachianbasin_wvges_1996_utm83,USA
138,4312536.940705642,251530.23231185845,"POLYGON((234661.3979422502 4279826.5188093465,234661.3979422502 4348458.573650036,268670.96894015116 4348458.573650036,268670.96894015116 4279826.5188093465,234661.3979422502 4279826.5188093465))",Brown,boundaryappalachianbasin_wvges_1996_utm83,USA
139,4319608.188184736,359801.1483248946,"POLYGON((343209.37907376874 4300125.520269976,343209.37907376874 4340551.069049583,376867.80727331695 4340551.069049583,376867.80727331695 4300125.520269976,343209.37907376874 4300125.520269976))",Jackson,boundaryappalachianbasin_wvges_1996_utm83,USA
140,4326222.40042385,411254.38376192603,"POLYGON((385435.40306148026 4303112.305380165,385435.40306148026 4339821.834459274,435628.8415479671 4339821.834459274,435628.8415479671 4303112.305380165,385435.40306148026 4303112.305380165))",Meigs,boundaryappalachianbasin_wvges_1996_utm83,USA
141,4326914.755576879,321337.0047273503,"POLYGON((293763.5355403107 4312040.274666986,293763.5355403107 4340947.290059635,345805.27013566985 4340947.290059635,345805.27013566985 4312040.274666986,293763.5355403107 4312040.274666986))",Pike,boundaryappalachianbasin_wvges_1996_utm83,USA
142,4302062.002881153,285182.07610877324,"POLYGON((263871.75495188194 4274503.659542556,263871.75495188194 4325182.74126741,303525.12868548813 4325182.74126741,303525.12868548813 4274503.659542556,263871.75495188194 4274503.659542556))",Adams,boundaryappalachianbasin_wvges_1996_utm83,USA
143,4297859.127792605,385620.4274097901,"POLYGON((363117.029887796 4270968.286501033,363117.029887796 4321593.088035142,405092.2781133024 4321593.088035142,405092.2781133024 4270968.286501033,363117.029887796 4270968.286501033))",Gallia,boundaryappalachianbasin_wvges_1996_utm83,USA
144,4296555.641941327,326488.2752560524,"POLYGON((302108.7338492442 4270827.653084603,302108.7338492442 4320728.716230601,357021.19770382997 4320728.716230601,357021.19770382997 4270827.653084603,302108.7338492442 4270827.653084603))",Scioto,boundaryappalachianbasin_wvges_1996_utm83,USA
145,4272881.369005861,365863.1362306175,"POLYGON((340842.0433096264 4251387.793134691,340842.0433096264 4300794.827503808,387639.7596560408 4300794.827503808,387639.7596560408 4251387.793134691,340842.0433096264 4251387.793134691))",Lawrence,boundaryappalachianbasin_wvges_1996_utm83,USA
146,4617450.48027591,520846.39382153173,"POLYGON((499642.76734931685 4593775.663173729,499642.76734931685 4648429.792988702,539737.5417716916 4648429.792988702,539737.5417716916 4593775.663173729,499642.76734931685 4593775.663173729))",Ashtabula,boundaryappalachianbasin_wvges_1996_utm83,USA
148,4485601.036369437,535705.8332973729,"POLYGON((528050.6058163063 4472024.500792518,528050.6058163063 4498594.253079494,540428.3574395735 4498594.253079494,540428.3574395735 4472024.500792518,528050.6058163063 4472024.500792518))",Hancock,boundaryappalachianbasin_wvges_1996_utm83,USA
149,4458327.631170582,535733.2679869436,"POLYGON((527360.3988512789 4445903.394113916,527360.3988512789 4472600.544839447,540428.3574395735 4472600.544839447,540428.3574395735 4445903.394113916,527360.3988512789 4445903.394113916))",Brooke,boundaryappalachianbasin_wvges_1996_utm83,USA
150,4438919.186947843,532184.5816213044,"POLYGON((522332.23764217395 4430398.67827383,522332.23764217395 4449356.0303605925,540535.6619156895 4449356.0303605925,540535.6619156895 4430398.67827383,522332.23764217395 4430398.67827383))",Ohio,boundaryappalachianbasin_wvges_1996_utm83,USA
151,4412395.356593806,528575.5249043745,"POLYGON((511073.1767154452 4396564.781804605,511073.1767154452 4431748.40800694,540772.9646828418 4431748.40800694,540772.9646828418 4396564.781804605,511073.1767154452 4396564.781804605))",Marshall,boundaryappalachianbasin_wvges_1996_utm83,USA
152,4387321.534846459,581323.0101238645,"POLYGON((548932.0862856049 4366509.859929219,548932.0862856049 4397610.189004768,605835.9604888737 4397610.189004768,605835.9604888737 4366509.859929219,548932.0862856049 4366509.859929219))",Monongalia,boundaryappalachianbasin_wvges_1996_utm83,USA
153,4369552.351698452,613986.3830837059,"POLYGON((593764.4660903043 4339768.40809419,593764.4660903043 4397814.160775407,630404.2099308105 4397814.160775407,630404.2099308105 4339768.40809419,593764.4660903043 4339768.40809419))",Preston,boundaryappalachianbasin_wvges_1996_utm83,USA
154,4383938.44074022,530891.1046362944,"POLYGON((505785.1682830036 4364558.47684957,505785.1682830036 4396923.06359525,551173.9565419453 4396923.06359525,551173.9565419453 4364558.47684957,505785.1682830036 4364558.47684957))",Wetzel,boundaryappalachianbasin_wvges_1996_utm83,USA
155,4382232.063939306,735186.7983106717,"POLYGON((716508.7402891831 4363842.6335219545,716508.7402891831 4397660.571837047,755236.5090819476 4397660.571837047,755236.5090819476 4363842.6335219545,716508.7402891831 4363842.6335219545))",Morgan,boundaryappalachianbasin_wvges_1996_utm83,USA
195,4862919.1393729765,946645.842405794,"POLYGON((914258.0440454697 4822237.444953141,914258.0440454697 4910754.675056671,974917.4616721973 4910754.675056671,974917.4616721973 4822237.444953141,914258.0440454697 4822237.444953141))",Lewis,boundaryappalachianbasin_wvges_1996_utm83,USA
156,4364832.709902185,676896.2864876951,"POLYGON((648273.2740501652 4345479.740795852,648273.2740501652 4390643.365991525,700542.8712780711 4390643.365991525,700542.8712780711 4345479.740795852,648273.2740501652 4345479.740795852))",Mineral,boundaryappalachianbasin_wvges_1996_utm83,USA
157,4373555.4084188705,564822.4608973124,"POLYGON((543204.2523942041 4359883.909543991,543204.2523942041 4387776.167166159,590771.0678885304 4387776.167166159,590771.0678885304 4359883.909543991,543204.2523942041 4359883.909543991))",Marion,boundaryappalachianbasin_wvges_1996_utm83,USA
158,4368492.663405983,509809.1138380134,"POLYGON((489928.0774037593 4350259.920915012,489928.0774037593 4384135.162696419,532617.3881521586 4384135.162696419,532617.3881521586 4350259.920915012,489928.0774037593 4350259.920915012))",Tyler,boundaryappalachianbasin_wvges_1996_utm83,USA
159,4354831.418454385,705673.6317392933,"POLYGON((674062.1432080251 4330144.598705815,674062.1432080251 4379120.751307443,729166.2813505463 4379120.751307443,729166.2813505463 4330144.598705815,674062.1432080251 4330144.598705815))",Hampshire,boundaryappalachianbasin_wvges_1996_utm83,USA
160,4358049.387839985,485876.6415906522,"POLYGON((467607.69069664774 4346978.264383265,467607.69069664774 4369325.533628202,499147.37729052897 4369325.533628202,499147.37729052897 4346978.264383265,467607.69069664774 4346978.264383265))",Pleasants,boundaryappalachianbasin_wvges_1996_utm83,USA
161,4348103.609760598,553170.5855376088,"POLYGON((534090.6658263664 4327839.2045585625,534090.6658263664 4369275.627211808,572021.4138414693 4369275.627211808,572021.4138414693 4327839.2045585625,534090.6658263664 4327839.2045585625))",Harrison,boundaryappalachianbasin_wvges_1996_utm83,USA
162,4346606.892261659,524850.6930070624,"POLYGON((507148.29671954346 4326882.198639637,507148.29671954346 4367220.429214406,540326.9924243814 4367220.429214406,540326.9924243814 4326882.198639637,507148.29671954346 4326882.198639637))",Doddridge,boundaryappalachianbasin_wvges_1996_utm83,USA
163,4354283.601782774,581541.0822524356,"POLYGON((568238.6236000406 4343010.964784268,568238.6236000406 4367446.438360515,594282.2031626273 4367446.438360515,594282.2031626273 4343010.964784268,568238.6236000406 4343010.964784268))",Taylor,boundaryappalachianbasin_wvges_1996_utm83,USA
203,4053789.041930277,135798.63157565382,"POLYGON((116381.07034096547 4037527.526500271,116381.07034096547 4061850.620598321,166010.71997098584 4061850.620598321,166010.71997098584 4037527.526500271,116381.07034096547 4037527.526500271))",Pickett,boundaryappalachianbasin_wvges_1996_utm83,USA
164,4340322.489813972,455504.0776926671,"POLYGON((434447.1154546402 4320267.952265265,434447.1154546402 4362486.10381067,478946.81810255366 4362486.10381067,478946.81810255366 4320267.952265265,434447.1154546402 4320267.952265265))",Wood,boundaryappalachianbasin_wvges_1996_utm83,USA
165,4336776.847602831,494345.89369561785,"POLYGON((472237.88923907164 4317769.839353892,472237.88923907164 4360883.648067612,515786.5823379144 4360883.648067612,515786.5823379144 4317769.839353892,472237.88923907164 4317769.839353892))",Ritchie,boundaryappalachianbasin_wvges_1996_utm83,USA
166,4330073.963171689,656091.5474426084,"POLYGON((630404.2099308105 4297166.28847034,630404.2099308105 4354280.985301844,674062.1432080251 4354280.985301844,674062.1432080251 4297166.28847034,630404.2099308105 4297166.28847034))",Grant,boundaryappalachianbasin_wvges_1996_utm83,USA
167,4331816.477322187,585766.6545802974,"POLYGON((566509.8671043245 4311544.579473485,566509.8671043245 4350610.652118901,602439.1094728884 4350610.652118901,602439.1094728884 4311544.579473485,566509.8671043245 4311544.579473485))",Barbour,boundaryappalachianbasin_wvges_1996_utm83,USA
168,4330257.725728073,624020.4747236004,"POLYGON((599898.3328536347 4313588.169110963,599898.3328536347 4347419.682035419,647331.9606691119 4347419.682035419,647331.9606691119 4313588.169110963,599898.3328536347 4313588.169110963))",Tucker,boundaryappalachianbasin_wvges_1996_utm83,USA
169,4319930.906940715,685793.7468087974,"POLYGON((662558.5107913266 4292165.304274126,662558.5107913266 4345479.740795852,716069.3660149006 4345479.740795852,716069.3660149006 4292165.304274126,662558.5107913266 4292165.304274126))",Hardy,boundaryappalachianbasin_wvges_1996_utm83,USA
170,4319855.642710798,467281.8635314458,"POLYGON((449163.6813234618 4305795.896646518,449163.6813234618 4336530.620550165,485713.6514957534 4336530.620550165,485713.6514957534 4305795.896646518,449163.6813234618 4305795.896646518))",Wirt,boundaryappalachianbasin_wvges_1996_utm83,USA
171,4316161.737598974,542907.4210115937,"POLYGON((523085.4677811604 4286685.542282575,523085.4677811604 4334964.534060031,560453.285385328 4334964.534060031,560453.285385328 4286685.542282575,523085.4677811604 4286685.542282575))",Lewis,boundaryappalachianbasin_wvges_1996_utm83,USA
246,4676908.143000777,634877.9470399936,"POLYGON((601996.8881164539 4650772.4473313885,601996.8881164539 4715251.069257379,660708.8692333746 4715251.069257379,660708.8692333746 4650772.4473313885,601996.8881164539 4650772.4473313885))",Chautauqua,boundaryappalachianbasin_wvges_1996_utm83,USA
172,4292298.8252469,597441.5538253813,"POLYGON((562454.5487030229 4249246.130685975,562454.5487030229 4330163.943329782,643213.9899161143 4330163.943329782,643213.9899161143 4249246.130685975,562454.5487030229 4249246.130685975))",Randolph,boundaryappalachianbasin_wvges_1996_utm83,USA
173,4305542.238569067,566323.7194402544,"POLYGON((550933.8069491101 4282690.798334345,550933.8069491101 4329351.587970366,582169.7372376261 4329351.587970366,582169.7372376261 4282690.798334345,550933.8069491101 4282690.798334345))",Upshur,boundaryappalachianbasin_wvges_1996_utm83,USA
174,4308702.494030022,512166.1250385338,"POLYGON((495360.5560634748 4285956.922578609,495360.5560634748 4328959.961493998,533844.5234919199 4328959.961493998,533844.5234919199 4285956.922578609,495360.5560634748 4285956.922578609))",Gilmer,boundaryappalachianbasin_wvges_1996_utm83,USA
175,4298816.773651665,441328.50823123934,"POLYGON((420617.53918878606 4267720.283277108,420617.53918878606 4327558.182859447,456182.8853715851 4327558.182859447,456182.8853715851 4267720.283277108,420617.53918878606 4267720.283277108))",Jackson,boundaryappalachianbasin_wvges_1996_utm83,USA
176,4299902.255920111,489544.5915201478,"POLYGON((475695.35524513357 4274576.2170333015,475695.35524513357 4322185.309005671,501293.44664039067 4322185.309005671,501293.44664039067 4274576.2170333015,475695.35524513357 4274576.2170333015))",Calhoun,boundaryappalachianbasin_wvges_1996_utm83,USA
177,4291451.843445974,410714.087804005,"POLYGON((394293.96577539237 4259156.479143736,394293.96577539237 4318945.448795763,431929.06417890696 4318945.448795763,431929.06417890696 4259156.479143736,394293.96577539237 4259156.479143736))",Mason,boundaryappalachianbasin_wvges_1996_utm83,USA
178,4282655.298313126,643400.3275603456,"POLYGON((618230.4289299785 4252940.198787201,618230.4289299785 4312394.327614956,668855.5492121767 4312394.327614956,668855.5492121767 4252940.198787201,618230.4289299785 4252940.198787201))",Pendleton,boundaryappalachianbasin_wvges_1996_utm83,USA
179,4285383.429395285,469519.9146581673,"POLYGON((452215.48067435913 4263935.596810652,452215.48067435913 4311024.652390749,492741.95721689897 4311024.652390749,492741.95721689897 4263935.596810652,452215.48067435913 4263935.596810652))",Roane,boundaryappalachianbasin_wvges_1996_utm83,USA
180,4283570.090597047,524113.0852455428,"POLYGON((496952.2800103817 4262584.749755744,496952.2800103817 4305809.692486962,548504.7939519456 4305809.692486962,548504.7939519456 4262584.749755744,496952.2800103817 4262584.749755744))",Braxton,boundaryappalachianbasin_wvges_1996_utm83,USA
181,4260913.908318777,550251.8716474432,"POLYGON((527910.6799944316 4231420.056463497,527910.6799944316 4288239.178547963,571126.3048128308 4288239.178547963,571126.3048128308 4231420.056463497,527910.6799944316 4231420.056463497))",Webster,boundaryappalachianbasin_wvges_1996_utm83,USA
182,4243059.058624808,586653.2753008858,"POLYGON((555220.253744386 4210527.488297497,555220.253744386 4288124.636897697,619496.0767531028 4288124.636897697,619496.0767531028 4210527.488297497,555220.253744386 4210527.488297497))",Pocahontas,boundaryappalachianbasin_wvges_1996_utm83,USA
183,4262559.293235052,420713.7256879581,"POLYGON((407774.10525263555 4236608.550364855,407774.10525263555 4282103.677019048,438772.60982359515 4282103.677019048,438772.60982359515 4236608.550364855,407774.10525263555 4236608.550364855))",Putnam,boundaryappalachianbasin_wvges_1996_utm83,USA
184,4257078.310669897,493249.3462475534,"POLYGON((475197.53618072637 4235200.37706007,475197.53618072637 4279962.346077316,515453.4133832825 4279962.346077316,515453.4133832825 4235200.37706007,475197.53618072637 4235200.37706007))",Clay,boundaryappalachianbasin_wvges_1996_utm83,USA
185,4243375.386974424,453745.7430186964,"POLYGON((419907.97609658015 4201935.544845289,419907.97609658015 4275757.533557918,482812.96846625966 4275757.533557918,482812.96846625966 4201935.544845289,419907.97609658015 4201935.544845289))",Kanawha,boundaryappalachianbasin_wvges_1996_utm83,USA
186,4253259.609641099,392001.5321416642,"POLYGON((369467.2894917564 4231826.545619163,369467.2894917564 4272588.442539106,408481.40355131426 4272588.442539106,408481.40355131426 4231826.545619163,369467.2894917564 4231826.545619163))",Cabell,boundaryappalachianbasin_wvges_1996_utm83,USA
187,4238379.8478881,517377.8202820991,"POLYGON((479546.6277407652 4214611.395358236,479546.6277407652 4268398.734926871,548952.0639085161 4268398.734926871,548952.0639085161 4214611.395358236,479546.6277407652 4214611.395358236))",Nicholas,boundaryappalachianbasin_wvges_1996_utm83,USA
247,4701962.55052628,839748.795004587,"POLYGON((820286.4803990328 4685123.7249983745,820286.4803990328 4720434.842297257,861562.4980920828 4720434.842297257,861562.4980920828 4685123.7249983745,820286.4803990328 4685123.7249983745))",Schuyler,boundaryappalachianbasin_wvges_1996_utm83,USA
188,4888748.548000614,908422.6435651866,"POLYGON((871175.2664427292 4847395.506916417,871175.2664427292 4928143.557490689,943598.8875076228 4928143.557490689,943598.8875076228 4847395.506916417,871175.2664427292 4847395.506916417))",Jefferson,boundaryappalachianbasin_wvges_1996_utm83,USA
189,4222829.119967513,375052.6101134082,"POLYGON((355712.5289714 4190373.424051159,355712.5289714 4252778.322119408,395568.9273456038 4252778.322119408,395568.9273456038 4190373.424051159,355712.5289714 4190373.424051159))",Wayne,boundaryappalachianbasin_wvges_1996_utm83,USA
190,4225985.272711919,406415.16151966836,"POLYGON((386653.05995239 4201426.208116704,386653.05995239 4247900.920421702,430292.9966295253 4247900.920421702,430292.9966295253 4201426.208116704,386653.05995239 4201426.208116704))",Lincoln,boundaryappalachianbasin_wvges_1996_utm83,USA
191,4200130.015961594,548469.7699358764,"POLYGON((509659.64465543197 4170836.197563946,509659.64465543197 4235702.047939748,591444.9420942494 4235702.047939748,591444.9420942494 4170836.197563946,509659.64465543197 4170836.197563946))",Greenbrier,boundaryappalachianbasin_wvges_1996_utm83,USA
192,4209017.926803685,492932.49407788145,"POLYGON((466263.35007397505 4186223.655159358,466263.35007397505 4235200.37706007,522112.6903704844 4235200.37706007,522112.6903704844 4186223.655159358,466263.35007397505 4186223.655159358))",Fayette,boundaryappalachianbasin_wvges_1996_utm83,USA
193,4208586.771013615,437684.1424644776,"POLYGON((414092.9403479495 4179817.0963793728,414092.9403479495 4231801.974790062,460384.0346816888 4231801.974790062,460384.0346816888 4179817.0963793728,414092.9403479495 4179817.0963793728))",Boone,boundaryappalachianbasin_wvges_1996_utm83,USA
194,4187451.011546993,417639.27852718433,"POLYGON((395639.9058574799 4165567.804040496,395639.9058574799 4209060.724241588,445857.7241952991 4209060.724241588,445857.7241952991 4165567.804040496,395639.9058574799 4165567.804040496))",Logan,boundaryappalachianbasin_wvges_1996_utm83,USA
196,4180165.779701475,478363.8187751076,"POLYGON((450295.9174983264 4151765.0593929626,450295.9174983264 4204211.070260428,511217.41290879855 4204211.070260428,511217.41290879855 4151765.0593929626,450295.9174983264 4151765.0593929626))",Raleigh,boundaryappalachianbasin_wvges_1996_utm83,USA
197,4176117.4144561994,399902.78303143714,"POLYGON((374976.16411819914 4151489.4730476057,374976.16411819914 4204011.513076597,429694.0145874317 4204011.513076597,429694.0145874317 4151489.4730476057,374976.16411819914 4151489.4730476057))",Mingo,boundaryappalachianbasin_wvges_1996_utm83,USA
198,4168157.706127384,512934.524983841,"POLYGON((492299.699070898 4143597.471488473,492299.699070898 4191014.5749144647,530805.806377241 4191014.5749144647,530805.806377241 4143597.471488473,492299.699070898 4143597.471488473))",Summers,boundaryappalachianbasin_wvges_1996_utm83,USA
199,4162477.3217028724,451651.7604084141,"POLYGON((424232.66283941653 4140732.1970037348,424232.66283941653 4183474.471932631,480937.93287459476 4183474.471932631,480937.93287459476 4140732.1970037348,424232.66283941653 4140732.1970037348))",Wyoming,boundaryappalachianbasin_wvges_1996_utm83,USA
200,4156879.333641526,539637.3970569931,"POLYGON((512320.3163507237 4136102.1683603427,512320.3163507237 4175157.9417410186,568924.9865250073 4175157.9417410186,568924.9865250073 4136102.1683603427,512320.3163507237 4136102.1683603427))",Monroe,boundaryappalachianbasin_wvges_1996_utm83,USA
201,4140110.5253006006,490782.9214788348,"POLYGON((468218.05928734795 4121543.9638066012,468218.05928734795 4161116.536293809,513424.953294414 4161116.536293809,513424.953294414 4121543.9638066012,468218.05928734795 4121543.9638066012))",Mercer,boundaryappalachianbasin_wvges_1996_utm83,USA
202,4137094.616995629,442420.98707152216,"POLYGON((412612.6609433873 4117811.7236337475,412612.6609433873 4156015.1882373164,473007.3050425828 4156015.1882373164,473007.3050425828 4117811.7236337475,412612.6609433873 4117811.7236337475))",McDowell,boundaryappalachianbasin_wvges_1996_utm83,USA
204,4041605.8606179296,383167.7201492045,"POLYGON((347368.21241347527 4028525.5264816363,347368.21241347527 4052402.6368762148,425873.73823588295 4052402.6368762148,425873.73823588295 4028525.5264816363,347368.21241347527 4028525.5264816363))",Sullivan,boundaryappalachianbasin_wvges_1996_utm83,USA
205,4037621.4367657076,186262.88904651057,"POLYGON((161700.2229444377 4008175.0027142027,161700.2229444377 4057726.828437391,209400.61271664663 4057726.828437391,209400.61271664663 4008175.0027142027,161700.2229444377 4008175.0027142027))",Scott,boundaryappalachianbasin_wvges_1996_utm83,USA
206,4044142.246874173,300743.0736410053,"POLYGON((279578.0242068268 4029374.185414915,279578.0242068268 4053198.9523286377,334524.3977834231 4053198.9523286377,334524.3977834231 4029374.185414915,279578.0242068268 4029374.185414915))",Hancock,boundaryappalachianbasin_wvges_1996_utm83,USA
207,4041122.7060375744,261723.7034640813,"POLYGON((231013.19399497996 4023648.7952536084,231013.19399497996 4053832.4759108345,288116.78308233176 4053832.4759108345,288116.78308233176 4023648.7952536084,231013.19399497996 4023648.7952536084))",Claiborne,boundaryappalachianbasin_wvges_1996_utm83,USA
208,4033321.0557321575,217802.04295525985,"POLYGON((196636.01874908578 4008445.3518463494,196636.01874908578 4054928.690196831,239764.80858148803 4054928.690196831,239764.80858148803 4008445.3518463494,196636.01874908578 4008445.3518463494))",Campbell,boundaryappalachianbasin_wvges_1996_utm83,USA
209,4034673.8019528217,325661.8841070323,"POLYGON((295269.0582508867 4012463.302619538,295269.0582508867 4051099.4583797012,356478.6806316736 4051099.4583797012,356478.6806316736 4012463.302619538,295269.0582508867 4012463.302619538))",Hawkins,boundaryappalachianbasin_wvges_1996_utm83,USA
210,4033217.7110368265,147783.992980874,"POLYGON((129666.82033144898 4007321.0249494016,129666.82033144898 4055935.4961508946,172298.23465290316 4055935.4961508946,172298.23465290316 4007321.0249494016,129666.82033144898 4007321.0249494016))",Fentress,boundaryappalachianbasin_wvges_1996_utm83,USA
211,4031282.4597389135,115653.70227353275,"POLYGON((96716.89148564299 4008753.4084394258,96716.89148564299 4052523.6362909377,133415.374369626 4052523.6362909377,133415.374369626 4008753.4084394258,96716.89148564299 4008753.4084394258))",Overton,boundaryappalachianbasin_wvges_1996_utm83,USA
212,4019794.2340906826,245079.75005483138,"POLYGON((229037.84609181405 4005890.319814706,229037.84609181405 4035945.6328915646,260078.3310136257 4035945.6328915646,260078.3310136257 4005890.319814706,229037.84609181405 4005890.319814706))",Union,boundaryappalachianbasin_wvges_1996_utm83,USA
213,4017279.488491728,274414.5927426399,"POLYGON((254239.3350728962 3996362.0447726096,254239.3350728962 4033442.1006701663,297154.23484462185 4033442.1006701663,297154.23484462185 3996362.0447726096,254239.3350728962 3996362.0447726096))",Grainger,boundaryappalachianbasin_wvges_1996_utm83,USA
214,4005247.6544100987,171994.37789802832,"POLYGON((148635.4981625646 3980698.7116620853,148635.4981625646 4031377.2996981833,199058.4444605008 4031377.2996981833,199058.4444605008 3980698.7116620853,148635.4981625646 3980698.7116620853))",Morgan,boundaryappalachianbasin_wvges_1996_utm83,USA
215,4010738.2799034812,296425.0790465282,"POLYGON((277896.0329624653 3999119.896424514,277896.0329624653 4024803.7612810144,312810.0360344952 4024803.7612810144,312810.0360344952 3999119.896424514,277896.0329624653 3999119.896424514))",Hamblen,boundaryappalachianbasin_wvges_1996_utm83,USA
216,4009561.3761188197,95707.95414704489,"POLYGON((67288.26135844953 3990677.6720311716,67288.26135844953 4027642.5659808796,131546.94749283645 4027642.5659808796,131546.94749283645 3990677.6720311716,67288.26135844953 3990677.6720311716))",Putnam,boundaryappalachianbasin_wvges_1996_utm83,USA
217,4001939.625294373,212191.89183644718,"POLYGON((189972.70412894693 3978647.3897829633,189972.70412894693 4020546.133732068,235205.28041678463 4020546.133732068,235205.28041678463 3978647.3897829633,189972.70412894693 3978647.3897829633))",Anderson,boundaryappalachianbasin_wvges_1996_utm83,USA
218,3987563.3557412527,235748.89118048552,"POLYGON((205230.91256568697 3966068.6900646253,205230.91256568697 4008979.509281176,261357.81802968244 4008979.509281176,261357.81802968244 3966068.6900646253,205230.91256568697 3966068.6900646253))",Knox,boundaryappalachianbasin_wvges_1996_utm83,USA
219,3992555.2207976966,280184.48358844424,"POLYGON((256781.9594703188 3975389.0718447687,256781.9594703188 4007756.3411211832,299269.755574121 4007756.3411211832,299269.755574121 3975389.0718447687,256781.9594703188 3975389.0718447687))",Jefferson,boundaryappalachianbasin_wvges_1996_utm83,USA
220,3986134.201484336,139638.52899719626,"POLYGON((113860.72644635371 3964088.942142794,113860.72644635371 4010543.610322523,168017.02216884098 4010543.610322523,168017.02216884098 3964088.942142794,113860.72644635371 3964088.942142794))",Cumberland,boundaryappalachianbasin_wvges_1996_utm83,USA
221,3993109.4308388117,64552.891459693994,"POLYGON((44864.21680489625 3975051.0491275494,44864.21680489625 4009986.8183624716,82426.49451296328 4009986.8183624716,82426.49451296328 3975051.0491275494,44864.21680489625 3975051.0491275494))",De Kalb,boundaryappalachianbasin_wvges_1996_utm83,USA
222,3985500.3554506972,98422.9490776558,"POLYGON((78300.91070836969 3970048.887292816,78300.91070836969 4003221.080878159,119925.25557058374 4003221.080878159,119925.25557058374 3970048.887292816,78300.91070836969 3970048.887292816))",White,boundaryappalachianbasin_wvges_1996_utm83,USA
223,3973394.461062276,182408.2277277708,"POLYGON((158292.7511996702 3951034.6412341837,158292.7511996702 3995371.358080418,205238.80899700173 3995371.358080418,205238.80899700173 3951034.6412341837,158292.7511996702 3951034.6412341837))",Roane,boundaryappalachianbasin_wvges_1996_utm83,USA
224,3975155.5045532472,42716.35672772501,"POLYGON((28324.36405981338 3956904.782887651,28324.36405981338 3993468.7492037322,59323.75774795847 3993468.7492037322,59323.75774795847 3956904.782887651,28324.36405981338 3956904.782887651))",Cannon,boundaryappalachianbasin_wvges_1996_utm83,USA
225,3959981.9001729423,200982.0033794994,"POLYGON((176311.25151105702 3945800.84096741,176311.25151105702 3978647.3897829633,216544.46869254654 3978647.3897829633,216544.46869254654 3945800.84096741,176311.25151105702 3945800.84096741))",Loudon,boundaryappalachianbasin_wvges_1996_utm83,USA
226,4820002.338702856,893252.3752416006,"POLYGON((854649.0379093017 4791169.181593713,854649.0379093017 4851174.353106348,923960.0028569475 4851174.353106348,923960.0028569475 4791169.181593713,854649.0379093017 4791169.181593713))",Oswego,boundaryappalachianbasin_wvges_1996_utm83,USA
227,4802992.717100295,951826.92881806,"POLYGON((914908.279764168 4761189.800331261,914908.279764168 4845562.455824602,981737.3673419872 4845562.455824602,981737.3673419872 4761189.800331261,914908.279764168 4761189.800331261))",Oneida,boundaryappalachianbasin_wvges_1996_utm83,USA
228,4761139.4282895,863008.8098453553,"POLYGON((847163.4866247354 4728795.9984122105,847163.4866247354 4816133.961541751,888407.7543653134 4816133.961541751,888407.7543653134 4728795.9984122105,847163.4866247354 4728795.9984122105))",Cayuga,boundaryappalachianbasin_wvges_1996_utm83,USA
229,4785215.599241229,683269.7315879256,"POLYGON((657256.8282869029 4765472.74886036,657256.8282869029 4805247.37066805,706168.5601223374 4805247.37066805,706168.5601223374 4765472.74886036,657256.8282869029 4765472.74886036))",Niagara,boundaryappalachianbasin_wvges_1996_utm83,USA
230,4792371.21063829,724890.8111361319,"POLYGON((705404.7858199712 4778367.634641635,705404.7858199712 4805807.270166004,744757.1572229385 4805807.270166004,744757.1572229385 4778367.634641635,705404.7858199712 4778367.634641635))",Orleans,boundaryappalachianbasin_wvges_1996_utm83,USA
231,4782415.160239654,768983.6873058714,"POLYGON((743724.3797208397 4759488.397861496,743724.3797208397 4805807.270166004,796125.0286650731 4805807.270166004,796125.0286650731 4759488.397861496,743724.3797208397 4759488.397861496))",Monroe,boundaryappalachianbasin_wvges_1996_utm83,USA
232,4786003.124405392,823246.1466269311,"POLYGON((793967.352892773 4769746.5290303985,793967.352892773 4807708.257035902,850202.6497541547 4807708.257035902,850202.6497541547 4769746.5290303985,793967.352892773 4769746.5290303985))",Wayne,boundaryappalachianbasin_wvges_1996_utm83,USA
233,4773310.09717673,891912.0850548227,"POLYGON((866612.6754150823 4746917.78200902,866612.6754150823 4802257.622288933,917687.9229323769 4802257.622288933,917687.9229323769 4746917.78200902,866612.6754150823 4746917.78200902))",Onondaga,boundaryappalachianbasin_wvges_1996_utm83,USA
234,4765417.72072614,935301.5525272852,"POLYGON((907275.540732064 4743260.446148087,907275.540732064 4793726.567909189,970512.0924288388 4793726.567909189,970512.0924288388 4743260.446148087,907275.540732064 4743260.446148087))",Madison,boundaryappalachianbasin_wvges_1996_utm83,USA
235,4765136.25417849,728669.9678955695,"POLYGON((706081.3701957942 4749882.446011496,706081.3701957942 4780000.8163483925,752663.3351487904 4780000.8163483925,752663.3351487904 4749882.446011496,706081.3701957942 4749882.446011496))",Genesee,boundaryappalachianbasin_wvges_1996_utm83,USA
236,4736244.548343618,686122.9716944919,"POLYGON((652466.1880790837 4701549.332908554,652466.1880790837 4774363.398472838,708611.2047799681 4774363.398472838,708611.2047799681 4701549.332908554,652466.1880790837 4701549.332908554))",Erie,boundaryappalachianbasin_wvges_1996_utm83,USA
237,4751486.3903248375,802421.5061734008,"POLYGON((776762.3742621401 4720473.305411747,776762.3742621401 4772650.318207524,830139.8931289996 4772650.318207524,830139.8931289996 4720473.305411747,776762.3742621401 4720473.305411747))",Ontario,boundaryappalachianbasin_wvges_1996_utm83,USA
238,4745200.461057108,841677.4558673685,"POLYGON((829124.7088054887 4719213.611102098,829124.7088054887 4772599.905565579,862211.8736278254 4772599.905565579,862211.8736278254 4719213.611102098,829124.7088054887 4719213.611102098))",Seneca,boundaryappalachianbasin_wvges_1996_utm83,USA
239,4735954.206988297,764022.9327345421,"POLYGON((742023.8330368437 4707312.846957491,742023.8330368437 4765024.880915389,788004.5955379163 4765024.880915389,788004.5955379163 4707312.846957491,742023.8330368437 4707312.846957491))",Livingston,boundaryappalachianbasin_wvges_1996_utm83,USA
240,4732265.963992946,727673.8696874919,"POLYGON((705632.5711309621 4711762.0412025675,705632.5711309621 4751428.429930525,749536.0173952479 4751428.429930525,749536.0173952479 4711762.0412025675,705632.5711309621 4711762.0412025675))",Wyoming,boundaryappalachianbasin_wvges_1996_utm83,USA
241,4727885.072978507,904497.1692958643,"POLYGON((886319.3434352861 4705664.804125412,886319.3434352861 4750803.031684841,922440.212920014 4750803.031684841,922440.212920014 4705664.804125412,886319.3434352861 4705664.804125412))",Cortland,boundaryappalachianbasin_wvges_1996_utm83,USA
242,4727873.816155568,819445.1643651526,"POLYGON((797695.7985198577 4708486.018584095,797695.7985198577 4742933.4739922965,838325.803903827 4742933.4739922965,838325.803903827 4708486.018584095,797695.7985198577 4708486.018584095))",Yates,boundaryappalachianbasin_wvges_1996_utm83,USA
243,4718977.6636783965,942990.4101293121,"POLYGON((918555.0568259511 4685485.150605381,918555.0568259511 4748758.691008759,967688.1564716231 4748758.691008759,967688.1564716231 4685485.150605381,918555.0568259511 4685485.150605381))",Chenango,boundaryappalachianbasin_wvges_1996_utm83,USA
244,4710042.480462188,872074.2300884681,"POLYGON((853015.6506310452 4688883.7656160565,853015.6506310452 4729887.223957701,891982.7951348601 4729887.223957701,891982.7951348601 4688883.7656160565,853015.6506310452 4688883.7656160565))",Tompkins,boundaryappalachianbasin_wvges_1996_utm83,USA
245,4686230.1030606385,798416.9458537266,"POLYGON((769523.5361627724 4654606.961751097,769523.5361627724 4721191.840552633,833886.6970625574 4721191.840552633,833886.6970625574 4654606.961751097,769523.5361627724 4654606.961751097))",Steuben,boundaryappalachianbasin_wvges_1996_utm83,USA
248,4680292.757276615,691756.3137773452,"POLYGON((659506.1811769712 4651726.186119533,659506.1811769712 4712904.3657458555,723196.9544793566 4712904.3657458555,723196.9544793566 4651726.186119533,659506.1811769712 4651726.186119533))",Cattaraugus,boundaryappalachianbasin_wvges_1996_utm83,USA
249,4682870.978233544,745494.5505361427,"POLYGON((721300.917067551 4653225.524477114,721300.917067551 4712795.168175936,769597.3595465098 4712795.168175936,769597.3595465098 4653225.524477114,721300.917067551 4653225.524477114))",Allegany,boundaryappalachianbasin_wvges_1996_utm83,USA
250,4680513.5872580465,928053.6496337153,"POLYGON((901064.0594696195 4661325.190719385,901064.0594696195 4708513.850795425,965292.499465642 4708513.850795425,965292.499465642 4661325.190719385,901064.0594696195 4661325.190719385))",Broome,boundaryappalachianbasin_wvges_1996_utm83,USA
251,4679372.600955354,887820.3525106405,"POLYGON((867163.3636177883 4659638.351926893,867163.3636177883 4706602.805965193,906591.4233908397 4706602.805965193,906591.4233908397 4659638.351926893,867163.3636177883 4659638.351926893))",Tioga,boundaryappalachianbasin_wvges_1996_utm83,USA
252,4674170.94319225,850386.1010012818,"POLYGON((832667.9437428938 4657974.414029025,832667.9437428938 4691113.683693985,869248.6249124558 4691113.683693985,869248.6249124558 4657974.414029025,832667.9437428938 4657974.414029025))",Chemung,boundaryappalachianbasin_wvges_1996_utm83,USA
253,4316187.801649408,206781.15915521389,"POLYGON((195968.53272046917 4300840.951982909,195968.53272046917 4334838.982403962,219324.2166735159 4334838.982403962,219324.2166735159 4300840.951982909,195968.53272046917 4300840.951982909))",Campbell,boundaryappalachianbasin_wvges_1996_utm83,USA
254,4314900.486208202,193553.74205780946,"POLYGON((185992.14849689254 4299050.9954036195,185992.14849689254 4333115.112391447,203525.49113648728 4333115.112391447,203525.49113648728 4299050.9954036195,185992.14849689254 4299050.9954036195))",Kenton,boundaryappalachianbasin_wvges_1996_utm83,USA
255,4288323.275892025,207202.60820800427,"POLYGON((192536.35714601044 4270349.622040675,192536.35714601044 4307832.472135175,220955.66168694786 4307832.472135175,220955.66168694786 4270349.622040675,192536.35714601044 4270349.622040675))",Pendleton,boundaryappalachianbasin_wvges_1996_utm83,USA
256,4286181.071325298,230457.7915235463,"POLYGON((218566.63501026022 4271192.88568996,218566.63501026022 4300944.792875878,246917.31560319266 4300944.792875878,246917.31560319266 4271192.88568996,218566.63501026022 4271192.88568996))",Bracken,boundaryappalachianbasin_wvges_1996_utm83,USA
257,4284114.959288832,183871.5364876828,"POLYGON((170491.49062183412 4264755.894674159,170491.49062183412 4301431.219440976,196367.90523951524 4301431.219440976,196367.90523951524 4264755.894674159,170491.49062183412 4264755.894674159))",Grant,boundaryappalachianbasin_wvges_1996_utm83,USA
258,4275694.4934743075,253440.51435069134,"POLYGON((238778.80244025224 4261252.7729261415,238778.80244025224 4293946.649278346,270904.48400989297 4293946.649278346,270904.48400989297 4261252.7729261415,238778.80244025224 4261252.7729261415))",Mason,boundaryappalachianbasin_wvges_1996_utm83,USA
259,4267947.63136686,332028.15709759085,"POLYGON((310919.89176061994 4249568.754461896,310919.89176061994 4290389.027781403,354400.0732166514 4290389.027781403,354400.0732166514 4249568.754461896,310919.89176061994 4249568.754461896))",Greenup,boundaryappalachianbasin_wvges_1996_utm83,USA
260,4267394.613997489,292196.5859474979,"POLYGON((269263.63176863885 4245149.057799289,269263.63176863885 4287046.521086489,323772.19385787705 4287046.521086489,323772.19385787705 4245149.057799289,269263.63176863885 4245149.057799289))",Lewis,boundaryappalachianbasin_wvges_1996_utm83,USA
261,4267712.206460067,232942.45095830024,"POLYGON((219556.08926656598 4257078.368913386,219556.08926656598 4276960.552064368,244102.2495659188 4276960.552064368,244102.2495659188 4257078.368913386,219556.08926656598 4257078.368913386))",Robertson,boundaryappalachianbasin_wvges_1996_utm83,USA
262,4259639.142141824,208490.91396512417,"POLYGON((188928.70315179438 4242184.209749772,188928.70315179438 4275120.572409106,229576.60119099816 4275120.572409106,229576.60119099816 4242184.209749772,188928.70315179438 4242184.209749772))",Harrison,boundaryappalachianbasin_wvges_1996_utm83,USA
263,4250775.672188422,264024.3084266662,"POLYGON((239413.04862059216 4229122.562279057,239413.04862059216 4268204.602599021,285888.84322614904 4268204.602599021,285888.84322614904 4229122.562279057,239413.04862059216 4229122.562279057))",Fleming,boundaryappalachianbasin_wvges_1996_utm83,USA
264,4243597.007419609,320804.4095274816,"POLYGON((295482.28240814514 4227672.835460001,295482.28240814514 4264636.32888146,344306.93147413223 4264636.32888146,344306.93147413223 4227672.835460001,295482.28240814514 4227672.835460001))",Carter,boundaryappalachianbasin_wvges_1996_utm83,USA
265,4247439.464083889,352565.8190569486,"POLYGON((341161.69874857255 4234235.821237475,341161.69874857255 4262851.966494709,362531.3891452662 4262851.966494709,362531.3891452662 4234235.821237475,341161.69874857255 4234235.821237475))",Boyd,boundaryappalachianbasin_wvges_1996_utm83,USA
266,4244343.420602458,185675.82405252717,"POLYGON((170536.24164674123 4224953.136631597,170536.24164674123 4266061.85253183,201083.5706989474 4266061.85253183,201083.5706989474 4224953.136631597,170536.24164674123 4224953.136631597))",Scott,boundaryappalachianbasin_wvges_1996_utm83,USA
267,4247163.287965404,235850.93494977365,"POLYGON((220110.909813151 4231445.627235814,220110.909813151 4261347.631256497,251342.09419927062 4261347.631256497,251342.09419927062 4231445.627235814,220110.909813151 4231445.627235814))",Nicholas,boundaryappalachianbasin_wvges_1996_utm83,USA
268,4230823.810254069,287953.60422138195,"POLYGON((268951.7685536472 4210895.688458373,268951.7685536472 4252597.407015626,306945.89823642344 4252597.407015626,306945.89823642344 4210895.688458373,268951.7685536472 4210895.688458373))",Rowan,boundaryappalachianbasin_wvges_1996_utm83,USA
269,4233373.3518671645,217607.2105516192,"POLYGON((198645.5686042573 4218432.9040148035,198645.5686042573 4251430.84183414,238994.57393065005 4251430.84183414,238994.57393065005 4218432.9040148035,198645.5686042573 4218432.9040148035))",Bourbon,boundaryappalachianbasin_wvges_1996_utm83,USA
270,4225722.000994587,259146.34381552914,"POLYGON((238506.67403708893 4209941.687343698,238506.67403708893 4242898.618179725,283663.194674738 4242898.618179725,283663.194674738 4209941.687343698,238506.67403708893 4209941.687343698))",Bath,boundaryappalachianbasin_wvges_1996_utm83,USA
271,4215166.9313303325,347531.459477709,"POLYGON((322510.2015918024 4194091.8058188246,322510.2015918024 4237282.282368778,370384.59424447926 4237282.282368778,370384.59424447926 4194091.8058188246,322510.2015918024 4194091.8058188246))",Lawrence,boundaryappalachianbasin_wvges_1996_utm83,USA
272,4221742.188132789,316290.8026285148,"POLYGON((300864.6536468328 4208057.524235607,300864.6536468328 4238221.7484314,333858.9357771331 4238221.7484314,333858.9357771331 4208057.524235607,300864.6536468328 4208057.524235607))",Elliott,boundaryappalachianbasin_wvges_1996_utm83,USA
273,4216057.180146514,195448.96303737714,"POLYGON((177500.8749960526 4194182.4501003795,177500.8749960526 4234484.714143951,211003.8041117455 4234484.714143951,211003.8041117455 4194182.4501003795,177500.8749960526 4194182.4501003795))",Fayette,boundaryappalachianbasin_wvges_1996_utm83,USA
275,4217132.307681941,170441.59811321978,"POLYGON((160396.60935325135 4195926.948670792,160396.60935325135 4233460.598332181,181085.2016466097 4233460.598332181,181085.2016466097 4195926.948670792,160396.60935325135 4195926.948670792))",Woodford,boundaryappalachianbasin_wvges_1996_utm83,USA
276,4200097.253577057,301420.7206340301,"POLYGON((280069.2806121819 4176493.4421704006,280069.2806121819 4221758.462299983,327202.95809013967 4221758.462299983,327202.95809013967 4176493.4421704006,280069.2806121819 4176493.4421704006))",Morgan,boundaryappalachianbasin_wvges_1996_utm83,USA
277,4207249.964976198,222538.6395419657,"POLYGON((205290.4606953843 4190903.6269165236,205290.4606953843 4222999.290135992,238097.4869575412 4222999.290135992,238097.4869575412 4190903.6269165236,205290.4606953843 4190903.6269165236))",Clark,boundaryappalachianbasin_wvges_1996_utm83,USA
278,4202754.229036274,271073.28233012324,"POLYGON((255444.20952350466 4188826.295993435,255444.20952350466 4215919.716158937,285657.59185977234 4215919.716158937,285657.59185977234 4188826.295993435,255444.20952350466 4188826.295993435))",Menifee,boundaryappalachianbasin_wvges_1996_utm83,USA
279,4190532.408489016,338497.3619943304,"POLYGON((322964.31485812296 4174822.5775717776,322964.31485812296 4208378.823627292,357353.56429535797 4208378.823627292,357353.56429535797 4174822.5775717776,322964.31485812296 4174822.5775717776))",Johnson,boundaryappalachianbasin_wvges_1996_utm83,USA
280,4197668.06986227,184073.94817370534,"POLYGON((172123.24844566185 4182210.1431922386,172123.24844566185 4212837.483639936,196871.8301355451 4212837.483639936,196871.8301355451 4182210.1431922386,172123.24844566185 4182210.1431922386))",Jessamine,boundaryappalachianbasin_wvges_1996_utm83,USA
281,4191948.839425647,158174.98006919812,"POLYGON((144213.52028474212 4178095.1661186228,144213.52028474212 4209132.009999306,174170.2839910027 4209132.009999306,174170.2839910027 4178095.1661186228,144213.52028474212 4178095.1661186228))",Mercer,boundaryappalachianbasin_wvges_1996_utm83,USA
282,4185169.410961045,366362.71291179734,"POLYGON((352593.00196007744 4170830.613507929,352593.00196007744 4202953.27625397,383770.02465460775 4202953.27625397,383770.02465460775 4170830.613507929,352593.00196007744 4170830.613507929))",Martin,boundaryappalachianbasin_wvges_1996_utm83,USA
283,4191090.100499117,250516.64466788122,"POLYGON((232778.1313663248 4178084.78784323,232778.1313663248 4203074.94889031,267527.68740836845 4203074.94889031,267527.68740836845 4178084.78784323,232778.1313663248 4178084.78784323))",Powell,boundaryappalachianbasin_wvges_1996_utm83,USA
284,4179701.8005459663,210203.55232181985,"POLYGON((189284.31345099356 4157582.36816164,189284.31345099356 4201450.686695273,228260.84031116642 4201450.686695273,228260.84031116642 4157582.36816164,189284.31345099356 4157582.36816164))",Madison,boundaryappalachianbasin_wvges_1996_utm83,USA
285,4175548.5497117294,317681.2400639737,"POLYGON((299652.2234580256 4150700.5641840976,299652.2234580256 4196235.190676513,333183.7576602241 4196235.190676513,333183.7576602241 4150700.5641840976,299652.2234580256 4150700.5641840976))",Magoffin,boundaryappalachianbasin_wvges_1996_utm83,USA
286,4180017.97690975,279996.8795855629,"POLYGON((261113.28050272044 4167661.5519910906,261113.28050272044 4193273.748016556,301669.73418328754 4193273.748016556,301669.73418328754 4167661.5519910906,261113.28050272044 4167661.5519910906))",Wolfe,boundaryappalachianbasin_wvges_1996_utm83,USA
287,4175855.3401583503,237894.9451015721,"POLYGON((223262.34667758137 4159143.699651299,223262.34667758137 4192831.138762049,259431.47180984676 4192831.138762049,259431.47180984676 4159143.699651299,223262.34667758137 4159143.699651299))",Estill,boundaryappalachianbasin_wvges_1996_utm83,USA
288,4171753.654827458,187101.01000310777,"POLYGON((169492.88830346888 4152731.4672666495,169492.88830346888 4192920.31503053,203227.82900410064 4192920.31503053,203227.82900410064 4152731.4672666495,169492.88830346888 4152731.4672666495))",Garrard,boundaryappalachianbasin_wvges_1996_utm83,USA
289,4158279.76361543,345437.54153772275,"POLYGON((328405.5081864614 4128810.4710325086,328405.5081864614 4180007.285061187,361426.94014692947 4180007.285061187,361426.94014692947 4128810.4710325086,328405.5081864614 4128810.4710325086))",Floyd,boundaryappalachianbasin_wvges_1996_utm83,USA
290,4147581.8418912003,376659.92101888865,"POLYGON((346492.63694546715 4117536.12950625,346492.63694546715 4178262.7835149313,415217.31210496934 4178262.7835149313,415217.31210496934 4117536.12950625,346492.63694546715 4117536.12950625))",Pike,boundaryappalachianbasin_wvges_1996_utm83,USA
291,4164484.01750829,259588.73512806022,"POLYGON((242844.97825580023 4152857.5463919793,242844.97825580023 4178284.908015244,276511.4615458901 4178284.908015244,276511.4615458901 4152857.5463919793,242844.97825580023 4152857.5463919793))",Lee,boundaryappalachianbasin_wvges_1996_utm83,USA
292,4171463.419134901,157672.73570595364,"POLYGON((141901.03906974167 4161294.734041328,141901.03906974167 4181278.463643046,176311.53594296705 4181278.463643046,176311.53594296705 4161294.734041328,141901.03906974167 4161294.734041328))",Boyle,boundaryappalachianbasin_wvges_1996_utm83,USA
293,4155683.794211001,294159.57375573536,"POLYGON((271399.9291426341 4135007.04411702,271399.9291426341 4175227.0911432127,326601.3955791454 4175227.0911432127,326601.3955791454 4135007.04411702,271399.9291426341 4135007.04411702))",Breathitt,boundaryappalachianbasin_wvges_1996_utm83,USA
294,4152127.618238089,175243.8682269638,"POLYGON((157774.90901970537 4128862.981075067,157774.90901970537 4171702.535456231,194191.8588879945 4171702.535456231,194191.8588879945 4128862.981075067,157774.90901970537 4128862.981075067))",Lincoln,boundaryappalachianbasin_wvges_1996_utm83,USA
295,4145901.589058107,233485.48701919513,"POLYGON((216402.37407917908 4127211.6903600693,216402.37407917908 4163361.6858569006,253239.68651962848 4163361.6858569006,253239.68651962848 4127211.6903600693,216402.37407917908 4127211.6903600693))",Jackson,boundaryappalachianbasin_wvges_1996_utm83,USA
296,4138613.4158529504,150750.86285917406,"POLYGON((129553.4752916221 4114464.2583010937,129553.4752916221 4163484.364310793,170443.2893624821 4163484.364310793,170443.2893624821 4114464.2583010937,129553.4752916221 4114464.2583010937))",Casey,boundaryappalachianbasin_wvges_1996_utm83,USA
297,4144748.825952535,262063.69335140276,"POLYGON((244568.1949892815 4126834.353208424,244568.1949892815 4157861.319782926,275927.59024678404 4157861.319782926,275927.59024678404 4126834.353208424,244568.1949892815 4126834.353208424))",Owsley,boundaryappalachianbasin_wvges_1996_utm83,USA
298,4140932.737457793,205722.01332492646,"POLYGON((188698.0581625827 4118186.530864618,188698.0581625827 4159837.779752138,221847.13442429795 4159837.779752138,221847.13442429795 4118186.530864618,188698.0581625827 4118186.530864618))",Rockcastle,boundaryappalachianbasin_wvges_1996_utm83,USA
299,4136194.936166629,326715.61651404336,"POLYGON((311131.9184521298 4117163.3374284063,311131.9184521298 4155867.3197431066,348561.03561659146 4155867.3197431066,348561.03561659146 4117163.3374284063,311131.9184521298 4117163.3374284063))",Knott,boundaryappalachianbasin_wvges_1996_utm83,USA
300,4124931.8699243926,302516.04764027277,"POLYGON((273411.27253598114 4097282.2660099794,273411.27253598114 4146203.209620713,321991.8985611213 4146203.209620713,321991.8985611213 4097282.2660099794,273411.27253598114 4097282.2660099794))",Perry,boundaryappalachianbasin_wvges_1996_utm83,USA
301,4112969.3332067155,181131.65241711345,"POLYGON((151322.68066020543 4086555.2946240106,151322.68066020543 4140825.705401189,207282.8888377525 4140825.705401189,207282.8888377525 4086555.2946240106,151322.68066020543 4086555.2946240106))",Pulaski,boundaryappalachianbasin_wvges_1996_utm83,USA
302,4116172.749499983,258497.58778164288,"POLYGON((235621.71959342388 4091368.2741163825,235621.71959342388 4138013.8661568044,277303.88502233464 4138013.8661568044,277303.88502233464 4091368.2741163825,235621.71959342388 4091368.2741163825))",Clay,boundaryappalachianbasin_wvges_1996_utm83,USA
303,4111800.916470996,222108.70004061246,"POLYGON((200115.7710872455 4092935.2639484373,200115.7710872455 4136087.3406660142,244540.38987163824 4136087.3406660142,244540.38987163824 4092935.2639484373,200115.7710872455 4092935.2639484373))",Laurel,boundaryappalachianbasin_wvges_1996_utm83,USA
304,4108516.6650828845,288129.995921579,"POLYGON((272919.5649151006 4085566.755396831,272919.5649151006 4133114.3026450495,307546.3053538655 4133114.3026450495,307546.3053538655 4085566.755396831,272919.5649151006 4085566.755396831))",Leslie,boundaryappalachianbasin_wvges_1996_utm83,USA
305,4110309.436792968,335337.39697766554,"POLYGON((308164.3864456592 4093225.9219074408,308164.3864456592 4127023.7006250313,360833.89014180156 4127023.7006250313,360833.89014180156 4093225.9219074408,308164.3864456592 4093225.9219074408))",Letcher,boundaryappalachianbasin_wvges_1996_utm83,USA
306,4101901.2246677275,138093.6824087125,"POLYGON((118351.86165825825 4084523.30311484,118351.86165825825 4123332.712087608,157467.75984322623 4123332.712087608,157467.75984322623 4084523.30311484,118351.86165825825 4084523.30311484))",Russell,boundaryappalachianbasin_wvges_1996_utm83,USA
307,4087077.119976824,244978.67636632922,"POLYGON((223851.30525924644 4064639.7102395142,223851.30525924644 4104964.9580252483,270970.5252685017 4104964.9580252483,270970.5252685017 4064639.7102395142,223851.30525924644 4064639.7102395142))",Knox,boundaryappalachianbasin_wvges_1996_utm83,USA
308,4081660.1734281154,302039.56471409637,"POLYGON((275849.63882198883 4060179.19582512,275849.63882198883 4099683.750075072,334293.14737611404 4099683.750075072,334293.14737611404 4060179.19582512,275849.63882198883 4060179.19582512))",Harlan,boundaryappalachianbasin_wvges_1996_utm83,USA
309,4079998.8759238515,157721.9309610811,"POLYGON((136468.14112226 4057799.474318753,136468.14112226 4101567.2589146327,180231.33933499822 4101567.2589146327,180231.33933499822 4057799.474318753,136468.14112226 4057799.474318753))",Wayne,boundaryappalachianbasin_wvges_1996_utm83,USA
310,4072718.258041917,218693.785743808,"POLYGON((199911.7059716776 4053547.016722879,199911.7059716776 4096435.069528025,242294.3135183969 4096435.069528025,242294.3135183969 4053547.016722879,199911.7059716776 4053547.016722879))",Whitley,boundaryappalachianbasin_wvges_1996_utm83,USA
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"
export JARVIS_API_KEY="${JARVIS_API_KEY:-internal}"

echo "=== routes ==="
docker exec jarvis-unified-gateway python - <<'PY'
import importlib.util
path = "/app/services/ms_jarvis_unified_gateway.py"
spec = importlib.util.spec_from_file_location("gw", path)
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)
print("module_file:", path)
print("has_app:", hasattr(m, "app"))
if hasattr(m, "app"):
    for r in m.app.routes:
        print(repr(getattr(r, "path", None)), sorted(getattr(r, "methods", []) or []))
PY

echo
echo "=== health ==="
docker exec jarvis-unified-gateway python - <<'PY'
import urllib.request
u = "http://127.0.0.1:8001/health"
with urllib.request.urlopen(u, timeout=30) as r:
    print("status:", r.status)
    print(r.read().decode())
PY

echo
echo "=== chat ==="
docker exec -e JARVIS_API_KEY="$JARVIS_API_KEY" jarvis-unified-gateway python - <<'PY'
import os, json, urllib.request, urllib.error

payload = json.dumps({
    "message": "What food, housing, and utility assistance options exist in Oak Hill and Fayette County West Virginia?",
    "userid": "gw-hilbert-test",
    "session_id": "gw-hilbert-test"
}).encode()

req = urllib.request.Request(
    "http://127.0.0.1:8001/chat",
    data=payload,
    headers={
        "Content-Type": "application/json",
        "X-API-Key": os.environ.get("JARVIS_API_KEY", "internal"),
    },
    method="POST",
)

try:
    with urllib.request.urlopen(req, timeout=120) as r:
        print("status:", r.status)
        print(r.read().decode()[:4000])
except urllib.error.HTTPError as e:
    print("http_error:", e.code)
    print(e.read().decode()[:4000])
except Exception as e:
    print("request_failed:", repr(e))
PY

echo
echo "=== steward direct ==="
docker exec jarvis-unified-gateway python - <<'PY'
import urllib.request, urllib.error, json

tests = [
    ("history", "http://jarvis-steward:8060/session/history",
     {"user_id":"gw-hilbert-test","session_id":"gw-hilbert-test","last_n":3}),
    ("upsert", "http://jarvis-steward:8060/session/upsert",
     {"user_id":"gw-hilbert-test","session_id":"gw-hilbert-test","user_message":"ping","assistant_response":"pong"}),
]

for name, url, payload in tests:
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode(),
        headers={"Content-Type":"application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            print("==", name, "OK ==")
            print("status:", r.status)
            print(r.read().decode()[:800])
    except urllib.error.HTTPError as e:
        print("==", name, "HTTPError ==")
        print("status:", e.code)
        print(e.read().decode()[:800])
    except Exception as e:
        print("==", name, "FAILED ==")
        print(repr(e))
PY

echo
echo "=== logs ==="
docker logs --tail 200 jarvis-unified-gateway 2>&1 | egrep -i 'POST /chat|Hilbert geo boost active|session/history|session/upsert|401|403|404|422|500|Traceback|ERROR' || true
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ 

