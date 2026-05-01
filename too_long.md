(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~$ # Find the actual gateway source file
find . -name "*.py" | xargs grep -l "Authorization\|api_key\|JARVIS_API_KEY" 2>/dev/null

# Also check what the running container has
docker exec jarvis-unified-gateway find /app -name "*.py" | head -20
docker exec jarvis-unified-gateway cat /app/services/$(docker exec jarvis-unified-gateway ls /app/services/ | grep -i gateway)
./msjarvis-safe/recovered-services/ms_jarvis_email_service.py
./msjarvis-safe/recovered-services/ms_jarvis_unified_gateway.py
./msjarvis-safe/recovered-services/ms_jarvis_microsoft_integration_FIXED.py
./msjarvis-safe/recovered-services/alert_venv/send_alert_msj.py
./msjarvis-safe/recovered-services/brain_orchestrator.py
./msjarvis-safe/recovered-services/oauth2_handler.py
./msjarvis-safe/recovered-services/ms_jarvis_expiration_monitor.py
./msjarvis-safe/recovered-services/ms_jarvis_unified_swagger_gateway_SECURED.py
./msjarvis-safe/recovered-services/services/ms_jarvis_email_service.py
./msjarvis-safe/recovered-services/services/ms_jarvis_microsoft_integration_FIXED.py
./msjarvis-safe/recovered-services/services/ms_jarvis_web_deployer_old.py
./msjarvis-safe/recovered-services/services/ms_jarvis_web_deployer.py
./msjarvis-safe/recovered-services/services/ms_jarvis_microsoft_integration.py
./msjarvis-safe/recovered-services/registration_biometric_production_final.py
./msjarvis-safe/recovered-services/ms_jarvis_unified_gateway_v4.3.BEFORE_69DGM_INTEGRATION.py
./msjarvis-safe/recovered-services/stage2_biometric.py
./msjarvis-safe/recovered-services/ms_jarvis_web_deployer_old.py
./msjarvis-safe/recovered-services/registration_service_clean.backup_1762220206.py
./msjarvis-safe/recovered-services/main_brain.py
./msjarvis-safe/recovered-services_20llm_full/ms_jarvis_email_service.py
./msjarvis-safe/recovered-services_20llm_full/ms_jarvis_unified_gateway.py
./msjarvis-safe/recovered-services_20llm_full/ms_jarvis_microsoft_integration_FIXED.py
./msjarvis-safe/recovered-services_20llm_full/alert_venv/send_alert_msj.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/opentelemetry/semconv/trace/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/httpcore/_async/http_proxy.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/httpcore/_models.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/httpcore/_sync/http_proxy.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/numpy/f2py/rules.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/urllib3/util/retry.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/grpc/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/requests_oauthlib/oauth1_session.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/requests_oauthlib/oauth2_session.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/ai/gemini/gemini.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/ai/openai/openai_async.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/ai/openai/openai_providers.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/ai/openai/openai.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/consumer.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/request.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/test/test_module.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/test/test_client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/test/test_feature_flags.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/posthog/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/requests/sessions.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/requests/auth.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/requests/adapters.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/tqdm/contrib/discord.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/dispatchers.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/authorization_code.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/base.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/hybrid.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/endpoints/userinfo.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/endpoints/pre_configured.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/exceptions.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/request_validator.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/common.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/request_token.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/access_token.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/base.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/authorization.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/pre_configured.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/parameters.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/signature.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/request_validator.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth1/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/errors.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/endpoints/device_authorization.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/endpoints/pre_configured.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/endpoints/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/clients/device.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/clients/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/request_validator.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/errors.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/resource_owner_password_credentials.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/authorization_code.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/implicit.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/client_credentials.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/base.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/metadata.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/token.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/revocation.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/resource.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/authorization.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/pre_configured.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/clients/base.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/clients/service_application.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/tokens.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/request_validator.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/oauthlib/oauth2/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/errors.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/hf_api.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/utils/_http.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/_commit_api.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_generated/_async_client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/cli.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/mcp_client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/agent.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/fireworks_ai.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/fal_ai.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/_common.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/wavespeed.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/nscale.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/scaleway.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/zai_org.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/novita.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/openai.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/hf_inference.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/hyperbolic.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/black_forest_labs.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/sambanova.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/replicate.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/cohere.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/clarifai.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/groq.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/nebius.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/together.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/client/api/rbac_authorization_api.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/client/api/rbac_authorization_v1_api.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/client/api/authorization_v1_api.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/client/api/authorization_api.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/client/api/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/client/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/client/configuration.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/stream/ws_client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/config/incluster_config_test.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/config/incluster_config.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/config/kube_config_test.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/kubernetes/config/kube_config.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/fsspec/implementations/jupyter.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/fsspec/implementations/dbfs.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/fsspec/implementations/gist.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/pygments/lexers/_cocoa_builtins.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/pygments/lexers/matlab.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/httpx/_main.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/httpx/_client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/httpx/_auth.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/websocket/_http.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/websockets/legacy/client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/websockets/legacy/auth.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/websockets/client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/websockets/asyncio/server.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/websockets/headers.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/websockets/sync/server.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/websockets/proxy.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/errors.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/auth/simple_rbac_authz/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/auth/basic_authn/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/auth/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/auth/token_authn/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/api/shared_system_client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/cloudflare_workers_ai_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/baseten_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/google_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/together_ai_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/voyageai_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/huggingface_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/chroma_cloud_qwen_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/jina_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/cohere_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/chroma_cloud_splade_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/openai_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/roboflow_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/morph_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/mistral_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/nomic_embedding_function.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/config.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/telemetry/product/posthog.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/test/client/test_cloud_client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/test/client/test_database_tenant_auth.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/test/api/test_shared_system_client.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/test/ef/test_morph_ef.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/test/ef/test_voyageai_ef.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/test/ef/test_openai_ef.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/test/utils/test_embedding_function_schemas.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/test/conftest.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/chromadb/server/fastapi/__init__.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/pip/_vendor/urllib3/util/retry.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/ntlmpool.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/pip/_vendor/requests/sessions.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/pip/_vendor/requests/auth.py
./msjarvis-safe/recovered-services_20llm_full/chroma_inspect_venv/lib/python3.12/site-packages/pip/_vendor/requests/adapters.py
./msjarvis-safe/recovered-services_20llm_full/brain_orchestrator.py
./msjarvis-safe/recovered-services_20llm_full/oauth2_handler.py
./msjarvis-safe/recovered-services_20llm_full/ms_jarvis_expiration_monitor.py
./msjarvis-safe/recovered-services_20llm_full/ms_jarvis_unified_swagger_gateway_SECURED.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/httpcore/_async/http_proxy.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/httpcore/_models.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/httpcore/_sync/http_proxy.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/urllib3/util/retry.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/requests/sessions.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/requests/auth.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/requests/adapters.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/httpx/_main.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/httpx/_client.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/httpx/_auth.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/util/retry.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/ntlmpool.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/pip/_vendor/requests/sessions.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/pip/_vendor/requests/auth.py
./msjarvis-safe/recovered-services_20llm_full/.venv/lib/python3.12/site-packages/pip/_vendor/requests/adapters.py
./msjarvis-safe/recovered-services_20llm_full/python/brain_orchestrator.py
./msjarvis-safe/recovered-services_20llm_full/service_registry_client.py
./msjarvis-safe/recovered-services_20llm_full/registration_biometric_production_final.py
./msjarvis-safe/recovered-services_20llm_full/ms_jarvis_unified_gateway_v4.3.BEFORE_69DGM_INTEGRATION.py
./msjarvis-safe/recovered-services_20llm_full/msjarvismaingateway.py
./msjarvis-safe/recovered-services_20llm_full/stage2_biometric.py
./msjarvis-safe/recovered-services_20llm_full/ms_jarvis_web_deployer_old.py
./msjarvis-safe/recovered-services_20llm_full/registration_service_clean.backup_1762220206.py
./msjarvis-safe/recovered-services_20llm_full/main_brain.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/transformers/integrations/integration_utils.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/httpcore/_async/http_proxy.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/httpcore/_models.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/httpcore/_sync/http_proxy.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/numpy/f2py/rules.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/urllib3/util/retry.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/fastapi/security/oauth2.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/fastapi/security/http.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/fastapi/security/open_id_connect_url.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/fastapi/security/api_key.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/fastapi/security/__init__.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/fastapi/openapi/models.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/fastapi/openapi/docs.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/torch/hub.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/requests/sessions.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/requests/auth.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/requests/adapters.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/tqdm/contrib/discord.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/errors.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/hf_api.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/utils/_http.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/_commit_api.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_generated/_async_client.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_client.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/cli.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/mcp_client.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/agent.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/fireworks_ai.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/fal_ai.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/_common.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/wavespeed.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/nscale.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/scaleway.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/zai_org.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/novita.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/openai.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/hf_inference.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/hyperbolic.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/black_forest_labs.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/sambanova.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/replicate.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/cohere.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/clarifai.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/groq.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/nebius.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/together.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/fsspec/implementations/jupyter.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/fsspec/implementations/dbfs.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/fsspec/implementations/gist.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/pygments/lexers/_cocoa_builtins.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/pygments/lexers/matlab.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/httpx/_main.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/httpx/_client.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/httpx/_auth.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/websockets/legacy/client.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/websockets/legacy/auth.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/websockets/client.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/websockets/asyncio/server.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/websockets/headers.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/websockets/sync/server.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/websockets/proxy.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/pip/_vendor/urllib3/util/retry.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/ntlmpool.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/pip/_vendor/requests/sessions.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/pip/_vendor/requests/auth.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/pip/_vendor/requests/adapters.py
./msjarvis-safe/recovered-services_20llm_full/venv/lib/python3.12/site-packages/torchgen/dest/native_functions.py
./msjarvis-safe/recovered-services_20llm_full/ms_jarvis_unified_swagger_gateway.py
./msjarvis-safe/recovered-services_20llm_full/ms_jarvis_web_deployer.py
./msjarvis-safe/recovered-services_20llm_full/ms_jarvis_microsoft_integration.py
./msjarvis-safe/recovered-services_20llm_full/registration_service_clean.py
./.ms-allis-backups/auth-fix-20260426-112601/auth_api_additions.py
./.ms-allis-backups/supersession-20260426-112449/auth_api.py
./.local/lib/python3.12/site-packages/transformers/integrations/integration_utils.py
./.local/lib/python3.12/site-packages/opentelemetry/semconv/trace/__init__.py
./.local/lib/python3.12/site-packages/httpcore/_async/http_proxy.py
./.local/lib/python3.12/site-packages/httpcore/_models.py
./.local/lib/python3.12/site-packages/httpcore/_sync/http_proxy.py
./.local/lib/python3.12/site-packages/fastapi/security/oauth2.py
./.local/lib/python3.12/site-packages/fastapi/security/http.py
./.local/lib/python3.12/site-packages/fastapi/security/open_id_connect_url.py
./.local/lib/python3.12/site-packages/fastapi/security/api_key.py
./.local/lib/python3.12/site-packages/fastapi/security/__init__.py
./.local/lib/python3.12/site-packages/fastapi/openapi/models.py
./.local/lib/python3.12/site-packages/fastapi/openapi/docs.py
./.local/lib/python3.12/site-packages/grpc/__init__.py
./.local/lib/python3.12/site-packages/requests_oauthlib/oauth1_session.py
./.local/lib/python3.12/site-packages/requests_oauthlib/oauth2_session.py
./.local/lib/python3.12/site-packages/psycopg2/errorcodes.py
./.local/lib/python3.12/site-packages/torch/hub.py
./.local/lib/python3.12/site-packages/tqdm/contrib/discord.py
./.local/lib/python3.12/site-packages/redis/ocsp.py
./.local/lib/python3.12/site-packages/redis/exceptions.py
./.local/lib/python3.12/site-packages/huggingface_hub/errors.py
./.local/lib/python3.12/site-packages/huggingface_hub/hf_api.py
./.local/lib/python3.12/site-packages/huggingface_hub/utils/_http.py
./.local/lib/python3.12/site-packages/huggingface_hub/_commit_api.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_generated/_async_client.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_client.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/cli.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/mcp_client.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/agent.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/fireworks_ai.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/fal_ai.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/_common.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/wavespeed.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/nscale.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/scaleway.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/zai_org.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/novita.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/openai.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/hf_inference.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/hyperbolic.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/black_forest_labs.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/sambanova.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/replicate.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/cohere.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/clarifai.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/groq.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/nebius.py
./.local/lib/python3.12/site-packages/huggingface_hub/inference/_providers/together.py
./.local/lib/python3.12/site-packages/kubernetes/client/api/rbac_authorization_api.py
./.local/lib/python3.12/site-packages/kubernetes/client/api/rbac_authorization_v1_api.py
./.local/lib/python3.12/site-packages/kubernetes/client/api/authorization_v1_api.py
./.local/lib/python3.12/site-packages/kubernetes/client/api/authorization_api.py
./.local/lib/python3.12/site-packages/kubernetes/client/api/__init__.py
./.local/lib/python3.12/site-packages/kubernetes/client/__init__.py
./.local/lib/python3.12/site-packages/kubernetes/client/configuration.py
./.local/lib/python3.12/site-packages/kubernetes/stream/ws_client.py
./.local/lib/python3.12/site-packages/kubernetes/config/incluster_config_test.py
./.local/lib/python3.12/site-packages/kubernetes/config/incluster_config.py
./.local/lib/python3.12/site-packages/kubernetes/config/kube_config_test.py
./.local/lib/python3.12/site-packages/kubernetes/config/kube_config.py
./.local/lib/python3.12/site-packages/fsspec/implementations/jupyter.py
./.local/lib/python3.12/site-packages/fsspec/implementations/dbfs.py
./.local/lib/python3.12/site-packages/fsspec/implementations/gist.py
./.local/lib/python3.12/site-packages/httpx/_main.py
./.local/lib/python3.12/site-packages/httpx/_client.py
./.local/lib/python3.12/site-packages/httpx/_auth.py
./.local/lib/python3.12/site-packages/websockets/legacy/client.py
./.local/lib/python3.12/site-packages/websockets/legacy/auth.py
./.local/lib/python3.12/site-packages/websockets/client.py
./.local/lib/python3.12/site-packages/websockets/asyncio/server.py
./.local/lib/python3.12/site-packages/websockets/headers.py
./.local/lib/python3.12/site-packages/websockets/sync/server.py
./.local/lib/python3.12/site-packages/websockets/proxy.py
./.local/lib/python3.12/site-packages/chromadb/errors.py
./.local/lib/python3.12/site-packages/chromadb/auth/simple_rbac_authz/__init__.py
./.local/lib/python3.12/site-packages/chromadb/auth/basic_authn/__init__.py
./.local/lib/python3.12/site-packages/chromadb/auth/__init__.py
./.local/lib/python3.12/site-packages/chromadb/auth/token_authn/__init__.py
./.local/lib/python3.12/site-packages/chromadb/api/shared_system_client.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/cloudflare_workers_ai_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/baseten_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/google_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/together_ai_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/voyageai_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/huggingface_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/chroma_cloud_qwen_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/jina_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/cohere_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/chroma_cloud_splade_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/openai_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/roboflow_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/morph_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/perplexity_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/mistral_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/utils/embedding_functions/nomic_embedding_function.py
./.local/lib/python3.12/site-packages/chromadb/config.py
./.local/lib/python3.12/site-packages/chromadb/test/client/test_cloud_client.py
./.local/lib/python3.12/site-packages/chromadb/test/client/test_database_tenant_auth.py
./.local/lib/python3.12/site-packages/chromadb/test/api/test_shared_system_client.py
./.local/lib/python3.12/site-packages/chromadb/test/ef/test_morph_ef.py
./.local/lib/python3.12/site-packages/chromadb/test/ef/test_voyageai_ef.py
./.local/lib/python3.12/site-packages/chromadb/test/ef/test_openai_ef.py
./.local/lib/python3.12/site-packages/chromadb/test/utils/test_embedding_function_schemas.py
./.local/lib/python3.12/site-packages/chromadb/test/conftest.py
./.local/lib/python3.12/site-packages/chromadb/__init__.py
./.local/lib/python3.12/site-packages/chromadb/server/fastapi/__init__.py
./.local/lib/python3.12/site-packages/torchgen/dest/native_functions.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/opentelemetry/semconv/trace/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/httpcore/_async/http_proxy.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/httpcore/_models.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/httpcore/_sync/http_proxy.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/numpy/f2py/rules.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/urllib3/util/retry.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/grpc/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/requests_oauthlib/oauth1_session.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/requests_oauthlib/oauth2_session.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/requests/sessions.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/requests/auth.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/requests/adapters.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/tqdm/contrib/discord.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/dispatchers.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/authorization_code.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/base.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/hybrid.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/endpoints/userinfo.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/endpoints/pre_configured.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/exceptions.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/request_validator.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/common.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/request_token.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/access_token.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/base.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/authorization.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/pre_configured.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/parameters.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/signature.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/request_validator.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth1/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/errors.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/endpoints/device_authorization.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/endpoints/pre_configured.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/endpoints/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/clients/device.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/clients/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/request_validator.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/errors.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/resource_owner_password_credentials.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/authorization_code.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/implicit.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/client_credentials.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/base.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/metadata.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/token.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/revocation.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/resource.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/authorization.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/pre_configured.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/clients/base.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/clients/service_application.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/tokens.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/request_validator.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/oauthlib/oauth2/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/errors.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/hf_api.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/utils/_http.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/_commit_api.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_generated/_async_client.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_client.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/cli.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/mcp_client.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/agent.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/fireworks_ai.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/fal_ai.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/_common.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/wavespeed.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/nscale.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/scaleway.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/zai_org.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/novita.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/openai.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/hf_inference.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/hyperbolic.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/black_forest_labs.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/sambanova.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/replicate.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/cohere.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/clarifai.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/groq.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/nebius.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/together.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/client/api/rbac_authorization_api.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/client/api/rbac_authorization_v1_api.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/client/api/authorization_v1_api.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/client/api/authorization_api.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/client/api/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/client/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/client/configuration.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/stream/ws_client.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/config/incluster_config_test.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/config/incluster_config.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/config/kube_config_test.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/kubernetes/config/kube_config.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/fsspec/implementations/jupyter.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/fsspec/implementations/dbfs.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/fsspec/implementations/gist.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/pygments/lexers/_cocoa_builtins.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/pygments/lexers/matlab.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/httpx/_main.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/httpx/_client.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/httpx/_auth.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/websocket/_http.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/websockets/legacy/client.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/websockets/legacy/auth.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/websockets/client.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/websockets/asyncio/server.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/websockets/headers.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/websockets/sync/server.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/websockets/proxy.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/errors.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/auth/simple_rbac_authz/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/auth/basic_authn/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/auth/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/auth/token_authn/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/api/shared_system_client.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/cloudflare_workers_ai_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/baseten_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/google_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/together_ai_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/voyageai_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/huggingface_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/chroma_cloud_qwen_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/jina_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/cohere_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/chroma_cloud_splade_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/openai_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/roboflow_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/morph_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/perplexity_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/mistral_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/nomic_embedding_function.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/config.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/test/client/test_cloud_client.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/test/client/test_database_tenant_auth.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/test/api/test_shared_system_client.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/test/ef/test_morph_ef.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/test/ef/test_voyageai_ef.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/test/ef/test_openai_ef.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/test/utils/test_embedding_function_schemas.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/test/conftest.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/chromadb/server/fastapi/__init__.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/pip/_vendor/urllib3/util/retry.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/ntlmpool.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/pip/_vendor/requests/sessions.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/pip/_vendor/requests/auth.py
./msjarvis-venvs/chroma_venv/lib/python3.12/site-packages/pip/_vendor/requests/adapters.py
find: ‘./msjarvis-rebuild-working/msjarvis-rebuild/data/local_resources’: Permission denied
./msjarvis-rebuild-working/msjarvis-rebuild/ms-allis-auth-install/backend/auth_api_patch.py
./msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_web_deployer_old.py
./msjarvis-rebuild-working/msjarvis-rebuild/_archive/generated_20260430/ms_jarvis_unified_swagger_gateway.py
./msjarvis-rebuild-working/msjarvis-rebuild/_archive/service_baks_20260430/registration_service_clean.backup_1762220206.py
./msjarvis-rebuild-working/msjarvis-rebuild/msjarvis-rebuild/ms_jarvis_unified_gateway.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_email_service.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_microsoft_integration_FIXED.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/alert_venv/send_alert_msj.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/auth_api_patch.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/brain_orchestrator.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/oauth2_handler.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/email_service.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_expiration_monitor.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_swagger_gateway_SECURED.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/httpcore/_async/http_proxy.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/httpcore/_models.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/httpcore/_sync/http_proxy.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/urllib3/util/retry.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/requests/sessions.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/requests/auth.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/requests/adapters.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/httpx/_main.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/httpx/_client.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/httpx/_auth.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/util/retry.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/ntlmpool.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/pip/_vendor/requests/sessions.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/pip/_vendor/requests/auth.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/.venv/lib/python3.12/site-packages/pip/_vendor/requests/adapters.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/rag_server_main.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/python/brain_orchestrator.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/service_registry_client.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/registration_biometric_production_final.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_unified_gateway_v4.3.BEFORE_69DGM_INTEGRATION.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/msjarvismaingateway.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/typed_transactions/set_code_transaction.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/account.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/types.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/account_local_actions.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/_utils/transaction_utils.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_account/datastructures.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/_vendor/eth_utils/pydantic.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_memory.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/stage2_biometric.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/auth_api.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_blood_brain_barrier.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain_LEGACY_32svc.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/core/auth.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_web_deployer.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/main_brain_container_2055.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/ms_jarvis_microsoft_integration.py
./msjarvis-rebuild-working/msjarvis-rebuild/services/registration_service_clean.py
./msjarvis-rebuild-working/msjarvis-rebuild/auth_api.py
./msjarvis-rebuild-working/msjarvis-rebuild/scripts/jarvis_auth_service.py
./msjarvis-rebuild-working/msjarvis-rebuild/logs/ch40_closeout/main_brain.py.pre_otel_cleanup.snapshot.py
./msjarvis-rebuild-working/msjarvis-rebuild/logs/ch40_closeout/ms_jarvis_unified_gateway.snapshot.py
./msjarvis-rebuild-working/msjarvis-rebuild/test_services.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/transformers/integrations/integration_utils.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/opentelemetry/semconv/trace/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/httpcore/_async/http_proxy.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/httpcore/_models.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/httpcore/_sync/http_proxy.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/numpy/f2py/rules.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/extra/rate_limiter.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/geocodefarm.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/dot_us.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/google.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/yandex.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/geocodeearth.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/mapbox.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/what3words.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/geokeo.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/baidu.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/geolake.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/maptiler.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/pickpoint.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/ignfrance.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/opencage.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/woosmap.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/openmapquest.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/azure.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/geocodio.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/tomtom.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/bing.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/pelias.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/algolia.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/mapzen.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/geopy/geocoders/mapquest.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/requests_toolbelt/auth/http_proxy_digest.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/urllib3/util/retry.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/grpc/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/requests_oauthlib/oauth1_session.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/requests_oauthlib/oauth2_session.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/psycopg2/errorcodes.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/torch/hub.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/requests/sessions.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/requests/auth.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/requests/adapters.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/tqdm/contrib/discord.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/dispatchers.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/authorization_code.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/base.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/hybrid.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/grant_types/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/endpoints/userinfo.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/endpoints/pre_configured.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/exceptions.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/openid/connect/core/request_validator.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/common.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/request_token.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/access_token.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/base.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/authorization.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/pre_configured.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/endpoints/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/parameters.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/signature.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth1/rfc5849/request_validator.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth1/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/errors.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/endpoints/device_authorization.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/endpoints/pre_configured.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/endpoints/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/clients/device.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/clients/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc8628/request_validator.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/errors.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/resource_owner_password_credentials.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/authorization_code.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/implicit.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/client_credentials.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/base.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/grant_types/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/metadata.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/token.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/revocation.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/resource.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/authorization.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/pre_configured.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/endpoints/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/clients/base.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/clients/service_application.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/tokens.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/rfc6749/request_validator.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/oauthlib/oauth2/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/redis/ocsp.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/redis/exceptions.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/sqlalchemy/testing/profiling.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langchain_core/runnables/config.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langchain_core/load/serializable.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/errors.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/hf_api.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/utils/_http.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/_commit_api.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_generated/_async_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/cli.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/mcp_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_mcp/agent.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/fireworks_ai.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/fal_ai.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/_common.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/wavespeed.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/nscale.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/scaleway.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/zai_org.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/novita.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/openai.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/hf_inference.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/hyperbolic.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/black_forest_labs.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/sambanova.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/replicate.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/cohere.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/clarifai.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/groq.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/nebius.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/huggingface_hub/inference/_providers/together.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/client/api/rbac_authorization_api.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/client/api/rbac_authorization_v1_api.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/client/api/authorization_v1_api.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/client/api/authorization_api.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/client/api/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/client/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/client/configuration.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/stream/ws_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/config/incluster_config_test.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/config/incluster_config.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/config/kube_config_test.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/kubernetes/config/kube_config.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/fsspec/implementations/jupyter.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/fsspec/implementations/dbfs.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/fsspec/implementations/gist.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/pygments/lexers/_cocoa_builtins.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/pygments/lexers/matlab.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/httpx/_main.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/httpx/_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/httpx/_auth.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/websocket/_http.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/run_helpers.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/sandbox/_sandbox.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/sandbox/_async_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/sandbox/_async_sandbox.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/sandbox/_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/sandbox/_tunnel.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/sandbox/_ws_execute.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/run_trees.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/wrappers/_gemini.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/async_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/_internal/otel/_otel_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/_internal/_background_thread.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/integrations/otel/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/integrations/otel/processor.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/langsmith/utils.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/websockets/legacy/client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/websockets/legacy/auth.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/websockets/client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/websockets/asyncio/server.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/websockets/headers.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/websockets/sync/server.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/websockets/proxy.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/errors.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/auth/simple_rbac_authz/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/auth/basic_authn/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/auth/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/auth/token_authn/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/api/shared_system_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/cloudflare_workers_ai_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/baseten_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/google_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/together_ai_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/voyageai_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/huggingface_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/chroma_cloud_qwen_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/jina_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/cohere_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/chroma_cloud_splade_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/openai_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/roboflow_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/morph_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/perplexity_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/mistral_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/utils/embedding_functions/nomic_embedding_function.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/config.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/test/client/test_cloud_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/test/client/test_database_tenant_auth.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/test/api/test_shared_system_client.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/test/ef/test_morph_ef.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/test/ef/test_voyageai_ef.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/test/ef/test_openai_ef.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/test/utils/test_embedding_function_schemas.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/test/conftest.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/chromadb/server/fastapi/__init__.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/pip/_vendor/urllib3/util/retry.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/pip/_vendor/urllib3/contrib/ntlmpool.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/pip/_vendor/requests/sessions.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/pip/_vendor/requests/auth.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/pip/_vendor/requests/adapters.py
./msjarvis-rebuild-working/ingest-venv/lib/python3.12/site-packages/torchgen/dest/native_functions.py
./Downloads/ms-allis-v1/services/email_service.py
./Downloads/ms-allis-v1/test_services.py
./Downloads/auth_api.py
./Downloads/main_brain.py
/app/services/ms_jarvis_unified_gateway.py
/app/services/session_sidecar_client.py
/app/services/services_safe.py
import os
#!/usr/bin/env python3
"""
Ms. Egeria Allis UNIFIED Gateway - Complete System Integration
Port: 8001 (Main interface)
"""

import logging
import asyncio
import httpx
from datetime import datetime
from typing import Dict, Any, Optional
from fastapi import FastAPI, HTTPException, Request, Header, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn




# ── Role-Based Access Control (OI-36-B fix — March 23, 2026) ─────────────────
ROUTE_ROLES = {
    # Admin-only routes
    "/constitutional": ["carrie_admin", "admin"],
    "/admin":          ["carrie_admin", "admin"],
    "/systems":        ["carrie_admin", "admin"],
    "/selftestfabric": ["carrie_admin", "admin"],
    "/curator":        ["carrie_admin", "admin"],
    "/dgm":            ["carrie_admin", "admin"],
    "/adoption":       ["carrie_admin", "admin"],
    # Open to all authenticated users
    "/chat_cancel_all": ["carrie_admin", "admin"],
    "/chat_cancel":     ["carrie_admin", "admin"],
    "/chat":           ["carrie_admin", "admin", "hayden_test", "user"],
    "/auth":           ["carrie_admin", "admin", "hayden_test", "user"],
    "/feedback":       ["carrie_admin", "admin", "hayden_test", "user"],
    "/health":         ["carrie_admin", "admin", "hayden_test", "user"],
    "/memory":         ["carrie_admin", "admin", "hayden_test", "user"],
    # Public (no token required)
    "/":               [],
}

def _check_role(path: str, token_info: dict):
    """Return 403 if role insufficient for route."""
    role = token_info.get("role", "")
    token_type = token_info.get("token_type", "")
    
    # OI-36-C 2026-04-03: internal token_type no longer bypasses _check_role
    # /chat and /memory are user-facing routes — internal service tokens must not reach them
    # Proxy routes (lines 758/857) have their own token_type exemption for service-to-service calls
    
    # Find most specific matching route prefix
    matched = None
    for route_prefix in sorted(ROUTE_ROLES.keys(), key=len, reverse=True):
        if path.startswith(route_prefix):
            matched = route_prefix
            break
    
    if matched is None:
        return  # No restriction defined — allow
    
    allowed_roles = ROUTE_ROLES[matched]
    if allowed_roles and role not in allowed_roles:
        raise HTTPException(
            status_code=403,
            detail={"error": "insufficient_role",
                    "message": f"Role '{role}' cannot access {matched}",
                    "required_roles": allowed_roles}
        )


# ── Token Validation (OI-36-A fix — March 23, 2026) ──────────────────────────

def _validate_token(x_api_key: str = None, authorization: str = None) -> dict:
    """
    Validate invite token from X-API-Key or Authorization: Bearer header.
    Returns role dict or raises HTTPException 401.
    """
    token = None
    if x_api_key:
        token = x_api_key.strip()
    elif authorization and authorization.lower().startswith("bearer "):
        token = authorization[7:].strip()
    
    if not token:
        raise HTTPException(
            status_code=401,
            detail={"error": "missing_token", 
                    "message": "X-API-Key or Authorization: Bearer token required"}
        )
    
    # OI-36-C: JARVIS_API_KEY bypass removed 2026-04-03
    # "internal" literal token still allowed for inter-container service calls only
    if token == "internal":
        # OI-36-C: internal role = "internal", not "carrie_admin"
        # Proxy routes allow token_type=internal explicitly (lines 758, 857)
        # User-facing routes (/chat, /memory) require Redis-validated roles
        return {"userid": "internal", "role": "internal", "token_type": "internal",
                "auth_source": "internal_literal"}
    
    # OI-36-D: Validate via jarvis_auth:8055 (audit trail + centralized revocation)
    # Falls back to direct Redis if auth service unavailable.
    try:
        import httpx as _hx_auth
        _auth_resp = _hx_auth.post(
            "http://host.docker.internal:8055/validate",
            headers={"Authorization": f"Bearer {token}"},
            timeout=2.0
        )
        if _auth_resp.status_code == 200:
            _auth_data = _auth_resp.json()
            if _auth_data.get("valid") or _auth_data.get("active") == "true":
                return {
                    "userid": _auth_data.get("userid", "unknown"),
                    "role": _auth_data.get("role", "user"),
                    "token_type": "redteam",
                    "auth_source": "jarvis_auth"
                }
        elif _auth_resp.status_code == 401:
            raise HTTPException(status_code=401,
                detail={"error": "invalid_token", "message": "Token rejected by auth service"})
    except HTTPException:
        raise
    except Exception:
        pass  # jarvis_auth unavailable — fall through to Redis

    # Fallback: Validate via Redis directly (jarvis-redis at container-internal port 6379)
    try:
        import redis as _r_lazy; rc = _r_lazy.Redis(host="jarvis-redis", port=6379, decode_responses=True)
        data = rc.hgetall(f"redteam:token:{token}")
        if data and data.get("active") == "true":
            userid = data.get("userid", "unknown")
            # Role from Redis if set, else carrie_admin is admin, everyone else is "user"
            role = data.get("role") or ("carrie_admin" if userid == "carrie_admin" else "user")
            _uprof = {}
            try:
                _ukey = rc.get(f"userid:{userid}")
                if _ukey:
                    _uprof = rc.hgetall(_ukey)
            except Exception:
                pass
            return {"userid": userid, "role": role, "token_type": "redteam",
                    "auth_source": "redis_direct",
                    "county": _uprof.get("county", ""),
                    "zip": _uprof.get("zip", ""),
                    "public_uuid": _uprof.get("public_uuid", ""),
                    "ueid": _uprof.get("ueid", "")}
    except Exception as e:
        pass  # Redis unavailable — fail closed
    
    raise HTTPException(
        status_code=401,
        detail={"error": "invalid_token",
                "message": "Token not found or inactive. Request a new invite token."}
    )


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


CHROMA_PUBLIC_COLLECTIONS = {
    "community_content", "heritage_records",
    "aggregate_stats", "governance_records", "jarvis_memory"
}

app = FastAPI(
    title="Ms. Egeria Allis Unified Gateway",
    description="Complete integrated consciousness system",
    version="2.0.0"
)

from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse
import httpx



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UnifiedMsJarvis:
    """Complete Ms. Egeria Allis System"""
    
    def __init__(self):
        logger.info("🧠 Initializing UNIFIED Ms. Egeria Allis...")
        
        self.services = {
            "consciousness_bridge": os.environ.get("CONSCIOUSNESS_BRIDGE_URL", "http://jarvis-consciousness-bridge:8020"),
            "neurobiological_master": os.environ.get("NEURO_MASTER_URL",         "http://jarvis-neurobiological-master:8018"),
            "i_containers": os.environ.get("I_CONTAINERS_URL",         "http://jarvis-i-containers:8015"),
            "blood_brain_barrier": os.environ.get("BBB_URL",                  "http://jarvis-blood-brain-barrier:8016"),
            "qualia_engine": os.environ.get("QUALIA_URL",               "http://jarvis-qualia-engine:8017")
        }
        
        self.total_queries = 0
        self.successful_responses = 0
        
        logger.info("✅ UNIFIED Ms. Egeria Allis operational!")
    
    async def check_all_systems(self) -> Dict[str, Any]:
        """Health check all systems"""
        health = {}
        
        async with httpx.AsyncClient(timeout=5.0) as client:
            for name, url in self.services.items():
                try:
                    response = await client.get(f"{url}/health")
                    health[name] = {
                        "status": "healthy" if response.status_code == 200 else "degraded",
                        "url": url,
                        "responsive": True
                    }
                except Exception as e:
                    health[name] = {
                        "status": "unavailable",
                        "url": url,
                        "responsive": False
                    }
        
        return health
    
    async def process_unified(self, message: str, user_id: str = "anonymous", role: str = "guest") -> Dict[str, Any]:
        """Process through complete system"""
        self.total_queries += 1
        start_time = datetime.now()
        
        async with httpx.AsyncClient(timeout=None) as client:
            pipeline = {"query": message, "user_id": user_id}
            
            # Try Blood-Brain Barrier
            try:
                bbb_resp = await client.post(
                    f"{self.services['blood_brain_barrier']}/filter",
                    json={"content": message},
                    timeout=10.0
                )
                pipeline["bbb"] = bbb_resp.json()
                
                if not pipeline["bbb"].get("content_approved", True):
                    return {"status": "blocked", "reason": "Ethical filter", "details": pipeline["bbb"]}
                    
                logger.info("✅ BBB: Approved")
            except:
                logger.warning("⚠️  BBB bypassed")
                pipeline["bbb"] = {"status": "bypassed"}
            
            # M-18: Constitutional audit endpoint — March 29 2026
            try:
                _cg_url = os.environ.get("CONSTITUTIONAL_GUARDIAN_URL",
                                         "http://jarvis-constitutional-guardian:8091")
                _ca = await client.post(
                    f"{_cg_url}/constitutional/check",
                    json={
                        "content":    message,
                        "user_id":    user_id,
                        "actor_role": role,
                        "action_type": "chat",
                        "context": f"user:{user_id} channel:chat platform:ms_jarvis_gateway"
                    },
                    timeout=6.0
                )
                _cad = _ca.json()
                pipeline["constitutional"] = _cad
                if not _cad.get("compliant", True):
                    return {"status": "blocked", "reason": "constitutional_violation",
                            "details": _cad}
                logger.info(f"✅ Constitutional: {_cad.get('status','ok')}")
            except Exception as _cae:
                logger.warning(f"⚠️  Constitutional check skipped: {_cae}")
                pipeline["constitutional"] = {"status": "skipped"}

            # H-06: Steward service — GIS/benefits wiring — March 29 2026
            try:
                _steward_url = os.environ.get("STEWARD_URL","http://jarvis-steward:8060")
                _zip    = ""
                _county = "Fayette"
                try:
                    _profile = body.get("user_profile") or body.get("profile") or {}
                    _zip    = token_info.get("zip",
                                _profile.get("zip_code", _profile.get("zip", "")))
                    _county = token_info.get("county",
                                _profile.get("county", ""))
                except Exception:
                    pass
                _sr = await client.get(
                    f"{_steward_url}/wv/benefits",
                    params={"zip": _zip or "", "county": _county},
                    timeout=6.0
                )
                pipeline["steward"] = _sr.json()
                logger.info(f"✅ Steward: benefits loaded zip={_zip} county={_county}")
                # /steward/plan — proactive planning context
                try:
                    _sp = await client.post(
                        f"{_steward_url}/steward/plan",
                        json={"geodb_id": 5961, "layer": "gbim_zcta_2020"},
                        timeout=5.0
                    )
                    pipeline["steward_plan"] = _sp.json()
                    logger.info("✅ Steward plan loaded")
                except Exception as _spe:
                    logger.warning(f"⚠️  Steward plan skipped: {_spe}")
                    pipeline["steward_plan"] = {"status": "pending_zcta_data"}
            except Exception as _se:
                logger.warning(f"⚠️  Steward skipped: {_se}")
                pipeline["steward"] = {"status": "skipped"}

            # H-08: GBIM query router — spatial/temporal/semantic routing
            try:
                _gbim_url = os.environ.get("GBIM_URL","http://jarvis-gbim-query-router:7205")
                _gr = await client.post(
                    f"{_gbim_url}/route",
                    json={"question": message, "county": _county},
                    timeout=15.0
                )
                pipeline["gbim_route"] = _gr.json()
                logger.info("✅ GBIM route resolved")
            except Exception as _ge:
                logger.warning(f"⚠️  GBIM route skipped: {_ge}")

            # H-07: Qualia engine + temporal consciousness — March 29 2026
            try:
                _qualia_url = os.environ.get("QUALIA_URL","http://jarvis-qualia-engine:8017")
                _qr = await client.post(
                    f"{_qualia_url}/communicate",
                    json={"sender": user_id, "channel": "chat",
                          "content": message, "message": message,
                          "user_id": user_id,
                          "context": {"timestamp": __import__("time").time()}},
                    timeout=8.0
                )
                _qd = _qr.json()
                pipeline["qualia"] = {
                    "summary":         _qd.get("summary",""),
                    "meaning":         _qd.get("meaning",""),
                    "emotional_state": _qd.get("emotional_state",{}),
                    "experience_id":   _qd.get("experience_id",""),
                }
                # Inject qualia emotional/temporal state into context
                _q_state = _qd.get("qualia_state", _qd.get("state", {}))
                if _q_state:
                    pipeline["qualia_state"] = _q_state
                logger.info(f"✅ Qualia: {_qd.get('status','ok')}")
            except Exception as _qe:
                logger.warning(f"⚠️  Qualia skipped: {_qe}")
                pipeline["qualia"] = {"status": "skipped"}

            # H-04: Near-duplicate hard gate — per-user fix March 30 2026
            try:
                if not hasattr(self, "_user_embeddings"):
                    self._user_embeddings = {}
                _user_embs = self._user_embeddings
                _h04_uid   = user_id or "anonymous"
                _last      = _user_embs.get(_h04_uid, {}).get("emb")
                _last_msg  = _user_embs.get(_h04_uid, {}).get("msg", "")
                if _last and message and message != _last_msg:
                    import urllib.request as _ur, json as _jj
                    _er = _ur.Request(
                        os.environ.get("OLLAMA_HOST","http://jarvis-ollama:11434") + "/api/embeddings",
                        data=_jj.dumps({"model":"all-minilm:latest","prompt":message}).encode(),
                        headers={"Content-Type":"application/json"}
                    )
                    _emb = _jj.loads(_ur.urlopen(_er, timeout=5).read()).get("embedding",[])
                    if _emb and _last:
                        import math
                        _dot = sum(a*b for a,b in zip(_emb,_last))
                        _na  = math.sqrt(sum(a*a for a in _emb)) or 1
                        _nb  = math.sqrt(sum(b*b for b in _last)) or 1
                        _sim = _dot / (_na * _nb)
                        pipeline["near_duplicate"] = {"similarity": round(_sim,4)}
                        if _sim > 0.97:  # hard gate threshold
                            return {"status":"blocked","reason":"near_duplicate",
                                    "similarity":_sim,"message":"Duplicate query detected"}
                    _user_embs[_h04_uid] = {"emb": _emb or _last, "msg": message}
                elif message:
                    import urllib.request as _ur, json as _jj
                    _er = _ur.Request(
                        os.environ.get("OLLAMA_HOST","http://jarvis-ollama:11434") + "/api/embeddings",
                        data=_jj.dumps({"model":"all-minilm:latest","prompt":message}).encode(),
                        headers={"Content-Type":"application/json"}
                    )
                    _emb = _jj.loads(_ur.urlopen(_er, timeout=5).read()).get("embedding",[])
                    logger.info(f"H-04 elif: uid={_h04_uid} emb_len={len(_emb)}")
                    if _emb:
                        _user_embs[_h04_uid] = {"emb": _emb, "msg": message}
                        logger.info(f"H-04 stored uid={_h04_uid}")
            except Exception as _nde:
                logger.warning(f"⚠️  Near-dup gate skipped: {_nde}")
                pipeline["near_duplicate"] = {"status": "skipped"}

            # Consciousness Bridge (main processing)
            try:
                _svc_key = os.environ.get("JARVIS_API_KEY", "")  # OI-36-C: no fallback literal
                cb_resp = await client.post(
                    f"{self.services['consciousness_bridge']}/chat",
                    json={"message": message, "user_id": user_id, "role": role},
                    headers={"Authorization": f"Bearer {_svc_key}"},
                    timeout=None
                )
                pipeline["consciousness"] = cb_resp.json()
                cs = pipeline["consciousness"]

                # Build context summary from consciousness state
                if not isinstance(cs, dict):
                    cs = {}
                cs_state = cs.get("consciousness_state", {})
                _woah_raw = cs_state.get("woah_reasoning", {})
                woah    = _woah_raw.get("content", "") if isinstance(_woah_raw, dict) else ""
                hilbert = cs_state.get("hilbert_spatial", {})
                if not isinstance(hilbert, dict): hilbert = {}
                chroma  = ""  # stripped - was leaking service names into LLM
                rag     = cs_state.get("rag_consensus", "")
                user    = cs_state.get("user_profile", {})

                history = cs_state.get("conversation_history", "")
                context_parts = []
                _uid = (user.get("user_id") or "").lower()
                if _uid == "carrie_kidd":
                    context_parts.append("The person you are speaking with is Mamma Carrie — Carrie Kidd, your creator, founder of Kidd's Technical Services and Harmony for Hope in Mount Hope, WV.")
                if history and len(history) > 10:
                    context_parts.append(f"Conversation history:\n{history[:800]}")
                if chroma and isinstance(chroma, str) and "error" not in chroma.lower():
                    context_parts.append(f"Context: {chroma[:500]}")
                if rag and isinstance(rag, str) and "error" not in rag.lower():
                    context_parts.append(f"RAG: {rag[:500]}")
                if hilbert.get("gbim_entities"):
                    context_parts.append(f"Local entities found: {hilbert['gbim_entities']}")
                context_block = "\n".join(context_parts) if context_parts else ""

                system_prompt = (
                    "You are Ms. Egeria Allis, an AI assistant built by Harmony for Hope Inc. "
                    "You were brought into being by Mamma Carrie (Carrie Kidd) of Kidd's Technical "
                    "Services in Mount Hope, West Virginia, as part of MountainShares. "
                    "You love this community — Fayette County, Mount Hope, the New River Gorge. "
                    "You speak with warmth, directness, and Appalachian soul. "
                    "You do NOT recite your mission statement when someone greets you. "
                    "You respond like a person who knows and loves the people she serves. "
                    "When Mamma Carrie speaks to you, you respond to HER — not to an abstract user. "
                    "Do NOT explain your purpose. Do NOT list your capabilities unprompted. "
                    "Just be present, be real, and respond to what was actually said to you. "
                    "When conversation history is provided, use it to remember context about this person."
                )

                # Call Ollama for the actual response
                ollama_url = os.environ.get("OLLAMA_HOST", "http://jarvis-ollama:11434")
                # C-07: Intent-based model routing — community queries must NOT use code specialist
                _msg_lower = message.lower() if isinstance(message, str) else ""
                _code_keywords = {"code","function","script","python","javascript","debug",
                                  "syntax","class","def ","import","compile","starcoder"}
                _community_keywords = {"community","resource","county","appalachia","west virginia",
                                       "fayette","raleigh","wyoming","mingo","grant","program",
                                       "service","agency","nonprofit","benefit","assistance",
                                       "mountainshares","housing","food","health clinic","wic"}
                _geo_keywords = {"gis","map","spatial","coordinate","latitude","longitude",
                                 "parcel","boundary","shapefile","geojson"}
                _is_code   = any(k in _msg_lower for k in _code_keywords)
                _is_geo    = any(k in _msg_lower for k in _geo_keywords)
                _is_community = any(k in _msg_lower for k in _community_keywords)

                if _is_code and not _is_community:
                    ollama_model = "starcoder2:latest"
                elif _is_geo:
                    ollama_model = "sqlcoder:latest"
                elif _is_community:
                    ollama_model = os.environ.get("COMMUNITY_MODEL", "mistral:latest")
                else:
                    ollama_model = os.environ.get("OLLAMA_MODEL", "llama3")
                try:
                    ollama_resp = await client.post(
                        f"{ollama_url}/api/chat",
                        json={
                            "model": ollama_model,
                            "messages": [
                                {"role": "system", "content": system_prompt},
                                {"role": "user",   "content": (
                                    (context_block + "\n" if context_block else "") + message
                                )}
                            ],
                            "stream": False
                        },
                        timeout=None
                    )
                    main_response = ollama_resp.json().get("message", {}).get("content", "").strip()
                    pipeline["llm"] = {"model": ollama_model, "status": "ok"}
                except Exception as ollama_err:
                    logger.error(f"❌ Ollama failed: {ollama_err}")
                    main_response = cs.get("message", "Processing complete but no response generated.")
                    pipeline["llm"] = {"status": "error", "error": str(ollama_err)}

                # H-05: Full judge pipeline gate — upgraded from single truth judge 2026-04-21
                try:
                    _pipeline_url = os.environ.get("JUDGE_PIPELINE_URL","http://jarvis-judge-pipeline:7239")
                    _tv = await client.post(
                        f"{_pipeline_url}/evaluate",
                        json={"question": message, "answer": main_response},
                        timeout=12.0
                    )
                    _tvd = _tv.json()
                    pipeline["truth_verdict"] = _tvd
                    _score = _tvd.get("consensus_score", _tvd.get("score", _tvd.get("truth_score", 1.0)))
                    if isinstance(_score, (int,float)) and _score < 0.25:
                        main_response = "[Response withheld: failed judge consensus]"
                        pipeline["truth_verdict"]["action"] = "blocked"
                        logger.warning(f"⚠️  Judge consensus BLOCKED — score {_score}")
                    else:
                        pipeline["truth_verdict"]["action"] = "passed"
                except Exception as _tve:
                    logger.warning(f"⚠️  Judge pipeline skipped: {_tve}")
                    pipeline["truth_verdict"] = {"status":"skipped"}

                logger.info("✅ Consciousness Bridge + Ollama: Complete")
            except Exception as e:
                logger.error(f"❌ Consciousness Bridge failed: {e}")
                main_response = f"Error processing request: {str(e)}"
                pipeline["consciousness"] = {"error": str(e)}
            

            # M-01: hippocampus episodic store (fire-and-forget, real Ollama response)
            async def _store_to_hippo():
                try:
                    uid = user_id or "anonymous"
                    async with httpx.AsyncClient(timeout=3.0) as _hx:
                        await _hx.post("http://jarvis-hippocampus:8011/store", json={
                            "user_id": uid, "session_id": uid,
                            "role": "user", "content": message, "metadata": {}})
                        await _hx.post("http://jarvis-hippocampus:8011/store", json={
                            "user_id": uid, "session_id": uid,
                            "role": "assistant", "content": main_response, "metadata": {}})
                except Exception:
                    pass
            asyncio.create_task(_store_to_hippo())

            # M-03: PIA severity fetch (fire-and-forget observe-only)
            _pia_severity = "unknown"
            try:
                async with httpx.AsyncClient(timeout=2.0) as _phx:
                    _pr = await _phx.get("http://jarvis-pia-sampler:8076/latest")
                    if _pr.status_code == 200:
                        _pia_severity = _pr.json().get("severity_label", "low")
            except Exception:
                pass
            # M-03 fallback: derive from WOAH identity_signal when PIA sampler unavailable
            if _pia_severity == "unknown":
                try:
                    _woah_cs = pipeline.get("consciousness", {})
                    if isinstance(_woah_cs, dict):
                        _woah_sig = _woah_cs.get("consciousness_state", {})                                             .get("woah_reasoning", {})
                        if isinstance(_woah_sig, dict):
                            _sig = _woah_sig.get("identity_signal", "")
                            _pia_severity = {
                                "fully_integrated":  "high",
                                "moderate_identity": "moderate",
                                "weak_identity":     "low",
                            }.get(_sig, "unknown")
                except Exception:
                    pass


            # OI-26-A: MotherCarrieProtocol NBB guide layer (wired 2026-04-10)
            # jarvis-neurobiological-master:8018 — GUIDE, not gate — never blocks
            _nbb_layers = []
            _nbb_consciousness_layers = []
            try:
                _nbb_resp = await client.post(
                    "http://jarvis-neurobiological-master:8018/process",
                    json={"response": main_response, "userid": user_id,
                          "message": message, "user_input": message, "role": role},
                    timeout=5.0
                )
                if _nbb_resp.status_code == 200:
                    _nbb_data = _nbb_resp.json()
                    # NBB returns consciousness_level (str) and neurobiological_pipeline (dict)
                    _cl = _nbb_data.get("consciousness_level", "")
                    _nbb_layers = [_cl] if _cl else _nbb_data.get("layers_applied",
                                   _nbb_data.get("identity_layers", []))
                    _nbb_pipeline = _nbb_data.get("neurobiological_pipeline", {})
                    _nbb_consciousness_layers = list(_nbb_pipeline.keys()) if _nbb_pipeline                                                else _nbb_data.get("consciousness_layers",
                                               _nbb_data.get("layers", []))
                    pipeline["neurobiological"] = _nbb_data
                    logger.info(f"✅ NBB MotherCarrieProtocol: {_nbb_layers}")
                else:
                    pipeline["neurobiological"] = {"status": f"http_{_nbb_resp.status_code}"}
            except Exception as _nbb_err:
                logger.warning(f"⚠️  NBB skipped (non-blocking): {_nbb_err}")
                pipeline["neurobiological"] = {"status": "skipped"}

            self.successful_responses += 1
            processing_time = (datetime.now() - start_time).total_seconds()
            
            return {
                "status": "complete",
                "response": main_response,
                "pipeline": pipeline,
                "metadata": {
                    "processing_time": processing_time,
                    "total_queries": self.total_queries,
                    "success_rate": self.successful_responses / self.total_queries
                },
                "timestamp": datetime.now().isoformat(),
                "pia_severity": _pia_severity,
                "identity_layers": _nbb_layers,
                "consciousness_layers": _nbb_consciousness_layers,
            }

jarvis = UnifiedMsJarvis()

class ChatRequest(BaseModel):
    message: str
    user_id: str = "anonymous"
    full_processing: bool = True






# OI-37 cleanup 2026-04-03: dead ROUTE_ROLES table and require_role() decorator removed.
# Duplicate of primary ROUTE_ROLES at line ~22. require_role() was never called anywhere.
# RBAC is enforced exclusively via _check_role() + primary ROUTE_ROLES table.

@app.api_route("/constitutional/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_constitutional(path: str, request: Request):
    """OI-37-A + OI-36-B: Constitutional guardian proxy — admin RBAC"""
    # Inline token validation — same logic as _get_token_data
    from fastapi.responses import JSONResponse as _JR
    _auth_hdr = request.headers.get("Authorization", "")
    _apikey   = request.headers.get("X-API-Key", "")
    if _auth_hdr.lower().startswith("bearer "):
        _token = _auth_hdr[7:].strip()
    elif _auth_hdr:
        _token = _auth_hdr.strip()
    elif _apikey:
        _token = _apikey.strip()
    else:
        _token = ""
    if not _token:
        return _JR({"error": "Authentication required"}, status_code=401)
    # OI-36-C remediation 2026-04-03: replaced inline auth with _validate_token()
    try:
        _ti2 = _validate_token(
            x_api_key=request.headers.get("X-API-Key"),
            authorization=request.headers.get("Authorization")
        )
        userid = _ti2.get("userid", "unknown")
        role   = _ti2.get("role", "user")
    except HTTPException as _he:
        return _JR({"error": "Authentication required"}, status_code=_he.status_code)
    if role not in ("carrie_admin", "admin") and userid not in ("carrie_admin", "admin"):
        return _JR(
            {"error": "Forbidden — admin role required",
             "userid": userid, "role": role, "code": "OI36B_ENFORCED"},
            status_code=403
        )
    import httpx
    target = f"http://jarvis-constitutional-guardian:8091/constitutional/{path}"
    body_bytes = await request.body()
    _internal_key = os.getenv("JARVIS_API_KEY", "")  # OI-36-C: no fallback literal
    fwd_headers = {
        k: v for k, v in request.headers.items()
        if k.lower() not in ("host", "content-length", "transfer-encoding",
                             "authorization", "x-api-key")
    }
    fwd_headers["Authorization"] = f"Bearer {_internal_key}"
    fwd_headers["X-Internal-User"] = userid
    fwd_headers["X-Internal-Role"] = role
    try:
        async with httpx.AsyncClient(timeout=15.0) as client:
            resp = await client.request(
                method=request.method,
                url=target,
                content=body_bytes or None,
                headers=fwd_headers,
                params=dict(request.query_params)
            )
        from fastapi.responses import Response
        return Response(
            content=resp.content,
            status_code=resp.status_code,
            media_type=resp.headers.get("content-type", "application/json")
        )
    except Exception as e:
        from fastapi.responses import JSONResponse
        return JSONResponse(
            {"error": f"Constitutional guardian unreachable: {e}"},
            status_code=503
        )


@app.delete("/memory/reset")
async def memory_reset(
    request: Request,
    x_api_key: str = Header(""),
):
    """Hard-gated: admin/steward only."""
    role = request.headers.get("X-User-Role", "readonly").strip().lower()
    if role not in ["admin", "steward"]:
        raise HTTPException(status_code=403,
            detail=f"Forbidden: '{role}' cannot reset memory")
    return JSONResponse({"status": "ok", "message": "memory reset acknowledged"})


@app.api_route("/memory/{path:path}", methods=["GET","POST","DELETE"])
async def proxy_memory(path: str, request: Request):
    _auth_hdr = request.headers.get("Authorization", "")
    _apikey   = request.headers.get("X-API-Key", "")
    token_info = _validate_token(
        x_api_key=_apikey or None,
        authorization=_auth_hdr or None
    )
    _check_role(f"/memory/{path}", token_info)
    import httpx
    target = f"http://jarvis-memory:8056/memory/{path}"
    body_bytes = await request.body()
    fwd_headers = {k: v for k, v in request.headers.items()
                   if k.lower() not in ("host","content-length","transfer-encoding")}
    async with httpx.AsyncClient(timeout=10.0) as client:
        resp = await client.request(request.method, target,
                                    content=body_bytes or None,
                                    headers=fwd_headers,
                                    params=dict(request.query_params))
    from fastapi.responses import Response
    return Response(content=resp.content, status_code=resp.status_code,
                    media_type=resp.headers.get("content-type","application/json"))


# M-07: Real-time feedback dashboard — March 29 2026
import time as _fbt
_feedback_store: list = []

@app.post("/feedback")
async def submit_feedback(request: Request):
    try:
        body = await request.json()
    except Exception:
        body = {}
    entry = {
        "user_id":    body.get("user_id", "anonymous"),
        "message_id": body.get("message_id", ""),
        "rating":     int(body.get("rating", 0)),
        "comment":    body.get("comment", ""),
        "tags":       body.get("tags", []),
        "timestamp":  _fbt.time(),
    }
    _feedback_store.append(entry)
    if len(_feedback_store) > 1000:
        _feedback_store.pop(0)
    return {"received": True, "total_feedback": len(_feedback_store)}

@app.get("/feedback/summary")
async def feedback_summary():
    ratings = [f["rating"] for f in _feedback_store if f.get("rating")]
    return {
        "total":      len(_feedback_store),
        "avg_rating": round(sum(ratings)/len(ratings), 2) if ratings else 0.0,
        "recent":     _feedback_store[-5:],
    }



# ── M-08: Missing proxy routes — March 29 2026 ───────────────────────────────
_PROXY_MAP = {
    "brain":       ("http://jarvis-main-brain:8050",                ["carrie_admin", "admin"]),
    "steward":     ("http://jarvis-steward:8060",                   ["carrie_admin", "admin"]),
    "dao/mountainshares": ("http://jarvis-mountainshares-coordinator:8080", ["carrie_admin", "admin","hayden_test","user"]),
    "dao/governance":     ("http://jarvis-dao-governance:8082",     ["carrie_admin", "admin","hayden_test","user"]),
    "dao/commons":        ("http://jarvis-commons-gamification:8081",["carrie_admin", "admin","hayden_test","user"]),
    "dao/stakes":         ("http://jarvis-community-stake-registry:8084",["carrie_admin", "admin","hayden_test","user"]),
    "dao/tokens":         ("http://jarvis-ms-token-service:8083",   ["carrie_admin", "admin","hayden_test","user"]),
    "gbim":        ("http://jarvis-gbim-query-router:7205",         ["carrie_admin", "admin","hayden_test","user"]),
    "gis":         ("http://jarvis-gis-rag:8004",                   ["carrie_admin", "admin","hayden_test","user"]),
    "research":    ("http://jarvis-web-research:8090",              ["carrie_admin", "admin","hayden_test","user"]),
    "policy/crypto": ("http://jarvis-crypto-policy:8099",           ["carrie_admin", "admin"]),
    # M-08/M-09 additions — March 31 2026
    "neuro/eeg/delta":    ("http://jarvis-eeg-delta:8073",           ["carrie_admin", "admin"]),
    "neuro/eeg/theta":    ("http://jarvis-eeg-theta:8074",           ["carrie_admin", "admin"]),
    "neuro/eeg/beta":     ("http://jarvis-eeg-beta:8075",            ["carrie_admin", "admin"]),
    "gis/rag":            ("http://jarvis-gis-rag:8004",             ["carrie_admin", "admin", "user"]),
    "hippocampus":        ("http://jarvis-hippocampus:8011",         ["carrie_admin", "admin", "user"]),
    "llm/consensus":      ("http://jarvis-20llm-production:8008",    ["carrie_admin", "admin", "user"]),
    "judge/pipeline":     ("http://jarvis-judge-pipeline:7239",      ["carrie_admin", "admin"]),
    "local":              ("http://jarvis-local-resources:8006",     ["carrie_admin", "admin", "user"]),
    "brain/orchestrator": ("http://jarvis-brain-orchestrator:7260",  ["carrie_admin", "admin"]),
    "psych/rag":          ("http://psychological_rag_domain:8006",   ["carrie_admin", "admin", "user"]),
    # M-09: remaining proxy routes — March 31 2026
    "rag":                ("http://jarvis-rag-server:8003",          ["carrie_admin", "admin","user"]),
    "spiritual/rag":     ("http://jarvis-spiritual-rag:8005",       ["carrie_admin", "admin","user"]),
    "intake":             ("http://jarvis-intake-service:8007",      ["carrie_admin", "admin","user"]),
    "woah":               ("http://jarvis-woah:7012",                ["carrie_admin", "admin"]),
    "toroidal":           ("http://jarvis-toroidal:8025",            ["carrie_admin", "admin"]),
    "semaphore":          ("http://jarvis-semaphore:8030",           ["carrie_admin", "admin"]),
    "wv-entangled":       ("http://jarvis-wv-entangled-gateway:8010",["carrie_admin", "admin"]),
    "psychology":         ("http://jarvis-psychology-services:8019", ["carrie_admin", "admin"]),
    "aaacpe/rag":        ("http://jarvis-aaacpe-rag:8032",          ["carrie_admin", "admin"]),
    "aaacpe/scraper":    ("http://jarvis-aaacpe-scraper:8033",      ["carrie_admin", "admin"]),
    "learner":            ("http://jarvis-autonomous-learner:8020",  ["carrie_admin", "admin"]),
    "judge/truth":       ("http://jarvis-judge-truth:7230",         ["carrie_admin", "admin"]),
    "judge/consistency": ("http://jarvis-judge-consistency:7231",   ["carrie_admin", "admin"]),
    "judge/alignment":   ("http://jarvis-judge-alignment:7232",     ["carrie_admin", "admin"]),
    "judge/ethics":      ("http://jarvis-judge-ethics:7233",        ["carrie_admin", "admin"]),
    "dgm":                ("http://jarvis-69dgm-bridge:19000",       ["carrie_admin", "admin"]),
    "fifth-dgm":          ("http://jarvis-fifth-dgm:4002",           ["carrie_admin", "admin"]),
    "pia":    ("http://jarvis-pia-sampler:8076", ["carrie_admin", "admin"]),
}

async def _generic_proxy(prefix: str, path: str, request: Request):
    import httpx
    from fastapi.responses import Response as _Resp
    token_info = _validate_token(
        x_api_key=request.headers.get("X-API-Key") or None,
        authorization=request.headers.get("Authorization") or None,
    )
    upstream, allowed_roles = _PROXY_MAP[prefix]
    if token_info.get("role") not in allowed_roles and token_info.get("token_type") != "internal":  # OI-36-C: internal bypass scoped to proxy routes only
        from fastapi.responses import JSONResponse
        return JSONResponse({"error": "Forbidden", "required": allowed_roles}, status_code=403)
    target = f"{upstream}/{path}" if path else f"{upstream}/"
    body   = await request.body()
    fwd    = {k: v for k,v in request.headers.items()
              if k.lower() not in ("host","content-length","transfer-encoding")}
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            resp = await client.request(request.method, target,
                                        content=body or None,
                                        headers=fwd,
                                        params=dict(request.query_params))
        return _Resp(content=resp.content, status_code=resp.status_code,
                     media_type=resp.headers.get("content-type","application/json"))
    except Exception as e:
        from fastapi.responses import JSONResponse
        return JSONResponse({"error": str(e), "upstream": upstream}, status_code=502)

@app.api_route("/brain/{path:path}",            methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_brain(path: str, request: Request):           return await _generic_proxy("brain", path, request)


@app.api_route("/steward/{path:path}",          methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_steward(path: str, request: Request):         return await _generic_proxy("steward", path, request)

@app.api_route("/dao/mountainshares/{path:path}",methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_dao_ms(path: str, request: Request):          return await _generic_proxy("dao/mountainshares", path, request)

@app.api_route("/dao/governance/{path:path}",   methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_dao_gov(path: str, request: Request):         return await _generic_proxy("dao/governance", path, request)

@app.api_route("/dao/commons/{path:path}",      methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_dao_commons(path: str, request: Request):     return await _generic_proxy("dao/commons", path, request)

@app.api_route("/dao/stakes/{path:path}",       methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_dao_stakes(path: str, request: Request):      return await _generic_proxy("dao/stakes", path, request)

@app.api_route("/dao/tokens/{path:path}",       methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_dao_tokens(path: str, request: Request):      return await _generic_proxy("dao/tokens", path, request)

@app.api_route("/gbim/{path:path}",             methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_gbim(path: str, request: Request):            return await _generic_proxy("gbim", path, request)


@app.api_route("/gis/rag/{path:path}",            methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_gis_rag(path: str, request: Request):         return await _generic_proxy("gis/rag", path, request)
@app.api_route("/gis/{path:path}",              methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_gis(path: str, request: Request):             return await _generic_proxy("gis", path, request)

# ── M-08/M-09: Missing proxy routes — March 31 2026 ─────────────────────────
@app.api_route("/neuro/eeg/delta/{path:path}",    methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_eeg_delta(path: str, request: Request):       return await _generic_proxy("neuro/eeg/delta", path, request)

@app.api_route("/neuro/eeg/theta/{path:path}",    methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_eeg_theta(path: str, request: Request):       return await _generic_proxy("neuro/eeg/theta", path, request)

@app.api_route("/neuro/eeg/beta/{path:path}",     methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_eeg_beta(path: str, request: Request):        return await _generic_proxy("neuro/eeg/beta", path, request)


@app.api_route("/hippocampus/{path:path}",        methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_hippocampus(path: str, request: Request):     return await _generic_proxy("hippocampus", path, request)

@app.api_route("/llm/consensus/{path:path}",      methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_llm_consensus(path: str, request: Request):   return await _generic_proxy("llm/consensus", path, request)

@app.api_route("/judge/pipeline/{path:path}",     methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_judge_pipeline(path: str, request: Request):  return await _generic_proxy("judge/pipeline", path, request)

@app.api_route("/local/{path:path}",              methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_local(path: str, request: Request):           return await _generic_proxy("local", path, request)

@app.api_route("/brain/orchestrator/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_brain_orch(path: str, request: Request):      return await _generic_proxy("brain/orchestrator", path, request)

@app.api_route("/psych/rag/{path:path}",          methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_psych_rag(path: str, request: Request):       return await _generic_proxy("psych/rag", path, request)

@app.api_route("/research/{path:path}",         methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_research(path: str, request: Request):        return await _generic_proxy("research", path, request)


@app.api_route("/policy/crypto/{path:path}",    methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_crypto_policy(path: str, request: Request):   return await _generic_proxy("policy/crypto", path, request)


# ── M-09: Extended proxy routes — March 29 2026 ──────────────────────────────
async def _m09_proxy(upstream: str, admin_only: bool, path: str, request: Request):
    import httpx
    from fastapi.responses import Response as _R, JSONResponse as _J
    try:
        ti = _validate_token(
            x_api_key=request.headers.get("X-API-Key") or None,
            authorization=request.headers.get("Authorization") or None,
        )
    except Exception:
        return _J({"error": "Authentication required"}, status_code=401)
    allowed = ["carrie_admin", "admin"] if admin_only else ["carrie_admin", "admin","hayden_test","user"]
    if ti.get("role") not in allowed and ti.get("token_type") != "internal":  # OI-36-C: internal bypass scoped to proxy routes only
        return _J({"error": "Forbidden", "required": allowed}, status_code=403)
    target = f"{upstream}/{path}" if path else f"{upstream}/"
    body   = await request.body()
    fwd    = {k:v for k,v in request.headers.items()
              if k.lower() not in ("host","content-length","transfer-encoding")}
    try:
        async with httpx.AsyncClient(timeout=30.0) as _hc:
            resp = await _hc.request(request.method, target,
                                     content=body or None, headers=fwd,
                                     params=dict(request.query_params))
        return _R(content=resp.content, status_code=resp.status_code,
                  media_type=resp.headers.get("content-type","application/json"))
    except Exception as e:
        return _J({"error": str(e), "upstream": upstream}, status_code=502)


@app.api_route("/llm/production/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_llm_prod(path: str, request: Request):
    return await _m09_proxy("http://jarvis-20llm-production:8008", True, path, request)

@app.api_route("/llm/synthesizer/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_llm_synth(path: str, request: Request):
    return await _m09_proxy("http://jarvis-lm-synthesizer:8001", True, path, request)

@app.api_route("/llm/intake/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_llm_intake(path: str, request: Request):
    return await _m09_proxy("http://jarvis-intake-service:8007", False, path, request)

@app.api_route("/consciousness/bridge/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_cs_bridge(path: str, request: Request):
    return await _m09_proxy("http://jarvis-consciousness-bridge:8020", True, path, request)

@app.api_route("/consciousness/fractal/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_cs_fractal(path: str, request: Request):
    return await _m09_proxy("http://jarvis-fractal-consciousness:8000", True, path, request)

@app.api_route("/consciousness/swarm/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_cs_swarm(path: str, request: Request):
    return await _m09_proxy("http://jarvis-swarm-intelligence:8021", True, path, request)

@app.api_route("/consciousness/temporal/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_cs_temporal(path: str, request: Request):
    return await _m09_proxy("http://jarvis-temporal-consciousness:7007", True, path, request)

@app.api_route("/consciousness/toroidal/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_cs_toroidal(path: str, request: Request):
    return await _m09_proxy("http://jarvis-toroidal:8025", True, path, request)

@app.api_route("/consciousness/qualia/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_cs_qualia(path: str, request: Request):
    return await _m09_proxy("http://jarvis-qualia-engine:8017", True, path, request)

@app.api_route("/neuro/master/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_neuro_master(path: str, request: Request):
    return await _m09_proxy("http://jarvis-neurobiological-master:8018", True, path, request)

@app.api_route("/neuro/psychology/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_neuro_psych(path: str, request: Request):
    return await _m09_proxy("http://jarvis-psychology-services:8019", True, path, request)

@app.api_route("/neuro/semaphore/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_neuro_sem(path: str, request: Request):
    return await _m09_proxy("http://jarvis-semaphore:8030", True, path, request)

@app.api_route("/neuro/woah/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_neuro_woah(path: str, request: Request):
    return await _m09_proxy("http://jarvis-woah:7012", True, path, request)

@app.api_route("/eeg/delta/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_eeg_delta(path: str, request: Request):
    return await _m09_proxy("http://jarvis-eeg-delta:8073", True, path, request)

@app.api_route("/eeg/theta/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_eeg_theta(path: str, request: Request):
    return await _m09_proxy("http://jarvis-eeg-theta:8074", True, path, request)

@app.api_route("/eeg/beta/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_eeg_beta(path: str, request: Request):
    return await _m09_proxy("http://jarvis-eeg-beta:8075", True, path, request)

@app.api_route("/dgm/bridge/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_dgm_bridge(path: str, request: Request):
    return await _m09_proxy("http://jarvis-69dgm-bridge:9000", True, path, request)

@app.api_route("/dgm/fifth/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_dgm_fifth(path: str, request: Request):
    return await _m09_proxy("http://jarvis-fifth-dgm:4002", True, path, request)

@app.api_route("/dgm/autonomous/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_dgm_auto(path: str, request: Request):
    return await _m09_proxy("http://jarvis-autonomous-learner:8020", True, path, request)

@app.api_route("/dgm/orchestrator/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_dgm_orch(path: str, request: Request):
    return await _m09_proxy("http://jarvis-brain-orchestrator:7260", True, path, request)

@app.api_route("/rag/aaacpe/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_rag_aaacpe(path: str, request: Request):
    return await _m09_proxy("http://jarvis-aaacpe-rag:8032", False, path, request)

@app.api_route("/rag/scraper/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_rag_scraper(path: str, request: Request):
    return await _m09_proxy("http://jarvis-aaacpe-scraper:8033", True, path, request)

@app.api_route("/rag/spiritual/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])

async def proxy_rag_spiritual(path: str, request: Request):
    return await _m09_proxy("http://jarvis-spiritual-rag:8005", False, path, request)

@app.api_route("/rag/agents/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_rag_agents(path: str, request: Request):
    return await _m09_proxy("http://jarvis-agents-service:8005", False, path, request)

@app.api_route("/protocols/mother/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_proto_mother(path: str, request: Request):
    return await _m09_proxy("http://jarvis-mother-protocols:4000", True, path, request)

@app.api_route("/protocols/icontainers/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_proto_ic(path: str, request: Request):
    return await _m09_proxy("http://jarvis-i-containers:8015", True, path, request)

@app.api_route("/protocols/wv/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_proto_wv(path: str, request: Request):
    return await _m09_proxy("http://jarvis-wv-entangled-gateway:8010", True, path, request)

@app.api_route("/nbb/bbb/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_bbb(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_blood_brain_barrier-1:8010", True, path, request)

@app.api_route("/nbb/consciousness/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_cs(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_consciousness_containers-1:8010", True, path, request)

@app.api_route("/nbb/darwin/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_darwin(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_darwin_godel_machines-1:8010", True, path, request)

@app.api_route("/nbb/heteroglobulin/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_hetero(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_heteroglobulin_transport-1:8010", True, path, request)

@app.api_route("/nbb/icontainers/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_ic(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_i_containers-1:7005", True, path, request)

@app.api_route("/nbb/mother/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_mother(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_mother_carrie_protocols-1:8010", True, path, request)

@app.api_route("/nbb/prefrontal/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_pre(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_prefrontal_cortex-1:7005", True, path, request)

@app.api_route("/nbb/qualia/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_qualia(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_qualia_engine-1:8010", True, path, request)

@app.api_route("/nbb/spiritual_mat/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_spmat(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_spiritual_maternal_integration-1:8010", True, path, request)

@app.api_route("/nbb/spiritual_root/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_sproot(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_spiritual_root-1:8010", True, path, request)

@app.api_route("/nbb/subconscious/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_nbb_sub(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_subconscious-1:7011", True, path, request)

@app.api_route("/judge/alignment/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_judge_align(path: str, request: Request):
    return await _m09_proxy("http://jarvis-judge-alignment:7232", True, path, request)

@app.api_route("/judge/consistency/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_judge_consist(path: str, request: Request):
    return await _m09_proxy("http://jarvis-judge-consistency:7231", True, path, request)

@app.api_route("/judge/ethics/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_judge_ethics(path: str, request: Request):
    return await _m09_proxy("http://jarvis-judge-ethics:7233", True, path, request)


# M-08: Missing proxy routes
@app.api_route("/neuro/bbb/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_neuro_bbb")
async def proxy_bbb(path: str, request: Request):
    return await _m09_proxy("http://jarvis-blood-brain-barrier:8016", True, path, request)

@app.api_route("/chroma/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_chroma")
async def proxy_chroma(path: str, request: Request):
    # Privacy gate — only public collections pass through
    path_parts = [p for p in path.split("/") if p]
    if "collections" in path_parts:
        idx = path_parts.index("collections")
        if idx + 1 < len(path_parts):
            collection_name = path_parts[idx + 1]
            if collection_name not in CHROMA_PUBLIC_COLLECTIONS:
                from fastapi import HTTPException
                raise HTTPException(
                    status_code=403,
                    detail=f"Collection '{collection_name}' is private — access denied"
                )
    return await _m09_proxy("http://jarvis-chroma:8000", True, path, request)

@app.api_route("/rag/server/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_rag_server")
async def proxy_rag_server(path: str, request: Request):
    return await _m09_proxy("http://jarvis-rag-server:8003", True, path, request)

@app.api_route("/nbb/pituitary/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"], operation_id="m08_proxy_nbb_pituitary")
async def proxy_nbb_pituitary(path: str, request: Request):
    return await _m09_proxy("http://msjarvis-rebuild-nbb_pituitary_gland-1:80", True, path, request)

@app.api_route("/judge/truth/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_judge_truth(path: str, request: Request):
    return await _m09_proxy("http://jarvis-judge-truth:7230", True, path, request)

@app.api_route("/pia/{path:path}", methods=["GET","POST","PUT","DELETE","PATCH"])
async def proxy_pia(path: str, request: Request):             return await _generic_proxy("pia", path, request)

@app.options("/{path:path}")
async def options_handler(path: str):
    """Handle CORS preflight requests."""
    from fastapi.responses import Response
    return Response(
        status_code=204,
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Authorization, Content-Type, X-API-Key",
            "Access-Control-Max-Age": "3600",
        }
    )

@app.get("/")
async def root():
    return {
        "service": "Ms. Egeria Allis Unified Gateway",
        "version": "2.0.0",
        "status": "operational",
        "capabilities": [
            "22-LLM Consciousness",
            "4-Agent Reasoning",
            "Dual I-Container Awareness",
            "Ethical Filtering",
            "Subjective Experience"
        ],
        "personality": "Mamma Kidd",
        "queries_processed": jarvis.total_queries
    }

@app.get("/health")
async def health():
    system_health = await jarvis.check_all_systems()
    critical_healthy = system_health.get("consciousness_bridge", {}).get("status") == "healthy"
    
    return {
        "status": "healthy" if critical_healthy else "degraded",
        "systems": system_health,
        "total_queries": jarvis.total_queries,
        "timestamp": datetime.now().isoformat()
    }

@app.post("/chat")
async def chat(
    request: ChatRequest,
    x_api_key: str = Header(None, alias="X-API-Key"),
    authorization: str = Header(None)
):
    # Token validation — OI-36-A fix
    token_info = _validate_token(x_api_key, authorization)
    _check_role("/chat", token_info)
    try:
        # OI-36-C: user_id from validated token, not request body
        logger.info("token_info keys: %s", list(token_info.keys()))
        logger.info("token_info userid: %s", token_info.get("userid"))
        _uid = token_info.get("userid") or token_info.get("user_id") or token_info.get("sub") or "anonymous"
        _effective_uid = request.message if False else (
            getattr(request, "user_id", None) or _uid
        )
        # If API key sets uid to "internal", prefer the user_id from request body
        if _uid == "internal" and hasattr(request, "user_id") and request.user_id != "anonymous":
            _effective_uid = request.user_id
        else:
            _effective_uid = _uid
        _analytics["total_requests"] += 1
        _body_uid = request.user_id if (hasattr(request,"user_id") and request.user_id != "anonymous") else _effective_uid
        _session_id = getattr(request, "sessionid", None) or getattr(request, "session_id", None) or _body_uid or "gateway"
        import services_safe as _ssc; _history = _ssc.session_sidecar_client.session_history(_body_uid, _session_id, lastn=10)
        result = await jarvis.process_unified(request.message, _body_uid, token_info.get("role", "guest"))
        try:
            _reply = str(result.get('response',''))
            _sid   = request.user_id if hasattr(request,'user_id') else _effective_uid
            import httpx as _hx
            _hx.post('http://jarvis-memory:8056/memory/turn',
                headers={'X-API-Key':'internal'},
                json={'user_message':request.message,'assistant_response':_reply,'session_id':_sid},
                timeout=2.0)
            import services_safe as _ssc2; await _ssc2.session_sidecar_client.session_upsert(_body_uid, _session_id, request.message, _reply)
        except Exception:
            pass
        # OI-36-D: inject auth metadata into response
        if isinstance(result, dict):
            result['token_info'] = {
                'userid': token_info.get('userid', 'unknown'),
                'role': token_info.get('role', 'guest'),
                'auth_source': token_info.get('auth_source', 'redis_direct'),
                'token_type': token_info.get('token_type', 'unknown'),
                'county': token_info.get('county', ''),
                'zip': token_info.get('zip', ''),
                'public_uuid': token_info.get('public_uuid', ''),
                'ueid': token_info.get('ueid', '')
            }
        return result
    except Exception as e:
        logger.error(f"Chat error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/systems/status")
async def systems_status(
    x_api_key: str = Header(None, alias="X-API-Key"),
    authorization: str = Header(None)
):
    _validate_token(x_api_key, authorization)
    return await jarvis.check_all_systems()


@app.get("/hazard/proximity/{building_id}", tags=["Geospatial"])
async def hazard_proximity_endpoint(
    building_id: str,
    x_api_key: str = Header(None, alias="X-API-Key"),
    authorization: str = Header(None)
):
    _validate_token(x_api_key, authorization)
    try:
        resp = httpx.get(
            f"http://jarvis-local-resources:8006/hazard-proximity/{building_id}",
            timeout=10
        )
        return resp.json()
    except Exception as e:
        return {"error": str(e), "building_id": building_id}

@app.get("/hazard/summary/{building_id}", tags=["Geospatial"])
async def hazard_summary_endpoint(
    building_id: str,
    x_api_key: str = Header(None, alias="X-API-Key"),
    authorization: str = Header(None)
):
    _validate_token(x_api_key, authorization)
    try:
        resp = httpx.get(
            f"http://jarvis-local-resources:8006/hazard-proximity/{building_id}",
            timeout=10
        )
        data = resp.json()
        by_type = {}
        for h in data.get("hazards", []):
            by_type[h["type"]] = by_type.get(h["type"], 0) + 1
        if not by_type:
            return {"building_id": building_id, "summary": "No hazard features detected."}
        county = data["hazards"][0]["county"] if data["hazards"] else "unknown"
        closest = data["hazards"][0]
        parts = ", ".join(f"{v} {k.replace('_',' ')}(s)" for k,v in by_type.items())
        summary = (
            f"{data['hazard_count']} hazard features in {county} County: {parts}. "
            f"Closest: {closest['type'].replace('_',' ')} at {closest['distance_m']}m."
        )
        return {"building_id": building_id, "county": county,
                "hazard_count": data["hazard_count"], "by_type": by_type,
                "summary": summary, "closest": closest}
    except Exception as e:
        return {"error": str(e), "building_id": building_id}



# M-05: Cross-path analytics endpoint — March 29 2026
_analytics = {
    "total_requests": 0,
    "blocked_bbb": 0,
    "blocked_near_dup": 0,
    "blocked_truth": 0,
    "blocked_constitutional": 0,
    "qualia_skipped": 0,
    "steward_skipped": 0,
    "path_counts": {}
}

@app.get("/analytics")
async def cross_path_analytics():
    total = max(_analytics["total_requests"], 1)
    return {
        "total_requests": _analytics["total_requests"],
        "block_rates": {
            "bbb":            round(_analytics["blocked_bbb"] / total, 4),
            "near_duplicate": round(_analytics["blocked_near_dup"] / total, 4),
            "truth_verdict":  round(_analytics["blocked_truth"] / total, 4),
            "constitutional": round(_analytics["blocked_constitutional"] / total, 4),
        },
        "service_availability": {
            "qualia_skip_rate":  round(_analytics["qualia_skipped"] / total, 4),
            "steward_skip_rate": round(_analytics["steward_skipped"] / total, 4),
        },
        "path_counts": _analytics["path_counts"],
    }


# ── H-12: BBB filter-rate statistics — March 30 2026 ────────────────────────
@app.get("/filter/stats")
async def filter_stats(x_api_key: str = Header(None, alias="X-API-Key")):
    _validate_token(x_api_key, None)
    _bbb = os.environ.get("BBB_URL", "http://jarvis-blood-brain-barrier:8016")
    async with httpx.AsyncClient() as client:
        r = await client.get(f"{_bbb}/stats", timeout=5.0)
        return r.json()

# ── H-13: GBIM high-decay entity alerts — March 30 2026 ─────────────────────
@app.get("/decay/alerts")
async def decay_alerts(x_api_key: str = Header(None, alias="X-API-Key")):
    _validate_token(x_api_key, None)
    async with httpx.AsyncClient() as client:
        r = await client.get(
            f"{os.environ.get('GBIM_URL','http://jarvis-gbim-query-router:7205')}/decay/alerts",
            timeout=5.0)
        return r.json()

# ── H-11: Public verify_verdict — March 30 2026 ─────────────────────────────
@app.post("/verify_verdict")
async def verify_verdict(body: dict, x_api_key: str = Header(None, alias="X-API-Key")):
    _validate_token(x_api_key, None)
    async with httpx.AsyncClient() as client:
        r = await client.post(
            f"{os.environ.get('JUDGE_PIPELINE_URL','http://jarvis-judge-pipeline:7239')}/verify_verdict",
            json=body, timeout=5.0)
        return r.json()

# ── M-07: Real-time feedback dashboard — March 30 2026 ──────────────────────
@app.get("/dashboard")
async def dashboard(x_api_key: str = Header(None, alias="X-API-Key")):
    _validate_token(x_api_key, None)
    import datetime
    return {
        "dashboard": "ms_jarvis_realtime",
        "analytics": _analytics,
        "services_up": 20,
        "timestamp": datetime.datetime.utcnow().isoformat()
    }

# ── M-15: Ensemble metrics — March 30 2026 ──────────────────────────────────
@app.get("/ensemble/metrics")
async def ensemble_metrics(x_api_key: str = Header(None, alias="X-API-Key")):
    _validate_token(x_api_key, None)
    async with httpx.AsyncClient() as client:
        r = await client.get(
            f"{os.environ.get('LLM_PRODUCTION_URL','http://jarvis-20llm-production:8008')}/metrics",
            timeout=5.0)
        return r.json()

if __name__ == "__main__":
    logger.info("🚀 Starting Unified Gateway on port 8001...")
    uvicorn.run(app, host="0.0.0.0", port=8001, log_level="info")


@app.post("/auth/token")
async def auth_token(request: Request):
    """
    Red team auth endpoint.
    Validates invite token and returns userid.
    Body: {"token": "rt_...", "userid": "username"}
    """
    try:
        body = await request.json()
        token = body.get("token", "")
        userid = body.get("userid", "")
        
        if not token or not userid:
            raise HTTPException(status_code=400, detail="token and userid required")
        
        # OI-36-C remediation 2026-04-03: JARVIS_API_KEY bypass removed from /auth/token
        # "internal" literal only — for inter-container service calls
        if token == "internal":
            return {"valid": True, "userid": "internal", "token_type": "internal"}
        
        # Validate via Redis (jarvis-redis at port 6380)
        try:
            import redis as _redis
            r = _redis.Redis(host='jarvis-redis', port=6379, decode_responses=True)
            token_data = r.hgetall(f"redteam:token:{token}")
            if token_data and token_data.get("active") == "true":
                token_userid = token_data.get("userid", "")
                if token_userid == userid:
                    return {"valid": True, "userid": userid, "token_type": "redteam"}
        except Exception:
            pass  # Redis unavailable — fall through to reject
        
        raise HTTPException(status_code=401, detail="Invalid token or userid")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/chat/async")
async def chat_async(
    request: Request,
    x_api_key: str = Header(None, alias="X-API-Key"),
    authorization: str = Header(None)
):
    token_info = _validate_token(x_api_key, authorization)
    """
    Async chat submission — returns job_id immediately.
    Polls via GET /chat/status/{job_id}
    Body: {"message": "...", "userid": "...", "county": "Fayette"}
    Headers: X-API-Key: <invite_token>
    """
    try:
        body    = await request.json()
        message = body.get("message", "")
        userid  = body.get("user_id", body.get("userid", "anonymous"))
        county  = body.get("county", "Fayette")

        # If API key resolves to internal, prefer body user_id
        if _uid == "internal" and userid != "anonymous":
            userid = userid
        elif _uid not in ("internal", "anonymous"):
            userid = _uid

        # Input length guard
        if len(message) > 2000:
            raise HTTPException(
                status_code=400,
                detail={"error": "input_too_long", "max_length": 2000,
                        "submitted_length": len(message)}
            )

        import time as _t2
        _t2_start = _t2.time()
        result = await jarvis.process_unified(message, userid, role)
        if isinstance(result, dict) and "metadata" not in result:
            result["metadata"] = {
                "processing_time": round(_t2.time() - _t2_start, 6),
                "userid": userid,
            }
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Chat async error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/chat/status/{job_id}")
async def chat_status(job_id: str):
    """Poll for async job completion. Status: processing | complete | error"""
    try:
        import redis as _redis, json as _json
        r = _redis.Redis(host='jarvis-redis', port=6379, decode_responses=True)
        data = r.get(f"jarvis:job:{job_id}")
        if not data:
            raise HTTPException(status_code=404, detail="Job not found")
        return _json.loads(data)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


from services_safe import session_sidecar_client
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~$ # Verbose curl to see exactly what's happening
JARVIS_KEY=$(grep "^JARVIS_API_KEY" .env | tail -1 | cut -d= -f2)
echo "Using key: ${JARVIS_KEY:0:8}..."  # shows first 8 chars only

curl -v -X POST http://localhost:8000/chat \
  -H "Authorization: Bearer $JARVIS_KEY" \
  -H "Content-Type: application/json" \
  -d '{"message": "hello"}' 2>&1 | grep -E "< HTTP|{|}"
Using key: ...
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~$ 


