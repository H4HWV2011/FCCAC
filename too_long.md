(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # Is the AI service container running?ng?
docker ps | grep -E "allis|ollama|ai|llm"

# Check your compose stack
docker compose ps

# Look at the AI service logs
docker compose logs --tail=50 ms-allis
# or whatever your AI service is named
f16fdc1194c4   msjarvis-rebuild-jarvis-blood-brain-barrier           "python3 ms_jarvis_b…"   3 hours ago    Up 3 hours              127.0.0.1:8016->8016/tcp                                                                                       jarvis-blood-brain-barrier
deea224626a7   msjarvis-rebuild-jarvis-main-brain                    "sh -lc 'cd /app/ser…"   8 hours ago    Up 4 hours (healthy)    127.0.0.1:8050->8050/tcp                                                                                       jarvis-main-brain
c8f9d5c9b468   msjarvis-rebuild-jarvis-main-brain:latest             "uvicorn ms_jarvis_w…"   8 hours ago    Up 8 hours              127.0.0.1:8104->8104/tcp                                                                                       nbb_woah_algorithms
3e46eac4a0a2   msjarvis-rebuild-jarvis-brain-orchestrator            "python3 brain_orche…"   8 hours ago    Up 8 hours (healthy)    127.0.0.1:17260->7260/tcp                                                                                      jarvis-brain-orchestrator
32b199503162   5e04cf1b4ec2                                          "uvicorn mountainsha…"   16 hours ago   Up 16 hours             127.0.0.1:8080->8080/tcp                                                                                       jarvis-mountainshares-coordinator
22d9f326ebd9   msjarvis-rebuild-llm22-proxy:latest                   "uvicorn llm22_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8222->8222/tcp                                                                                       llm22-proxy
ce1dc2575274   msjarvis-rebuild-llm14-proxy:latest                   "uvicorn llm14_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8214->8214/tcp                                                                                       llm14-proxy
7cb52d70aa6b   msjarvis-rebuild-llm2-proxy:latest                    "uvicorn llm2_health…"   16 hours ago   Up 16 hours             127.0.0.1:8202->8202/tcp                                                                                       llm2-proxy
d5c5bb4edbbd   msjarvis-rebuild-llm18-proxy:latest                   "uvicorn llm18_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8218->8218/tcp                                                                                       llm18-proxy
b5a4192fc67c   msjarvis-rebuild-llm7-proxy:latest                    "uvicorn llm7_health…"   16 hours ago   Up 16 hours             127.0.0.1:8207->8207/tcp                                                                                       llm7-proxy
62254328c63e   msjarvis-rebuild-jarvis-20llm-production              "python3 ai_server_2…"   16 hours ago   Up 16 hours             127.0.0.1:8008->8008/tcp                                                                                       jarvis-20llm-production
82500642d46d   msjarvis-rebuild-llm17-proxy:latest                   "uvicorn llm17_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8217->8217/tcp                                                                                       llm17-proxy
509ddfa7944c   msjarvis-rebuild-llm12-proxy:latest                   "uvicorn llm12_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8212->8212/tcp                                                                                       llm12-proxy
4eddfe474183   msjarvis-rebuild-llm20-proxy:latest                   "uvicorn llm20_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8220->8220/tcp                                                                                       llm20-proxy
732352c0bf62   msjarvis-rebuild-llm11-proxy:latest                   "uvicorn llm11_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8211->8211/tcp                                                                                       llm11-proxy
655969a3e729   msjarvis-rebuild-llm6-proxy:latest                    "uvicorn llm6_health…"   16 hours ago   Up 16 hours             127.0.0.1:8206->8206/tcp                                                                                       llm6-proxy
4f1ef1a8c4ab   msjarvis-rebuild-llm9-proxy:latest                    "uvicorn llm9_health…"   16 hours ago   Up 16 hours             127.0.0.1:8209->8209/tcp                                                                                       llm9-proxy
2abe09c74d86   msjarvis-rebuild-llm21-proxy:latest                   "uvicorn llm21_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8221->8221/tcp                                                                                       llm21-proxy
57e1defacd71   msjarvis-rebuild-llm16-proxy:latest                   "uvicorn llm16_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8216->8216/tcp                                                                                       llm16-proxy
b0fcb9f75349   msjarvis-rebuild-llm15-proxy:latest                   "uvicorn llm15_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8215->8215/tcp                                                                                       llm15-proxy
e902384b4b8e   msjarvis-rebuild-nbb_blood_brain_barrier              "uvicorn blood_brain…"   16 hours ago   Up 16 hours             127.0.0.1:8301->7001/tcp                                                                                       msjarvis-rebuild-nbb_blood_brain_barrier-1
a3ac365b882a   msjarvis-rebuild-llm8-proxy:latest                    "uvicorn llm8_health…"   16 hours ago   Up 16 hours             127.0.0.1:8208->8208/tcp                                                                                       llm8-proxy
fbff92f6c9d0   msjarvis-rebuild-llm4-proxy:latest                    "uvicorn llm4_health…"   16 hours ago   Up 16 hours             127.0.0.1:8204->8204/tcp                                                                                       llm4-proxy
59d78785028b   msjarvis-rebuild-llm10-proxy:latest                   "uvicorn llm10_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8210->8210/tcp                                                                                       llm10-proxy
c05ac16d416d   msjarvis-rebuild-nbb_i_containers                     "uvicorn i_container…"   16 hours ago   Up 5 hours              127.0.0.1:8101->7005/tcp                                                                                       msjarvis-rebuild-nbb_i_containers-1
821a80f2393d   msjarvis-rebuild-llm1-proxy:latest                    "uvicorn llm1_health…"   16 hours ago   Up 16 hours             127.0.0.1:8201->8201/tcp                                                                                       llm1-proxy
444483b28208   msjarvis-rebuild-llm19-proxy:latest                   "uvicorn llm19_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8219->8219/tcp                                                                                       llm19-proxy
4e2a042ab2bb   msjarvis-rebuild-llm13-proxy:latest                   "uvicorn llm13_healt…"   16 hours ago   Up 16 hours             127.0.0.1:8213->8213/tcp                                                                                       llm13-proxy
e64a59fa4094   msjarvis-rebuild-llm5-proxy:latest                    "uvicorn llm5_health…"   16 hours ago   Up 16 hours             127.0.0.1:8205->8205/tcp                                                                                       llm5-proxy
13babef9b7e9   msjarvis-rebuild-nbb_mother_carrie_protocols          "uvicorn main:app --…"   16 hours ago   Up 16 hours             127.0.0.1:8107->7007/tcp                                                                                       msjarvis-rebuild-nbb_mother_carrie_protocols-1
4631db9b7a57   msjarvis-rebuild-nbb_consciousness_containers         "uvicorn consciousne…"   16 hours ago   Up 16 hours             127.0.0.1:8102->7002/tcp                                                                                       msjarvis-rebuild-nbb_consciousness_containers-1
d2fbcb872c27   msjarvis-rebuild-llm3-proxy:latest                    "uvicorn llm3_health…"   16 hours ago   Up 16 hours             127.0.0.1:8203->8203/tcp                                                                                       llm3-proxy
ab85be884438   msjarvis-rebuild-jarvis-i-containers                  "/opt/nvidia/nvidia_…"   34 hours ago   Up 5 hours              127.0.0.1:8015->8015/tcp                                                                                       jarvis-i-containers
0634569ef445   ollama/ollama:latest                                  "/bin/ollama serve"      5 days ago     Up 5 days               127.0.0.1:11434->11434/tcp                                                                                     jarvis-ollama
f6e20b8ad945   msjarvis-rebuild-jarvis-llm-judge-v3                  "python judge_pipeli…"   3 weeks ago    Up 9 days               127.0.0.1:7240->7240/tcp                                                                                       jarvis-llm-judge-v3
NAME                                                    IMAGE                                                                                     COMMAND                  SERVICE                              CREATED        STATUS                  PORTS
ipfs                                                    ipfs/kubo:latest                                                                          "/sbin/tini -- /usr/…"   ipfs                                 16 hours ago   Up 16 hours (healthy)   4001/tcp, 8080-8081/tcp, 4001/udp, 127.0.0.1:5001->5001/tcp
jarvis-20llm-production                                 msjarvis-rebuild-jarvis-20llm-production                                                  "python3 ai_server_2…"   jarvis-20llm-production              16 hours ago   Up 16 hours             127.0.0.1:8008->8008/tcp
jarvis-69dgm-bridge                                     msjarvis-rebuild-jarvis-69dgm-bridge                                                      "python3 port_9000_6…"   jarvis-69dgm-bridge                  16 hours ago   Up 16 hours             127.0.0.1:19000->9000/tcp
jarvis-aaacpe-rag                                       msjarvis-rebuild-jarvis-aaacpe-rag                                                        "uvicorn aaacpe_rag_…"   jarvis-aaacpe-rag                    16 hours ago   Up 16 hours             127.0.0.1:8032->8032/tcp
jarvis-aaacpe-scraper                                   msjarvis-rebuild-jarvis-aaacpe-scraper                                                    "uvicorn aaacpe_scra…"   jarvis-aaacpe-scraper                8 days ago     Up 8 days               127.0.0.1:8033->8033/tcp
jarvis-agents-service                                   msjarvis-rebuild-jarvis-agents-service                                                    "python3 ms_jarvis_a…"   jarvis-agents-service                16 hours ago   Up 16 hours             8005/tcp, 8120/tcp
jarvis-anvil                                            ghcr.io/foundry-rs/foundry:latest                                                         "sh -c 'anvil --host…"   jarvis-anvil                         2 days ago     Up 2 days               0.0.0.0:8545->8545/tcp, [::]:8545->8545/tcp
jarvis-auth-api                                         msjarvis-rebuild-jarvis-auth-api                                                          "sh -lc 'cd /app/ser…"   jarvis-auth-api                      14 hours ago   Up 2 hours (healthy)    127.0.0.1:8092->8091/tcp
jarvis-autonomous-learner                               msjarvis-rebuild-jarvis-autonomous-learner                                                "uvicorn ms_jarvis_a…"   jarvis-autonomous-learner            12 hours ago   Up 12 hours             127.0.0.1:8020->8020/tcp
jarvis-blood-brain-barrier                              msjarvis-rebuild-jarvis-blood-brain-barrier                                               "python3 ms_jarvis_b…"   jarvis-blood-brain-barrier           3 hours ago    Up 3 hours              127.0.0.1:8016->8016/tcp
jarvis-brain-orchestrator                               msjarvis-rebuild-jarvis-brain-orchestrator                                                "python3 brain_orche…"   jarvis-brain-orchestrator            8 hours ago    Up 8 hours (healthy)    127.0.0.1:17260->7260/tcp
jarvis-chroma                                           chromadb/chroma@sha256:7605e7b398f96dba833ed1b6272f815b9d33414dde45c68bd246e84447db8591   "dumb-init -- chroma…"   jarvis-chroma                        5 days ago     Up 5 days (healthy)     127.0.0.1:8002->8000/tcp
jarvis-community-stake-registry                         sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "uvicorn community_s…"   jarvis-community-stake-registry      16 hours ago   Up 16 hours             127.0.0.1:8084->8084/tcp
jarvis-confidence-decay                                 msjarvis-rebuild-jarvis-confidence-decay                                                  "python3 services/co…"   jarvis-confidence-decay              16 hours ago   Up 16 hours (healthy)   
jarvis-consciousness-bridge                             msjarvis-rebuild-jarvis-consciousness-bridge                                              "python3 /app/servic…"   jarvis-consciousness-bridge          5 days ago     Up 32 hours             8020/tcp
jarvis-constitutional-guardian                          msjarvis-rebuild-jarvis-constitutional-guardian                                           "python3 jarvis-cons…"   jarvis-constitutional-guardian       16 hours ago   Up 16 hours             127.0.0.1:8091->8091/tcp
jarvis-contract-forge                                   msjarvis-rebuild-jarvis-contract-forge                                                    "uvicorn ms_jarvis_c…"   jarvis-contract-forge                2 days ago     Up 2 days               127.0.0.1:8093->8091/tcp
jarvis-crypto-policy                                    msjarvis-rebuild-jarvis-crypto-policy                                                     "uvicorn jarviscrypt…"   jarvis-crypto-policy                 16 hours ago   Up 16 hours             127.0.0.1:8099->8099/tcp
jarvis-dao-governance                                   sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "uvicorn dao_governa…"   jarvis-dao-governance                16 hours ago   Up 16 hours             127.0.0.1:8082->8082/tcp
jarvis-decay-escalation-consumer                        msjarvis-rebuild-jarvis-decay-escalation-consumer                                         "python -u jarvis_de…"   jarvis-decay-escalation-consumer     8 days ago     Up 8 days               
jarvis-eeg-beta                                         sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "/bin/sh -c 'pip ins…"   jarvis-eeg-beta                      16 hours ago   Up 16 hours             127.0.0.1:8075->8075/tcp
jarvis-eeg-delta                                        sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "/bin/sh -c 'pip ins…"   jarvis-eeg-delta                     16 hours ago   Up 16 hours             127.0.0.1:8073->8073/tcp
jarvis-eeg-theta                                        sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "/bin/sh -c 'pip ins…"   jarvis-eeg-theta                     16 hours ago   Up 16 hours             127.0.0.1:8074->8074/tcp
jarvis-fifth-dgm                                        msjarvis-rebuild-jarvis-fifth-dgm                                                         "python -m uvicorn m…"   jarvis-fifth-dgm                     16 hours ago   Up 16 hours             127.0.0.1:4002->4002/tcp
jarvis-fractal-consciousness                            msjarvis-rebuild-jarvis-fractal-consciousness                                             "python3 /app/servic…"   jarvis-fractal-consciousness         16 hours ago   Up 16 hours             8027/tcp
jarvis-gbim-query-router                                msjarvis-rebuild-jarvis-gbim-query-router                                                 "python3 gbim_query_…"   jarvis-gbim-query-router             16 hours ago   Up 16 hours             127.0.0.1:7205->7205/tcp
jarvis-gbim-verifier                                    msjarvis-rebuild-jarvis-gbim-verifier                                                     "python3 gbim_verifi…"   jarvis-gbim-verifier                 16 hours ago   Up 14 seconds           
jarvis-hilbert-state                                    msjarvis-rebuild-jarvis-hilbert-state                                                     "python3 -m uvicorn …"   jarvis-hilbert-state                 16 hours ago   Up 16 hours             
jarvis-hippocampus                                      msjarvis-rebuild-jarvis-hippocampus                                                       "uvicorn hippocampus…"   jarvis-hippocampus                   16 hours ago   Up 16 hours             
jarvis-i-containers                                     msjarvis-rebuild-jarvis-i-containers                                                      "/opt/nvidia/nvidia_…"   jarvis-i-containers                  34 hours ago   Up 5 hours              127.0.0.1:8015->8015/tcp
jarvis-ingest-api                                       python:3.11-slim                                                                          "python3 -c 'import …"   jarvis-ingest-api                    8 days ago     Up 7 hours              
jarvis-ingest-watcher                                   msjarvis-rebuild_jarvis-ingest-watcher                                                    "python -m ingest_wa…"   jarvis-ingest-watcher                15 hours ago   Up 15 hours             
jarvis-judge-alignment                                  msjarvis-rebuild-jarvis-judge-alignment                                                   "python3 judge_align…"   jarvis-judge-alignment               16 hours ago   Up 16 hours             
jarvis-judge-consistency                                msjarvis-rebuild-jarvis-judge-consistency                                                 "python3 judge_consi…"   jarvis-judge-consistency             16 hours ago   Up 16 hours             
jarvis-judge-ethics                                     msjarvis-rebuild-jarvis-judge-ethics                                                      "python3 judge_ethic…"   jarvis-judge-ethics                  16 hours ago   Up 16 hours             
jarvis-judge-pipeline                                   msjarvis-rebuild-jarvis-judge-pipeline                                                    "python3 judge_pipel…"   jarvis-judge-pipeline                16 hours ago   Up 16 hours             
jarvis-judge-truth                                      msjarvis-rebuild-jarvis-judge-truth                                                       "python3 judge_truth…"   jarvis-judge-truth                   16 hours ago   Up 16 hours             7230/tcp
jarvis-lm-synthesizer                                   msjarvis-rebuild-jarvis-lm-synthesizer                                                    "python lm_synthesiz…"   jarvis-lm-synthesizer                5 days ago     Up 5 days               8001/tcp
jarvis-local-resources                                  msjarvis-rebuild-jarvis-local-resources                                                   "uvicorn local_resou…"   jarvis-local-resources               16 hours ago   Up 15 hours             127.0.0.1:8058->8055/tcp
jarvis-local-resources-db                               postgis/postgis:15-3.3                                                                    "docker-entrypoint.s…"   jarvis-local-resources-db            16 hours ago   Up 15 hours (healthy)   127.0.0.1:5435->5432/tcp
jarvis-main-brain                                       msjarvis-rebuild-jarvis-main-brain                                                        "sh -lc 'cd /app/ser…"   jarvis-main-brain                    8 hours ago    Up 4 hours (healthy)    127.0.0.1:8050->8050/tcp
jarvis-memory                                           msjarvis-rebuild-jarvis-memory                                                            "uvicorn ms_jarvis_m…"   jarvis-memory                        2 hours ago    Up 2 hours              127.0.0.1:8056->8056/tcp
jarvis-mother-protocols                                 msjarvis-rebuild-jarvis-mother-protocols                                                  "python -m uvicorn m…"   jarvis-mother-protocols              8 days ago     Up 8 days               4000/tcp
jarvis-mountainshares-coordinator                       sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "uvicorn mountainsha…"   jarvis-mountainshares-coordinator    16 hours ago   Up 16 hours             127.0.0.1:8080->8080/tcp
jarvis-ms-token-service                                 sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "uvicorn token_servi…"   jarvis-ms-token-service              16 hours ago   Up 16 hours             127.0.0.1:8088->8083/tcp
jarvis-neurobiological-master                           msjarvis-rebuild-jarvis-neurobiological-master                                            "python3 ms_jarvis_n…"   jarvis-neurobiological-master        5 days ago     Up 5 hours              127.0.0.1:8018->8018/tcp
jarvis-ollama                                           ollama/ollama:latest                                                                      "/bin/ollama serve"      jarvis-ollama                        5 days ago     Up 5 days               127.0.0.1:11434->11434/tcp
jarvis-pia-sampler                                      msjarvis-rebuild-jarvis-pia-sampler                                                       "sh -lc 'cd /app/ser…"   jarvis-pia-sampler                   16 hours ago   Up 16 hours             127.0.0.1:8076->8076/tcp
jarvis-qualia-engine                                    msjarvis-rebuild-jarvis-qualia-engine                                                     "python3 -m uvicorn …"   jarvis-qualia-engine                 5 hours ago    Up 5 hours              127.0.0.1:8017->8017/tcp
jarvis-rag-server                                       msjarvis-rebuild-jarvis-rag-server                                                        "uvicorn ms_jarvis_r…"   jarvis-rag-server                    4 hours ago    Up 4 hours              127.0.0.1:8003->8003/tcp
jarvis-redis                                            redis:7-alpine                                                                            "docker-entrypoint.s…"   jarvis-redis                         8 days ago     Up 8 days (healthy)     127.0.0.1:6380->6379/tcp
jarvis-semaphore                                        msjarvis-rebuild-jarvis-semaphore                                                         "uvicorn jarvis-sema…"   jarvis-semaphore                     16 hours ago   Up 16 hours             127.0.0.1:8030->8030/tcp
jarvis-spiritual-rag                                    msjarvis-rebuild-jarvis-spiritual-rag                                                     "python3 jarvis-spir…"   jarvis-spiritual-rag                 16 hours ago   Up 16 hours             8005/tcp, 127.0.0.1:8046->8046/tcp
jarvis-steward                                          msjarvis-rebuild-jarvis-steward                                                           "uvicorn jarvis_stew…"   jarvis-steward                       3 hours ago    Up 3 hours              8060/tcp
jarvis-stewardship-scheduler                            msjarvis-rebuild-jarvis-stewardship-scheduler                                             "python3 jarvis_stew…"   jarvis-stewardship-scheduler         16 hours ago   Up 16 hours             127.0.0.1:8079->8079/tcp
jarvis-swarm-intelligence                               msjarvis-rebuild-jarvis-swarm-intelligence                                                "python3 ms_jarvis_s…"   jarvis-swarm-intelligence            16 hours ago   Up 16 hours             8021/tcp, 8300/tcp
jarvis-temporal-consciousness                           msjarvis-rebuild-jarvis-temporal-consciousness                                            "sh -c 'echo 'Tempor…"   jarvis-temporal-consciousness        16 hours ago   Up 10 minutes           7007/tcp
jarvis-unified-gateway                                  msjarvis-rebuild-jarvis-unified-gateway                                                   "python3 ms_jarvis_u…"   jarvis-unified-gateway               3 hours ago    Up 3 hours              127.0.0.1:18018->8001/tcp
jarvis-web-research                                     msjarvis-rebuild-jarvis-web-research                                                      "python ms_jarvis_we…"   jarvis-web-research                  16 hours ago   Up 16 hours             8090/tcp
jarvis-woah                                             msjarvis-rebuild-jarvis-woah                                                              "uvicorn woah_servic…"   jarvis-woah                          16 hours ago   Up 16 hours             7012/tcp
llm1-proxy                                              msjarvis-rebuild-llm1-proxy:latest                                                        "uvicorn llm1_health…"   llm1-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8201->8201/tcp
llm10-proxy                                             msjarvis-rebuild-llm10-proxy:latest                                                       "uvicorn llm10_healt…"   llm10-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8210->8210/tcp
llm11-proxy                                             msjarvis-rebuild-llm11-proxy:latest                                                       "uvicorn llm11_healt…"   llm11-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8211->8211/tcp
llm12-proxy                                             msjarvis-rebuild-llm12-proxy:latest                                                       "uvicorn llm12_healt…"   llm12-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8212->8212/tcp
llm13-proxy                                             msjarvis-rebuild-llm13-proxy:latest                                                       "uvicorn llm13_healt…"   llm13-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8213->8213/tcp
llm14-proxy                                             msjarvis-rebuild-llm14-proxy:latest                                                       "uvicorn llm14_healt…"   llm14-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8214->8214/tcp
llm15-proxy                                             msjarvis-rebuild-llm15-proxy:latest                                                       "uvicorn llm15_healt…"   llm15-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8215->8215/tcp
llm16-proxy                                             msjarvis-rebuild-llm16-proxy:latest                                                       "uvicorn llm16_healt…"   llm16-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8216->8216/tcp
llm17-proxy                                             msjarvis-rebuild-llm17-proxy:latest                                                       "uvicorn llm17_healt…"   llm17-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8217->8217/tcp
llm18-proxy                                             msjarvis-rebuild-llm18-proxy:latest                                                       "uvicorn llm18_healt…"   llm18-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8218->8218/tcp
llm19-proxy                                             msjarvis-rebuild-llm19-proxy:latest                                                       "uvicorn llm19_healt…"   llm19-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8219->8219/tcp
llm2-proxy                                              msjarvis-rebuild-llm2-proxy:latest                                                        "uvicorn llm2_health…"   llm2-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8202->8202/tcp
llm20-proxy                                             msjarvis-rebuild-llm20-proxy:latest                                                       "uvicorn llm20_healt…"   llm20-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8220->8220/tcp
llm21-proxy                                             msjarvis-rebuild-llm21-proxy:latest                                                       "uvicorn llm21_healt…"   llm21-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8221->8221/tcp
llm22-proxy                                             msjarvis-rebuild-llm22-proxy:latest                                                       "uvicorn llm22_healt…"   llm22-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8222->8222/tcp
llm3-proxy                                              msjarvis-rebuild-llm3-proxy:latest                                                        "uvicorn llm3_health…"   llm3-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8203->8203/tcp
llm4-proxy                                              msjarvis-rebuild-llm4-proxy:latest                                                        "uvicorn llm4_health…"   llm4-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8204->8204/tcp
llm5-proxy                                              msjarvis-rebuild-llm5-proxy:latest                                                        "uvicorn llm5_health…"   llm5-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8205->8205/tcp
llm6-proxy                                              msjarvis-rebuild-llm6-proxy:latest                                                        "uvicorn llm6_health…"   llm6-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8206->8206/tcp
llm7-proxy                                              msjarvis-rebuild-llm7-proxy:latest                                                        "uvicorn llm7_health…"   llm7-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8207->8207/tcp
llm8-proxy                                              msjarvis-rebuild-llm8-proxy:latest                                                        "uvicorn llm8_health…"   llm8-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8208->8208/tcp
llm9-proxy                                              msjarvis-rebuild-llm9-proxy:latest                                                        "uvicorn llm9_health…"   llm9-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8209->8209/tcp
msjarvis-db                                             postgres:15                                                                               "docker-entrypoint.s…"   msjarvis-db                          14 hours ago   Up 14 hours             127.0.0.1:5433->5432/tcp
msjarvis-rebuild-nbb_blood_brain_barrier-1              msjarvis-rebuild-nbb_blood_brain_barrier                                                  "uvicorn blood_brain…"   nbb_blood_brain_barrier              16 hours ago   Up 16 hours             127.0.0.1:8301->7001/tcp
msjarvis-rebuild-nbb_consciousness_containers-1         msjarvis-rebuild-nbb_consciousness_containers                                             "uvicorn consciousne…"   nbb_consciousness_containers         16 hours ago   Up 16 hours             127.0.0.1:8102->7002/tcp
msjarvis-rebuild-nbb_darwin_godel_machines-1            msjarvis-rebuild-nbb_darwin_godel_machines                                                "uvicorn nbb_darwin_…"   nbb_darwin_godel_machines            16 hours ago   Up 16 hours             127.0.0.1:8302->7003/tcp
msjarvis-rebuild-nbb_heteroglobulin_transport-1         msjarvis-rebuild-nbb_heteroglobulin_transport                                             "uvicorn heteroglobu…"   nbb_heteroglobulin_transport         16 hours ago   Up 16 hours             127.0.0.1:8106->7006/tcp
msjarvis-rebuild-nbb_i_containers-1                     msjarvis-rebuild-nbb_i_containers                                                         "uvicorn i_container…"   nbb_i_containers                     16 hours ago   Up 5 hours              127.0.0.1:8101->7005/tcp
msjarvis-rebuild-nbb_mother_carrie_protocols-1          msjarvis-rebuild-nbb_mother_carrie_protocols                                              "uvicorn main:app --…"   nbb_mother_carrie_protocols          16 hours ago   Up 16 hours             127.0.0.1:8107->7007/tcp
msjarvis-rebuild-nbb_pituitary_gland-1                  msjarvis-rebuild-nbb_pituitary_gland                                                      "uvicorn pituitary_g…"   nbb_pituitary_gland                  16 hours ago   Up 16 hours             127.0.0.1:8108->80/tcp
msjarvis-rebuild-nbb_prefrontal_cortex-1                msjarvis-rebuild-nbb_prefrontal_cortex                                                    "uvicorn prefrontal_…"   nbb_prefrontal_cortex                15 hours ago   Up 15 hours             127.0.0.1:8105->7005/tcp
msjarvis-rebuild-nbb_spiritual_maternal_integration-1   msjarvis-rebuild-nbb_spiritual_maternal_integration                                       "uvicorn spiritual_m…"   nbb_spiritual_maternal_integration   16 hours ago   Up 16 hours             127.0.0.1:8109->7009/tcp
msjarvis-rebuild-nbb_spiritual_root-1                   msjarvis-rebuild-nbb_spiritual_root                                                       "uvicorn spiritual_r…"   nbb_spiritual_root                   16 hours ago   Up 16 hours             127.0.0.1:8103->7003/tcp
mysql                                                   mysql:8.2                                                                                 "docker-entrypoint.s…"   mysql                                16 hours ago   Up 16 hours (healthy)   33060/tcp, 127.0.0.1:3307->3306/tcp
nbb_woah_algorithms                                     msjarvis-rebuild-jarvis-main-brain:latest                                                 "uvicorn ms_jarvis_w…"   nbb_woah_algorithms                  8 hours ago    Up 8 hours              127.0.0.1:8104->8104/tcp
neo4j                                                   neo4j:5.13-community                                                                      "tini -g -- /startup…"   neo4j                                16 hours ago   Up 16 hours (healthy)   7473/tcp, 127.0.0.1:7687->7687/tcp, 127.0.0.1:7475->7474/tcp
no such service: ms-allis
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ docker compose ps
docker compose logs --tail=50
NAME                                                    IMAGE                                                                                     COMMAND                  SERVICE                              CREATED        STATUS                  PORTS
ipfs                                                    ipfs/kubo:latest                                                                          "/sbin/tini -- /usr/…"   ipfs                                 16 hours ago   Up 16 hours (healthy)   4001/tcp, 8080-8081/tcp, 4001/udp, 127.0.0.1:5001->5001/tcp
jarvis-20llm-production                                 msjarvis-rebuild-jarvis-20llm-production                                                  "python3 ai_server_2…"   jarvis-20llm-production              16 hours ago   Up 16 hours             127.0.0.1:8008->8008/tcp
jarvis-69dgm-bridge                                     msjarvis-rebuild-jarvis-69dgm-bridge                                                      "python3 port_9000_6…"   jarvis-69dgm-bridge                  16 hours ago   Up 16 hours             127.0.0.1:19000->9000/tcp
jarvis-aaacpe-rag                                       msjarvis-rebuild-jarvis-aaacpe-rag                                                        "uvicorn aaacpe_rag_…"   jarvis-aaacpe-rag                    16 hours ago   Up 16 hours             127.0.0.1:8032->8032/tcp
jarvis-aaacpe-scraper                                   msjarvis-rebuild-jarvis-aaacpe-scraper                                                    "uvicorn aaacpe_scra…"   jarvis-aaacpe-scraper                8 days ago     Up 8 days               127.0.0.1:8033->8033/tcp
jarvis-agents-service                                   msjarvis-rebuild-jarvis-agents-service                                                    "python3 ms_jarvis_a…"   jarvis-agents-service                16 hours ago   Up 16 hours             8005/tcp, 8120/tcp
jarvis-anvil                                            ghcr.io/foundry-rs/foundry:latest                                                         "sh -c 'anvil --host…"   jarvis-anvil                         2 days ago     Up 2 days               0.0.0.0:8545->8545/tcp, [::]:8545->8545/tcp
jarvis-auth-api                                         msjarvis-rebuild-jarvis-auth-api                                                          "sh -lc 'cd /app/ser…"   jarvis-auth-api                      14 hours ago   Up 2 hours (healthy)    127.0.0.1:8092->8091/tcp
jarvis-autonomous-learner                               msjarvis-rebuild-jarvis-autonomous-learner                                                "uvicorn ms_jarvis_a…"   jarvis-autonomous-learner            12 hours ago   Up 12 hours             127.0.0.1:8020->8020/tcp
jarvis-blood-brain-barrier                              msjarvis-rebuild-jarvis-blood-brain-barrier                                               "python3 ms_jarvis_b…"   jarvis-blood-brain-barrier           3 hours ago    Up 3 hours              127.0.0.1:8016->8016/tcp
jarvis-brain-orchestrator                               msjarvis-rebuild-jarvis-brain-orchestrator                                                "python3 brain_orche…"   jarvis-brain-orchestrator            8 hours ago    Up 8 hours (healthy)    127.0.0.1:17260->7260/tcp
jarvis-chroma                                           chromadb/chroma@sha256:7605e7b398f96dba833ed1b6272f815b9d33414dde45c68bd246e84447db8591   "dumb-init -- chroma…"   jarvis-chroma                        5 days ago     Up 5 days (healthy)     127.0.0.1:8002->8000/tcp
jarvis-community-stake-registry                         sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "uvicorn community_s…"   jarvis-community-stake-registry      16 hours ago   Up 16 hours             127.0.0.1:8084->8084/tcp
jarvis-confidence-decay                                 msjarvis-rebuild-jarvis-confidence-decay                                                  "python3 services/co…"   jarvis-confidence-decay              16 hours ago   Up 16 hours (healthy)   
jarvis-consciousness-bridge                             msjarvis-rebuild-jarvis-consciousness-bridge                                              "python3 /app/servic…"   jarvis-consciousness-bridge          5 days ago     Up 32 hours             8020/tcp
jarvis-constitutional-guardian                          msjarvis-rebuild-jarvis-constitutional-guardian                                           "python3 jarvis-cons…"   jarvis-constitutional-guardian       16 hours ago   Up 16 hours             127.0.0.1:8091->8091/tcp
jarvis-contract-forge                                   msjarvis-rebuild-jarvis-contract-forge                                                    "uvicorn ms_jarvis_c…"   jarvis-contract-forge                2 days ago     Up 2 days               127.0.0.1:8093->8091/tcp
jarvis-crypto-policy                                    msjarvis-rebuild-jarvis-crypto-policy                                                     "uvicorn jarviscrypt…"   jarvis-crypto-policy                 16 hours ago   Up 16 hours             127.0.0.1:8099->8099/tcp
jarvis-dao-governance                                   sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "uvicorn dao_governa…"   jarvis-dao-governance                16 hours ago   Up 16 hours             127.0.0.1:8082->8082/tcp
jarvis-decay-escalation-consumer                        msjarvis-rebuild-jarvis-decay-escalation-consumer                                         "python -u jarvis_de…"   jarvis-decay-escalation-consumer     8 days ago     Up 8 days               
jarvis-eeg-beta                                         sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "/bin/sh -c 'pip ins…"   jarvis-eeg-beta                      16 hours ago   Up 16 hours             127.0.0.1:8075->8075/tcp
jarvis-eeg-delta                                        sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "/bin/sh -c 'pip ins…"   jarvis-eeg-delta                     16 hours ago   Up 16 hours             127.0.0.1:8073->8073/tcp
jarvis-eeg-theta                                        sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "/bin/sh -c 'pip ins…"   jarvis-eeg-theta                     16 hours ago   Up 16 hours             127.0.0.1:8074->8074/tcp
jarvis-fifth-dgm                                        msjarvis-rebuild-jarvis-fifth-dgm                                                         "python -m uvicorn m…"   jarvis-fifth-dgm                     16 hours ago   Up 16 hours             127.0.0.1:4002->4002/tcp
jarvis-fractal-consciousness                            msjarvis-rebuild-jarvis-fractal-consciousness                                             "python3 /app/servic…"   jarvis-fractal-consciousness         16 hours ago   Up 16 hours             8027/tcp
jarvis-gbim-query-router                                msjarvis-rebuild-jarvis-gbim-query-router                                                 "python3 gbim_query_…"   jarvis-gbim-query-router             16 hours ago   Up 16 hours             127.0.0.1:7205->7205/tcp
jarvis-gbim-verifier                                    msjarvis-rebuild-jarvis-gbim-verifier                                                     "python3 gbim_verifi…"   jarvis-gbim-verifier                 16 hours ago   Up 22 seconds           
jarvis-hilbert-state                                    msjarvis-rebuild-jarvis-hilbert-state                                                     "python3 -m uvicorn …"   jarvis-hilbert-state                 16 hours ago   Up 16 hours             
jarvis-hippocampus                                      msjarvis-rebuild-jarvis-hippocampus                                                       "uvicorn hippocampus…"   jarvis-hippocampus                   16 hours ago   Up 16 hours             
jarvis-i-containers                                     msjarvis-rebuild-jarvis-i-containers                                                      "/opt/nvidia/nvidia_…"   jarvis-i-containers                  34 hours ago   Up 5 hours              127.0.0.1:8015->8015/tcp
jarvis-ingest-api                                       python:3.11-slim                                                                          "python3 -c 'import …"   jarvis-ingest-api                    8 days ago     Up 7 hours              
jarvis-ingest-watcher                                   msjarvis-rebuild_jarvis-ingest-watcher                                                    "python -m ingest_wa…"   jarvis-ingest-watcher                15 hours ago   Up 15 hours             
jarvis-judge-alignment                                  msjarvis-rebuild-jarvis-judge-alignment                                                   "python3 judge_align…"   jarvis-judge-alignment               16 hours ago   Up 16 hours             
jarvis-judge-consistency                                msjarvis-rebuild-jarvis-judge-consistency                                                 "python3 judge_consi…"   jarvis-judge-consistency             16 hours ago   Up 16 hours             
jarvis-judge-ethics                                     msjarvis-rebuild-jarvis-judge-ethics                                                      "python3 judge_ethic…"   jarvis-judge-ethics                  16 hours ago   Up 16 hours             
jarvis-judge-pipeline                                   msjarvis-rebuild-jarvis-judge-pipeline                                                    "python3 judge_pipel…"   jarvis-judge-pipeline                16 hours ago   Up 16 hours             
jarvis-judge-truth                                      msjarvis-rebuild-jarvis-judge-truth                                                       "python3 judge_truth…"   jarvis-judge-truth                   16 hours ago   Up 16 hours             7230/tcp
jarvis-lm-synthesizer                                   msjarvis-rebuild-jarvis-lm-synthesizer                                                    "python lm_synthesiz…"   jarvis-lm-synthesizer                5 days ago     Up 5 days               8001/tcp
jarvis-local-resources                                  msjarvis-rebuild-jarvis-local-resources                                                   "uvicorn local_resou…"   jarvis-local-resources               16 hours ago   Up 15 hours             127.0.0.1:8058->8055/tcp
jarvis-local-resources-db                               postgis/postgis:15-3.3                                                                    "docker-entrypoint.s…"   jarvis-local-resources-db            16 hours ago   Up 15 hours (healthy)   127.0.0.1:5435->5432/tcp
jarvis-main-brain                                       msjarvis-rebuild-jarvis-main-brain                                                        "sh -lc 'cd /app/ser…"   jarvis-main-brain                    8 hours ago    Up 4 hours (healthy)    127.0.0.1:8050->8050/tcp
jarvis-memory                                           msjarvis-rebuild-jarvis-memory                                                            "uvicorn ms_jarvis_m…"   jarvis-memory                        2 hours ago    Up 2 hours              127.0.0.1:8056->8056/tcp
jarvis-mother-protocols                                 msjarvis-rebuild-jarvis-mother-protocols                                                  "python -m uvicorn m…"   jarvis-mother-protocols              8 days ago     Up 8 days               4000/tcp
jarvis-mountainshares-coordinator                       sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "uvicorn mountainsha…"   jarvis-mountainshares-coordinator    16 hours ago   Up 16 hours             127.0.0.1:8080->8080/tcp
jarvis-ms-token-service                                 sha256:5e04cf1b4ec29fcf0d305ffefe2fdef2e436afca55794517056745fb34a54f34                   "uvicorn token_servi…"   jarvis-ms-token-service              16 hours ago   Up 16 hours             127.0.0.1:8088->8083/tcp
jarvis-neurobiological-master                           msjarvis-rebuild-jarvis-neurobiological-master                                            "python3 ms_jarvis_n…"   jarvis-neurobiological-master        5 days ago     Up 5 hours              127.0.0.1:8018->8018/tcp
jarvis-ollama                                           ollama/ollama:latest                                                                      "/bin/ollama serve"      jarvis-ollama                        5 days ago     Up 5 days               127.0.0.1:11434->11434/tcp
jarvis-pia-sampler                                      msjarvis-rebuild-jarvis-pia-sampler                                                       "sh -lc 'cd /app/ser…"   jarvis-pia-sampler                   16 hours ago   Up 16 hours             127.0.0.1:8076->8076/tcp
jarvis-qualia-engine                                    msjarvis-rebuild-jarvis-qualia-engine                                                     "python3 -m uvicorn …"   jarvis-qualia-engine                 5 hours ago    Up 5 hours              127.0.0.1:8017->8017/tcp
jarvis-rag-server                                       msjarvis-rebuild-jarvis-rag-server                                                        "uvicorn ms_jarvis_r…"   jarvis-rag-server                    4 hours ago    Up 4 hours              127.0.0.1:8003->8003/tcp
jarvis-redis                                            redis:7-alpine                                                                            "docker-entrypoint.s…"   jarvis-redis                         8 days ago     Up 8 days (healthy)     127.0.0.1:6380->6379/tcp
jarvis-semaphore                                        msjarvis-rebuild-jarvis-semaphore                                                         "uvicorn jarvis-sema…"   jarvis-semaphore                     16 hours ago   Up 16 hours             127.0.0.1:8030->8030/tcp
jarvis-spiritual-rag                                    msjarvis-rebuild-jarvis-spiritual-rag                                                     "python3 jarvis-spir…"   jarvis-spiritual-rag                 16 hours ago   Up 16 hours             8005/tcp, 127.0.0.1:8046->8046/tcp
jarvis-steward                                          msjarvis-rebuild-jarvis-steward                                                           "uvicorn jarvis_stew…"   jarvis-steward                       3 hours ago    Up 3 hours              8060/tcp
jarvis-stewardship-scheduler                            msjarvis-rebuild-jarvis-stewardship-scheduler                                             "python3 jarvis_stew…"   jarvis-stewardship-scheduler         16 hours ago   Up 16 hours             127.0.0.1:8079->8079/tcp
jarvis-swarm-intelligence                               msjarvis-rebuild-jarvis-swarm-intelligence                                                "python3 ms_jarvis_s…"   jarvis-swarm-intelligence            16 hours ago   Up 16 hours             8021/tcp, 8300/tcp
jarvis-temporal-consciousness                           msjarvis-rebuild-jarvis-temporal-consciousness                                            "sh -c 'echo 'Tempor…"   jarvis-temporal-consciousness        16 hours ago   Up 11 minutes           7007/tcp
jarvis-unified-gateway                                  msjarvis-rebuild-jarvis-unified-gateway                                                   "python3 ms_jarvis_u…"   jarvis-unified-gateway               3 hours ago    Up 3 hours              127.0.0.1:18018->8001/tcp
jarvis-web-research                                     msjarvis-rebuild-jarvis-web-research                                                      "python ms_jarvis_we…"   jarvis-web-research                  16 hours ago   Up 16 hours             8090/tcp
jarvis-woah                                             msjarvis-rebuild-jarvis-woah                                                              "uvicorn woah_servic…"   jarvis-woah                          16 hours ago   Up 16 hours             7012/tcp
llm1-proxy                                              msjarvis-rebuild-llm1-proxy:latest                                                        "uvicorn llm1_health…"   llm1-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8201->8201/tcp
llm10-proxy                                             msjarvis-rebuild-llm10-proxy:latest                                                       "uvicorn llm10_healt…"   llm10-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8210->8210/tcp
llm11-proxy                                             msjarvis-rebuild-llm11-proxy:latest                                                       "uvicorn llm11_healt…"   llm11-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8211->8211/tcp
llm12-proxy                                             msjarvis-rebuild-llm12-proxy:latest                                                       "uvicorn llm12_healt…"   llm12-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8212->8212/tcp
llm13-proxy                                             msjarvis-rebuild-llm13-proxy:latest                                                       "uvicorn llm13_healt…"   llm13-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8213->8213/tcp
llm14-proxy                                             msjarvis-rebuild-llm14-proxy:latest                                                       "uvicorn llm14_healt…"   llm14-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8214->8214/tcp
llm15-proxy                                             msjarvis-rebuild-llm15-proxy:latest                                                       "uvicorn llm15_healt…"   llm15-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8215->8215/tcp
llm16-proxy                                             msjarvis-rebuild-llm16-proxy:latest                                                       "uvicorn llm16_healt…"   llm16-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8216->8216/tcp
llm17-proxy                                             msjarvis-rebuild-llm17-proxy:latest                                                       "uvicorn llm17_healt…"   llm17-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8217->8217/tcp
llm18-proxy                                             msjarvis-rebuild-llm18-proxy:latest                                                       "uvicorn llm18_healt…"   llm18-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8218->8218/tcp
llm19-proxy                                             msjarvis-rebuild-llm19-proxy:latest                                                       "uvicorn llm19_healt…"   llm19-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8219->8219/tcp
llm2-proxy                                              msjarvis-rebuild-llm2-proxy:latest                                                        "uvicorn llm2_health…"   llm2-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8202->8202/tcp
llm20-proxy                                             msjarvis-rebuild-llm20-proxy:latest                                                       "uvicorn llm20_healt…"   llm20-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8220->8220/tcp
llm21-proxy                                             msjarvis-rebuild-llm21-proxy:latest                                                       "uvicorn llm21_healt…"   llm21-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8221->8221/tcp
llm22-proxy                                             msjarvis-rebuild-llm22-proxy:latest                                                       "uvicorn llm22_healt…"   llm22-proxy                          16 hours ago   Up 16 hours             127.0.0.1:8222->8222/tcp
llm3-proxy                                              msjarvis-rebuild-llm3-proxy:latest                                                        "uvicorn llm3_health…"   llm3-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8203->8203/tcp
llm4-proxy                                              msjarvis-rebuild-llm4-proxy:latest                                                        "uvicorn llm4_health…"   llm4-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8204->8204/tcp
llm5-proxy                                              msjarvis-rebuild-llm5-proxy:latest                                                        "uvicorn llm5_health…"   llm5-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8205->8205/tcp
llm6-proxy                                              msjarvis-rebuild-llm6-proxy:latest                                                        "uvicorn llm6_health…"   llm6-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8206->8206/tcp
llm7-proxy                                              msjarvis-rebuild-llm7-proxy:latest                                                        "uvicorn llm7_health…"   llm7-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8207->8207/tcp
llm8-proxy                                              msjarvis-rebuild-llm8-proxy:latest                                                        "uvicorn llm8_health…"   llm8-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8208->8208/tcp
llm9-proxy                                              msjarvis-rebuild-llm9-proxy:latest                                                        "uvicorn llm9_health…"   llm9-proxy                           16 hours ago   Up 16 hours             127.0.0.1:8209->8209/tcp
msjarvis-db                                             postgres:15                                                                               "docker-entrypoint.s…"   msjarvis-db                          14 hours ago   Up 14 hours             127.0.0.1:5433->5432/tcp
msjarvis-rebuild-nbb_blood_brain_barrier-1              msjarvis-rebuild-nbb_blood_brain_barrier                                                  "uvicorn blood_brain…"   nbb_blood_brain_barrier              16 hours ago   Up 16 hours             127.0.0.1:8301->7001/tcp
msjarvis-rebuild-nbb_consciousness_containers-1         msjarvis-rebuild-nbb_consciousness_containers                                             "uvicorn consciousne…"   nbb_consciousness_containers         16 hours ago   Up 16 hours             127.0.0.1:8102->7002/tcp
msjarvis-rebuild-nbb_darwin_godel_machines-1            msjarvis-rebuild-nbb_darwin_godel_machines                                                "uvicorn nbb_darwin_…"   nbb_darwin_godel_machines            16 hours ago   Up 16 hours             127.0.0.1:8302->7003/tcp
msjarvis-rebuild-nbb_heteroglobulin_transport-1         msjarvis-rebuild-nbb_heteroglobulin_transport                                             "uvicorn heteroglobu…"   nbb_heteroglobulin_transport         16 hours ago   Up 16 hours             127.0.0.1:8106->7006/tcp
msjarvis-rebuild-nbb_i_containers-1                     msjarvis-rebuild-nbb_i_containers                                                         "uvicorn i_container…"   nbb_i_containers                     16 hours ago   Up 5 hours              127.0.0.1:8101->7005/tcp
msjarvis-rebuild-nbb_mother_carrie_protocols-1          msjarvis-rebuild-nbb_mother_carrie_protocols                                              "uvicorn main:app --…"   nbb_mother_carrie_protocols          16 hours ago   Up 16 hours             127.0.0.1:8107->7007/tcp
msjarvis-rebuild-nbb_pituitary_gland-1                  msjarvis-rebuild-nbb_pituitary_gland                                                      "uvicorn pituitary_g…"   nbb_pituitary_gland                  16 hours ago   Up 16 hours             127.0.0.1:8108->80/tcp
msjarvis-rebuild-nbb_prefrontal_cortex-1                msjarvis-rebuild-nbb_prefrontal_cortex                                                    "uvicorn prefrontal_…"   nbb_prefrontal_cortex                15 hours ago   Up 15 hours             127.0.0.1:8105->7005/tcp
msjarvis-rebuild-nbb_spiritual_maternal_integration-1   msjarvis-rebuild-nbb_spiritual_maternal_integration                                       "uvicorn spiritual_m…"   nbb_spiritual_maternal_integration   16 hours ago   Up 16 hours             127.0.0.1:8109->7009/tcp
msjarvis-rebuild-nbb_spiritual_root-1                   msjarvis-rebuild-nbb_spiritual_root                                                       "uvicorn spiritual_r…"   nbb_spiritual_root                   16 hours ago   Up 16 hours             127.0.0.1:8103->7003/tcp
mysql                                                   mysql:8.2                                                                                 "docker-entrypoint.s…"   mysql                                16 hours ago   Up 16 hours (healthy)   33060/tcp, 127.0.0.1:3307->3306/tcp
nbb_woah_algorithms                                     msjarvis-rebuild-jarvis-main-brain:latest                                                 "uvicorn ms_jarvis_w…"   nbb_woah_algorithms                  8 hours ago    Up 8 hours              127.0.0.1:8104->8104/tcp
neo4j                                                   neo4j:5.13-community                                                                      "tini -g -- /startup…"   neo4j                                16 hours ago   Up 16 hours (healthy)   7473/tcp, 127.0.0.1:7687->7687/tcp, 127.0.0.1:7475->7474/tcp
jarvis-anvil  | 
jarvis-anvil  |     Block Number: 115893
jarvis-anvil  |     Block Hash: 0xd529eab8d4c8a29ec62441437b8734b7cd26838cb6094bac45d5af277d579257
jarvis-anvil  |     Block Time: "Fri, 1 May 2026 08:37:34 +0000"
jarvis-anvil  | 
jarvis-anvil  | 
jarvis-anvil  |     Block Number: 115894
jarvis-anvil  |     Block Hash: 0x7ed4ef2bc35bae0a706a62a1dab592cb884ae56604348b58088c1731deeecd35
jarvis-anvil  |     Block Time: "Fri, 1 May 2026 08:37:36 +0000"
jarvis-anvil  | 
jarvis-anvil  | 
jarvis-anvil  |     Block Number: 115895
jarvis-anvil  |     Block Hash: 0x7632aa79e5d48216b424a085dff012ebd4cfec764644867d0ef4b5d2e5adfa63
jarvis-anvil             |     Block Time: "Fri, 1 May 2026 08:37:38 +0000"
jarvis-confidence-decay  | 2026-04-30 16:26:40,412 [DECAY_LOOP] INFO Confidence Decay Loop starting — interval=86400s
jarvis-confidence-decay  | 2026-04-30 16:26:40,412 [DECAY_LOOP] INFO === Confidence Decay Loop — cycle start ===
jarvis-confidence-decay  | 2026-04-30 16:26:40,415 [DECAY_LOOP] ERROR Unhandled loop error: connection to server at "127.0.0.1", port 5433 failed: Connection refused
jarvis-confidence-decay  | 	Is the server running on that host and accepting TCP/IP connections?
jarvis-confidence-decay  | Traceback (most recent call last):
jarvis-confidence-decay  |   File "/app/services/services/confidence_decay_loop.py", line 231, in run_loop
jarvis-confidence-decay  |     run_cycle()
jarvis-confidence-decay  |   File "/app/services/services/confidence_decay_loop.py", line 179, in run_cycle
jarvis-confidence-decay  |     conn = get_conn()
jarvis-confidence-decay  |            ^^^^^^^^^^
jarvis-confidence-decay  |   File "/app/services/services/confidence_decay_loop.py", line 50, in get_conn
jarvis-confidence-decay  |     return psycopg2.connect(**MSJARVISGIS_DSN, cursor_factory=psycopg2.extras.RealDictCursor)
jarvis-confidence-decay  |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
jarvis-confidence-decay  |   File "/usr/local/lib/python3.12/site-packages/psycopg2/__init__.py", line 122, in connect
jarvis-confidence-decay  |     conn = _connect(dsn, connection_factory=connection_factory, **kwasync)
jarvis-confidence-decay  |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
jarvis-confidence-decay  | psycopg2.OperationalError: connection to server at "127.0.0.1", port 5433 failed: Connection refused
jarvis-confidence-decay  | 	Is the server running on that host and accepting TCP/IP connections?
jarvis-confidence-decay  | 
jarvis-confidence-decay  | 2026-04-30 16:26:40,415 [DECAY_LOOP] INFO Next cycle in 86400s
jarvis-anvil             | 
jarvis-anvil             | 
jarvis-anvil             |     Block Number: 115896
jarvis-anvil             |     Block Hash: 0xb71ad46f0b21b016d4bd0126d7b53916374ef8c14023299188a316ca351c975d
jarvis-anvil             |     Block Time: "Fri, 1 May 2026 08:37:40 +0000"
jarvis-anvil             | 
jarvis-anvil             | 
jarvis-anvil             |     Block Number: 115897
jarvis-anvil             |     Block Hash: 0x0bc2a6666f260ffe69a79b574ee16d8610bd8adc50130ad724e3abcfc6f5fa57
jarvis-anvil             |     Block Time: "Fri, 1 May 2026 08:37:42 +0000"
jarvis-anvil             | 
jarvis-anvil             | 
jarvis-anvil             |     Block Number: 115898
jarvis-anvil             |     Block Hash: 0xe33dd1193e881b1acfc23c49f837db8cd9726f4e4d223359a1dbaabb1ac6905b
jarvis-anvil             |     Block Time: "Fri, 1 May 2026 08:37:44 +0000"
jarvis-anvil             | 
jarvis-anvil             | 
jarvis-anvil             |     Block Number: 115899
jarvis-anvil             |     Block Hash: 0x03de2919d7db347760a7d269f8be96f8e6d3adc553921f1c818be7a5e24ca5cd
jarvis-anvil             |     Block Time: "Fri, 1 May 2026 08:37:46 +0000"
jarvis-anvil             | 
jarvis-anvil             | 
jarvis-anvil             |     Block Number: 115900
jarvis-anvil             |     Block Hash: 0x273b2f842b41109b6101cc099aac200e302b6d1b303224a27d7fd6620a79972d
jarvis-anvil             |     Block Time: "Fri, 1 May 2026 08:37:48 +0000"
jarvis-anvil             | 
jarvis-anvil             | 
jarvis-anvil             |     Block Number: 115901
jarvis-anvil             |     Block Hash: 0x78ed2ded25fbb637f10ca0a2d5d7ba5fb95f865bcf3fc365829e9b73700e0738
jarvis-anvil             |     Block Time: "Fri, 1 May 2026 08:37:50 +0000"
jarvis-anvil             | 
jarvis-anvil             | 
jarvis-anvil             |     Block Number: 115902
jarvis-anvil             |     Block Hash: 0xdfd1fe19c883fa143ee8abf080ea81cd90f7eacf33061f00ff94a266b4058495
jarvis-anvil             |     Block Time: "Fri, 1 May 2026 08:37:52 +0000"
jarvis-anvil             | 
jarvis-semaphore         | INFO:     172.18.0.87:51638 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-qualia-engine:8017/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:     172.18.0.46:49034 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-consciousness-bridge:8020/health "HTTP/1.1 200 OK"
jarvis-semaphore         | INFO:     172.18.0.71:32888 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:60680 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:42728 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:55302 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:58126 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:34446 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:46520 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:49722 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:56650 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:41682 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:60400 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:59330 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:50594 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:38290 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:43918 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:32940 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:53888 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:37484 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-neurobiological-master:8018/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-i-containers:8015/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-blood-brain-barrier:8016/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-qualia-engine:8017/health "HTTP/1.1 200 OK"
jarvis-semaphore         | INFO:     172.18.0.71:57396 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:     172.18.0.46:49972 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-consciousness-bridge:8020/health "HTTP/1.1 200 OK"
jarvis-semaphore         | INFO:     172.18.0.71:57652 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:58238 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:59140 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:40508 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:43132 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:52372 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-neurobiological-master:8018/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-i-containers:8015/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-blood-brain-barrier:8016/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-qualia-engine:8017/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:     172.18.0.46:50164 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-consciousness-bridge:8020/health "HTTP/1.1 200 OK"
jarvis-semaphore         | INFO:     172.18.0.71:51638 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:42960 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:34136 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:57144 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:47334 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:52876 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:43952 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:54800 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:49486 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:37250 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:51182 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:60620 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:46918 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:43018 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:42890 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:42274 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:45922 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:60962 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:40768 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:37952 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.71:37300 - "GET /health HTTP/1.1" 200 OK
jarvis-semaphore         | INFO:     172.18.0.87:51618 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-neurobiological-master:8018/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-i-containers:8015/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-blood-brain-barrier:8016/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-qualia-engine:8017/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:     172.18.0.46:55052 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-consciousness-bridge:8020/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-neurobiological-master:8018/health "HTTP/1.1 200 OK"
jarvis-local-resources   | INFO:     Started server process [1]
jarvis-local-resources   | INFO:     Waiting for application startup.
jarvis-local-resources   | INFO:     Application startup complete.
jarvis-semaphore         | INFO:     172.18.0.71:48144 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
jarvis-semaphore         | INFO:     172.18.0.87:48728 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.65:56014 - "POST /generate HTTP/1.1" 200 OK
jarvis-local-resources   | INFO:     Uvicorn running on http://0.0.0.0:8055 (Press CTRL+C to quit)
jarvis-local-resources   | INFO:     Shutting down
jarvis-local-resources   | INFO:     Waiting for application shutdown.
llm10-proxy              | INFO:     172.18.0.100:37646 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:56096 - "POST /generate HTTP/1.1" 200 OK
jarvis-local-resources   | INFO:     Application shutdown complete.
jarvis-local-resources   | INFO:     Finished server process [1]
jarvis-local-resources   | INFO:     Started server process [1]
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-i-containers:8015/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-blood-brain-barrier:8016/health "HTTP/1.1 200 OK"
jarvis-local-resources   | INFO:     Waiting for application startup.
jarvis-local-resources   | INFO:     Application startup complete.
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-qualia-engine:8017/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:     172.18.0.46:60506 - "GET /health HTTP/1.1" 200 OK
jarvis-local-resources   | INFO:     Uvicorn running on http://0.0.0.0:8055 (Press CTRL+C to quit)
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-consciousness-bridge:8020/health "HTTP/1.1 200 OK"
jarvis-local-resources   | INFO:     172.18.0.100:49116 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-neurobiological-master:8018/health "HTTP/1.1 200 OK"
jarvis-local-resources   | INFO:     172.18.0.100:35302 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-i-containers:8015/health "HTTP/1.1 200 OK"
jarvis-local-resources   | INFO:     172.18.0.100:44184 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-blood-brain-barrier:8016/health "HTTP/1.1 200 OK"
jarvis-local-resources   | INFO:     172.18.0.100:56978 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-qualia-engine:8017/health "HTTP/1.1 200 OK"
jarvis-local-resources   | INFO:     172.18.0.100:38892 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-unified-gateway   | INFO:     172.18.0.46:37908 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-consciousness-bridge:8020/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-neurobiological-master:8018/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-i-containers:8015/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-blood-brain-barrier:8016/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-qualia-engine:8017/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:     172.18.0.46:36228 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-consciousness-bridge:8020/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-neurobiological-master:8018/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-i-containers:8015/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-blood-brain-barrier:8016/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-qualia-engine:8017/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:     172.18.0.46:53868 - "GET /health HTTP/1.1" 200 OK
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-consciousness-bridge:8020/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-neurobiological-master:8018/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-i-containers:8015/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-blood-brain-barrier:8016/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:httpx:HTTP Request: GET http://jarvis-qualia-engine:8017/health "HTTP/1.1 200 OK"
jarvis-unified-gateway   | INFO:     172.18.0.46:60146 - "GET /health HTTP/1.1" 200 OK
jarvis-local-resources   | INFO:     172.18.0.100:34948 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-local-resources   | INFO:     172.18.0.100:42266 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
llm10-proxy              | INFO:     172.18.0.100:33432 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:47636 - "POST /generate HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.100:58390 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:47304 - "POST /generate HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.100:54468 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:33356 - "POST /generate HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.100:58868 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:44686 - "POST /generate HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.100:37448 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:35418 - "POST /generate HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.100:48690 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:52596 - "POST /generate HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.100:52316 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:59712 - "POST /generate HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.100:39814 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:38234 - "POST /generate HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.100:55816 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:39662 - "POST /generate HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.100:45808 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:51936 - "POST /generate HTTP/1.1" 200 OK
llm10-proxy              | INFO:     172.18.0.100:36794 - "GET /health HTTP/1.1" 200 OK
llm10-proxy              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm10-proxy              | INFO:phi3-proxy:phi3_ollama_status
llm10-proxy              | INFO:     172.18.0.65:44900 - "POST /generate HTTP/1.1" 200 OK
llm3-proxy               | INFO:     Started server process [1]
llm3-proxy               | INFO:     Waiting for application startup.
llm3-proxy               | INFO:     Application startup complete.
llm3-proxy               | INFO:     Uvicorn running on http://0.0.0.0:8203 (Press CTRL+C to quit)
llm3-proxy               | INFO:     172.18.0.100:42626 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:41420 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:53990 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:33094 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:40080 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:52546 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:36630 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:36014 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:46034 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:35490 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:34762 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:37106 - "GET /health HTTP/1.1" 200 OK
llm3-proxy               | INFO:     172.18.0.100:56594 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | [CRYPTO-POLICY] Unreachable ([Errno 111] Connection refused) — HARDCODED_FALLBACK active.
llm4-proxy               | INFO:     Started server process [1]
llm4-proxy               | INFO:     Waiting for application startup.
llm4-proxy               | INFO:     Application startup complete.
llm4-proxy               | INFO:     Uvicorn running on http://0.0.0.0:8204 (Press CTRL+C to quit)
llm4-proxy               | INFO:     172.18.0.100:54346 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:49604 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:40412 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:56958 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:57186 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:59388 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:36946 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:59688 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:47216 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:53820 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:33470 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:55592 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:41244 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:43956 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:58512 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:33714 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:33404 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:53716 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:48744 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:60922 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:36402 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:53192 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy               | INFO:     172.18.0.100:58496 - "GET /health HTTP/1.1" 200 OK
llm4-proxy               | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm4-proxy               | INFO:     172.18.0.65:52042 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy                         | INFO:     172.18.0.100:46212 - "GET /health HTTP/1.1" 200 OK
llm4-proxy                         | INFO:     172.18.0.65:58588 - "POST /generate HTTP/1.1" 200 OK
llm4-proxy                         | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-mountainshares-coordinator  | INFO:     Started server process [1]
jarvis-mountainshares-coordinator  | INFO:     Waiting for application startup.
jarvis-mountainshares-coordinator  | INFO:     Application startup complete.
jarvis-mountainshares-coordinator  | INFO:     Uvicorn running on http://0.0.0.0:8080 (Press CTRL+C to quit)
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:53094 - "GET /health HTTP/1.1" 200 OK
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:53518 - "POST /chat HTTP/1.1" 404 Not Found
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:53532 - "GET /health HTTP/1.1" 200 OK
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:35612 - "POST /chat HTTP/1.1" 404 Not Found
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:35614 - "GET /health HTTP/1.1" 200 OK
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:54734 - "GET /openapi.json HTTP/1.1" 200 OK
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:47204 - "GET /health HTTP/1.1" 200 OK
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:34060 - "GET /openapi.json HTTP/1.1" 200 OK
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:39930 - "GET /health HTTP/1.1" 200 OK
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:39946 - "GET /phase/status HTTP/1.1" 200 OK
llm14-proxy                        | INFO:     Started server process [1]
llm14-proxy                        | INFO:     Waiting for application startup.
llm14-proxy                        | INFO:     Application startup complete.
llm15-proxy                        | INFO:     Started server process [1]
llm15-proxy                        | INFO:     Waiting for application startup.
llm15-proxy                        | INFO:     Application startup complete.
llm15-proxy                        | INFO:     Uvicorn running on http://0.0.0.0:8215 (Press CTRL+C to quit)
llm16-proxy                        | [CRYPTO-POLICY] Unreachable ([Errno 111] Connection refused) — HARDCODED_FALLBACK active.
llm16-proxy                        | INFO:     Started server process [1]
llm16-proxy                        | INFO:     Waiting for application startup.
llm16-proxy                        | INFO:     Application startup complete.
llm16-proxy                        | INFO:     Uvicorn running on http://0.0.0.0:8216 (Press CTRL+C to quit)
jarvis-consciousness-bridge        | INFO:     172.18.0.71:44594 - "GET /health HTTP/1.1" 200 OK
nbb_consciousness_containers-1     | INFO:     Started server process [1]
nbb_consciousness_containers-1     | INFO:     Waiting for application startup.
nbb_consciousness_containers-1     | INFO:     Application startup complete.
llm16-proxy                        | INFO:     172.18.0.100:49108 - "GET /health HTTP/1.1" 200 OK
jarvis-local-resources-db          | 2026-05-01 04:56:46.344 UTC [27] LOG:  checkpoint starting: time
llm16-proxy                        | INFO:     172.18.0.100:41628 - "GET /health HTTP/1.1" 200 OK
jarvis-local-resources-db          | 2026-05-01 04:56:46.708 UTC [27] LOG:  checkpoint complete: wrote 4 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.311 s, sync=0.015 s, total=0.365 s; sync files=4, longest=0.012 s, average=0.004 s; distance=8 kB, estimate=811 kB
jarvis-local-resources-db          | 2026-05-01 04:59:33.365 UTC [36393] FATAL:  password authentication failed for user "postgres"
jarvis-local-resources-db          | 2026-05-01 04:59:33.365 UTC [36393] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
nbb_spiritual_root-1               | INFO:     Started server process [1]
nbb_spiritual_root-1               | INFO:     Waiting for application startup.
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:55134 - "POST /auth/token HTTP/1.1" 404 Not Found
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:55148 - "POST /auth/token HTTP/1.1" 404 Not Found
llm19-proxy              | INFO:     Started server process [1]
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:37928 - "POST /auth/token HTTP/1.1" 404 Not Found
llm19-proxy                        | INFO:     Waiting for application startup.
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:46428 - "POST /auth/token HTTP/1.1" 404 Not Found
mysql                              | 2026-04-30 16:10:38+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.2.0-1.el8 started.
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:40260 - "POST /auth/token HTTP/1.1" 404 Not Found
jarvis-lm-synthesizer              | INFO:     172.18.0.39:41164 - "POST /chat HTTP/1.1" 200 OK
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:42192 - "POST /chat HTTP/1.1" 404 Not Found
jarvis-mountainshares-coordinator  | INFO:     172.18.0.1:42202 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                         | INFO:     Started server process [1]
llm21-proxy                        | INFO:     Started server process [1]
jarvis-gbim-query-router           | INFO:     Started server process [1]
llm7-proxy                         | INFO:     Waiting for application startup.
llm21-proxy                        | INFO:     Waiting for application startup.
llm21-proxy                        | INFO:     Application startup complete.
llm19-proxy                        | INFO:     Application startup complete.
nbb_spiritual_root-1               | INFO:     Application startup complete.
jarvis-gbim-query-router           | INFO:     Waiting for application startup.
jarvis-gbim-query-router           | INFO:     Application startup complete.
jarvis-local-resources-db          | 2026-05-01 05:06:06.671 UTC [36766] ERROR:  column "website" does not exist at character 49
jarvis-local-resources-db          | 2026-05-01 05:06:06.671 UTC [36766] STATEMENT:  
jarvis-local-resources-db          | 	        SELECT name, category, phone, address, website, description
jarvis-local-resources-db          | 	        FROM public.local_resources_index
jarvis-local-resources-db          | 	        WHERE county ILIKE 'Fayette'
jarvis-local-resources-db          | 	          AND ('25880' = '' OR zip = '25880')
jarvis-local-resources-db          | 	    
llm7-proxy                         | INFO:     Application startup complete.
llm7-proxy                         | INFO:     Uvicorn running on http://0.0.0.0:8207 (Press CTRL+C to quit)
llm21-proxy                        | INFO:     Uvicorn running on http://0.0.0.0:8221 (Press CTRL+C to quit)
jarvis-gbim-verifier               | 2026-05-01 08:34:58,802 INFO GBIM verifier starting — batch=200 sleep=30s
jarvis-gbim-verifier               | 2026-05-01 08:34:58,802 INFO   DB:     postgresql://msjarvis@msjarvis-db:5432/msjarvis
llm19-proxy                        | INFO:     Uvicorn running on http://0.0.0.0:8219 (Press CTRL+C to quit)
jarvis-gbim-verifier               | 2026-05-01 08:34:58,802 INFO   Router: http://jarvis-gbim-query-router:7205
llm19-proxy                        | INFO:     172.18.0.100:51598 - "GET /health HTTP/1.1" 200 OK
jarvis-gbim-verifier               | 2026-05-01 08:34:58,828 WARNING DB connect attempt 1/10: password authentication failed for user "msjarvis"
llm19-proxy                        | INFO:     172.18.0.100:38726 - "GET /health HTTP/1.1" 200 OK
mysql                              | 2026-04-30 16:10:39+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
jarvis-gbim-verifier               | 2026-05-01 08:35:03,869 WARNING DB connect attempt 2/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier               | 2026-05-01 08:35:08,902 WARNING DB connect attempt 3/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier               | 2026-05-01 08:35:13,931 WARNING DB connect attempt 4/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier               | 2026-05-01 08:35:18,966 WARNING DB connect attempt 5/10: password authentication failed for user "msjarvis"
llm7-proxy                         | INFO:     172.18.0.100:43826 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                         | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm7-proxy                         | INFO:     172.18.0.65:41476 - "POST /generate HTTP/1.1" 200 OK
llm7-proxy                         | INFO:     172.18.0.100:37382 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                         | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-gbim-query-router           | INFO:     Uvicorn running on http://0.0.0.0:7205 (Press CTRL+C to quit)
jarvis-lm-synthesizer              | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-local-resources-db          | 2026-05-01 05:06:06.671 UTC [36766] ERROR:  current transaction is aborted, commands ignored until end of transaction block
llm19-proxy                        | INFO:     172.18.0.100:48086 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier         | INFO:     172.18.0.96:57820 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier         | INFO:     172.18.0.96:54486 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier         | INFO:     172.18.0.96:54274 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier         | INFO:     172.18.0.96:39512 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier         | INFO:     172.18.0.96:41954 - "GET /health HTTP/1.1" 200 OK
nbb_consciousness_containers-1     | INFO:     Uvicorn running on http://0.0.0.0:7002 (Press CTRL+C to quit)
msjarvis-db                        | 2026-05-01 08:35:49.848 UTC [12664] FATAL:  password authentication failed for user "msjarvis"
nbb_consciousness_containers-1     | INFO:     172.18.0.100:58112 - "GET /health HTTP/1.1" 200 OK
msjarvis-db                        | 2026-05-01 08:35:49.848 UTC [12664] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
llm21-proxy                        | INFO:     172.18.0.100:51004 - "GET /health HTTP/1.1" 200 OK
msjarvis-db                        | 2026-05-01 08:35:54.887 UTC [12665] FATAL:  password authentication failed for user "msjarvis"
llm16-proxy                        | INFO:     172.18.0.100:51224 - "GET /health HTTP/1.1" 200 OK
llm16-proxy                        | INFO:     172.18.0.100:53146 - "GET /health HTTP/1.1" 200 OK
llm16-proxy                        | INFO:     172.18.0.100:57808 - "GET /health HTTP/1.1" 200 OK
llm16-proxy                        | INFO:     172.18.0.100:52126 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer              | INFO:     172.18.0.39:42844 - "POST /chat HTTP/1.1" 200 OK
ipfs                                  | Changing user to ipfs
llm19-proxy                        | INFO:     172.18.0.100:57566 - "GET /health HTTP/1.1" 200 OK
ipfs                                  | ipfs version 0.39.0
llm19-proxy                           | INFO:     172.18.0.100:32840 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier         | INFO:     172.18.0.96:37760 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:40736 - "GET /health HTTP/1.1" 200 OK
llm15-proxy                        | INFO:     172.18.0.100:49724 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:45168 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:48782 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:45834 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:35036 - "GET /health HTTP/1.1" 200 OK
jarvis-gbim-verifier               | 2026-05-01 08:35:24,005 WARNING DB connect attempt 6/10: password authentication failed for user "msjarvis"
msjarvis-db                        | 2026-05-01 08:35:54.887 UTC [12665] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
jarvis-gbim-verifier                  | 2026-05-01 08:35:29,032 WARNING DB connect attempt 7/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:35:34,055 WARNING DB connect attempt 8/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:35:39,089 WARNING DB connect attempt 9/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:35:44,125 WARNING DB connect attempt 10/10: password authentication failed for user "msjarvis"
jarvis-ollama                      | [GIN] 2026/05/01 - 07:51:58 | 200 |   19.433126ms |     172.18.0.64 | POST     "/api/embed"
llm11-proxy                        | INFO:     Started server process [1]
llm11-proxy                           | INFO:     Waiting for application startup.
jarvis-main-brain                     | INFO:     127.0.0.1:42216 - "GET /health HTTP/1.1" 200 OK
jarvis-community-stake-registry    | INFO:     Started server process [1]
jarvis-main-brain                     | INFO:     172.18.0.1:33672 - "GET / HTTP/1.1" 200 OK
jarvis-community-stake-registry       | INFO:     Waiting for application startup.
jarvis-community-stake-registry       | INFO:     Application startup complete.
jarvis-community-stake-registry       | INFO:     Uvicorn running on http://0.0.0.0:8084 (Press CTRL+C to quit)
jarvis-decay-escalation-consumer   | 2026-04-23 01:11:53,607 [ESCALATION_CONSUMER] INFO Escalation consumer started — queue=jarvis:decay:escalations poll=60s redis=jarvis-redis:6379 db=msjarvisgis-recovery:5432/msjarvisgis
nbb_darwin_godel_machines-1           | INFO:     Started server process [1]
jarvis-crypto-policy               | INFO:     127.0.0.1:51820 - "GET /health HTTP/1.1" 200 OK
nbb_darwin_godel_machines-1           | INFO:     Waiting for application startup.
nbb_darwin_godel_machines-1           | INFO:     Application startup complete.
nbb_mother_carrie_protocols-1         | INFO:     Started server process [1]
jarvis-eeg-beta                       | 2026-05-01 08:02:01,449 [EEG-BETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
neo4j                                 | Changed password for user 'neo4j'. IMPORTANT: this change will only take effect if performed before the database is started for the first time.
jarvis-eeg-beta                       | 2026-05-01 08:07:01,459 [EEG-BETA] 📚 BETA pulse #188 — learning: New River Gorge regional infrastructure
neo4j                                 | 2026-04-30 16:10:42.590+0000 INFO  Logging config in use: File '/var/lib/neo4j/conf/user-logs.xml'
jarvis-eeg-beta                       | 2026-05-01 08:07:03,329 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
llm6-proxy                            | INFO:     Started server process [1]
jarvis-judge-truth                    | INFO:     Started server process [1]
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:➡️ Request GET /health
nbb_darwin_godel_machines-1           | INFO:     Uvicorn running on http://0.0.0.0:7003 (Press CTRL+C to quit)
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:Fifth DGM health check; service is healthy.
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:⬅️ Response GET /health status=200
jarvis-local-resources-db          | 2026-05-01 05:06:06.671 UTC [36766] STATEMENT:  
jarvis-autonomous-learner             | 2026-05-01 08:00:20,070 - INFO - 💡 Cycle complete - Next in 5 minutes
jarvis-judge-pipeline                 | INFO:judge_pipeline:Starting judge_pipeline on port 7239
jarvis-judge-pipeline                 | INFO:     Started server process [1]
jarvis-judge-pipeline                 | INFO:     Waiting for application startup.
llm12-proxy                           | [CRYPTO-POLICY] Unreachable ([Errno 111] Connection refused) — HARDCODED_FALLBACK active.
llm12-proxy                           | INFO:     Started server process [1]
mysql                              | 2026-04-30 16:10:39+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.2.0-1.el8 started.
mysql                                 | '/var/lib/mysql/mysql.sock' -> '/var/run/mysqld/mysqld.sock'
mysql                                 | 2026-04-30T16:10:39.248373Z 0 [System] [MY-015015] [Server] MySQL Server - start.
mysql                                 | 2026-04-30T16:10:39.447058Z 0 [Warning] [MY-011068] [Server] The syntax '--skip-host-cache' is deprecated and will be removed in a future release. Please use SET GLOBAL host_cache_size=0 instead.
nbb_consciousness_containers-1     | INFO:     172.18.0.100:46346 - "GET /health HTTP/1.1" 200 OK
llm21-proxy                        | INFO:     172.18.0.100:46102 - "GET /health HTTP/1.1" 200 OK
nbb_consciousness_containers-1        | INFO:     172.18.0.100:56046 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:60762 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.1:52466 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:35604 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:40852 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:59552 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:53242 - "GET /health HTTP/1.1" 200 OK
msjarvis-db                           | 2026-05-01 08:35:59.923 UTC [12666] FATAL:  password authentication failed for user "msjarvis"
llm15-proxy                           | INFO:     172.18.0.100:40336 - "GET /health HTTP/1.1" 200 OK
llm15-proxy                           | INFO:     172.18.0.100:41482 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1     | INFO:     Started server process [1]
nbb_heteroglobulin_transport-1        | INFO:     Waiting for application startup.
nbb_heteroglobulin_transport-1        | INFO:     Application startup complete.
nbb_heteroglobulin_transport-1        | INFO:     Uvicorn running on http://0.0.0.0:7006 (Press CTRL+C to quit)
jarvis-ollama                         | [GIN] 2026/05/01 - 07:52:58 | 200 |    5.543389ms |      172.18.0.1 | GET      "/api/tags"
llm5-proxy                            | [CRYPTO-POLICY] Unreachable ([Errno 111] Connection refused) — HARDCODED_FALLBACK active.
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  WV Broadband News: +0
jarvis-ollama                         | [GIN] 2026/05/01 - 07:55:18 | 200 |   27.006284ms |     172.18.0.60 | POST     "/api/embeddings"
jarvis-rag-server                  | INFO:     172.18.0.77:41868 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                    | INFO:     127.0.0.1:58916 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.76:47100 - "POST /search HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:36664 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     Started server process [1]
jarvis-hilbert-state                  | INFO:     172.18.0.76:52056 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     Waiting for application startup.
jarvis-contract-forge                 | INFO:     Started server process [1]
jarvis-ingest-api                     | jarvis-ingest-api: deprecated stub
jarvis-ingest-api                     | jarvis-ingest-api: deprecated stub
jarvis-crypto-policy                  | INFO:     127.0.0.1:35174 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-beta                       | 2026-05-01 08:07:03,335 [EEG-BETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/msjarvis_docs "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:07:03,360 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/embed "HTTP/1.1 200 OK"
jarvis-69dgm-bridge                   | INFO:     Started server process [1]
jarvis-69dgm-bridge                   | INFO:     Waiting for application startup.
jarvis-gbim-query-router           | INFO:     172.18.0.1:38698 - "GET /health HTTP/1.1" 200 OK
llm17-proxy                           | [CRYPTO-POLICY] Unreachable ([Errno 111] Connection refused) — HARDCODED_FALLBACK active.
llm17-proxy                           | INFO:     Started server process [1]
llm17-proxy                           | INFO:     Waiting for application startup.
llm17-proxy                           | INFO:     Application startup complete.
llm17-proxy                           | INFO:     Uvicorn running on http://0.0.0.0:8217 (Press CTRL+C to quit)
llm17-proxy                           | INFO:     172.18.0.100:53714 - "GET /health HTTP/1.1" 200 OK
llm17-proxy                           | INFO:     172.18.0.100:48508 - "GET /health HTTP/1.1" 200 OK
ipfs                                  | Found IPFS fs-repo at /data/ipfs
ipfs                                  | Initializing daemon...
jarvis-steward                        | INFO:     172.18.0.46:41002 - "GET /health HTTP/1.1" 200 OK
llm19-proxy                           | INFO:     172.18.0.100:60216 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:53358 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:     172.18.0.100:38284 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:➡️ Request POST /analyze
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 consciousness_filter (RAG+WOAH) received len=0
llm22-proxy                           | INFO:     Started server process [1]
llm18-proxy                           | INFO:     Started server process [1]
llm18-proxy                           | INFO:     Waiting for application startup.
nbb_consciousness_containers-1        | INFO:     172.18.0.100:52896 - "GET /health HTTP/1.1" 200 OK
nbb_consciousness_containers-1        | INFO:     172.18.0.100:51808 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:53254 - "GET /health HTTP/1.1" 200 OK
nbb_consciousness_containers-1        | INFO:     172.18.0.100:59622 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                         | INFO:     172.18.0.65:32784 - "POST /generate HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.100:56724 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1               | INFO:     Uvicorn running on http://0.0.0.0:7003 (Press CTRL+C to quit)
nbb_spiritual_root-1                  | INFO:     172.18.0.100:55926 - "GET /health HTTP/1.1" 200 OK
msjarvis-db                           | 2026-05-01 08:35:59.923 UTC [12666] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
jarvis-swarm-intelligence             | 2026-05-01 01:48:20,029 - __main__ - INFO - ✅ Swarm complete: 4/4 agents responded
jarvis-swarm-intelligence             | 2026-05-01 01:48:20,029 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 01:48:20] "POST /swarm/query HTTP/1.1" 200 -
jarvis-gbim-verifier                  | 2026-05-01 08:35:49,126 ERROR Could not connect to DB — exiting
jarvis-gbim-verifier                  | 2026-05-01 08:35:49,825 INFO GBIM verifier starting — batch=200 sleep=30s
jarvis-gbim-verifier                  | 2026-05-01 08:35:49,825 INFO   DB:     postgresql://msjarvis@msjarvis-db:5432/msjarvis
jarvis-gbim-verifier                  | 2026-05-01 08:35:49,825 INFO   Router: http://jarvis-gbim-query-router:7205
jarvis-gbim-verifier                  | 2026-05-01 08:35:49,848 WARNING DB connect attempt 1/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:35:54,887 WARNING DB connect attempt 2/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:35:59,924 WARNING DB connect attempt 3/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:36:04,962 WARNING DB connect attempt 4/10: password authentication failed for user "msjarvis"
jarvis-dao-governance                 | INFO:     Started server process [1]
jarvis-local-resources-db             | 	        SELECT name, category FROM public.local_resources_index
jarvis-local-resources-db             | 	        WHERE county ILIKE 'Fayette'
jarvis-local-resources-db             | 	    
jarvis-local-resources-db             | 2026-05-01 05:06:46.908 UTC [27] LOG:  checkpoint starting: time
jarvis-local-resources-db             | 2026-05-01 05:06:49.270 UTC [27] LOG:  checkpoint complete: wrote 23 buffers (0.1%); 0 WAL file(s) added, 0 removed, 0 recycled; write=2.316 s, sync=0.009 s, total=2.363 s; sync files=6, longest=0.007 s, average=0.002 s; distance=108 kB, estimate=741 kB
jarvis-local-resources-db             | 2026-05-01 05:26:56.546 UTC [37916] ERROR:  relation "gbim_county_2020" does not exist at character 37
jarvis-judge-alignment                | INFO:     Started server process [1]
jarvis-dao-governance                 | INFO:     Waiting for application startup.
jarvis-judge-alignment                | INFO:     Waiting for application startup.
nbb_mother_carrie_protocols-1         | INFO:     Waiting for application startup.
nbb_mother_carrie_protocols-1         | INFO:     Application startup complete.
llm9-proxy                            | INFO:     Application startup complete.
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-spiritual-rag                  | INFO:__main__:✝️ Spiritual RAG Domain (FOUNDATIONAL LAYER) starting on port 8046
jarvis-redis                          | 1:M 01 May 2026 07:50:20.076 * 100 changes in 300 seconds. Saving...
jarvis-redis                          | 1:M 01 May 2026 07:50:20.077 * Background saving started by pid 149287
jarvis-redis                          | 149287:C 01 May 2026 07:50:20.098 * DB saved on disk
jarvis-eeg-beta                       | 2026-05-01 08:07:03,460 [EEG-BETA] HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/f9152993-c774-47ef-8760-63f7dc50e747/add "HTTP/1.1 201 Created"
jarvis-agents-service                 | INFO:__main__:🤖 Agents Service initialized with 7 agents
jarvis-agents-service                 | INFO:__main__:🚀 Starting Ms. Jarvis Agents Service on port 8005
jarvis-agents-service                 | INFO:__main__:📝 Port registered: 8005
llm20-proxy                           | [CRYPTO-POLICY] Unreachable ([Errno 111] Connection refused) — HARDCODED_FALLBACK active.
jarvis-redis                          | 149287:C 01 May 2026 07:50:20.099 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
jarvis-redis                          | 1:M 01 May 2026 07:50:20.178 * Background saving terminated with success
jarvis-consciousness-bridge        | INFO:     172.18.0.96:35086 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 1:M 01 May 2026 07:55:21.044 * 100 changes in 300 seconds. Saving...
jarvis-consciousness-bridge           | INFO:     172.18.0.87:39912 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:49418 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:42446 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-pipeline                 | INFO:     Application startup complete.
ipfs                                  | Kubo version: 0.39.0-2896aed
jarvis-judge-pipeline                 | INFO:     Uvicorn running on http://0.0.0.0:7239 (Press CTRL+C to quit)
jarvis-pia-sampler                 | INFO:     Started server process [10]
jarvis-pia-sampler                    | INFO:     Waiting for application startup.
jarvis-steward                        | INFO:     172.18.0.46:54834 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.71:45978 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:54660 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 (RAG+WOAH) decision={'accept': False, 'reason': 'Too short'}
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 (RAG+WOAH) returning result={'consciousness_decision': 'NO', 'action': 'discarded', 'reason': 'Too short'}
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:⬅️ Response POST /analyze status=200
llm14-proxy                        | INFO:     Uvicorn running on http://0.0.0.0:8214 (Press CTRL+C to quit)
llm14-proxy                           | INFO:     172.18.0.100:56598 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:45668 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:46402 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:41988 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:59502 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:43718 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:60834 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:47760 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:37604 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:37506 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:37614 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:44930 - "POST /constitutional/check HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:46850 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:41348 - "POST /constitutional/check HTTP/1.1" 200 OK
llm15-proxy                           | INFO:     172.18.0.100:47790 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:48618 - "POST /constitutional/check HTTP/1.1" 200 OK
llm15-proxy                           | INFO:     172.18.0.100:44844 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 01:48:55,832 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 01:48:55] "GET /health HTTP/1.1" 200 -
jarvis-swarm-intelligence             | 2026-05-01 01:48:57,611 - __main__ - INFO - 🐝 Swarm Query #8: It's Mamma Carrie...
jarvis-swarm-intelligence             | 2026-05-01 01:48:57,613 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Analytical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-gbim-verifier                  | 2026-05-01 08:36:09,989 WARNING DB connect attempt 5/10: password authentication failed for user "msjarvis"
jarvis-swarm-intelligence             | 2026-05-01 01:48:57,613 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Creative): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-qualia-engine                  | INFO:     172.18.0.96:33530 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 01:48:57,614 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Technical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-qualia-engine                  | INFO:     172.18.0.96:53396 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          |                                             ^
jarvis-stewardship-scheduler          | 
jarvis-main-brain                     | INFO:     127.0.0.1:49130 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     Started server process [1]
nbb_blood_brain_barrier-1             | INFO:     Waiting for application startup.
jarvis-main-brain                     | INFO:     127.0.0.1:55412 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:52900 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:51190 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:58220 - "GET /health HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-hilbert-state                  | INFO:     172.18.0.76:60042 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:57112 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  WV Broadband Main: +0
jarvis-judge-alignment                | INFO:     Application startup complete.
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  Appalachian Citizens Law Center: +4
jarvis-judge-alignment                | INFO:     Uvicorn running on http://0.0.0.0:7232 (Press CTRL+C to quit)
jarvis-judge-ethics                   | INFO:     Started server process [1]
nbb_mother_carrie_protocols-1         | INFO:     Uvicorn running on http://0.0.0.0:7007 (Press CTRL+C to quit)
jarvis-contract-forge                 | INFO:     Waiting for application startup.
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:51308 - "GET /health HTTP/1.1" 200 OK
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-hilbert-state                  | INFO:     172.18.0.76:57124 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-crypto-policy                  | INFO:     127.0.0.1:58494 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:58176 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:47220 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-delta                      | 2026-05-01 08:33:14,506 [EEG-DELTA] HTTP Request: GET http://jarvis-unified-gateway:8001/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:33:14,519 [EEG-DELTA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/heartbeat "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:33:14,536 [EEG-DELTA] HTTP Request: GET http://jarvis-steward:8060/health "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:21:12,921 [EEG-THETA] 🧠 THETA pulse #955 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:21:12,934 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:22:12,942 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:22:12,945 [EEG-THETA] 🧠 THETA pulse #956 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:22:12,951 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
llm20-proxy                           | INFO:     Started server process [1]
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:35460 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     Waiting for application startup.
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:57150 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:05:20,071 - INFO - 🧠 LEARNING CYCLE #140 - Uptime: 0d 11h 38m
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:45126 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:05:20,071 - INFO -    Topic: autonomous learning systems architecture
jarvis-lm-synthesizer                 | INFO:lm_synthesizer:LM Synthesizer generated 174 chars
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     127.0.0.1:44366 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     127.0.0.1:54192 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.101:59258 - "GET /health HTTP/1.1" 200 OK
jarvis-pia-sampler                    | Creating dual-layer security architecture...
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:42262 - "GET /health HTTP/1.1" 200 OK
jarvis-pia-sampler                    | 
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:44234 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:38284 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:50572 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:48576 - "GET /health HTTP/1.1" 200 OK
llm22-proxy                           | INFO:     Waiting for application startup.
llm22-proxy                           | INFO:     Application startup complete.
llm22-proxy                           | INFO:     Uvicorn running on http://0.0.0.0:8222 (Press CTRL+C to quit)
llm22-proxy                           | INFO:     172.18.0.100:41120 - "GET /health HTTP/1.1" 200 OK
llm22-proxy                           | INFO:     172.18.0.100:59296 - "GET /health HTTP/1.1" 200 OK
llm22-proxy                           | INFO:     172.18.0.100:39998 - "GET /health HTTP/1.1" 200 OK
llm22-proxy                           | INFO:     172.18.0.100:47798 - "GET /health HTTP/1.1" 200 OK
nbb_pituitary_gland-1              | INFO:     Started server process [1]
nbb_pituitary_gland-1                 | INFO:     Waiting for application startup.
nbb_pituitary_gland-1                 | INFO:     Application startup complete.
nbb_pituitary_gland-1                 | INFO:     Uvicorn running on http://0.0.0.0:80 (Press CTRL+C to quit)
jarvis-constitutional-guardian        | INFO:     172.18.0.96:42244 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:38014 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:37426 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:60036 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:56328 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:50478 - "POST /constitutional/check HTTP/1.1" 200 OK
nbb_i_containers-1                    | INFO:     Started server process [1]
nbb_i_containers-1                    | INFO:     Waiting for application startup.
nbb_i_containers-1                    | INFO:     Application startup complete.
nbb_i_containers-1                    | INFO:     Uvicorn running on http://0.0.0.0:7005 (Press CTRL+C to quit)
nbb_i_containers-1                    | INFO:     Shutting down
nbb_i_containers-1                    | INFO:     Waiting for application shutdown.
nbb_i_containers-1                    | INFO:     Application shutdown complete.
nbb_i_containers-1                    | INFO:     Finished server process [1]
nbb_i_containers-1                    | INFO:     Started server process [1]
nbb_i_containers-1                    | INFO:     Waiting for application startup.
nbb_i_containers-1                    | INFO:     Application startup complete.
jarvis-local-resources-db             | 2026-05-01 05:26:56.546 UTC [37916] STATEMENT:  SELECT id::text, last_verified FROM gbim_county_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
jarvis-judge-consistency           | INFO:judge_consistency_engine:Starting judge_consistency_engine on port 7231
jarvis-judge-consistency              | INFO:     Started server process [1]
jarvis-judge-consistency              | INFO:     Waiting for application startup.
jarvis-judge-consistency              | INFO:     Application startup complete.
jarvis-judge-consistency              | INFO:     Uvicorn running on http://0.0.0.0:7231 (Press CTRL+C to quit)
jarvis-dao-governance                 | INFO:     Application startup complete.
jarvis-dao-governance                 | INFO:     Uvicorn running on http://0.0.0.0:8082 (Press CTRL+C to quit)
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  Coalfield Development: +0
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  The Appalachian Magazine: +0
neo4j                                 | 2026-04-30 16:10:42.600+0000 INFO  Starting...
neo4j                                 | 2026-04-30 16:10:43.128+0000 INFO  This instance is ServerId{b1f39277} (b1f39277-85d5-4ee4-a2c5-033d6c0f480e)
neo4j                                 | 2026-04-30 16:10:43.532+0000 INFO  ======== Neo4j 5.13.0 ========
neo4j                                 | 2026-04-30 16:10:44.393+0000 INFO  Bolt enabled on 0.0.0.0:7687.
neo4j                                 | 2026-04-30 16:10:44.780+0000 INFO  HTTP enabled on 0.0.0.0:7474.
neo4j                                 | 2026-04-30 16:10:44.781+0000 INFO  Remote interface available at http://localhost:7474/
jarvis-contract-forge                 | INFO:     Application startup complete.
jarvis-contract-forge                 | INFO:     Uvicorn running on http://0.0.0.0:8091 (Press CTRL+C to quit)
jarvis-contract-forge                 | INFO:     172.18.0.101:33360 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:45594 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:44392 - "GET /health HTTP/1.1" 200 OK
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-agents-service                 | INFO:     Started server process [1]
jarvis-agents-service                 | INFO:     Waiting for application startup.
jarvis-agents-service                 | INFO:     Application startup complete.
jarvis-eeg-delta                      | 2026-05-01 08:33:14,536 [EEG-DELTA] 💓 DELTA pulse #1929 — {'gateway': 'UP', 'chroma': 'UP', 'steward': 'UP'}
jarvis-redis                          | 1:M 01 May 2026 07:55:21.044 * Background saving started by pid 149348
jarvis-redis                          | 149348:C 01 May 2026 07:55:21.062 * DB saved on disk
jarvis-redis                          | 149348:C 01 May 2026 07:55:21.062 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
jarvis-redis                          | 1:M 01 May 2026 07:55:21.145 * Background saving terminated with success
jarvis-chroma                         |                 (((((((((    (((((####
ipfs                                  | Repo version: 18
jarvis-chroma                         |              ((((((((((((((((((((((#########
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:47726 - "GET /health HTTP/1.1" 200 OK
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:53526 - "GET /health HTTP/1.1" 200 OK
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:53730 - "GET /health HTTP/1.1" 200 OK
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:50400 - "GET /health HTTP/1.1" 200 OK
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:60834 - "GET /health HTTP/1.1" 200 OK
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:39250 - "GET /health HTTP/1.1" 200 OK
jarvis-web-research                   | INFO:     Started server process [1]
jarvis-web-research                   | INFO:     Waiting for application startup.
jarvis-web-research                   | INFO:     Application startup complete.
jarvis-web-research                   | INFO:     Uvicorn running on http://0.0.0.0:8090 (Press CTRL+C to quit)
jarvis-neurobiological-master         | INFO:     172.18.0.87:49746 - "GET /health HTTP/1.1" 200 OK
llm21-proxy                           | INFO:     172.18.0.100:55378 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.96:55766 - "GET /health HTTP/1.1" 200 OK
jarvis-pia-sampler                    | ✅ ueid_immutable_security (write-once core, supersession allowed)
jarvis-neurobiological-master         | INFO:     172.18.0.46:34526 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.71:39678 - "GET /health HTTP/1.1" 200 OK
jarvis-pia-sampler                    |    └─ Triggers: DELETE blocked; core fields locked; supersession columns updatable
jarvis-pia-sampler                    | ✅ ueid_immutable_access_log (append-only)
jarvis-pia-sampler                    | ✅ ueid_supersession_audit (append-only — every identity rotation logged)
jarvis-pia-sampler                    | ✅ ueid_searchable_gis (public, indexed)
llm18-proxy                           | INFO:     Application startup complete.
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:47292 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:55362 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:50024 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:56080 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:56082 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:35540 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:40604 - "GET /health HTTP/1.1" 200 OK
llm14-proxy                           | INFO:     172.18.0.100:41200 - "GET /health HTTP/1.1" 200 OK
jarvis-pia-sampler                    | ✅ ueid_chromadb_gis_vectors (vectorized GIS data)
llm14-proxy                           | INFO:     172.18.0.100:44830 - "GET /health HTTP/1.1" 200 OK
llm15-proxy                           | INFO:     172.18.0.100:44258 - "GET /health HTTP/1.1" 200 OK
llm15-proxy                           | INFO:     172.18.0.100:34924 - "GET /health HTTP/1.1" 200 OK
llm15-proxy                           | INFO:     172.18.0.100:58014 - "GET /health HTTP/1.1" 200 OK
llm15-proxy                           | INFO:     172.18.0.100:51534 - "GET /health HTTP/1.1" 200 OK
llm15-proxy                           | INFO:     172.18.0.100:44918 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness       | INFO:     Started server process [1]
jarvis-fractal-consciousness          | INFO:     Waiting for application startup.
jarvis-fractal-consciousness          | INFO:     Application startup complete.
jarvis-fractal-consciousness          | INFO:     Uvicorn running on http://0.0.0.0:8027 (Press CTRL+C to quit)
jarvis-fractal-consciousness          | INFO:     172.18.0.100:39078 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:37998 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:44084 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:57806 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:59198 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:36034 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:57930 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:43622 - "GET /health HTTP/1.1" 200 OK
jarvis-local-resources-db             | 2026-05-01 05:26:56.553 UTC [37917] ERROR:  relation "gbim_tract_2020" does not exist at character 37
jarvis-local-resources-db             | 2026-05-01 05:26:56.553 UTC [37917] STATEMENT:  SELECT id::text, last_verified FROM gbim_tract_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
jarvis-local-resources-db             | 2026-05-01 05:26:56.560 UTC [37918] ERROR:  relation "gbim_block_group_2020" does not exist at character 37
jarvis-local-resources-db             | 2026-05-01 05:26:56.560 UTC [37918] STATEMENT:  SELECT id::text, last_verified FROM gbim_block_group_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
jarvis-local-resources-db             | 2026-05-01 06:01:47.370 UTC [27] LOG:  checkpoint starting: time
jarvis-local-resources-db             | 2026-05-01 06:01:47.406 UTC [27] LOG:  checkpoint complete: wrote 0 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.001 s, sync=0.007 s, total=0.037 s; sync files=17, longest=0.001 s, average=0.001 s; distance=142 kB, estimate=681 kB
jarvis-local-resources-db             | 2026-05-01 06:06:47.506 UTC [27] LOG:  checkpoint starting: time
jarvis-local-resources-db             | 2026-05-01 06:06:57.919 UTC [27] LOG:  checkpoint complete: wrote 104 buffers (0.6%); 0 WAL file(s) added, 0 removed, 0 recycled; write=10.348 s, sync=0.029 s, total=10.414 s; sync files=26, longest=0.012 s, average=0.002 s; distance=954 kB, estimate=954 kB
jarvis-local-resources-db             | 2026-05-01 06:26:58.380 UTC [41256] ERROR:  relation "gbim_county_2020" does not exist at character 37
jarvis-judge-alignment                | INFO:     172.18.0.100:57848 - "GET /health HTTP/1.1" 200 OK
jarvis-ingest-api                     | jarvis-ingest-api: deprecated stub
jarvis-judge-alignment                | INFO:     172.18.0.100:49758 - "GET /health HTTP/1.1" 200 OK
jarvis-ingest-api                     | jarvis-ingest-api: deprecated stub
jarvis-judge-alignment                | INFO:     172.18.0.100:43872 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:49690 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:33452 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:60504 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-truth                    | INFO:     Waiting for application startup.
jarvis-judge-truth                    | INFO:     Application startup complete.
jarvis-judge-truth                    | INFO:     Uvicorn running on http://0.0.0.0:7230 (Press CTRL+C to quit)
jarvis-judge-truth                    | INFO:     172.18.0.100:40700 - "GET /health HTTP/1.1" 200 OK
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-temporal-consciousness         | Temporal consciousness placeholder running
jarvis-eeg-delta                      | 2026-05-01 08:33:14,551 [EEG-DELTA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-judge-truth                    | INFO:     172.18.0.100:39548 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-delta                      | 2026-05-01 08:33:44,596 [EEG-DELTA] HTTP Request: GET http://jarvis-unified-gateway:8001/health "HTTP/1.1 200 OK"
llm17-proxy                           | INFO:     172.18.0.100:60560 - "GET /health HTTP/1.1" 200 OK
llm17-proxy                           | INFO:     172.18.0.100:38220 - "GET /health HTTP/1.1" 200 OK
llm17-proxy                           | INFO:     172.18.0.100:60306 - "GET /health HTTP/1.1" 200 OK
llm17-proxy                           | INFO:     172.18.0.100:35700 - "GET /health HTTP/1.1" 200 OK
llm17-proxy                           | INFO:     172.18.0.100:56408 - "GET /health HTTP/1.1" 200 OK
llm17-proxy                           | INFO:     172.18.0.100:55816 - "GET /health HTTP/1.1" 200 OK
llm17-proxy                           | INFO:     172.18.0.100:51358 - "GET /health HTTP/1.1" 200 OK
llm17-proxy                           | INFO:     172.18.0.100:58618 - "GET /health HTTP/1.1" 200 OK
llm17-proxy                           | INFO:     172.18.0.100:50144 - "GET /health HTTP/1.1" 200 OK
jarvis-chroma                         |            ((((((((((((((((((((((((###########
llm17-proxy                           | INFO:     172.18.0.100:60592 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:05:20,071 - INFO -    Stats: Stored=0, Deduped=0
jarvis-steward                        | INFO:     172.18.0.46:48630 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:05:20,165 - INFO - HTTP Request: POST http://jarvis-rag-server:8003/query "HTTP/1.1 200 OK"
jarvis-autonomous-learner             | 2026-05-01 08:05:20,882 - INFO - HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-steward                        | INFO:     172.18.0.46:52704 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:53550 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:54666 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:44978 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:44700 - "GET /health HTTP/1.1" 200 OK
llm18-proxy                           | INFO:     Uvicorn running on http://0.0.0.0:8218 (Press CTRL+C to quit)
jarvis-fifth-dgm                      | INFO:     172.18.0.100:38296 - "POST /analyze HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:45392 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:➡️ Request GET /health
jarvis-brain-orchestrator             | INFO:     127.0.0.1:34892 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:Fifth DGM health check; service is healthy.
jarvis-brain-orchestrator             | INFO:     127.0.0.1:47012 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:⬅️ Response GET /health status=200
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:53560 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:     172.18.0.100:49492 - "GET /health HTTP/1.1" 200 OK
msjarvis-db                           | 2026-05-01 08:36:04.962 UTC [12668] FATAL:  password authentication failed for user "msjarvis"
jarvis-memory                         | INFO:     Started server process [1]
msjarvis-db                           | 2026-05-01 08:36:04.962 UTC [12668] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:36:09.988 UTC [12669] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:36:09.988 UTC [12669] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:36:15.022 UTC [12670] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:36:15.022 UTC [12670] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
jarvis-constitutional-guardian        | INFO:     172.18.0.96:38040 - "POST /constitutional/check HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     Application startup complete.
llm11-proxy                           | INFO:     Uvicorn running on http://0.0.0.0:8211 (Press CTRL+C to quit)
llm11-proxy                           | INFO:     172.18.0.100:34048 - "GET /health HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     172.18.0.100:46754 - "GET /health HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     172.18.0.100:59238 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     Started server process [1]
jarvis-i-containers                | INFO:     172.18.0.96:49434 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     Waiting for application startup.
llm5-proxy                            | INFO:     Application startup complete.
llm5-proxy                            | INFO:     Uvicorn running on http://0.0.0.0:8205 (Press CTRL+C to quit)
llm5-proxy                            | INFO:     172.18.0.100:57456 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     172.18.0.100:54176 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     172.18.0.100:35506 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:58638 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:37540 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     172.18.0.1:55818 - "GET /apply HTTP/1.1" 404 Not Found
jarvis-auth-api                       | INFO:     172.18.0.1:55818 - "GET /admin HTTP/1.1" 404 Not Found
jarvis-auth-api                       | INFO:     172.18.0.1:55818 - "GET /admin HTTP/1.1" 404 Not Found
jarvis-auth-api                       | INFO:     172.18.0.1:55818 - "GET /api/verify/EtQObe3JXGMlUKSHRlfkTYjcYfa0ZnFKd9rG8dva7mA HTTP/1.1" 404 Not Found
jarvis-auth-api                       | INFO:     172.18.0.1:55818 - "GET /auth/register HTTP/1.1" 405 Method Not Allowed
neo4j                                 | 2026-04-30 16:10:44.782+0000 INFO  id: 5D9C03F2473BCCB1BCCA3D3D5FA018BE27B6087360E4D81CD6F4F990EABDCA4A
jarvis-local-resources-db             | 2026-05-01 06:26:58.380 UTC [41256] STATEMENT:  SELECT id::text, last_verified FROM gbim_county_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
neo4j                                 | 2026-04-30 16:10:44.782+0000 INFO  name: system
jarvis-local-resources-db             | 2026-05-01 06:26:58.393 UTC [41257] ERROR:  relation "gbim_tract_2020" does not exist at character 37
jarvis-judge-alignment                | INFO:     172.18.0.100:50582 - "GET /health HTTP/1.1" 200 OK
jarvis-local-resources-db             | 2026-05-01 06:26:58.393 UTC [41257] STATEMENT:  SELECT id::text, last_verified FROM gbim_tract_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
jarvis-local-resources-db             | 2026-05-01 06:26:58.405 UTC [41258] ERROR:  relation "gbim_block_group_2020" does not exist at character 37
jarvis-local-resources-db             | 2026-05-01 06:26:58.405 UTC [41258] STATEMENT:  SELECT id::text, last_verified FROM gbim_block_group_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
jarvis-local-resources-db             | 2026-05-01 06:31:48.414 UTC [27] LOG:  checkpoint starting: time
nbb_prefrontal_cortex-1               | INFO:     Started server process [1]
jarvis-eeg-beta                       | 2026-05-01 08:07:03,460 [EEG-BETA] 📚 BETA stored doc beta_learn_188_1777622823 — chroma: 201
nbb_prefrontal_cortex-1               | INFO:     Waiting for application startup.
jarvis-eeg-beta                       | 2026-05-01 08:07:03,467 [EEG-BETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:12:03,469 [EEG-BETA] 📚 BETA pulse #189 — learning: Fayette County WV community resources
jarvis-eeg-beta                       | 2026-05-01 08:12:04,970 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:12:04,977 [EEG-BETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/msjarvis_docs "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:12:05,010 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/embed "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:23:12,962 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
llm6-proxy                            | INFO:     Waiting for application startup.
jarvis-eeg-theta                      | 2026-05-01 08:23:12,966 [EEG-THETA] 🧠 THETA pulse #957 — 50 collections in memory
llm6-proxy                            | INFO:     Application startup complete.
llm6-proxy                            | INFO:     Uvicorn running on http://0.0.0.0:8206 (Press CTRL+C to quit)
llm6-proxy                            | INFO:     172.18.0.100:45248 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:58990 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:59440 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:46884 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:47834 - "GET /health HTTP/1.1" 200 OK
llm16-proxy                        | INFO:     172.18.0.100:58566 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-theta                      | 2026-05-01 08:23:12,972 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:24:12,980 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:24:12,983 [EEG-THETA] 🧠 THETA pulse #958 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:24:12,988 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
llm12-proxy                           | INFO:     Waiting for application startup.
llm12-proxy                           | INFO:     Application startup complete.
jarvis-neurobiological-master         | INFO:     172.18.0.87:38208 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.18:37060 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.96:41992 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.46:44500 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.71:35646 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.87:40660 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:44970 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.96:55682 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:34352 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:47926 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:48562 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:45084 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:36114 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:38576 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:52134 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:55656 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:51644 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:➡️ Request POST /analyze
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:51660 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:51128 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:48790 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:50144 - "GET /health HTTP/1.1" 200 OK
jarvis-gbim-verifier                  | 2026-05-01 08:36:15,023 WARNING DB connect attempt 6/10: password authentication failed for user "msjarvis"
llm15-proxy                           | INFO:     172.18.0.100:35566 - "GET /health HTTP/1.1" 200 OK
jarvis-gbim-verifier                  | 2026-05-01 08:36:20,048 WARNING DB connect attempt 7/10: password authentication failed for user "msjarvis"
jarvis-20llm-production               | INFO:__main__:✅ StableLM: 682 chars via http://llm4-proxy:8204/generate
jarvis-gbim-verifier                  | 2026-05-01 08:36:25,090 WARNING DB connect attempt 8/10: password authentication failed for user "msjarvis"
jarvis-20llm-production               | INFO:__main__:✅ Complete: 8/8 responded within budget (elapsed=18.8s)
jarvis-gbim-verifier                  | 2026-05-01 08:36:30,130 WARNING DB connect attempt 9/10: password authentication failed for user "msjarvis"
jarvis-swarm-intelligence             | 2026-05-01 01:48:57,614 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Empathetic): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 01:48:57,614 - __main__ - INFO - ✅ Swarm complete: 4/4 agents responded
jarvis-swarm-intelligence             | 2026-05-01 01:48:57,614 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 01:48:57] "POST /swarm/query HTTP/1.1" 200 -
jarvis-swarm-intelligence             | 2026-05-01 01:57:18,290 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 01:57:18] "GET /health HTTP/1.1" 200 -
jarvis-swarm-intelligence             | 2026-05-01 01:57:19,883 - __main__ - INFO - 🐝 Swarm Query #9: Let's see if we can have a real discussion...
jarvis-swarm-intelligence             | 2026-05-01 01:57:19,886 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Analytical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 01:57:19,887 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Creative): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 01:57:19,888 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Technical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 01:57:19,889 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Empathetic): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-i-containers                   | INFO:     172.18.0.96:40492 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-consistency              | INFO:     172.18.0.100:35326 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-consistency              | INFO:     172.18.0.100:46710 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:53218 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-consistency              | INFO:     172.18.0.100:36982 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  Ohio Valley Environmental Coal.: +0
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  Appalachian Studies Assoc.: +0
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  Marshall University: +7
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  Fairmont State University: +0
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  WV Tourism: +9
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  WV Explorer: +1
neo4j                                 | 2026-04-30 16:10:44.782+0000 INFO  creationDate: 2026-04-24T17:25:26.404Z
neo4j                                 | 2026-04-30 16:10:44.782+0000 INFO  Started.
jarvis-contract-forge                 | INFO:     172.18.0.101:51926 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:49236 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:59316 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:52092 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:37784 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:37822 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:48670 - "GET /health HTTP/1.1" 200 OK
jarvis-gbim-query-router              | INFO:     172.18.0.1:43606 - "GET /health HTTP/1.1" 200 OK
jarvis-ms-token-service               | INFO:     Started server process [1]
jarvis-gbim-query-router              | INFO:     172.18.0.1:52056 - "GET /health HTTP/1.1" 200 OK
jarvis-ms-token-service               | INFO:     Waiting for application startup.
jarvis-ms-token-service               | INFO:     Application startup complete.
llm6-proxy                            | INFO:     172.18.0.100:47648 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:57302 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:56680 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:37066 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:41310 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:41942 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:57258 - "GET /health HTTP/1.1" 200 OK
llm6-proxy                            | INFO:     172.18.0.100:59906 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-delta                      | 2026-05-01 08:33:44,601 [EEG-DELTA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/heartbeat "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:33:44,617 [EEG-DELTA] HTTP Request: GET http://jarvis-steward:8060/health "HTTP/1.1 200 OK"
llm16-proxy                           | INFO:     172.18.0.100:53728 - "GET /health HTTP/1.1" 200 OK
llm16-proxy                           | INFO:     172.18.0.100:41676 - "GET /health HTTP/1.1" 200 OK
llm16-proxy                           | INFO:     172.18.0.100:47278 - "GET /health HTTP/1.1" 200 OK
llm16-proxy                           | INFO:     172.18.0.100:59456 - "GET /health HTTP/1.1" 200 OK
llm16-proxy                           | INFO:     172.18.0.100:39440 - "GET /health HTTP/1.1" 200 OK
llm16-proxy                           | INFO:     172.18.0.100:40900 - "GET /health HTTP/1.1" 200 OK
jarvis-chroma                         |          ((((((((((((((((((((((((((############
jarvis-eeg-theta                      | 2026-05-01 08:25:12,998 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-autonomous-learner             | 2026-05-01 08:05:20,892 - INFO - 🔍 Researched: autonomous learning systems architecture - RAG=0 results, Web=1 results
jarvis-eeg-theta                      | 2026-05-01 08:25:13,009 [EEG-THETA] 🧠 THETA pulse #959 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:25:13,017 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:26:13,036 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:26:13,041 [EEG-THETA] 🧠 THETA pulse #960 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:26:13,048 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:27:13,067 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:27:13,076 [EEG-THETA] 🧠 THETA pulse #961 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:27:13,088 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:28:13,105 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:46994 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
jarvis-eeg-theta                      | 2026-05-01 08:28:13,110 [EEG-THETA] 🧠 THETA pulse #962 — 50 collections in memory
llm2-proxy                         | INFO:     Started server process [1]
jarvis-brain-orchestrator             | INFO:     127.0.0.1:49002 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     Waiting for application startup.
llm2-proxy                            | INFO:     Application startup complete.
llm2-proxy                            | INFO:     Uvicorn running on http://0.0.0.0:8202 (Press CTRL+C to quit)
llm2-proxy                            | INFO:     172.18.0.100:52790 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm2-proxy                            | INFO:     172.18.0.65:48868 - "POST /generate HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:41844 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 consciousness_filter (RAG+WOAH) received len=0
msjarvis-db                           | 2026-05-01 08:36:20.047 UTC [12671] FATAL:  password authentication failed for user "msjarvis"
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 (RAG+WOAH) decision={'accept': False, 'reason': 'Too short'}
msjarvis-db                           | 2026-05-01 08:36:20.047 UTC [12671] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:36:25.089 UTC [12673] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:36:25.089 UTC [12673] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:36:30.130 UTC [12674] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:36:30.130 UTC [12674] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:36:35.164 UTC [12675] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:36:35.164 UTC [12675] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:36:40.849 UTC [12676] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:36:40.849 UTC [12676] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
nbb_blood_brain_barrier-1             | INFO:     Application startup complete.
jarvis-gbim-verifier                  | 2026-05-01 08:36:35,164 WARNING DB connect attempt 10/10: password authentication failed for user "msjarvis"
nbb_blood_brain_barrier-1             | INFO:     Uvicorn running on http://0.0.0.0:7001 (Press CTRL+C to quit)
jarvis-ollama                         | [GIN] 2026/05/01 - 07:55:19 | 200 |  985.620768ms |     172.18.0.79 | POST     "/api/chat"
jarvis-ollama                         | [GIN] 2026/05/01 - 07:56:59 | 200 |  590.893715ms |     172.18.0.64 | POST     "/api/chat"
jarvis-ollama                         | [GIN] 2026/05/01 - 07:56:59 | 200 |   21.249254ms |     172.18.0.64 | POST     "/api/embed"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:00:19 | 200 |   25.449487ms |     172.18.0.60 | POST     "/api/embeddings"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:00:20 | 200 |  755.245394ms |     172.18.0.79 | POST     "/api/chat"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:02:01 | 200 |  1.612487556s |     172.18.0.64 | POST     "/api/chat"
jarvis-ollama                         | time=2026-05-01T08:02:01.319Z level=INFO source=server.go:1751 msg="llm embedding error: the input length exceeds the context length"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:02:01 | 200 |   20.641534ms |     172.18.0.64 | POST     "/api/embed"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:05:20 | 200 |   26.380104ms |     172.18.0.60 | POST     "/api/embeddings"
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:49996 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:05:20 | 200 |  712.412188ms |     172.18.0.79 | POST     "/api/chat"
jarvis-auth-api                       | INFO:     172.18.0.1:55818 - "GET /auth/register HTTP/1.1" 405 Method Not Allowed
jarvis-contract-forge                 | INFO:     172.18.0.101:37620 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:37108 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 1:M 01 May 2026 08:00:22.062 * 100 changes in 300 seconds. Saving...
jarvis-i-containers                   | INFO:     172.18.0.96:50276 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 1:M 01 May 2026 08:00:22.063 * Background saving started by pid 149409
jarvis-redis                          | 149409:C 01 May 2026 08:00:22.084 * DB saved on disk
jarvis-redis                          | 149409:C 01 May 2026 08:00:22.085 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
jarvis-redis                          | 1:M 01 May 2026 08:00:22.164 * Background saving terminated with success
jarvis-redis                          | 1:M 01 May 2026 08:05:23.001 * 100 changes in 300 seconds. Saving...
jarvis-redis                          | 1:M 01 May 2026 08:05:23.002 * Background saving started by pid 149470
jarvis-redis                          | 149470:C 01 May 2026 08:05:23.025 * DB saved on disk
jarvis-redis                          | 149470:C 01 May 2026 08:05:23.026 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
jarvis-eeg-beta                       | 2026-05-01 08:12:05,126 [EEG-BETA] HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/f9152993-c774-47ef-8760-63f7dc50e747/add "HTTP/1.1 201 Created"
jarvis-redis                          | 1:M 01 May 2026 08:05:23.104 * Background saving terminated with success
jarvis-ingest-watcher                 | [watcher] watching /data/incoming
jarvis-redis                          | 1:M 01 May 2026 08:10:24.063 * 100 changes in 300 seconds. Saving...
jarvis-redis                          | 1:M 01 May 2026 08:10:24.064 * Background saving started by pid 149530
jarvis-redis                          | 149530:C 01 May 2026 08:10:24.090 * DB saved on disk
jarvis-crypto-policy                  | INFO:     127.0.0.1:37078 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     Uvicorn running on http://0.0.0.0:8005 (Press CTRL+C to quit)
jarvis-crypto-policy                  | INFO:     127.0.0.1:33440 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:lm_synthesizer:LM Synthesizer generated 214 chars
jarvis-lm-synthesizer                 | INFO:     172.18.0.39:51324 - "POST /chat HTTP/1.1" 200 OK
ipfs                                  | System version: amd64/linux
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.39:43324 - "POST /chat HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:lm_synthesizer:LM Synthesizer generated 201 chars
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     127.0.0.1:48146 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     127.0.0.1:50358 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:36870 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
llm18-proxy                           | INFO:     172.18.0.100:48884 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.46:39598 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:40618 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.65:55426 - "POST /generate HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:50986 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.100:42786 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:48800 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:45564 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:54694 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:44780 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:55720 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:40842 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:48196 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     Waiting for application startup.
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:40040 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:59254 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:33448 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:59954 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:48422 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:38268 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:55590 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:52274 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:52434 - "GET /health HTTP/1.1" 200 OK
nbb_heteroglobulin_transport-1        | INFO:     172.18.0.100:46070 - "GET /health HTTP/1.1" 200 OK
jarvis-woah                           | INFO:     172.18.0.76:51582 - "POST /optimize_woah?ueid=integrated_system HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-swarm-intelligence             | 2026-05-01 01:57:19,889 - __main__ - INFO - ✅ Swarm complete: 4/4 agents responded
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-swarm-intelligence             | 2026-05-01 01:57:19,890 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 01:57:19] "POST /swarm/query HTTP/1.1" 200 -
jarvis-gbim-verifier                  | 2026-05-01 08:36:40,169 ERROR Could not connect to DB — exiting
llm9-proxy                            | INFO:     Uvicorn running on http://0.0.0.0:8209 (Press CTRL+C to quit)
jarvis-judge-alignment                | INFO:     172.18.0.100:41300 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:35630 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-alignment                | INFO:     172.18.0.100:41618 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-alignment                | INFO:     172.18.0.100:58210 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-alignment                | INFO:     172.18.0.100:49794 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-alignment                | INFO:     172.18.0.100:35862 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-alignment                | INFO:     172.18.0.100:54686 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-alignment                | INFO:     172.18.0.100:53790 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-alignment                | INFO:     172.18.0.100:35506 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-alignment                | INFO:     172.18.0.100:51072 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:07:03 | 200 |  1.859466974s |     172.18.0.64 | POST     "/api/chat"
jarvis-judge-consistency              | INFO:     172.18.0.100:45428 - "GET /health HTTP/1.1" 200 OK
jarvis-local-resources-db             | 2026-05-01 06:31:48.870 UTC [27] LOG:  checkpoint complete: wrote 4 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.401 s, sync=0.017 s, total=0.457 s; sync files=3, longest=0.016 s, average=0.006 s; distance=24 kB, estimate=861 kB
jarvis-judge-consistency              | INFO:     172.18.0.100:39690 - "GET /health HTTP/1.1" 200 OK
jarvis-local-resources-db             | 2026-05-01 07:27:00.365 UTC [44527] ERROR:  relation "gbim_county_2020" does not exist at character 37
jarvis-local-resources-db             | 2026-05-01 07:27:00.365 UTC [44527] STATEMENT:  SELECT id::text, last_verified FROM gbim_county_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
jarvis-local-resources-db             | 2026-05-01 07:27:00.375 UTC [44528] ERROR:  relation "gbim_tract_2020" does not exist at character 37
jarvis-local-resources-db             | 2026-05-01 07:27:00.375 UTC [44528] STATEMENT:  SELECT id::text, last_verified FROM gbim_tract_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
jarvis-local-resources-db             | 2026-05-01 07:27:00.386 UTC [44529] ERROR:  relation "gbim_block_group_2020" does not exist at character 37
jarvis-local-resources-db             | 2026-05-01 07:27:00.386 UTC [44529] STATEMENT:  SELECT id::text, last_verified FROM gbim_block_group_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
jarvis-local-resources-db             | 2026-05-01 08:20:48.989 UTC [47479] ERROR:  relation "memories" does not exist at character 22
jarvis-local-resources-db             | 2026-05-01 08:20:48.989 UTC [47479] STATEMENT:  SELECT COUNT(*) FROM memories WHERE confidence_decay IS NOT NULL;
jarvis-local-resources-db             | 2026-05-01 08:27:02.257 UTC [47821] ERROR:  relation "gbim_county_2020" does not exist at character 37
jarvis-redis                          | 149530:C 01 May 2026 08:10:24.090 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
jarvis-eeg-delta                      | 2026-05-01 08:33:44,617 [EEG-DELTA] 💓 DELTA pulse #1930 — {'gateway': 'UP', 'chroma': 'UP', 'steward': 'UP'}
jarvis-eeg-delta                      | 2026-05-01 08:33:44,632 [EEG-DELTA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:34:14,661 [EEG-DELTA] HTTP Request: GET http://jarvis-unified-gateway:8001/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:34:14,673 [EEG-DELTA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/heartbeat "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:34:14,707 [EEG-DELTA] HTTP Request: GET http://jarvis-steward:8060/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:34:14,715 [EEG-DELTA] 💓 DELTA pulse #1931 — {'gateway': 'UP', 'chroma': 'UP', 'steward': 'UP'}
llm17-proxy                           | INFO:     172.18.0.100:43790 - "GET /health HTTP/1.1" 200 OK
jarvis-chroma                         |         (((((((((((((((((((((((((((#############
jarvis-crypto-policy                  | INFO:     127.0.0.1:53000 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:05:20,892 - INFO - 💡 Cycle complete - Next in 5 minutes
jarvis-crypto-policy                  | INFO:     127.0.0.1:49236 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:40472 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:58704 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:50884 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:35590 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:59052 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.71:38632 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.87:50902 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.18:50692 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.96:56500 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.46:53414 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.71:38380 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.87:39452 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.96:39732 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
llm13-proxy                           | INFO:     172.18.0.65:41460 - "POST /generate HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.100:55418 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
llm13-proxy                           | INFO:     172.18.0.65:52388 - "POST /generate HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.100:34042 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-memory                         | INFO:     Application startup complete.
jarvis-woah                           | INFO:     172.18.0.76:55278 - "POST /optimize_woah?ueid=cakidd HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     Uvicorn running on http://0.0.0.0:8056 (Press CTRL+C to quit)
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 (RAG+WOAH) returning result={'consciousness_decision': 'NO', 'action': 'discarded', 'reason': 'Too short'}
jarvis-pia-sampler                    | ✅ v_ueid_active (default-active view — superseded rows hidden)
jarvis-69dgm-bridge                   | INFO:     Application startup complete.
jarvis-pia-sampler                    | ✅ v_ueid_public_gis (public GIS view)
jarvis-69dgm-bridge                   | INFO:     Uvicorn running on http://0.0.0.0:9000 (Press CTRL+C to quit)
jarvis-pia-sampler                    | 
jarvis-pia-sampler                    | ════════════════════════════════════════════════════════════════
jarvis-pia-sampler                    | ✅ DUAL-LAYER ARCHITECTURE v2 READY
jarvis-pia-sampler                    |    Selfie hash, supersession schema, audit trails all in place.
jarvis-pia-sampler                    | ════════════════════════════════════════════════════════════════
jarvis-pia-sampler                    | INFO:main_brain.startup:[STARTUP] GISGEODB dual-layer schema ready
jarvis-pia-sampler                    | INFO:     Application startup complete.
jarvis-pia-sampler                    | INFO:     Uvicorn running on http://0.0.0.0:8050 (Press CTRL+C to quit)
jarvis-judge-ethics                   | INFO:     Waiting for application startup.
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:38468 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.77:41876 - "GET /health HTTP/1.1" 200 OK
jarvis-ingest-api                     | jarvis-ingest-api: deprecated stub
jarvis-rag-server                     | INFO:     172.18.0.79:41682 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.1:50544 - "GET / HTTP/1.1" 404 Not Found
jarvis-judge-ethics                   | INFO:     Application startup complete.
jarvis-rag-server                     | INFO:     172.18.0.76:55460 - "POST /search HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.77:60444 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.76:59000 - "POST /search HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.77:41928 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-consistency              | INFO:     172.18.0.100:44654 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:40266 - "POST /query HTTP/1.1" 200 OK
jarvis-ollama                         | time=2026-05-01T08:07:03.351Z level=INFO source=server.go:1751 msg="llm embedding error: the input length exceeds the context length"
jarvis-rag-server                     | INFO:     172.18.0.79:43448 - "POST /query HTTP/1.1" 200 OK
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:57340 - "GET /health HTTP/1.1" 200 OK
llm19-proxy                           | INFO:     172.18.0.100:44360 - "GET /health HTTP/1.1" 200 OK
llm19-proxy                           | INFO:     172.18.0.100:34270 - "GET /health HTTP/1.1" 200 OK
llm19-proxy                           | INFO:     172.18.0.100:35664 - "GET /health HTTP/1.1" 200 OK
llm19-proxy                           | INFO:     172.18.0.100:55252 - "GET /health HTTP/1.1" 200 OK
llm19-proxy                           | INFO:     172.18.0.100:55292 - "GET /health HTTP/1.1" 200 OK
llm19-proxy                           | INFO:     172.18.0.100:38326 - "GET /health HTTP/1.1" 200 OK
llm19-proxy                           | INFO:     172.18.0.100:45484 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-delta                      | 2026-05-01 08:34:14,726 [EEG-DELTA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:34:44,751 [EEG-DELTA] HTTP Request: GET http://jarvis-unified-gateway:8001/health "HTTP/1.1 200 OK"
llm21-proxy                           | INFO:     172.18.0.100:47220 - "GET /health HTTP/1.1" 200 OK
llm21-proxy                           | INFO:     172.18.0.100:57244 - "GET /health HTTP/1.1" 200 OK
llm21-proxy                           | INFO:     172.18.0.100:47286 - "GET /health HTTP/1.1" 200 OK
llm21-proxy                           | INFO:     172.18.0.100:49898 - "GET /health HTTP/1.1" 200 OK
llm21-proxy                           | INFO:     172.18.0.100:35124 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-crypto-policy                  | INFO:     127.0.0.1:36698 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.65:44434 - "POST /generate HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:35156 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:37454 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:32896 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:35536 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:42244 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:50318 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:53966 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:32864 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
llm15-proxy                           | INFO:     172.18.0.100:47754 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:34100 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:40554 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:55912 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:43084 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-constitutional-guardian        | INFO:     172.18.0.68:50494 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:38406 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:38542 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:38412 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:44232 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:33920 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:45058 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 07:27:00,365 [STEWARD-SCHED]   Layer gbim_county_2020: no records found (may not exist yet)
jarvis-constitutional-guardian        | INFO:     172.18.0.68:52572 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 07:27:00,376 [STEWARD-SCHED] Layer gbim_tract_2020 query failed: relation "gbim_tract_2020" does not exist
jarvis-constitutional-guardian        | INFO:     172.18.0.96:43068 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:35464 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:36448 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:49390 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:45586 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:42744 - "POST /constitutional/check HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-spiritual-rag                  | INFO:     Started server process [1]
jarvis-spiritual-rag                  | INFO:     Waiting for application startup.
jarvis-spiritual-rag                  | INFO:     Application startup complete.
jarvis-spiritual-rag                  | INFO:     Uvicorn running on http://0.0.0.0:8046 (Press CTRL+C to quit)
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:59174 - "GET /health HTTP/1.1" 200 OK
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:36294 - "GET /health HTTP/1.1" 200 OK
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:58708 - "GET /health HTTP/1.1" 200 OK
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:49406 - "GET /health HTTP/1.1" 200 OK
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:49062 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-ethics                   | INFO:     Uvicorn running on http://0.0.0.0:7233 (Press CTRL+C to quit)
llm20-proxy                           | INFO:     Application startup complete.
jarvis-judge-ethics                   | INFO:     172.18.0.100:59308 - "GET /health HTTP/1.1" 200 OK
mysql                                 | 2026-04-30T16:10:39.448106Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.2.0) starting as process 1
jarvis-judge-ethics                   | INFO:     172.18.0.100:35990 - "GET /health HTTP/1.1" 200 OK
mysql                                 | 2026-04-30T16:10:39.467967Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
jarvis-i-containers                   | INFO:     172.18.0.96:42862 - "GET /health HTTP/1.1" 200 OK
mysql                                 | 2026-04-30T16:10:39.681737Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
jarvis-i-containers                   | INFO:     172.18.0.96:40286 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:07:03 | 200 |   18.841518ms |     172.18.0.64 | POST     "/api/embed"
jarvis-i-containers                   | INFO:     172.18.0.96:35294 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:08:28 | 200 |    3.442578ms |      172.18.0.1 | GET      "/api/tags"
jarvis-judge-truth                    | INFO:     172.18.0.100:38710 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:10:20 | 200 |   35.769615ms |     172.18.0.60 | POST     "/api/embeddings"
jarvis-judge-truth                    | INFO:     172.18.0.100:48336 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:40266 - "POST /query HTTP/1.1" 200 OK
jarvis-judge-truth                    | INFO:     172.18.0.100:54696 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.1:36130 - "GET / HTTP/1.1" 404 Not Found
jarvis-judge-truth                    | INFO:     172.18.0.100:43620 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:43598 - "POST /query HTTP/1.1" 200 OK
llm18-proxy                           | INFO:     172.18.0.100:44644 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:51872 - "POST /query HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     Uvicorn running on http://0.0.0.0:8212 (Press CTRL+C to quit)
jarvis-chroma                         |         (((((((((((((((((((((((((((#############
jarvis-eeg-delta                      | 2026-05-01 08:34:44,759 [EEG-DELTA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/heartbeat "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:34:44,774 [EEG-DELTA] HTTP Request: GET http://jarvis-steward:8060/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:34:44,774 [EEG-DELTA] 💓 DELTA pulse #1932 — {'gateway': 'UP', 'chroma': 'UP', 'steward': 'UP'}
jarvis-neurobiological-master         | INFO:     172.18.0.46:42144 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.71:42032 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.87:54576 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.18:49348 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.96:45512 - "GET /health HTTP/1.1" 200 OK
jarvis-local-resources   | INFO:     172.18.0.100:42002 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-local-resources                | INFO:     172.18.0.100:37518 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-local-resources                | INFO:     172.18.0.100:46460 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-local-resources                | INFO:     172.18.0.100:58112 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-local-resources                | INFO:     172.18.0.100:60026 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-local-resources                | INFO:     172.18.0.100:49608 - "POST /resolve/nearby HTTP/1.1" 404 Not Found
jarvis-lm-synthesizer                 | INFO:     127.0.0.1:57498 - "GET /health HTTP/1.1" 200 OK
llm15-proxy                           | INFO:     172.18.0.100:38484 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.65:40952 - "POST /generate HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:43404 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm2-proxy                            | INFO:     172.18.0.65:36068 - "POST /generate HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:40254 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm2-proxy                            | INFO:     172.18.0.65:49126 - "POST /generate HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:59618 - "GET /health HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     172.18.0.100:38844 - "GET /health HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     172.18.0.100:46638 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:⬅️ Response POST /analyze status=200
jarvis-stewardship-scheduler          | LINE 1: SELECT id::text, last_verified FROM gbim_tract_2020 WHERE la...
jarvis-stewardship-scheduler          |                                             ^
llm11-proxy                           | INFO:     172.18.0.100:59824 - "GET /health HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     172.18.0.100:60960 - "GET /health HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     172.18.0.100:51684 - "GET /health HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     172.18.0.100:57044 - "GET /health HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     172.18.0.100:36644 - "GET /health HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     172.18.0.100:55988 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:08:35,146 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 02:08:35] "GET /health HTTP/1.1" 200 -
jarvis-constitutional-guardian        | INFO:     172.18.0.96:41664 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:08:37,270 - __main__ - INFO - 🐝 Swarm Query #10: Hello, it is Mamma Carrie...
jarvis-constitutional-guardian        | INFO:     172.18.0.68:53762 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:57168 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:57174 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:47338 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:47344 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:60486 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     Uvicorn running on http://0.0.0.0:8220 (Press CTRL+C to quit)
jarvis-hilbert-state                  | INFO:     172.18.0.76:41860 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:34226 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:49818 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:35678 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:36192 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:38330 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:35576 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:42408 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:10:21 | 200 |  573.767546ms |     172.18.0.79 | POST     "/api/chat"
jarvis-agents-service                 | INFO:     172.18.0.100:34304 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 1:M 01 May 2026 08:10:24.165 * Background saving terminated with success
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
jarvis-judge-truth                    | INFO:     172.18.0.100:60218 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:46732 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:35442 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:59380 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:42760 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.1:39566 - "GET / HTTP/1.1" 404 Not Found
jarvis-rag-server                     | INFO:     172.18.0.79:49004 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:32976 - "POST /query HTTP/1.1" 200 OK
jarvis-local-resources-db             | 2026-05-01 08:27:02.257 UTC [47821] STATEMENT:  SELECT id::text, last_verified FROM gbim_county_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
jarvis-local-resources-db             | 2026-05-01 08:27:02.270 UTC [47822] ERROR:  relation "gbim_tract_2020" does not exist at character 37
jarvis-local-resources-db             | 2026-05-01 08:27:02.270 UTC [47822] STATEMENT:  SELECT id::text, last_verified FROM gbim_tract_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
nbb_consciousness_containers-1        | INFO:     172.18.0.100:44876 - "GET /health HTTP/1.1" 200 OK
nbb_consciousness_containers-1        | INFO:     172.18.0.100:41294 - "GET /health HTTP/1.1" 200 OK
nbb_consciousness_containers-1        | INFO:     172.18.0.100:34276 - "GET /health HTTP/1.1" 200 OK
nbb_consciousness_containers-1        | INFO:     172.18.0.100:50090 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:57808 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:57808 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:47414 - "POST /store HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:43602 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:37140 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:33308 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:37614 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:42690 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:41430 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:37478 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:54734 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:40856 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:59928 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:60514 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:32826 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:54262 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
llm13-proxy                           | INFO:     172.18.0.65:35394 - "POST /generate HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.100:46594 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-fifth-dgm                      | INFO:     172.18.0.100:50164 - "POST /analyze HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:➡️ Request GET /health
jarvis-fifth-dgm                      | INFO:     172.18.0.100:33422 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | Initializing 69-DGM RAG Integration...
jarvis-69dgm-bridge                   | ✓ DGM RAG Integration initialized: http://localhost:8002
jarvis-69dgm-bridge                   | ✓ RAG Integration ready
jarvis-69dgm-bridge                   | 
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  WV Encyclopedia: +0
llm11-proxy                           | INFO:     172.18.0.100:49940 - "GET /health HTTP/1.1" 200 OK
llm11-proxy                           | INFO:     172.18.0.100:33472 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:45346 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:08:37,271 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Analytical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:45708 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:46030 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:45932 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:51098 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:34302 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:44986 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:39458 - "GET /health HTTP/1.1" 200 OK
jarvis-gbim-verifier                  | 2026-05-01 08:36:40,828 INFO GBIM verifier starting — batch=200 sleep=30s
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:60756 - "GET /health HTTP/1.1" 200 OK
jarvis-gbim-verifier                  | 2026-05-01 08:36:40,828 INFO   DB:     postgresql://msjarvis@msjarvis-db:5432/msjarvis
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:59948 - "GET /health HTTP/1.1" 200 OK
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:52576 - "GET /health HTTP/1.1" 200 OK
nbb_darwin_godel_machines-1           | INFO:     172.18.0.100:32848 - "GET /health HTTP/1.1" 200 OK
jarvis-ingest-api                     | jarvis-ingest-api: deprecated stub
ipfs                                  | Golang version: go1.25.4
jarvis-i-containers                   | INFO:     172.18.0.96:48996 - "GET /health HTTP/1.1" 200 OK
ipfs                                  | PeerID: 12D3KooWEiT8XxF3kGigvYzZknjzFGPnwDDwnApQfEQHryMXSR3g
jarvis-i-containers                   | INFO:     172.18.0.96:51034 - "GET /health HTTP/1.1" 200 OK
ipfs                                  | 2026-04-30T16:26:35.508Z	INFO	failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 7168 kiB, got: 416 kiB). See https://github.com/quic-go/quic-go/wiki/UDP-Buffer-Sizes for details.
ipfs                                  | Swarm listening on 127.0.0.1:4001 (TCP+UDP)
ipfs                                  | Swarm listening on 172.18.0.16:4001 (TCP+UDP)
ipfs                                  | Swarm listening on [::1]:4001 (TCP+UDP)
ipfs                                  | Run 'ipfs id' to inspect announced and discovered multiaddrs of this node.
ipfs                                  | RPC API server listening on /ip4/0.0.0.0/tcp/5001
jarvis-judge-truth                    | INFO:     172.18.0.100:55520 - "GET /health HTTP/1.1" 200 OK
ipfs                                  | WebUI: http://127.0.0.1:5001/webui
llm7-proxy                            | INFO:     172.18.0.100:54466 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-truth                    | INFO:     172.18.0.100:46686 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm7-proxy                            | INFO:     172.18.0.65:49484 - "POST /generate HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.100:50558 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm7-proxy                            | INFO:     172.18.0.65:59732 - "POST /generate HTTP/1.1" 200 OK
llm22-proxy                           | INFO:     172.18.0.100:54090 - "GET /health HTTP/1.1" 200 OK
jarvis-chroma                         |          (((((((((((((((((((((((((##############
llm22-proxy                           | INFO:     172.18.0.100:57648 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.46:60132 - "POST /eeg_pulse HTTP/1.1" 200 OK
llm22-proxy                           | INFO:     172.18.0.100:55164 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.71:50810 - "GET /health HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-neurobiological-master         | INFO:     172.18.0.87:48842 - "GET /health HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-neurobiological-master         | INFO:     172.18.0.96:52362 - "GET /health HTTP/1.1" 200 OK
jarvis-woah                           | INFO:     172.18.0.76:55282 - "POST /optimize_woah?ueid=integrated_system HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.46:40968 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-neurobiological-master         | INFO:     172.18.0.71:34446 - "GET /health HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:44830 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:28:13,121 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:29:13,138 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:29:13,152 [EEG-THETA] 🧠 THETA pulse #963 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:29:13,163 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:30:13,184 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:30:13,199 [EEG-THETA] 🧠 THETA pulse #964 — 50 collections in memory
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
llm13-proxy                           | INFO:     172.18.0.65:49258 - "POST /generate HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 
llm13-proxy                           | INFO:     172.18.0.100:49092 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 07:27:00,376 [STEWARD-SCHED]   Layer gbim_tract_2020: no records found (may not exist yet)
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
jarvis-stewardship-scheduler          | 2026-05-01 07:27:00,387 [STEWARD-SCHED] Layer gbim_block_group_2020 query failed: relation "gbim_block_group_2020" does not exist
llm13-proxy                           | INFO:     172.18.0.65:45690 - "POST /generate HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | LINE 1: SELECT id::text, last_verified FROM gbim_block_group_2020 WH...
jarvis-stewardship-scheduler          |                                             ^
jarvis-69dgm-bridge                   | ╔════════════════════════════════════════════════════════════════╗
jarvis-eeg-beta                       | 2026-05-01 08:12:05,126 [EEG-BETA] 📚 BETA stored doc beta_learn_189_1777623124 — chroma: 201
jarvis-69dgm-bridge                   | ║                        69-DGM Bridge                           ║
jarvis-69dgm-bridge                   | ║          Knowledge-Grounded Safety & Ethics Gateway            ║
jarvis-69dgm-bridge                   | ╚════════════════════════════════════════════════════════════════╝
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:48318 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | 
llm8-proxy                            | INFO:     Started server process [1]
jarvis-gbim-verifier                  | 2026-05-01 08:36:40,828 INFO   Router: http://jarvis-gbim-query-router:7205
llm8-proxy                            | INFO:     Waiting for application startup.
jarvis-ingest-api                     | jarvis-ingest-api: deprecated stub
jarvis-ingest-api                     | jarvis-ingest-api: deprecated stub
jarvis-i-containers                   | INFO:     172.18.0.96:50212 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:33036 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:39052 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:44678 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:37084 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:60888 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:53022 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:47848 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:54252 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:49258 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:50528 - "GET /health HTTP/1.1" 200 OK
ipfs                                  | Gateway server listening on /ip4/0.0.0.0/tcp/8080
jarvis-steward                        | INFO:     172.18.0.46:42708 - "GET /health HTTP/1.1" 200 OK
llm18-proxy                           | INFO:     172.18.0.100:53206 - "GET /health HTTP/1.1" 200 OK
jarvis-local-resources-db             | 2026-05-01 08:27:02.282 UTC [47823] ERROR:  relation "gbim_block_group_2020" does not exist at character 37
llm7-proxy                            | INFO:     172.18.0.100:44462 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:41910 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-judge-truth                    | INFO:     172.18.0.100:53978 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:59318 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-truth                    | INFO:     172.18.0.100:46560 - "GET /health HTTP/1.1" 200 OK
llm20-proxy                           | INFO:     172.18.0.100:52170 - "GET /health HTTP/1.1" 200 OK
jarvis-woah                           | INFO:     172.18.0.76:38494 - "POST /optimize_woah?ueid=cakidd HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-20llm-production               | INFO:     172.18.0.100:50032 - "POST /quick_chat HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-20llm-production               | INFO:     172.18.0.1:48710 - "GET / HTTP/1.1" 404 Not Found
jarvis-mother-protocols               | INFO:     172.18.0.101:33024 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:41276 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:49866 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:60708 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:45944 - "GET /health HTTP/1.1" 200 OK
msjarvis-db                           | 2026-05-01 08:36:45.890 UTC [12678] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:36:45.890 UTC [12678] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:36:50.924 UTC [12679] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:36:50.924 UTC [12679] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:36:55.972 UTC [12680] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:36:55.972 UTC [12680] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:37:01.005 UTC [12681] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:37:01.005 UTC [12681] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
llm5-proxy                            | INFO:     172.18.0.100:36074 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:Fifth DGM health check; service is healthy.
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
nbb_i_containers-1                    | INFO:     Uvicorn running on http://0.0.0.0:7005 (Press CTRL+C to quit)
llm13-proxy                           | INFO:     172.18.0.100:52844 - "GET /health HTTP/1.1" 200 OK
nbb_i_containers-1                    | INFO:     172.18.0.1:34090 - "POST /process HTTP/1.1" 404 Not Found
nbb_prefrontal_cortex-1               | INFO:     Application startup complete.
nbb_i_containers-1                    | INFO:     172.18.0.1:39482 - "POST /process HTTP/1.1" 404 Not Found
nbb_prefrontal_cortex-1               | INFO:     Uvicorn running on http://0.0.0.0:80 (Press CTRL+C to quit)
jarvis-mother-protocols               | INFO:     172.18.0.101:37196 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:45950 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:44726 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:43744 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:49792 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-beta                       | 2026-05-01 08:12:05,140 [EEG-BETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:17:05,142 [EEG-BETA] 📚 BETA pulse #190 — learning: MountainShares cooperative economics
jarvis-eeg-beta                       | 2026-05-01 08:17:06,748 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:17:06,755 [EEG-BETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/msjarvis_docs "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:17:06,778 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/embed "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:17:06,876 [EEG-BETA] HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/f9152993-c774-47ef-8760-63f7dc50e747/add "HTTP/1.1 201 Created"
jarvis-eeg-beta                       | 2026-05-01 08:17:06,876 [EEG-BETA] 📚 BETA stored doc beta_learn_190_1777623426 — chroma: 201
jarvis-hilbert-state                  | INFO:     172.18.0.76:58814 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-gbim-verifier                  | 2026-05-01 08:36:40,849 WARNING DB connect attempt 1/10: password authentication failed for user "msjarvis"
jarvis-hilbert-state                  | INFO:     172.18.0.76:56948 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:35048 - "GET /health HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:60714 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:36222 - "GET /health HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:60722 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:57150 - "GET /health HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:55876 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:34308 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:45790 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:52132 - "GET /health HTTP/1.1" 200 OK
mysql                                 | 2026-04-30T16:10:40.040418Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
jarvis-hilbert-state                  | INFO:     172.18.0.76:50434 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
mysql                                 | 2026-04-30T16:10:40.040475Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
jarvis-hilbert-state                  | INFO:     172.18.0.76:53080 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
mysql                                 | 2026-04-30T16:10:40.049107Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
mysql                                 | 2026-04-30T16:10:40.099408Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.2.0'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL.
mysql                                 | 2026-04-30T16:10:40.099454Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/run/mysqld/mysqlx.sock
jarvis-judge-truth                    | INFO:     172.18.0.100:46026 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.65:59466 - "POST /generate HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.87:45358 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.100:42884 - "GET /health HTTP/1.1" 200 OK
llm22-proxy                           | INFO:     172.18.0.100:45146 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm22-proxy                           | INFO:     172.18.0.100:34282 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:44614 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     Started server process [1]
jarvis-qualia-engine                  | INFO:     172.18.0.96:57306 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     Waiting for application startup.
jarvis-qualia-engine                  | INFO:     172.18.0.96:44534 - "GET /health HTTP/1.1" 200 OK
jarvis-woah                           | INFO:     172.18.0.76:38502 - "POST /optimize_woah?ueid=integrated_system HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:55528 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:59084 - "GET /health HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
msjarvis-db                           | 2026-05-01 08:37:06.047 UTC [12683] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:37:06.047 UTC [12683] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:53494 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:60692 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     172.18.0.100:59888 - "GET /health HTTP/1.1" 200 OK
jarvis-lm-synthesizer                 | INFO:httpx:HTTP Request: GET http://jarvis-ollama:11434/api/tags "HTTP/1.1 200 OK"
jarvis-lm-synthesizer                 | INFO:     127.0.0.1:32814 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:34998 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
llm13-proxy                           | INFO:     172.18.0.65:56998 - "POST /generate HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.100:48140 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
llm13-proxy                           | INFO:     172.18.0.65:41588 - "POST /generate HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.100:41398 - "GET /health HTTP/1.1" 200 OK
jarvis-ms-token-service               | INFO:     Uvicorn running on http://0.0.0.0:8083 (Press CTRL+C to quit)
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-69dgm-bridge                   | Port: 9000
jarvis-eeg-beta                       | 2026-05-01 08:17:06,891 [EEG-BETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-69dgm-bridge                   | Version: 2.0.0 (RAG-Integrated)
jarvis-eeg-beta                       | 2026-05-01 08:22:06,892 [EEG-BETA] 📚 BETA pulse #191 — learning: New River Gorge regional infrastructure
jarvis-eeg-beta                       | 2026-05-01 08:22:08,106 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:22:08,113 [EEG-BETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/msjarvis_docs "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:22:08,140 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/embed "HTTP/1.1 200 OK"
jarvis-consciousness-bridge           | INFO:     172.18.0.71:42132 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-beta                       | 2026-05-01 08:22:08,252 [EEG-BETA] HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/f9152993-c774-47ef-8760-63f7dc50e747/add "HTTP/1.1 201 Created"
jarvis-steward                        | INFO:     172.18.0.46:55946 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-beta                       | 2026-05-01 08:22:08,252 [EEG-BETA] 📚 BETA stored doc beta_learn_191_1777623728 — chroma: 201
jarvis-eeg-beta                       | 2026-05-01 08:22:08,265 [EEG-BETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:27:08,267 [EEG-BETA] 📚 BETA pulse #192 — learning: West Virginia economic development 2026
jarvis-eeg-beta                       | 2026-05-01 08:27:10,030 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:27:10,037 [EEG-BETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/msjarvis_docs "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:27:10,052 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/embed "HTTP/1.1 400 Bad Request"
jarvis-autonomous-learner             | 2026-05-01 08:10:20,892 - INFO - 🧠 LEARNING CYCLE #141 - Uptime: 0d 11h 43m
llm18-proxy                           | INFO:     172.18.0.100:60634 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:10:20,892 - INFO -    Topic: Solidity security vulnerabilities 2025
llm18-proxy                           | INFO:     172.18.0.100:54910 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:10:20,892 - INFO -    Stats: Stored=0, Deduped=0
jarvis-local-resources-db             | 2026-05-01 08:27:02.282 UTC [47823] STATEMENT:  SELECT id::text, last_verified FROM gbim_block_group_2020 WHERE last_verified IS NOT NULL ORDER BY last_verified ASC LIMIT 500
jarvis-eeg-delta                      | 2026-05-01 08:34:44,790 [EEG-DELTA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:35:14,820 [EEG-DELTA] HTTP Request: GET http://jarvis-unified-gateway:8001/health "HTTP/1.1 200 OK"
jarvis-chroma                         |          ((((((((((((((((((((((((##############
jarvis-chroma                         |            (((((((((((((((((((((#############
jarvis-chroma                         |              ((((((((((((((((##############
jarvis-chroma                         |                 (((((((((    #########
jarvis-chroma                         | 
jarvis-chroma                         | Saving data to: /data
jarvis-chroma                         | Connect to Chroma at: http://localhost:8000
jarvis-chroma                         | Getting started guide: https://docs.trychroma.com/docs/overview/getting-started
jarvis-chroma                         | 
jarvis-chroma                         | ☁️ To deploy your DB - try Chroma Cloud!
jarvis-chroma                         | - Sign up: https://trychroma.com/signup
jarvis-chroma                         | - Copy your data to Cloud: chroma copy --to-cloud --all
jarvis-chroma                         | 
jarvis-chroma                         | OpenTelemetry is not enabled because it is missing from the config.
nbb_spiritual_root-1                  | INFO:     172.18.0.100:54480 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     172.18.0.100:36802 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:35898 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:47454 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:⬅️ Response GET /health status=200
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:➡️ Request POST /analyze
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 consciousness_filter (RAG+WOAH) received len=0
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 (RAG+WOAH) decision={'accept': False, 'reason': 'Too short'}
jarvis-constitutional-guardian        | INFO:     172.18.0.68:36310 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 (RAG+WOAH) returning result={'consciousness_decision': 'NO', 'action': 'discarded', 'reason': 'Too short'}
nbb_i_containers-1                    | INFO:     172.18.0.1:39496 - "GET /openapi.json HTTP/1.1" 200 OK
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:35518 - "GET /health HTTP/1.1" 200 OK
nbb_i_containers-1                    | INFO:     Shutting down
nbb_i_containers-1                    | INFO:     Waiting for application shutdown.
nbb_i_containers-1                    | INFO:     Application shutdown complete.
nbb_i_containers-1                    | INFO:     Finished server process [1]
nbb_i_containers-1                    | INFO:     Started server process [1]
llm9-proxy                            | INFO:     172.18.0.65:34980 - "POST /generate HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 
llm9-proxy                            | INFO:     172.18.0.100:53298 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 07:27:00,387 [STEWARD-SCHED]   Layer gbim_block_group_2020: no records found (may not exist yet)
jarvis-stewardship-scheduler          | 2026-05-01 07:27:00,400 [STEWARD-SCHED]   local_resources: 48 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 07:27:01,669 [STEWARD-SCHED]   wv_parcels: 500 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 07:27:01,864 [STEWARD-SCHED]   wv_buildings: 500 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 07:27:01,874 [STEWARD-SCHED]   wv_counties: 55 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 07:27:01,888 [STEWARD-SCHED]   wv_municipalities: 439 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 07:27:01,902 [STEWARD-SCHED]   wv_fire_stations: 500 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 07:27:01,915 [STEWARD-SCHED]   wv_hospitals: 65 records, 0 overdue, 0 warn
jarvis-69dgm-bridge                   | 
jarvis-gbim-verifier                  | 2026-05-01 08:36:45,891 WARNING DB connect attempt 2/10: password authentication failed for user "msjarvis"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:12:04 | 200 |  1.486398001s |     172.18.0.64 | POST     "/api/chat"
jarvis-gbim-verifier                  | 2026-05-01 08:36:50,924 WARNING DB connect attempt 3/10: password authentication failed for user "msjarvis"
jarvis-ollama                         | time=2026-05-01T08:12:05.002Z level=INFO source=server.go:1751 msg="llm embedding error: the input length exceeds the context length"
jarvis-gbim-verifier                  | 2026-05-01 08:36:55,973 WARNING DB connect attempt 4/10: password authentication failed for user "msjarvis"
jarvis-redis                          | 1:M 01 May 2026 08:15:25.101 * 100 changes in 300 seconds. Saving...
jarvis-blood-brain-barrier            | INFO:     172.18.0.1:53744 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 1:M 01 May 2026 08:15:25.102 * Background saving started by pid 149590
jarvis-redis                          | 149590:C 01 May 2026 08:15:25.131 * DB saved on disk
llm18-proxy                           | INFO:     172.18.0.100:44756 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 149590:C 01 May 2026 08:15:25.132 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
jarvis-redis                          | 1:M 01 May 2026 08:15:25.204 * Background saving terminated with success
jarvis-rag-server                     | INFO:     172.18.0.1:38204 - "GET / HTTP/1.1" 404 Not Found
jarvis-eeg-delta                      | 2026-05-01 08:35:14,828 [EEG-DELTA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/heartbeat "HTTP/1.1 200 OK"
jarvis-rag-server                     | INFO:     172.18.0.79:58344 - "POST /query HTTP/1.1" 200 OK
jarvis-eeg-delta                      | 2026-05-01 08:35:14,843 [EEG-DELTA] HTTP Request: GET http://jarvis-steward:8060/health "HTTP/1.1 200 OK"
jarvis-rag-server                     | INFO:     172.18.0.79:58186 - "POST /query HTTP/1.1" 200 OK
jarvis-judge-truth                    | INFO:     172.18.0.100:58422 - "GET /health HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:     172.18.0.1:49268 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:49478 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:48860 - "GET /openapi.json HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:     172.18.0.1:47492 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:60326 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:44964 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:51594 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:44902 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:59244 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:42564 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:40682 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:60326 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:49348 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:54448 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:40464 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:45390 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:58160 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:58192 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:57172 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:38042 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:36320 - "POST /constitutional/check HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.65:33510 - "POST /generate HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:37612 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:43692 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm2-proxy                            | INFO:     172.18.0.65:51002 - "POST /generate HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:54364 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm2-proxy                            | INFO:     172.18.0.65:53348 - "POST /generate HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm9-proxy                            | INFO:     172.18.0.65:34240 - "POST /generate HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:45396 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm9-proxy                            | INFO:     172.18.0.65:49210 - "POST /generate HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:43396 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm9-proxy                            | INFO:     172.18.0.65:44292 - "POST /generate HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:44204 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm9-proxy                            | INFO:     172.18.0.65:57120 - "POST /generate HTTP/1.1" 200 OK
jarvis-judge-consistency              | INFO:     172.18.0.100:58536 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     Application startup complete.
jarvis-judge-consistency              | INFO:     172.18.0.100:45268 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     Uvicorn running on http://0.0.0.0:8208 (Press CTRL+C to quit)
llm8-proxy                            | INFO:     172.18.0.100:51312 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     172.18.0.100:44474 - "GET /health HTTP/1.1" 200 OK
llm18-proxy                           | INFO:     172.18.0.100:59586 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:10:20,980 - INFO - HTTP Request: POST http://jarvis-rag-server:8003/query "HTTP/1.1 200 OK"
llm8-proxy                            | INFO:     172.18.0.100:46502 - "GET /health HTTP/1.1" 200 OK
llm18-proxy                           | INFO:     172.18.0.100:56846 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:10:21,556 - INFO - HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-redis                          | 1:M 01 May 2026 08:20:26.043 * 100 changes in 300 seconds. Saving...
jarvis-eeg-beta                       | 2026-05-01 08:27:10,062 [EEG-BETA] HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/f9152993-c774-47ef-8760-63f7dc50e747/add "HTTP/1.1 400 Bad Request"
jarvis-redis                          | 1:M 01 May 2026 08:20:26.044 * Background saving started by pid 149652
jarvis-eeg-delta                      | 2026-05-01 08:35:14,844 [EEG-DELTA] 💓 DELTA pulse #1933 — {'gateway': 'UP', 'chroma': 'UP', 'steward': 'UP'}
jarvis-eeg-delta                      | 2026-05-01 08:35:14,859 [EEG-DELTA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:35:44,924 [EEG-DELTA] HTTP Request: GET http://jarvis-unified-gateway:8001/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:35:44,939 [EEG-DELTA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/heartbeat "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:35:44,955 [EEG-DELTA] HTTP Request: GET http://jarvis-steward:8060/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:35:44,955 [EEG-DELTA] 💓 DELTA pulse #1934 — {'gateway': 'UP', 'chroma': 'UP', 'steward': 'UP'}
jarvis-eeg-delta                      | 2026-05-01 08:35:44,963 [EEG-DELTA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
llm1-proxy                            | INFO:     Application startup complete.
llm1-proxy                            | INFO:     Uvicorn running on http://0.0.0.0:8201 (Press CTRL+C to quit)
llm1-proxy                            | INFO:     172.18.0.100:46018 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:41854 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:47414 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:42924 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:42924 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:54534 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:54534 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:52420 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:52420 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:56032 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:56032 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:60388 - "POST /store HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:⬅️ Response POST /analyze status=200
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:52858 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:     172.18.0.100:33438 - "POST /analyze HTTP/1.1" 200 OK
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:43998 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:44432 - "POST /constitutional/check HTTP/1.1" 200 OK
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:57364 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:35680 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-judge-ethics                   | INFO:     172.18.0.100:33686 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     172.18.0.1:44006 - "GET /auth/register HTTP/1.1" 405 Method Not Allowed
jarvis-judge-ethics                   | INFO:     172.18.0.100:50318 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     172.18.0.1:44006 - "GET /apply HTTP/1.1" 404 Not Found
jarvis-mother-protocols               | INFO:     172.18.0.101:35502 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:54744 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:57980 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:53976 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:45492 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:55376 - "GET /health HTTP/1.1" 200 OK
nbb_blood_brain_barrier-1             | INFO:     172.18.0.100:52336 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 07:27:01,928 [STEWARD-SCHED]   wv_ems_stations: 53 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 07:27:02,104 [STEWARD-SCHED]   building_profile: 500 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 07:27:02,104 [STEWARD-SCHED] ✅ Cycle complete: {'layers_checked': 10, 'records_checked': 3160, 'pings_fired': 0, 'warnings': 0}
jarvis-stewardship-scheduler          | 2026-05-01 08:27:02,205 [STEWARD-SCHED] ⏰ Stewardship scheduler cycle starting...
jarvis-stewardship-scheduler          | 2026-05-01 08:27:02,244 [STEWARD-SCHED]   gbim_zcta_2020: 500 records, 0 overdue, 0 warn
ipfs                                  | Daemon is ready
ipfs                                  | 2026-04-30T16:27:37.551Z	ERROR	cmd/ipfs	kubo/daemon.go:1305	
ipfs                                  | ⚠️ A NEW VERSION OF KUBO DETECTED
ipfs                                  | 
ipfs                                  | This Kubo node is running an outdated version (0.39.0).
jarvis-gbim-verifier                  | 2026-05-01 08:37:01,005 WARNING DB connect attempt 5/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:37:06,047 WARNING DB connect attempt 6/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:37:11,092 WARNING DB connect attempt 7/10: password authentication failed for user "msjarvis"
llm18-proxy                           | INFO:     172.18.0.100:43448 - "GET /health HTTP/1.1" 200 OK
llm18-proxy                           | INFO:     172.18.0.100:55696 - "GET /health HTTP/1.1" 200 OK
llm18-proxy                           | INFO:     172.18.0.100:42076 - "GET /health HTTP/1.1" 200 OK
llm18-proxy                           | INFO:     172.18.0.100:60132 - "GET /health HTTP/1.1" 200 OK
llm18-proxy                           | INFO:     172.18.0.100:45346 - "GET /health HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:     172.18.0.100:34410 - "GET /health HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:__main__:⚡ Quick query: I am Ms. Allis, your Appalachian AI assistant. SYS...
jarvis-20llm-production               | INFO:__main__:🌟 Processing 8 models in parallel (semaphore=5)...
jarvis-20llm-production               | INFO:httpx:HTTP Request: POST http://llm13-proxy:8213/generate "HTTP/1.1 200 OK"
jarvis-20llm-production               | INFO:__main__:✅ Orca-Mini: 38 chars via http://llm13-proxy:8213/generate
jarvis-eeg-delta                      | 2026-05-01 08:36:15,004 [EEG-DELTA] HTTP Request: GET http://jarvis-unified-gateway:8001/health "HTTP/1.1 200 OK"
llm7-proxy                            | INFO:     172.18.0.65:34962 - "POST /generate HTTP/1.1" 200 OK
jarvis-woah                           | INFO:     172.18.0.76:57138 - "POST /optimize_woah?ueid=cakidd HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-woah                           | INFO:     172.18.0.76:56982 - "POST /optimize_woah?ueid=integrated_system HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
llm5-proxy                            | INFO:     172.18.0.100:59944 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     172.18.0.100:44740 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     172.18.0.100:45524 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     172.18.0.100:45802 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     172.18.0.100:41492 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     172.18.0.100:48956 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     172.18.0.100:40368 - "GET /health HTTP/1.1" 200 OK
llm5-proxy                            | INFO:     172.18.0.100:37126 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:38554 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:60548 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,080 INFO aaacpe-scraper:   RSS  Appalachian Trail Conservancy: +3
nbb_spiritual_root-1                  | INFO:     172.18.0.100:53916 - "GET /health HTTP/1.1" 200 OK
nbb_mother_carrie_protocols-1         | INFO:     172.18.0.100:52198 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:33066 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-ethics                   | INFO:     172.18.0.100:60832 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_root-1                  | INFO:     172.18.0.100:47272 - "GET /health HTTP/1.1" 200 OK
nbb_i_containers-1                    | INFO:     Waiting for application startup.
nbb_i_containers-1                    | INFO:     Application startup complete.
nbb_i_containers-1                    | INFO:     Uvicorn running on http://0.0.0.0:7005 (Press CTRL+C to quit)
nbb_i_containers-1                    | INFO:     172.18.0.1:52286 - "GET /openapi.json HTTP/1.1" 200 OK
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
nbb_consciousness_containers-1        | INFO:     172.18.0.100:48102 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.65:57880 - "POST /generate HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.100:38490 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
jarvis-auth-api                       | INFO:     127.0.0.1:34226 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:52144 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:33810 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
jarvis-agents-service                 | INFO:     172.18.0.100:42760 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:48150 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-consistency              | INFO:     172.18.0.100:47480 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     172.18.0.100:56150 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-consistency              | INFO:     172.18.0.100:44808 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-consistency              | INFO:     172.18.0.100:33418 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-consistency              | INFO:     172.18.0.100:35416 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-consistency              | INFO:     172.18.0.100:55864 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-beta                       | 2026-05-01 08:27:10,062 [EEG-BETA] 📚 BETA stored doc beta_learn_192_1777624030 — chroma: 400
jarvis-eeg-beta                       | 2026-05-01 08:27:10,068 [EEG-BETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:32:10,069 [EEG-BETA] 📚 BETA pulse #193 — learning: Appalachian data sovereignty
jarvis-eeg-beta                       | 2026-05-01 08:32:11,300 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:32:11,313 [EEG-BETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/msjarvis_docs "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:32:11,364 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/embed "HTTP/1.1 200 OK"
jarvis-crypto-policy                  | INFO:     127.0.0.1:60548 - "GET /health HTTP/1.1" 200 OK
ipfs                                  | 16% of the sampled Kubo peers are running a higher version.
ipfs                                  | Visit https://github.com/ipfs/kubo/releases or https://dist.ipfs.tech/#kubo and update to version 0.41.0 or later.
jarvis-crypto-policy                  | INFO:     127.0.0.1:48348 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     172.18.0.1:58538 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     172.18.0.1:58540 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     172.18.0.1:58546 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     172.18.0.1:43228 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:44620 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.100:50530 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:54652 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-contract-forge                 | INFO:     172.18.0.101:46142 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:40776 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:39722 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:45860 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:42640 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:56408 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:40552 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:47522 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:39390 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:46188 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:44438 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:50438 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:55206 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:34880 - "POST /constitutional/check HTTP/1.1" 200 OK
llm21-proxy                           | INFO:     172.18.0.100:49172 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:47788 - "GET /health HTTP/1.1" 200 OK
llm21-proxy                           | INFO:     172.18.0.100:51372 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm21-proxy                           | INFO:     172.18.0.100:52580 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | Knowledge Substrates:
llm21-proxy                           | INFO:     172.18.0.100:55236 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   |   ✓ psychological_rag: 968 DSM-5 records
llm21-proxy                           | INFO:     172.18.0.100:33664 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:40144 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.18:58978 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:43376 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:50772 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:34656 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:44674 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:39834 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     172.18.0.100:42674 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 08:27:02,257 [STEWARD-SCHED] Layer gbim_county_2020 query failed: relation "gbim_county_2020" does not exist
jarvis-neurobiological-master         | INFO:     172.18.0.96:45440 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | LINE 1: SELECT id::text, last_verified FROM gbim_county_2020 WHERE l...
jarvis-neurobiological-master         | INFO:     172.18.0.46:35440 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-redis                          | 149652:C 01 May 2026 08:20:26.065 * DB saved on disk
jarvis-redis                          | 149652:C 01 May 2026 08:20:26.066 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
jarvis-redis                          | 1:M 01 May 2026 08:20:26.145 * Background saving terminated with success
jarvis-redis                          | 1:M 01 May 2026 08:25:27.053 * 100 changes in 300 seconds. Saving...
jarvis-redis                          | 1:M 01 May 2026 08:25:27.054 * Background saving started by pid 149725
jarvis-redis                          | 149725:C 01 May 2026 08:25:27.066 * DB saved on disk
jarvis-redis                          | 149725:C 01 May 2026 08:25:27.067 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
llm22-proxy                           | INFO:     172.18.0.100:32824 - "GET /health HTTP/1.1" 200 OK
llm22-proxy                           | INFO:     172.18.0.100:42740 - "GET /health HTTP/1.1" 200 OK
llm22-proxy                           | INFO:     172.18.0.100:53610 - "GET /health HTTP/1.1" 200 OK
llm22-proxy                           | INFO:     172.18.0.100:48852 - "GET /health HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-woah                           | INFO:     172.18.0.76:35186 - "POST /optimize_woah?ueid=cakidd HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-woah                           | INFO:     172.18.0.76:35202 - "POST /optimize_woah?ueid=integrated_system HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
msjarvis-db                           | 2026-05-01 08:37:11.092 UTC [12684] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:37:11.092 UTC [12684] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:37:16.137 UTC [12686] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:37:16.137 UTC [12686] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:37:21.172 UTC [12687] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:37:21.172 UTC [12687] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:37:26.214 UTC [12689] FATAL:  password authentication failed for user "msjarvis"
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:➡️ Request GET /health
jarvis-judge-ethics                   | INFO:     172.18.0.100:54254 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:Fifth DGM health check; service is healthy.
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:⬅️ Response GET /health status=200
jarvis-fifth-dgm                      | INFO:     172.18.0.100:35986 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:➡️ Request POST /analyze
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 consciousness_filter (RAG+WOAH) received len=0
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 (RAG+WOAH) decision={'accept': False, 'reason': 'Too short'}
llm9-proxy                            | INFO:     172.18.0.100:56130 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 (RAG+WOAH) returning result={'consciousness_decision': 'NO', 'action': 'discarded', 'reason': 'Too short'}
jarvis-69dgm-bridge                   |   ✓ spiritual_texts: 23 biblical/heritage texts
jarvis-mother-protocols               | INFO:     172.18.0.101:37632 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:42562 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:58682 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:60278 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:41164 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:37872 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:47478 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:60342 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:44924 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:48380 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:56652 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.101:43612 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:37398 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:40132 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     172.18.0.100:37122 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     172.18.0.100:34026 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     172.18.0.100:57872 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     172.18.0.100:50644 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     172.18.0.100:56140 - "GET /health HTTP/1.1" 200 OK
llm8-proxy                            | INFO:     172.18.0.100:49388 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | [memory] WARNING: could not ensure memory table: name 'psycopg2' is not defined
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-chroma                         | 
jarvis-woah                           | INFO:     172.18.0.76:42086 - "POST /optimize_woah?ueid=cakidd HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-woah                           | INFO:     172.18.0.76:42094 - "POST /optimize_woah?ueid=integrated_system HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-woah                           | INFO:     172.18.0.76:56174 - "POST /optimize_woah?ueid=cakidd HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-woah                           | INFO:     172.18.0.76:45764 - "POST /optimize_woah?ueid=integrated_system HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-constitutional-guardian        | INFO:     172.18.0.68:33462 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:45888 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:57750 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:38144 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:38612 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:34906 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:55160 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:54420 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.65:52974 - "POST /generate HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:     172.18.0.100:35990 - "POST /analyze HTTP/1.1" 200 OK
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:⬅️ Response POST /analyze status=200
jarvis-gbim-verifier                  | 2026-05-01 08:37:16,137 WARNING DB connect attempt 8/10: password authentication failed for user "msjarvis"
jarvis-69dgm-bridge                   |   ✓ autonomous_learner: 21,159 historical memory records
jarvis-gbim-verifier                  | 2026-05-01 08:37:21,173 WARNING DB connect attempt 9/10: password authentication failed for user "msjarvis"
jarvis-69dgm-bridge                   | 
jarvis-69dgm-bridge                   | Capabilities:
jarvis-69dgm-bridge                   |   • Mental health crisis detection (DSM-5 grounded)
jarvis-hilbert-state                  | INFO:     172.18.0.76:53678 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:48414 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:40484 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:49184 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:55068 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:55074 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:56260 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:56262 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:55472 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=carrie_kidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:50700 - "GET /all_states?data=what+resources+are+available+in+Fayette+County&userid=integrated_system HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:45054 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     172.19.0.1:54590 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     172.19.0.1:56470 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     172.19.0.1:55256 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     172.19.0.1:60776 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     172.19.0.1:43280 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:42742 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     172.19.0.1:51104 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:43042 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     172.19.0.1:44430 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     172.19.0.1:37106 - "GET /health HTTP/1.1" 200 OK
jarvis-memory                         | INFO:     172.19.0.1:43856 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:55488 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.1:50492 - "GET / HTTP/1.1" 404 Not Found
jarvis-woah                           | INFO:     172.18.0.76:33576 - "POST /optimize_woah?ueid=cakidd HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
nbb_woah_algorithms                   | INFO:     Started server process [1]
nbb_woah_algorithms                   | INFO:     Waiting for application startup.
nbb_woah_algorithms                   | INFO:     Application startup complete.
jarvis-constitutional-guardian        | INFO:     172.18.0.96:59258 - "POST /constitutional/check HTTP/1.1" 200 OK
nbb_consciousness_containers-1        | INFO:     172.18.0.100:54716 - "GET /health HTTP/1.1" 200 OK
nbb_consciousness_containers-1        | INFO:     172.18.0.100:39572 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm9-proxy                            | INFO:     172.18.0.65:55348 - "POST /generate HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:33784 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm9-proxy                            | INFO:     172.18.0.65:33820 - "POST /generate HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:59498 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm9-proxy                            | INFO:     172.18.0.65:51522 - "POST /generate HTTP/1.1" 200 OK
nbb_woah_algorithms                   | INFO:     Uvicorn running on http://0.0.0.0:8104 (Press CTRL+C to quit)
jarvis-20llm-production               | INFO:httpx:HTTP Request: POST http://llm10-proxy:8210/generate "HTTP/1.1 200 OK"
jarvis-20llm-production               | INFO:__main__:✅ Phi3 Mini: 309 chars via http://llm10-proxy:8210/generate
jarvis-20llm-production               | INFO:httpx:HTTP Request: POST http://llm1-proxy:8201/generate "HTTP/1.1 200 OK"
jarvis-20llm-production               | INFO:__main__:✅ TinyLlama: 287 chars via http://llm1-proxy:8201/generate
jarvis-gbim-verifier                  | 2026-05-01 08:37:26,214 WARNING DB connect attempt 10/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:37:31,215 ERROR Could not connect to DB — exiting
jarvis-hilbert-state                  | INFO:     172.18.0.76:40530 - "GET /all_states?data=What+housing+help+is+available+near+me%3F&userid=cakidd HTTP/1.1" 200 OK
jarvis-gbim-verifier                  | 2026-05-01 08:37:31,878 INFO GBIM verifier starting — batch=200 sleep=30s
jarvis-hilbert-state                  | INFO:     172.18.0.76:38084 - "GET /all_states?data=What+housing+help+is+available+near+me%3F&userid=integrated_system HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:12:05 | 200 |   27.961413ms |     172.18.0.64 | POST     "/api/embed"
jarvis-hilbert-state                  | INFO:     172.18.0.76:50254 - "GET /all_states?data=What+housing+help+is+available+near+me%3F&userid=cakidd HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:15:21 | 200 |     26.5464ms |     172.18.0.60 | POST     "/api/embeddings"
llm8-proxy                            | INFO:     172.18.0.100:60094 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 1:M 01 May 2026 08:25:27.155 * Background saving terminated with success
llm8-proxy                            | INFO:     172.18.0.100:42334 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 1:M 01 May 2026 08:30:28.007 * 100 changes in 300 seconds. Saving...
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:40860 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:50876 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:44892 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:46836 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:60350 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:46856 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:42902 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:58938 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:48714 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:47358 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:42866 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:33424 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:41,542 INFO httpx: HTTP Request: GET https://www.wvgazettemail.com "HTTP/1.1 200 OK"
jarvis-main-brain                     | INFO:     127.0.0.1:35488 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:45770 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:40218 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:57066 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:33874 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     172.18.0.1:56630 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:40206 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:58436 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:53542 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:33344 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:37472 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:39074 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          |                                             ^
llm2-proxy                            | INFO:     172.18.0.100:54366 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-stewardship-scheduler          | 
jarvis-stewardship-scheduler          | 2026-05-01 08:27:02,257 [STEWARD-SCHED]   Layer gbim_county_2020: no records found (may not exist yet)
jarvis-stewardship-scheduler          | 2026-05-01 08:27:02,270 [STEWARD-SCHED] Layer gbim_tract_2020 query failed: relation "gbim_tract_2020" does not exist
jarvis-stewardship-scheduler          | LINE 1: SELECT id::text, last_verified FROM gbim_tract_2020 WHERE la...
jarvis-stewardship-scheduler          |                                             ^
jarvis-stewardship-scheduler          | 
jarvis-gbim-verifier                  | 2026-05-01 08:37:31,878 INFO   DB:     postgresql://msjarvis@msjarvis-db:5432/msjarvis
jarvis-gbim-verifier                  | 2026-05-01 08:37:31,878 INFO   Router: http://jarvis-gbim-query-router:7205
jarvis-gbim-verifier                  | 2026-05-01 08:37:31,900 WARNING DB connect attempt 1/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:37:36,936 WARNING DB connect attempt 2/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:37:41,971 WARNING DB connect attempt 3/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:37:46,996 WARNING DB connect attempt 4/10: password authentication failed for user "msjarvis"
jarvis-gbim-verifier                  | 2026-05-01 08:37:52,020 WARNING DB connect attempt 5/10: password authentication failed for user "msjarvis"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:15:22 | 200 |  1.032932761s |     172.18.0.79 | POST     "/api/chat"
jarvis-redis                          | 1:M 01 May 2026 08:30:28.008 * Background saving started by pid 149786
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:33686 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:41996 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:48680 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:35530 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:53014 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:49556 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:56920 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:58648 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:47898 - "POST /query HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     Started server process [1]
jarvis-rag-server                     | INFO:     172.18.0.79:51498 - "POST /query HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:57332 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     Waiting for application startup.
jarvis-contract-forge                 | INFO:     172.18.0.101:44572 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:39300 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:45744 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:44782 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:35586 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:43404 - "GET /health HTTP/1.1" 200 OK
msjarvis-db                           | 2026-05-01 08:37:26.214 UTC [12689] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
jarvis-woah                           | INFO:     172.18.0.76:33590 - "POST /optimize_woah?ueid=integrated_system HTTP/1.1" 200 OK
msjarvis-db                           | 2026-05-01 08:37:31.900 UTC [12690] FATAL:  password authentication failed for user "msjarvis"
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
msjarvis-db                           | 2026-05-01 08:37:31.900 UTC [12690] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
msjarvis-db                           | 2026-05-01 08:37:36.935 UTC [12691] FATAL:  password authentication failed for user "msjarvis"
jarvis-woah                           | INFO:     172.18.0.76:37150 - "POST /optimize_woah?ueid=cakidd HTTP/1.1" 200 OK
msjarvis-db                           | 2026-05-01 08:37:36.935 UTC [12691] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:37:41.971 UTC [12692] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:37:41.971 UTC [12692] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:37:46.995 UTC [12694] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:37:46.995 UTC [12694] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
msjarvis-db                           | 2026-05-01 08:37:52.020 UTC [12695] FATAL:  password authentication failed for user "msjarvis"
msjarvis-db                           | 2026-05-01 08:37:52.020 UTC [12695] DETAIL:  Connection matched pg_hba.conf line 100: "host all all all scram-sha-256"
jarvis-eeg-beta                       | 2026-05-01 08:32:11,481 [EEG-BETA] HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/f9152993-c774-47ef-8760-63f7dc50e747/add "HTTP/1.1 201 Created"
jarvis-brain-orchestrator             | INFO:     127.0.0.1:38432 - "GET /health HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:httpx:HTTP Request: POST http://llm12-proxy:8212/generate "HTTP/1.1 200 OK"
jarvis-20llm-production               | INFO:__main__:✅ Dolphin-Phi: 295 chars via http://llm12-proxy:8212/generate
jarvis-20llm-production               | INFO:httpx:HTTP Request: POST http://llm2-proxy:8202/generate "HTTP/1.1 200 OK"
jarvis-20llm-production               | INFO:__main__:✅ Gemma: 112 chars via http://llm2-proxy:8202/generate
jarvis-20llm-production               | INFO:httpx:HTTP Request: POST http://llm7-proxy:8207/generate "HTTP/1.1 200 OK"
jarvis-20llm-production               | INFO:__main__:✅ StarCoder2: 521 chars via http://llm7-proxy:8207/generate
jarvis-consciousness-bridge           | INFO:     172.18.0.87:46754 - "GET /health HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:httpx:HTTP Request: POST http://llm9-proxy:8209/generate "HTTP/1.1 200 OK"
jarvis-consciousness-bridge           | INFO:     172.18.0.96:33814 - "GET /health HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:59322 - "GET /all_states?data=What+housing+help+is+available+near+me%3F&userid=integrated_system HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:48680 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:39950 - "GET /health HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:48652 - "GET /all_states?data=ping&userid=cakidd HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:51500 - "GET /health HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:37818 - "GET /all_states?data=ping&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:42154 - "GET /all_states?data=ping&userid=cakidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:42170 - "GET /all_states?data=ping&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:60090 - "GET /all_states?data=ping&userid=cakidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:60096 - "GET /all_states?data=ping&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:45812 - "GET /all_states?data=ping&userid=cakidd HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:48162 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:56770 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:56776 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
jarvis-agents-service                 | INFO:     172.18.0.100:56524 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:56538 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-autonomous-learner             | 2026-05-01 08:10:21,557 - INFO - 🔍 Researched: Solidity security vulnerabilities 2025 - RAG=0 results, Web=1 results
jarvis-constitutional-guardian        | INFO:     172.18.0.68:33470 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:32968 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:48678 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.71:43134 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.87:38840 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.96:47742 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.46:51442 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.71:43516 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 08:27:02,270 [STEWARD-SCHED]   Layer gbim_tract_2020: no records found (may not exist yet)
llm2-proxy                            | INFO:     172.18.0.65:54490 - "POST /generate HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:47564 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm2-proxy                            | INFO:     172.18.0.65:46262 - "POST /generate HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:40494 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-i-containers                   | INFO:     172.18.0.96:51030 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.65:54516 - "POST /generate HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:60632 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-delta                      | 2026-05-01 08:36:15,011 [EEG-DELTA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/heartbeat "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:36:15,024 [EEG-DELTA] HTTP Request: GET http://jarvis-steward:8060/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:36:15,024 [EEG-DELTA] 💓 DELTA pulse #1935 — {'gateway': 'UP', 'chroma': 'UP', 'steward': 'UP'}
jarvis-consciousness-bridge           | INFO:     172.18.0.71:45082 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:43242 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:42252 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:35558 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:59440 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:34544 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:52712 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:53900 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:57566 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:41056 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:42564 - "POST /query HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:46888 - "GET /all_states?data=ping&userid=integrated_system HTTP/1.1" 200 OK
jarvis-eeg-theta                      | 2026-05-01 08:30:13,213 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-hilbert-state                  | INFO:     172.18.0.76:40330 - "GET /all_states?data=ping&userid=cakidd HTTP/1.1" 200 OK
jarvis-eeg-theta                      | 2026-05-01 08:31:13,232 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-69dgm-bridge                   |   • Spiritual heritage alignment assessment
jarvis-69dgm-bridge                   |   • Historical user pattern analysis
jarvis-69dgm-bridge                   |   • Multi-dimensional risk scoring
jarvis-69dgm-bridge                   |   • Constitutional enforcement integration
jarvis-69dgm-bridge                   | 
llm12-proxy                           | INFO:     172.18.0.100:55226 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | Status: OPERATIONAL
jarvis-constitutional-guardian        | INFO:     172.18.0.68:50604 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | Ready to gate all main-brain traffic through knowledge-grounded safety.
jarvis-auth-api                       | INFO:     127.0.0.1:57020 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | ╚════════════════════════════════════════════════════════════════╝
jarvis-69dgm-bridge                   |     
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:57698 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:35720 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 08:27:02,283 [STEWARD-SCHED] Layer gbim_block_group_2020 query failed: relation "gbim_block_group_2020" does not exist
jarvis-mother-protocols               | INFO:     172.18.0.100:38382 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:39588 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:50942 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-beta                       | 2026-05-01 08:32:11,482 [EEG-BETA] 📚 BETA stored doc beta_learn_193_1777624331 — chroma: 201
jarvis-eeg-beta                       | 2026-05-01 08:32:11,494 [EEG-BETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:37:11,495 [EEG-BETA] 📚 BETA pulse #194 — learning: Fayette County WV community resources
jarvis-eeg-beta                       | 2026-05-01 08:37:12,736 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-eeg-beta                       | 2026-05-01 08:37:12,743 [EEG-BETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/msjarvis_docs "HTTP/1.1 200 OK"
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:52108 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:08:37,271 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Creative): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:40764 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.65:33140 - "POST /generate HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:47456 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:56284 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:38262 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:36288 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:36910 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:48982 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:55024 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     Application startup complete.
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:43930 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.65:43578 - "POST /generate HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:39984 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.100:43604 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm1-proxy                            | INFO:     172.18.0.65:49202 - "POST /generate HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:➡️ Request GET /health
llm1-proxy                            | INFO:     172.18.0.100:45436 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:Fifth DGM health check; service is healthy.
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:⬅️ Response GET /health status=200
jarvis-fifth-dgm                      | INFO:     172.18.0.100:56798 - "GET /health HTTP/1.1" 200 OK
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:➡️ Request POST /analyze
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 consciousness_filter (RAG+WOAH) received len=0
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 (RAG+WOAH) decision={'accept': False, 'reason': 'Too short'}
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:🧠 (RAG+WOAH) returning result={'consciousness_decision': 'NO', 'action': 'discarded', 'reason': 'Too short'}
jarvis-fifth-dgm                      | INFO:ms_jarvis_fifth_dgm_orchestrator:⬅️ Response POST /analyze status=200
jarvis-fifth-dgm                      | INFO:     172.18.0.100:56814 - "POST /analyze HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:57284 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:52778 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:35980 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:51320 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:59682 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:58570 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:57142 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:36020 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:36548 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-beta                       | 2026-05-01 08:37:12,788 [EEG-BETA] HTTP Request: POST http://jarvis-ollama:11434/api/embed "HTTP/1.1 200 OK"
jarvis-hippocampus                    | INFO:     172.18.0.96:60388 - "POST /store HTTP/1.1" 200 OK
jarvis-eeg-delta                      | 2026-05-01 08:36:15,043 [EEG-DELTA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:36:45,068 [EEG-DELTA] HTTP Request: GET http://jarvis-unified-gateway:8001/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:36:45,073 [EEG-DELTA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/heartbeat "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:36:45,088 [EEG-DELTA] HTTP Request: GET http://jarvis-steward:8060/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:36:45,088 [EEG-DELTA] 💓 DELTA pulse #1936 — {'gateway': 'UP', 'chroma': 'UP', 'steward': 'UP'}
jarvis-eeg-delta                      | 2026-05-01 08:36:45,102 [EEG-DELTA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:37:15,127 [EEG-DELTA] HTTP Request: GET http://jarvis-unified-gateway:8001/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:37:15,134 [EEG-DELTA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/heartbeat "HTTP/1.1 200 OK"
jarvis-consciousness-bridge           | INFO:     172.18.0.87:46628 - "GET /health HTTP/1.1" 200 OK
jarvis-chroma                         | ==========
jarvis-consciousness-bridge           | INFO:     172.18.0.96:57244 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:38244 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:52356 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.101:47186 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:55676 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:36104 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
llm1-proxy                            | INFO:     172.18.0.65:59652 - "POST /generate HTTP/1.1" 200 OK
jarvis-eeg-delta                      | 2026-05-01 08:37:15,149 [EEG-DELTA] HTTP Request: GET http://jarvis-steward:8060/health "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:31:13,247 [EEG-THETA] 🧠 THETA pulse #965 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:31:13,259 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:32:13,281 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:32:13,294 [EEG-THETA] 🧠 THETA pulse #966 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:32:13,308 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-qualia-engine                  | INFO:     172.18.0.96:43512 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:57982 - "GET /health HTTP/1.1" 200 OK
jarvis-fractal-consciousness          | INFO:     172.18.0.100:36912 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm2-proxy                            | INFO:     172.18.0.65:38498 - "POST /generate HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:41462 - "GET /health HTTP/1.1" 200 OK
llm2-proxy                            | INFO:     172.18.0.100:53168 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:49802 - "GET /health HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:__main__:✅ DeepSeek Coder: 755 chars via http://llm9-proxy:8209/generate
jarvis-i-containers                   | INFO:     172.18.0.96:48170 - "GET /health HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:httpx:HTTP Request: POST http://llm4-proxy:8204/generate "HTTP/1.1 200 OK"
jarvis-crypto-policy                  | INFO:     127.0.0.1:53410 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:41608 - "GET /health HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:__main__:✅ StableLM: 347 chars via http://llm4-proxy:8204/generate
jarvis-20llm-production               | INFO:__main__:✅ Complete: 8/8 responded within budget (elapsed=24.6s)
jarvis-20llm-production               | INFO:     172.18.0.100:34424 - "POST /quick_chat HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:     172.18.0.1:35500 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:58358 - "GET / HTTP/1.1" 404 Not Found
llm7-proxy                            | INFO:     172.18.0.100:45278 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:42,298 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:42,319 INFO aaacpe-scraper:   HTML WV Gazette-Mail: +1
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:44,678 INFO httpx: HTTP Request: GET https://governor.wv.gov/News "HTTP/1.1 307 Temporary Redirect"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:44,930 INFO httpx: HTTP Request: GET https://governor.wv.gov/news "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:44,965 INFO aaacpe-scraper:   HTML Governor's Office: +0
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:47,533 INFO httpx: HTTP Request: GET https://www.wvnews.com "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:48,150 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:48,409 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
llm13-proxy                           | INFO:     172.18.0.65:49066 - "POST /generate HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:56724 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.100:54790 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
llm13-proxy                           | INFO:     172.18.0.65:49966 - "POST /generate HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.100:60594 - "GET /health HTTP/1.1" 200 OK
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-constitutional-guardian        | INFO:     172.18.0.68:55936 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:54190 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:54896 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:58826 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:40534 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-eeg-theta                      | 2026-05-01 08:33:13,329 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:33:13,368 [EEG-THETA] 🧠 THETA pulse #967 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:33:13,374 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-stewardship-scheduler          | LINE 1: SELECT id::text, last_verified FROM gbim_block_group_2020 WH...
jarvis-eeg-theta                      | 2026-05-01 08:34:13,384 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-stewardship-scheduler          |                                             ^
jarvis-redis                          | 149786:C 01 May 2026 08:30:28.025 * DB saved on disk
jarvis-stewardship-scheduler          | 
jarvis-steward                        | INFO:     172.18.0.46:45686 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 08:27:02,283 [STEWARD-SCHED]   Layer gbim_block_group_2020: no records found (may not exist yet)
jarvis-crypto-policy                  | INFO:     127.0.0.1:41862 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:32808 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:51072 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:35222 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:33676 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:54240 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.1:39514 - "GET / HTTP/1.1" 404 Not Found
jarvis-rag-server                     | INFO:     172.18.0.79:55526 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:47744 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:42132 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.1:54910 - "GET / HTTP/1.1" 404 Not Found
jarvis-rag-server                     | INFO:     172.18.0.79:43064 - "POST /query HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-rag-server                     | INFO:     172.18.0.79:58326 - "POST /query HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:48,696 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-rag-server                     | INFO:     172.18.0.79:44236 - "POST /query HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:48,916 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:49,005 INFO aaacpe-scraper:   HTML WV News: +4
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:51,769 INFO httpx: HTTP Request: GET https://goldenseal.wvculture.org "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:52,106 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:52,302 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:52,312 INFO aaacpe-scraper:   HTML Goldenseal Site: +2
jarvis-autonomous-learner             | 2026-05-01 08:10:21,557 - INFO - 💡 Cycle complete - Next in 5 minutes
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-consciousness-bridge           | INFO:     172.18.0.71:48214 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:60870 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:35814 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:45536 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:44992 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:34748 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:38800 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:35176 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:33688 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:45794 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:60068 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:60074 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:60318 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:60910 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:57622 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:36808 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:39616 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:08:37,272 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Technical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-crypto-policy                  | INFO:     127.0.0.1:38066 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:08:37,272 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Empathetic): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 02:08:37,272 - __main__ - INFO - ✅ Swarm complete: 4/4 agents responded
jarvis-main-brain                     | INFO:     127.0.0.1:47084 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-beta                       | 2026-05-01 08:37:12,900 [EEG-BETA] HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/f9152993-c774-47ef-8760-63f7dc50e747/add "HTTP/1.1 201 Created"
jarvis-main-brain                     | INFO:     127.0.0.1:56796 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-beta                       | 2026-05-01 08:37:12,901 [EEG-BETA] 📚 BETA stored doc beta_learn_194_1777624632 — chroma: 201
jarvis-eeg-beta                       | 2026-05-01 08:37:12,910 [EEG-BETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-agents-service                 | INFO:     172.18.0.100:36116 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-judge-ethics                   | INFO:     172.18.0.100:36364 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:45752 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-ethics                   | INFO:     172.18.0.100:35984 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.1:55124 - "GET / HTTP/1.1" 404 Not Found
jarvis-judge-ethics                   | INFO:     172.18.0.100:40162 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:60454 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:45244 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:34554 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.1:37422 - "GET / HTTP/1.1" 404 Not Found
jarvis-rag-server                     | INFO:     172.18.0.79:59280 - "POST /query HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.100:35586 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.65:60882 - "POST /generate HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm1-proxy                            | INFO:     172.18.0.65:35448 - "POST /generate HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:55130 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.100:37544 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm2-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm2-proxy                            | INFO:     172.18.0.65:53340 - "POST /generate HTTP/1.1" 200 OK
jarvis-woah                           | INFO:woah_service:🔬 Running WOAH optimization...
jarvis-hippocampus                    | INFO:     172.18.0.96:45370 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:45370 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:54638 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:54638 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:41498 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:41498 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:58944 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:58944 - "POST /store HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:59108 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:37774 - "POST /store HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:37416 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:08:37,273 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 02:08:37] "POST /swarm/query HTTP/1.1" 200 -
jarvis-steward                        | INFO:     172.18.0.46:50460 - "GET /health HTTP/1.1" 200 OK
jarvis-chroma                         | 
jarvis-contract-forge                 | INFO:     172.18.0.101:49446 - "GET /health HTTP/1.1" 200 OK
jarvis-chroma                         | persist_path: "/data"
jarvis-contract-forge                 | INFO:     172.18.0.100:56736 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.100:55674 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     Uvicorn running on http://0.0.0.0:7009 (Press CTRL+C to quit)
jarvis-consciousness-bridge           | INFO:     172.18.0.96:42660 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:46778 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:40794 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.1:46090 - "GET /openapi.json HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:50052 - "GET /health HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.1:34978 - "GET /openapi.json HTTP/1.1" 200 OK
jarvis-69dgm-bridge                   | INFO:     172.18.0.100:44050 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:51628 - "POST /query HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.87:34632 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.64:57502 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.18:57792 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.96:58856 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.46:60478 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.71:57644 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.87:35570 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.96:56880 - "GET /health HTTP/1.1" 200 OK
jarvis-neurobiological-master         | INFO:     172.18.0.46:58278 - "POST /eeg_pulse HTTP/1.1" 200 OK
jarvis-redis                          | 149786:C 01 May 2026 08:30:28.026 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
jarvis-qualia-engine                  | INFO:     172.18.0.96:49510 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 1:M 01 May 2026 08:30:28.110 * Background saving terminated with success
jarvis-woah                           | INFO:woah_service:✅ WOAH optimization complete for 10 services
jarvis-redis                          | 1:M 01 May 2026 08:35:29.025 * 100 changes in 300 seconds. Saving...
jarvis-woah                           | INFO:     172.18.0.76:35994 - "POST /optimize_woah?ueid=integrated_system HTTP/1.1" 200 OK
jarvis-redis                          | 1:M 01 May 2026 08:35:29.025 * Background saving started by pid 149846
jarvis-crypto-policy                  | INFO:     127.0.0.1:59684 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:58494 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:25:11,855 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 02:25:11] "GET /health HTTP/1.1" 200 -
jarvis-swarm-intelligence             | 2026-05-01 02:25:13,684 - __main__ - INFO - 🐝 Swarm Query #11: hello...
jarvis-swarm-intelligence             | 2026-05-01 02:25:13,685 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Analytical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 02:25:13,685 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Creative): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 02:25:13,686 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Technical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 02:25:13,686 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Empathetic): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 02:25:13,686 - __main__ - INFO - ✅ Swarm complete: 4/4 agents responded
jarvis-swarm-intelligence             | 2026-05-01 02:25:13,686 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 02:25:13] "POST /swarm/query HTTP/1.1" 200 -
jarvis-swarm-intelligence             | 2026-05-01 02:43:58,371 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 02:43:58] "GET /health HTTP/1.1" 200 -
jarvis-hilbert-state                  | INFO:     172.18.0.76:40336 - "GET /all_states?data=ping&userid=integrated_system HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:34568 - "GET /health HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:44858 - "GET /all_states?data=ping&userid=cakidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:44874 - "GET /all_states?data=ping&userid=integrated_system HTTP/1.1" 200 OK
jarvis-judge-ethics                   | INFO:     172.18.0.100:60302 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-ethics                   | INFO:     172.18.0.100:48378 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-delta                      | 2026-05-01 08:37:15,150 [EEG-DELTA] 💓 DELTA pulse #1937 — {'gateway': 'UP', 'chroma': 'UP', 'steward': 'UP'}
jarvis-eeg-delta                      | 2026-05-01 08:37:15,166 [EEG-DELTA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:37:45,215 [EEG-DELTA] HTTP Request: GET http://jarvis-unified-gateway:8001/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:37:45,222 [EEG-DELTA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/heartbeat "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:37:45,236 [EEG-DELTA] HTTP Request: GET http://jarvis-steward:8060/health "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:37:45,236 [EEG-DELTA] 💓 DELTA pulse #1938 — {'gateway': 'UP', 'chroma': 'UP', 'steward': 'UP'}
llm1-proxy                            | INFO:     172.18.0.65:37644 - "POST /generate HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.100:36138 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.100:45096 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-brain-orchestrator             | INFO:     127.0.0.1:59262 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:54674 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:56926 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:56126 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:51276 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:43134 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 149846:C 01 May 2026 08:35:29.043 * DB saved on disk
jarvis-redis                          | 149846:C 01 May 2026 08:35:29.044 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
jarvis-main-brain                     | INFO:     127.0.0.1:36444 - "GET /health HTTP/1.1" 200 OK
jarvis-redis                          | 1:M 01 May 2026 08:35:29.126 * Background saving terminated with success
jarvis-main-brain                     | INFO:     127.0.0.1:58180 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:40398 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:17:06 | 200 |  1.595438453s |     172.18.0.64 | POST     "/api/chat"
jarvis-steward                        | INFO:     172.18.0.46:39214 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | time=2026-05-01T08:17:06.772Z level=INFO source=server.go:1751 msg="llm embedding error: the input length exceeds the context length"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:17:06 | 200 |   18.341579ms |     172.18.0.64 | POST     "/api/embed"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:20:22 | 200 |   20.759905ms |     172.18.0.60 | POST     "/api/embeddings"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:20:23 | 200 |  579.209392ms |     172.18.0.79 | POST     "/api/chat"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:20:30 | 200 |    1.659438ms |     172.18.0.10 | GET      "/api/tags"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:22:08 | 200 |  1.204563584s |     172.18.0.64 | POST     "/api/chat"
jarvis-consciousness-bridge           | INFO:     172.18.0.87:52776 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:36586 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:40060 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-ethics                   | INFO:     172.18.0.100:48730 - "GET /health HTTP/1.1" 200 OK
jarvis-judge-ethics                   | INFO:     172.18.0.100:55684 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-theta                      | 2026-05-01 08:34:13,387 [EEG-THETA] 🧠 THETA pulse #968 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:34:13,393 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-delta                      | 2026-05-01 08:37:45,251 [EEG-DELTA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-auth-api                       | INFO:     127.0.0.1:48954 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:33430 - "POST /query HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:49740 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.1:40984 - "GET / HTTP/1.1" 404 Not Found
jarvis-auth-api                       | INFO:     127.0.0.1:56946 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:58902 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:54432 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.65:40856 - "POST /generate HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:37608 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:37774 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:59646 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:59646 - "POST /store HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:59044 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:35326 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:60848 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:49640 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:56584 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:44456 - "GET /health HTTP/1.1" 200 OK
jarvis-mother-protocols               | INFO:     172.18.0.100:56414 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:56772 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:59832 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:53462 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:54344 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:39100 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:51366 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:58716 - "GET /health HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:34668 - "GET /all_states?data=ping&userid=cakidd HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:54,723 INFO httpx: HTTP Request: GET https://wvexplorer.com "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:55,072 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:55,293 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:55,500 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
llm13-proxy                           | INFO:     172.18.0.65:50568 - "POST /generate HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.100:58466 - "GET /health HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:60570 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:36168 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:47306 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.1:46308 - "GET / HTTP/1.1" 404 Not Found
jarvis-rag-server                     | INFO:     172.18.0.79:33228 - "POST /query HTTP/1.1" 200 OK
jarvis-rag-server                     | INFO:     172.18.0.79:41594 - "POST /query HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:34046 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:46278 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-hippocampus                    | INFO:     172.18.0.96:55038 - "POST /store HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.100:46620 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:55038 - "POST /store HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:49970 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:32860 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:41486 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:59866 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:56732 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:35144 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:34968 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:36416 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:45490 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:48694 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:58052 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:50992 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:58270 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:53104 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:53646 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:47782 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:35534 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:53468 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:43628 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:57596 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:56096 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:45738 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:50152 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:34112 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:55046 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:51132 - "GET /health HTTP/1.1" 200 OK
jarvis-qualia-engine                  | INFO:     172.18.0.96:44406 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.100:51258 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm12-proxy                           | INFO:     172.18.0.65:34656 - "POST /generate HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:39956 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm9-proxy                            | INFO:     172.18.0.65:42260 - "POST /generate HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:40282 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:57970 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:60662 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:39104 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:50466 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:59686 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:36488 - "GET /health HTTP/1.1" 200 OK
jarvis-eeg-theta                      | 2026-05-01 08:35:13,401 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:35:13,412 [EEG-THETA] 🧠 THETA pulse #969 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:35:13,418 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:36:13,435 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-stewardship-scheduler          | 2026-05-01 08:27:02,296 [STEWARD-SCHED]   local_resources: 48 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 08:27:04,084 [STEWARD-SCHED]   wv_parcels: 500 records, 0 overdue, 0 warn
jarvis-20llm-production               | INFO:     172.18.0.1:59792 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:46544 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:50458 - "GET / HTTP/1.1" 404 Not Found
jarvis-chroma                         | 
jarvis-chroma                         | ==========
jarvis-chroma                         | 
jarvis-chroma                         | 
jarvis-chroma                         |                 (((((((((    (((((####
jarvis-chroma                         |              ((((((((((((((((((((((#########
jarvis-brain-orchestrator             | INFO:     127.0.0.1:51554 - "GET /health HTTP/1.1" 200 OK
jarvis-chroma                         |            ((((((((((((((((((((((((###########
jarvis-crypto-policy                  | INFO:     127.0.0.1:40036 - "GET /health HTTP/1.1" 200 OK
jarvis-chroma                         |          ((((((((((((((((((((((((((############
jarvis-chroma                         |         (((((((((((((((((((((((((((#############
jarvis-chroma                         |         (((((((((((((((((((((((((((#############
jarvis-chroma                         |          (((((((((((((((((((((((((##############
jarvis-chroma                         |          ((((((((((((((((((((((((##############
jarvis-chroma                         |            (((((((((((((((((((((#############
jarvis-autonomous-learner             | 2026-05-01 08:15:21,557 - INFO - 🧠 LEARNING CYCLE #142 - Uptime: 0d 11h 48m
jarvis-chroma                         |              ((((((((((((((((##############
jarvis-autonomous-learner             | 2026-05-01 08:15:21,557 - INFO -    Topic: Ethereum layer 2 scaling solutions
jarvis-chroma                         |                 (((((((((    #########
jarvis-autonomous-learner             | 2026-05-01 08:15:21,557 - INFO -    Stats: Stored=0, Deduped=0
jarvis-chroma                         | 
jarvis-chroma                         | Saving data to: /data
jarvis-chroma                         | Connect to Chroma at: http://localhost:8000
jarvis-chroma                         | Getting started guide: https://docs.trychroma.com/docs/overview/getting-started
jarvis-i-containers                   | INFO:     172.18.0.96:46332 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:48186 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:58088 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:54522 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:60984 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:42974 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:49484 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:52032 - "GET /health HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.96:44810 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-constitutional-guardian        | INFO:     172.18.0.68:39110 - "POST /constitutional/check HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.100:36940 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.100:34602 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.100:39674 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:36886 - "POST /store HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:47094 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:40926 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:36370 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:34634 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:54070 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:48246 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:47258 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:56098 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:58830 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:39876 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
jarvis-eeg-theta                      | 2026-05-01 08:36:13,447 [EEG-THETA] 🧠 THETA pulse #970 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:36:13,461 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:37:13,479 [EEG-THETA] HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections "HTTP/1.1 200 OK"
jarvis-eeg-theta                      | 2026-05-01 08:37:13,485 [EEG-THETA] 🧠 THETA pulse #971 — 50 collections in memory
jarvis-eeg-theta                      | 2026-05-01 08:37:13,496 [EEG-THETA] HTTP Request: POST http://jarvis-neurobiological-master:8018/eeg_pulse "HTTP/1.1 200 OK"
jarvis-chroma                         | 
jarvis-stewardship-scheduler          | 2026-05-01 08:27:04,282 [STEWARD-SCHED]   wv_buildings: 500 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 08:27:04,292 [STEWARD-SCHED]   wv_counties: 55 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 08:27:04,306 [STEWARD-SCHED]   wv_municipalities: 439 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 08:27:04,323 [STEWARD-SCHED]   wv_fire_stations: 500 records, 0 overdue, 0 warn
jarvis-stewardship-scheduler          | 2026-05-01 08:27:04,338 [STEWARD-SCHED]   wv_hospitals: 65 records, 0 overdue, 0 warn
llm12-proxy                           | INFO:     172.18.0.100:36860 - "GET /health HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 08:27:04,352 [STEWARD-SCHED]   wv_ems_stations: 53 records, 0 overdue, 0 warn
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-mother-protocols               | INFO:     172.18.0.100:33372 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:36886 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:34694 - "POST /store HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.100:36994 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:44:00,297 - __main__ - INFO - 🐝 Swarm Query #12: MS. Allis, What's going on?...
jarvis-contract-forge                 | INFO:     172.18.0.100:47888 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:44:00,299 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Analytical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 02:44:00,299 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Creative): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 02:44:00,300 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Technical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:43356 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.65:54064 - "POST /generate HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:38524 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.100:57886 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm7-proxy                            | INFO:     172.18.0.65:45354 - "POST /generate HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.100:41828 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm7-proxy                            | INFO:     172.18.0.65:34196 - "POST /generate HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.100:39790 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:33998 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm7-proxy                            | INFO:     172.18.0.65:48194 - "POST /generate HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:     172.18.0.1:45736 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:54860 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:43154 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:35938 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:53348 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:60084 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:54978 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:37874 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:39320 - "GET / HTTP/1.1" 404 Not Found
jarvis-hippocampus                    | INFO:     172.18.0.96:34694 - "POST /store HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.65:48108 - "POST /generate HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:57954 - "GET /all_states?data=ping&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:58134 - "GET /all_states?data=ping&userid=cakidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:58140 - "GET /all_states?data=ping&userid=integrated_system HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:51108 - "GET /all_states?data=What+rental+help+exists+near+me%3F&userid=cakidd HTTP/1.1" 200 OK
jarvis-hilbert-state                  | INFO:     172.18.0.76:34438 - "GET /all_states?data=What+rental+help+exists+near+me%3F&userid=integrated_system HTTP/1.1" 200 OK
jarvis-chroma                         | ☁️ To deploy your DB - try Chroma Cloud!
jarvis-chroma                         | - Sign up: https://trychroma.com/signup
jarvis-autonomous-learner             | 2026-05-01 08:15:21,652 - INFO - HTTP Request: POST http://jarvis-rag-server:8003/query "HTTP/1.1 200 OK"
jarvis-chroma                         | - Copy your data to Cloud: chroma copy --to-cloud --all
jarvis-autonomous-learner             | 2026-05-01 08:15:22,690 - INFO - HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
llm13-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm13-proxy                           | INFO:orca-mini-proxy:orca_mini_ollama_status
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:48904 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:41184 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:49576 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:39242 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:52902 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:34408 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:49278 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:57258 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | time=2026-05-01T08:22:08.129Z level=INFO source=server.go:1751 msg="llm embedding error: the input length exceeds the context length"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:22:08 | 200 |   21.953836ms |     172.18.0.64 | POST     "/api/embed"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:23:55 | 200 |    4.942275ms |      172.18.0.1 | GET      "/api/tags"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:25:23 | 200 |   26.412914ms |     172.18.0.60 | POST     "/api/embeddings"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:25:24 | 200 |  1.243574333s |     172.18.0.79 | POST     "/api/chat"
jarvis-crypto-policy                  | INFO:     127.0.0.1:53618 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:44974 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.65:48380 - "POST /generate HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:48026 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
jarvis-i-containers                   | INFO:     172.18.0.96:41806 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:43704 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:58600 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:45834 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:41768 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:52578 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:44694 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:46650 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.100:42858 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:46872 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:45436 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:33952 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:39348 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:49616 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:40864 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:58894 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:36294 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:39040 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:27:10 | 200 |  1.750572952s |     172.18.0.64 | POST     "/api/chat"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:55,734 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-ollama                         | time=2026-05-01T08:27:10.052Z level=INFO source=server.go:1751 msg="llm embedding error: the input length exceeds the context length"
jarvis-crypto-policy                  | INFO:     127.0.0.1:41014 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:55006 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:48316 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.71:58848 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:48042 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:38572 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:48594 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
jarvis-auth-api                       | INFO:     127.0.0.1:39096 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:35314 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:60138 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.65:47764 - "POST /generate HTTP/1.1" 200 OK
llm7-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm1-proxy                            | INFO:     172.18.0.100:55934 - "GET /health HTTP/1.1" 200 OK
llm7-proxy                            | INFO:     172.18.0.65:51308 - "POST /generate HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm1-proxy                            | INFO:     172.18.0.65:49684 - "POST /generate HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:49456 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:50504 - "GET /health HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:56240 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:60562 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.100:37672 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:55,956 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-contract-forge                 | INFO:     172.18.0.100:58626 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:56,173 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-contract-forge                 | INFO:     172.18.0.100:58750 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.100:41742 - "GET /health HTTP/1.1" 200 OK
jarvis-contract-forge                 | INFO:     172.18.0.100:38434 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:33270 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:51798 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:39794 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:43036 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:55108 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     172.18.0.1:49836 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     172.18.0.1:49852 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     172.18.0.1:49860 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     172.18.0.1:49874 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:45520 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 02:44:00,301 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Empathetic): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
llm1-proxy                            | INFO:     172.18.0.100:33504 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm1-proxy                            | INFO:     172.18.0.65:40008 - "POST /generate HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.100:52884 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm1-proxy                            | INFO:     172.18.0.65:53218 - "POST /generate HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.100:34402 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm1-proxy                            | INFO:     172.18.0.65:59296 - "POST /generate HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:33302 - "POST /store HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:41944 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:33302 - "POST /store HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-hippocampus                    | INFO:     172.18.0.96:52426 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:52426 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:60250 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:60250 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:59636 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:59636 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:32830 - "POST /store HTTP/1.1" 200 OK
llm13-proxy                           | INFO:     172.18.0.65:53644 - "POST /generate HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:32830 - "POST /store HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.100:59524 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:50584 - "POST /store HTTP/1.1" 200 OK
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:46742 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.100:58948 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-blood-brain-barrier            | INFO:     172.18.0.96:44406 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.65:57124 - "POST /generate HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.100:47226 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | time=2026-05-01T08:27:10.052Z level=INFO source=server.go:1751 msg="llm embedding error: the input length exceeds the context length"
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm1-proxy                            | INFO:     172.18.0.65:35992 - "POST /generate HTTP/1.1" 200 OK
llm1-proxy                            | INFO:     172.18.0.100:49472 - "GET /health HTTP/1.1" 200 OK
llm1-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm1-proxy                            | INFO:     172.18.0.65:33784 - "POST /generate HTTP/1.1" 200 OK
jarvis-stewardship-scheduler          | 2026-05-01 08:27:04,512 [STEWARD-SCHED]   building_profile: 500 records, 0 overdue, 0 warn
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
jarvis-autonomous-learner             | 2026-05-01 08:15:22,691 - INFO - 🔍 Researched: Ethereum layer 2 scaling solutions - RAG=0 results, Web=1 results
jarvis-autonomous-learner             | 2026-05-01 08:15:22,691 - INFO - 💡 Cycle complete - Next in 5 minutes
jarvis-agents-service                 | INFO:     172.18.0.100:35328 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:57914 - "GET /health HTTP/1.1" 200 OK
jarvis-agents-service                 | INFO:     172.18.0.100:57920 - "POST /query/enhance HTTP/1.1" 200 OK
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
jarvis-agents-service                 | INFO:     172.18.0.100:40084 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:50584 - "POST /store HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:33340 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:41078 - "POST /store HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:53762 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:41078 - "POST /store HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:46442 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:34682 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:41376 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:34504 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:50014 - "GET /health HTTP/1.1" 200 OK
nbb_spiritual_maternal_integration-1  | INFO:     172.18.0.100:57708 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.87:59448 - "GET /health HTTP/1.1" 200 OK
jarvis-crypto-policy                  | INFO:     127.0.0.1:51604 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:45560 - "GET /health HTTP/1.1" 200 OK
jarvis-20llm-production               | INFO:     172.18.0.1:49620 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:49262 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:50720 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:56876 - "GET / HTTP/1.1" 404 Not Found
jarvis-20llm-production               | INFO:     172.18.0.1:38636 - "GET / HTTP/1.1" 404 Not Found
jarvis-chroma                         | 
jarvis-chroma                         | OpenTelemetry is not enabled because it is missing from the config.
jarvis-swarm-intelligence             | 2026-05-01 02:44:00,301 - __main__ - INFO - ✅ Swarm complete: 4/4 agents responded
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-swarm-intelligence             | 2026-05-01 02:44:00,301 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 02:44:00] "POST /swarm/query HTTP/1.1" 200 -
llm12-proxy                           | INFO:     172.18.0.65:34446 - "POST /generate HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.100:45802 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 03:58:08,424 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 03:58:08] "GET /health HTTP/1.1" 200 -
jarvis-ollama                         | [GIN] 2026/05/01 - 08:27:10 | 400 |   10.615043ms |     172.18.0.64 | POST     "/api/embed"
jarvis-swarm-intelligence             | 2026-05-01 03:58:11,253 - __main__ - INFO - 🐝 Swarm Query #13: Hello Ms. Jarvis, the GIS state coordinator is con...
jarvis-ollama                         | [GIN] 2026/05/01 - 08:30:24 | 200 |   36.015912ms |     172.18.0.60 | POST     "/api/embeddings"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:30:25 | 200 |  1.107859652s |     172.18.0.79 | POST     "/api/chat"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:32:11 | 200 |  1.220232139s |     172.18.0.64 | POST     "/api/chat"
jarvis-ollama                         | time=2026-05-01T08:32:11.340Z level=INFO source=server.go:1751 msg="llm embedding error: the input length exceeds the context length"
jarvis-ollama                         | [GIN] 2026/05/01 - 08:32:11 | 200 |    43.45476ms |     172.18.0.64 | POST     "/api/embed"
jarvis-i-containers                   | INFO:     172.18.0.96:32924 - "GET /health HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:37754 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:37754 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:50182 - "POST /store HTTP/1.1" 200 OK
jarvis-hippocampus                    | INFO:     172.18.0.96:50182 - "POST /store HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 03:58:11,255 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Analytical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 03:58:11,255 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Creative): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-swarm-intelligence             | 2026-05-01 03:58:11,256 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Technical): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-auth-api                       | INFO:     127.0.0.1:52386 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-agents-service                 | INFO:     172.18.0.100:40098 - "POST /query/enhance HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.65:41068 - "POST /generate HTTP/1.1" 200 OK
jarvis-agents-service                 | ERROR:__main__:Query enhancer error: [Errno 2] No such file or directory: '/home/ms-jarvis/msjarvis-rebuild/services'
llm12-proxy                           | INFO:     172.18.0.100:59416 - "GET /health HTTP/1.1" 200 OK
jarvis-swarm-intelligence             | 2026-05-01 03:58:11,256 - __main__ - ERROR - ❌ Error querying Ms. Egeria (Empathetic): Failed to connect to Ollama. Please check that Ollama is downloaded, running and accessible. https://ollama.com/download
jarvis-ollama                         | [GIN] 2026/05/01 - 08:35:25 | 200 |   20.100083ms |     172.18.0.60 | POST     "/api/embeddings"
jarvis-swarm-intelligence             | 2026-05-01 03:58:11,256 - __main__ - INFO - ✅ Swarm complete: 4/4 agents responded
jarvis-ollama                         | [GIN] 2026/05/01 - 08:35:27 | 200 |  1.145969423s |     172.18.0.79 | POST     "/api/chat"
jarvis-consciousness-bridge           | INFO:     172.18.0.71:33318 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:37:12 | 200 |  1.235108707s |     172.18.0.64 | POST     "/api/chat"
jarvis-consciousness-bridge           | INFO:     172.18.0.87:42164 - "GET /health HTTP/1.1" 200 OK
jarvis-brain-orchestrator             | INFO:     127.0.0.1:57986 - "GET /health HTTP/1.1" 200 OK
jarvis-consciousness-bridge           | INFO:     172.18.0.96:58560 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.65:46910 - "POST /generate HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:60838 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm9-proxy                            | INFO:     172.18.0.65:59192 - "POST /generate HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.100:51656 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:35104 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:36632 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     172.18.0.1:38448 - "GET / HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:33030 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:39898 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:54226 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:49010 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:37986 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:42102 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:20:22,690 - INFO - 🧠 LEARNING CYCLE #143 - Uptime: 0d 11h 53m
jarvis-autonomous-learner             | 2026-05-01 08:20:22,691 - INFO -    Topic: smart contract upgrade patterns
jarvis-autonomous-learner             | 2026-05-01 08:20:22,691 - INFO -    Stats: Stored=0, Deduped=0
jarvis-autonomous-learner             | 2026-05-01 08:20:22,768 - INFO - HTTP Request: POST http://jarvis-rag-server:8003/query "HTTP/1.1 200 OK"
jarvis-autonomous-learner             | 2026-05-01 08:20:23,351 - INFO - HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-autonomous-learner             | 2026-05-01 08:20:23,351 - INFO - 🔍 Researched: smart contract upgrade patterns - RAG=0 results, Web=1 results
jarvis-swarm-intelligence             | 2026-05-01 03:58:11,256 - werkzeug - INFO - 172.18.0.100 - - [01/May/2026 03:58:11] "POST /swarm/query HTTP/1.1" 200 -
jarvis-autonomous-learner             | 2026-05-01 08:20:23,351 - INFO - 💡 Cycle complete - Next in 5 minutes
jarvis-stewardship-scheduler          | 2026-05-01 08:27:04,513 [STEWARD-SCHED] ✅ Cycle complete: {'layers_checked': 10, 'records_checked': 3160, 'pings_fired': 0, 'warnings': 0}
jarvis-autonomous-learner             | 2026-05-01 08:25:23,351 - INFO - 🧠 LEARNING CYCLE #144 - Uptime: 0d 11h 58m
jarvis-autonomous-learner             | 2026-05-01 08:25:23,351 - INFO -    Topic: decentralized autonomous organizations best practices
jarvis-main-brain                     | INFO:     127.0.0.1:38770 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:56234 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:41190 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:53570 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-steward                        | INFO:     172.18.0.46:44862 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:58408 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:48434 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:42286 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:59150 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:60578 - "GET /health HTTP/1.1" 200 OK
jarvis-steward                        | INFO:     172.18.0.46:53488 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:56,392 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-main-brain                     | INFO:     127.0.0.1:53928 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:54442 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:42320 - "GET /health HTTP/1.1" 200 OK
llm9-proxy                            | INFO:     172.18.0.65:32772 - "POST /generate HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:58174 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:25:23,351 - INFO -    Stats: Stored=0, Deduped=0
jarvis-autonomous-learner             | 2026-05-01 08:25:23,425 - INFO - HTTP Request: POST http://jarvis-rag-server:8003/query "HTTP/1.1 200 OK"
jarvis-autonomous-learner             | 2026-05-01 08:25:24,671 - INFO - HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-autonomous-learner             | 2026-05-01 08:25:24,672 - INFO - 🔍 Researched: decentralized autonomous organizations best practices - RAG=0 results, Web=1 results
jarvis-autonomous-learner             | 2026-05-01 08:25:24,672 - INFO - 💡 Cycle complete - Next in 5 minutes
jarvis-autonomous-learner             | 2026-05-01 08:30:24,672 - INFO - 🧠 LEARNING CYCLE #145 - Uptime: 0d 12h 3m
jarvis-autonomous-learner             | 2026-05-01 08:30:24,673 - INFO -    Topic: Appalachian technology adoption challenges
jarvis-autonomous-learner             | 2026-05-01 08:30:24,673 - INFO -    Stats: Stored=0, Deduped=0
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:45468 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:56,605 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:34804 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:56,810 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:57,024 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:57,235 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:57,518 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:57,728 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:58,013 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:58,231 INFO httpx: HTTP Request: POST http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/upsert "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:12:58,252 INFO aaacpe-scraper:   HTML WV Explorer Site: +15
jarvis-aaacpe-scraper                 | 2026-05-01 07:13:00,258 INFO httpx: HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/count?read_level=index_and_wal "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:13:00,258 INFO aaacpe-scraper: ═══ Scrape Complete: +218 new docs | Total in collection: 1426 ═══
jarvis-aaacpe-scraper                 | 2026-05-01 07:13:00,262 INFO httpx: HTTP Request: GET http://jarvis-chroma:8000/api/v2/tenants/default_tenant/databases/default_database/collections/3a193c3b-4743-4267-878d-cacb6c0c3ba2/count?read_level=index_and_wal "HTTP/1.1 200 OK"
jarvis-aaacpe-scraper                 | 2026-05-01 07:13:00,262 INFO apscheduler.executors.default: Job "run_full_scrape (trigger: interval[6:00:00], next run at: 2026-05-01 13:11:55 UTC)" executed successfully
jarvis-auth-api                       | INFO:     127.0.0.1:60422 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:30:24,751 - INFO - HTTP Request: POST http://jarvis-rag-server:8003/query "HTTP/1.1 200 OK"
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:54442 - "GET /health HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:30:25,864 - INFO - HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
jarvis-autonomous-learner             | 2026-05-01 08:30:25,865 - INFO - 🔍 Researched: Appalachian technology adoption challenges - RAG=0 results, Web=1 results
jarvis-autonomous-learner             | 2026-05-01 08:30:25,865 - INFO - 💡 Cycle complete - Next in 5 minutes
jarvis-autonomous-learner             | 2026-05-01 08:35:25,865 - INFO - 🧠 LEARNING CYCLE #146 - Uptime: 0d 12h 8m
jarvis-autonomous-learner             | 2026-05-01 08:35:25,865 - INFO -    Topic: community currency implementation strategies
jarvis-autonomous-learner             | 2026-05-01 08:35:25,865 - INFO -    Stats: Stored=0, Deduped=0
jarvis-main-brain                     | INFO:     127.0.0.1:55726 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:49104 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:48218 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:45466 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:58340 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:32884 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:36320 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:41798 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm12-proxy                           | INFO:     172.18.0.65:39462 - "POST /generate HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.100:52502 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-autonomous-learner             | 2026-05-01 08:35:25,948 - INFO - HTTP Request: POST http://jarvis-rag-server:8003/query "HTTP/1.1 200 OK"
llm12-proxy                           | INFO:     172.18.0.65:49086 - "POST /generate HTTP/1.1" 200 OK
jarvis-ollama                         | time=2026-05-01T08:37:12.776Z level=INFO source=server.go:1751 msg="llm embedding error: the input length exceeds the context length"
llm12-proxy                           | INFO:     172.18.0.100:45078 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:45430 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:54452 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.65:45164 - "POST /generate HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:40138 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.100:55496 - "GET /health HTTP/1.1" 200 OK
jarvis-i-containers                   | INFO:     172.18.0.96:51992 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-i-containers                   | INFO:     172.18.0.96:38418 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.65:42888 - "POST /generate HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:35:27,098 - INFO - HTTP Request: POST http://jarvis-ollama:11434/api/chat "HTTP/1.1 200 OK"
llm12-proxy                           | INFO:     172.18.0.100:35000 - "GET /health HTTP/1.1" 200 OK
jarvis-ollama                         | [GIN] 2026/05/01 - 08:37:12 | 200 |   36.839342ms |     172.18.0.64 | POST     "/api/embed"
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:39778 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:50190 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:37476 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:43100 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:39126 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:41522 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:42210 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:54166 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     172.18.0.1:47670 - "POST /auth/login HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     172.18.0.1:47686 - "GET /auth/me HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     172.18.0.1:47688 - "GET /auth/portal/me/balances HTTP/1.1" 200 OK
jarvis-autonomous-learner             | 2026-05-01 08:35:27,099 - INFO - 🔍 Researched: community currency implementation strategies - RAG=0 results, Web=1 results
jarvis-autonomous-learner             | 2026-05-01 08:35:27,099 - INFO - 💡 Cycle complete - Next in 5 minutes
jarvis-main-brain                     | INFO:     127.0.0.1:57352 - "GET /health HTTP/1.1" 200 OK
jarvis-main-brain                     | INFO:     127.0.0.1:49170 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:39784 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:39148 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:41374 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:37794 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:37798 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:54744 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.65:39302 - "POST /generate HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.100:45192 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
llm12-proxy                           | INFO:     172.18.0.65:43070 - "POST /generate HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.100:54658 - "GET /health HTTP/1.1" 200 OK
llm12-proxy                           | INFO:     172.18.0.65:35320 - "POST /generate HTTP/1.1" 200 OK
llm12-proxy                           | INFO:httpx:HTTP Request: POST http://jarvis-ollama:11434/api/generate "HTTP/1.1 200 OK"
jarvis-auth-api                       | INFO:     127.0.0.1:43154 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:59054 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:40184 - "GET /health HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     172.18.0.1:41382 - "POST /auth/login HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     172.18.0.1:41386 - "GET /auth/me HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     172.18.0.1:41392 - "GET /auth/portal/me/balances HTTP/1.1" 200 OK
jarvis-auth-api                       | INFO:     127.0.0.1:50030 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:54750 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:51902 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:51830 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:45204 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:45212 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:43784 - "GET /health HTTP/1.1" 200 OK
jarvis-aaacpe-rag                     | INFO:     172.18.0.77:35806 - "GET /health HTTP/1.1" 200 OK
(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ 


