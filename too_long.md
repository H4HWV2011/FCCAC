crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ # 1. Check what image jarvis-local-resources-db uses
grep -A 10 "jarvis-local-resources-db:" docker-compose.yml | head -12

# 2. Check if it's running and has PostGIS
docker exec jarvis-local-resources-db psql -U postgres -d msjarvisgis -c "\dx" 2>/dev/null

# 3. Check what tables exist in it
docker exec jarvis-local-resources-db psql -U postgres -d msjarvisgis -c "\dt" 2>/dev/null

# 4. Preview the seed file
head -50 services/seed_local_resources.sql

# 5. Check local-resources-db row counts
docker exec jarvis-local-resources-db psql -U postgres -d msjarvisgis \
  -c "SELECT schemaname, tablename FROM pg_tables WHERE schemaname='public'"
    - MSJARVIS_GIS_URL=postgresql://postgres:postgres@jarvis-local-resources-db:5432/msjarvisgis
    - LOCAL_RESOURCES_DSN=postgresql://postgres:postgres@jarvis-local-resources-db:5432/local_resources
    - REDIS_HOST=jarvis-redis
    - JARVIS_REDIS_PORT=6379
    - JARVIS_PIA_STATUS_URL=http://msjarvis-rebuild-jarvis-pia-status-1:8029/health
    networks:
    - qualia-net
    restart: unless-stopped
    depends_on:
    - jarvis-redis
    - jarvis-chroma
  jarvis-eeg-beta:
                                           List of installed extensions
          Name          | Version |   Schema   |                            Description                            
------------------------+---------+------------+-------------------------------------------------------------------
 dblink                 | 1.2     | public     | connect to other PostgreSQL databases from within a database
 fuzzystrmatch          | 1.1     | public     | determine similarities and distance between strings
 pg_trgm                | 1.6     | public     | text similarity measurement and index searching based on trigrams
 pgcrypto               | 1.3     | public     | cryptographic functions
 plpgsql                | 1.0     | pg_catalog | PL/pgSQL procedural language
 postgis                | 3.4.3   | public     | PostGIS geometry and geography spatial types and functions
 postgis_tiger_geocoder | 3.4.3   | tiger      | PostGIS tiger geocoder and reverse geocoder
 postgis_topology       | 3.4.3   | topology   | PostGIS topology spatial types and functions
(8 rows)

                                       List of relations
  Schema  |                              Name                               | Type  |  Owner   
----------+-----------------------------------------------------------------+-------+----------
 public   | 911centers_wvdem_032819_gcs84                                   | table | postgres
 public   | 911centers_wvdem_032819_gcs84_attrs_raw                         | table | postgres
 public   | 911centers_wvdem_032819_utm83                                   | table | postgres
 public   | 911centers_wvdem_032819_utm83_attrs_raw                         | table | postgres
 public   | amtrackrails_federalrailroadadministration_200210_ll83          | table | postgres
 public   | amtrackrails_federalrailroadadministration_200210_ll83_attrs_ra | table | postgres
 public   | amtrackrails_federalrailroadadministration_200210_utm83         | table | postgres
 public   | amtrackrails_federalrailroadadministration_200210_utm83_attrs_r | table | postgres
 public   | amtrackrails_fra_200210_ll83_attrs_raw                          | table | postgres
 public   | amtrackrails_fra_200210_utm83_attrs_raw                         | table | postgres
 public   | attrs_files_list                                                | table | postgres
 public   | attrs_inventory_detailed                                        | table | postgres
 public   | authority_references                                            | table | postgres
 public   | benefit_case                                                    | table | postgres
 public   | benefit_county_daycare                                          | table | postgres
 public   | benefit_county_medicaid                                         | table | postgres
 public   | benefit_county_medicare                                         | table | postgres
 public   | benefit_county_section8                                         | table | postgres
 public   | benefit_county_snap                                             | table | postgres
 public   | benefit_county_ssi                                              | table | postgres
 public   | benefit_county_tanf                                             | table | postgres
 public   | benefit_county_utility20                                        | table | postgres
 public   | benefit_county_wic                                              | table | postgres
 public   | bldg_join__floodplainstructuresatrisk_usarmycorpsofengineers_20 | table | postgres
 public   | bldg_join__hospitals                                            | table | postgres
 public   | blockgroups_census_2000_ll83                                    | table | postgres
 public   | blockgroups_census_2000_ll83_attrs_raw                          | table | postgres
 public   | blockgroups_census_2000_utm83                                   | table | postgres
 public   | blockgroups_census_2000_utm83_attrs_raw                         | table | postgres
 public   | blockgroups_census_201111_gcs83                                 | table | postgres
 public   | blockgroups_census_201111_gcs83_attrs_raw                       | table | postgres
 public   | blockgroups_census_201111_utm83                                 | table | postgres
 public   | blockgroups_census_201111_utm83_attrs_raw                       | table | postgres
 public   | blockgroups_census_2020_utm83                                   | table | postgres
 public   | blockgroups_census_2020_utm83_attrs_raw                         | table | postgres
 public   | blockgroups_census_2020_utm83_full                              | table | postgres
 public   | blockgroups_census_2020_wma84                                   | table | postgres
 public   | blockgroups_census_2020_wma84_attrs_raw                         | table | postgres
 public   | blocks_census_2020_utm83                                        | table | postgres
 public   | blocks_census_2020_utm83_attrs_raw                              | table | postgres
 public   | blocks_census_2020_utm83_full                                   | table | postgres
 public   | blocks_census_2020_wma84                                        | table | postgres
 public   | blocks_census_2020_wma84_attrs_raw                              | table | postgres
 public   | boundaryappalachianbasin_wvges_1996_utm83                       | table | postgres
 public   | boundaryappalachianbasin_wvges_1996_utm83_attrs_raw             | table | postgres
 public   | boundaryappalachianbasin_wvges_1996_wma84                       | table | postgres
 public   | bridges                                                         | table | postgres
 public   | bridges_attrs_raw                                               | table | postgres
 public   | building_flood_risk                                             | table | postgres
 public   | building_metric_stage                                           | table | postgres
 public   | buildings                                                       | table | postgres
 public   | calderl_reg_ll83                                                | table | postgres
 public   | calderl_reg_ll83_attrs_raw                                      | table | postgres
 public   | citieswithpopulation_2500_census_201111_gcs83                   | table | postgres
 public   | citieswithpopulation_2500_census_201111_gcs83_attrs_raw         | table | postgres
 public   | citieswithpopulation_2500_census_201111_utm83                   | table | postgres
 public   | citieswithpopulation_2500_census_201111_utm83_attrs_raw         | table | postgres
 public   | citieswithpopulationover10k_census_201111_gcs83                 | table | postgres
 public   | citieswithpopulationover10k_census_201111_gcs83_attrs_raw       | table | postgres
 public   | citieswithpopulationover10k_uscensus_1990_ll83                  | table | postgres
 public   | citieswithpopulationover10k_uscensus_1990_ll83_attrs_raw        | table | postgres
 public   | citieswithpopulationover10k_uscensus_1990_utm83                 | table | postgres
 public   | citieswithpopulationover10k_uscensus_1990_utm83_attrs_raw       | table | postgres
 public   | citieswithpopulationover2500_uscensus_1990_ll83                 | table | postgres
 public   | citieswithpopulationover2500_uscensus_1990_ll83_attrs_raw       | table | postgres
 public   | citieswithpopulationsover10k_census_2020_utm83                  | table | postgres
 public   | citieswithpopulationsover10k_census_2020_utm83_attrs_raw        | table | postgres
 public   | citieswithpopulationsover10k_census_2020_wma84                  | table | postgres
 public   | citieswithpopulationsover10k_census_2020_wma84_attrs_raw        | table | postgres
 public   | citieswithpopulationsover2500_census_2020_utm83                 | table | postgres
 public   | citieswithpopulationsover2500_census_2020_utm83_attrs_raw       | table | postgres
 public   | citieswithpopulationsover2500_census_2020_wma84                 | table | postgres
 public   | citieswithpopulationsover2500_census_2020_wma84_attrs_raw       | table | postgres
 public   | citieswithpopulatoinover2500_uscensus_1990_utm83                | table | postgres
 public   | citieswithpopulatoinover2500_uscensus_1990_utm83_attrs_raw      | table | postgres
 public   | client_utility_account                                          | table | postgres
 public   | coals2_ll83                                                     | table | postgres
 public   | coals2_ll83_attrs_raw                                           | table | postgres
 public   | coals2_utm27                                                    | table | postgres
 public   | coals2_utm27_attrs_raw                                          | table | postgres
 public   | coals2_utm83                                                    | table | postgres
 public   | coals2_utm83_attrs_raw                                          | table | postgres
 public   | community_points                                                | table | postgres
 public   | communityboundary_min_att_20250121_utm83                        | table | postgres
 public   | communityboundary_min_att_20250121_utm83_attrs_raw              | table | postgres
 public   | communityboundary_min_att_20250121_wma84                        | table | postgres
 public   | communityboundary_min_att_20250121_wma84_attrs_raw              | table | postgres
 public   | communityhealthproviders_wvhealthcareauthority_200802_utm83     | table | postgres
 public   | communityhealthproviders_wvhealthcareauthority_200802_utm83_att | table | postgres
 public   | confidence_decay                                                | table | postgres
 public   | correctionalinstitutions_hsip_20091230_utm83                    | table | postgres
 public   | correctionalinstitutions_hsip_20091230_utm83_attrs_raw          | table | postgres
 public   | correctionalinstitutions_hsip_20091230_wgs84                    | table | postgres
 public   | correctionalinstitutions_hsip_20091230_wgs84_attrs_raw          | table | postgres
 public   | countycityparkboundaries_20201104_utm83                         | table | postgres
 public   | countycityparkboundaries_20201104_utm83_attrs_raw               | table | postgres
 public   | countyseats_usgs_ll83                                           | table | postgres
 public   | countyseats_usgs_ll83_attrs_raw                                 | table | postgres
 public   | countyseats_usgs_utm83                                          | table | postgres
 public   | countyseats_usgs_utm83_attrs_raw                                | table | postgres
 public   | courthousescounty_manysources_200203_ll83                       | table | postgres
 public   | courthousescounty_manysources_200203_ll83_attrs_raw             | table | postgres
 public   | courthousescounty_manysources_200203_utm83                      | table | postgres
 public   | courthousescounty_manysources_200203_utm83_attrs_raw            | table | postgres
 public   | courthousesfederal_manysources_200203_ll83                      | table | postgres
 public   | courthousesfederal_manysources_200203_ll83_attrs_raw            | table | postgres
 public   | courthousesfederal_manysources_200203_utm                       | table | postgres
 public   | courthousesfederal_manysources_200203_utm_attrs_raw             | table | postgres
 public   | cvfault_ll83                                                    | table | postgres
 public   | cvfault_ll83_attrs_raw                                          | table | postgres
 public   | cvfault_utm27                                                   | table | postgres
 public   | cvfault_utm27_attrs_raw                                         | table | postgres
 public   | cvfault_utm83                                                   | table | postgres
 public   | cvfault_utm83_attrs_raw                                         | table | postgres
 public   | cvpoly_ll83                                                     | table | postgres
 public   | cvpoly_ll83_attrs_raw                                           | table | postgres
 public   | cvpoly_utm27                                                    | table | postgres
 public   | cvpoly_utm27_attrs_raw                                          | table | postgres
 public   | cvpoly_utm83                                                    | table | postgres
 public   | cvpoly_utm83_attrs_raw                                          | table | postgres
 public   | dams_usarmycorpsofengineers_200010_utm83                        | table | postgres
 public   | dams_usarmycorpsofengineers_200010_utm83_attrs_raw              | table | postgres
 public   | dams_usarmycropsofengineers_200010_ll83                         | table | postgres
 public   | dams_usarmycropsofengineers_200010_ll83_attrs_raw               | table | postgres
 public   | damsnoncoal_usgs_2002_ll27                                      | table | postgres
 public   | damsnoncoal_usgs_2002_ll27_attrs_raw                            | table | postgres
 public   | damsnoncoal_usgs_2002_utm83                                     | table | postgres
 public   | damsnoncoal_usgs_2002_utm83_attrs_raw                           | table | postgres
 public   | empowermentzonesandenterprisecommunities_uscensus_2002_utm83    | table | postgres
 public   | empowermentzonesandenterprisecommunities_uscensus_2002_utm83_at | table | postgres
 public   | empowermentzonesandenterprisecommunitiesbytractuscens30c72907   | table | postgres
 public   | empowermentzonesandenterprisecommunitiesbytractuscens30c72907at | table | postgres
 public   | evidence_documents                                              | table | postgres
 public   | excursionpassengertrains_wvdof_200102_ll83                      | table | postgres
 public   | excursionpassengertrains_wvdof_200102_ll83_attrs_raw            | table | postgres
 public   | excursionpassengertrains_wvdof_200102_utm83                     | table | postgres
 public   | excursionpassengertrains_wvdof_200102_utm83_attrs_raw           | table | postgres
 public   | facilities_epa_200203_ll83                                      | table | postgres
 public   | facilities_epa_200203_ll83_attrs_raw                            | table | postgres
 public   | facilities_epa_200203_utm83                                     | table | postgres
 public   | facilities_epa_200203_utm83_attrs_raw                           | table | postgres
 public   | fault_reg_ll83                                                  | table | postgres
 public   | fault_reg_ll83_attrs_raw                                        | table | postgres
 public   | faultgl_reg_ll83                                                | table | postgres
 public   | faultgl_reg_ll83_attrs_raw                                      | table | postgres
 public   | fayette_fire_stations                                           | table | postgres
 public   | fayette_parcels                                                 | table | postgres
 public   | features                                                        | table | postgres
 public   | features_attrs_raw                                              | table | postgres
 public   | fire_departments                                                | table | postgres
 public   | fire_departments_attrs_raw                                      | table | postgres
 public   | fire_dept_wvdem_092017_utm83                                    | table | postgres
 public   | fire_dept_wvdem_092017_utm83_attrs_raw                          | table | postgres
 public   | floodplainstructuresatrisk_usarmycorpsofengineers_200303_utm83  | table | postgres
 public   | floodplainstructuresatrisk_usarmycorpsofengineers_200303_utm83_ | table | postgres
 public   | gbim_belief                                                     | table | postgres
 public   | gbim_belief_edges                                               | table | postgres
 public   | gbim_belief_evidence                                            | table | postgres
 public   | gbim_beliefs                                                    | table | postgres
 public   | gbim_entities                                                   | table | postgres
 public   | gbim_entity_clusters                                            | table | postgres
 public   | gbim_entity_land_candidates                                     | table | postgres
 public   | gbim_evidence                                                   | table | postgres
 public   | gbim_full_points                                                | table | postgres
 public   | gbim_full_points_raw                                            | table | postgres
 public   | gbim_layer_catalog                                              | table | postgres
 public   | gbim_layer_config                                               | table | postgres
 public   | gbim_layer_manifest                                             | table | postgres
 public   | gbim_source_epochs                                              | table | postgres
 public   | gbim_source_tables_used                                         | table | postgres
 public   | gbim_worldview_entity                                           | table | postgres
 public   | gbim_worldview_entity_backup_small                              | table | postgres
 public   | gbim_worldviews                                                 | table | postgres
 public   | gbimbeliefnormalized                                            | table | postgres
 public   | geographicalnamesonusgstopomaps_usgs_200601_ll27                | table | postgres
 public   | geographicalnamesonusgstopomaps_usgs_200601_ll27_attrs_raw      | table | postgres
 public   | geographicalnamesonusgstopomaps_usgs_200601_utm83               | table | postgres
 public   | geographicalnamesonusgstopomaps_usgs_200601_utm83_attrs_raw     | table | postgres
 public   | geographicnamesonusgstopomaps_current_usgs_20110801_ll83        | table | postgres
 public   | geographicnamesonusgstopomaps_current_usgs_20110801_ll83_attrs_ | table | postgres
 public   | geographicnamesonusgstopomaps_current_usgs_20110801_utm83       | table | postgres
 public   | geographicnamesonusgstopomaps_current_usgs_20110801_utm83_attrs | table | postgres
 public   | geographicnamesonusgstopomaps_historical_usgs_20110801_ll83     | table | postgres
 public   | geographicnamesonusgstopomaps_historical_usgs_20110801_ll83_att | table | postgres
 public   | geographicnamesonusgstopomaps_historical_usgs_20110801_utm83    | table | postgres
 public   | geographicnamesonusgstopomaps_historical_usgs_20110801_utm83_at | table | postgres
 public   | geographicnamesonusgstopomaps_usgs_20110801_ll83                | table | postgres
 public   | geographicnamesonusgstopomaps_usgs_20110801_ll83_attrs_raw      | table | postgres
 public   | geographicnamesonusgstopomaps_usgs_20110801_utm83               | table | postgres
 public   | geographicnamesonusgstopomaps_usgs_20110801_utm83_attrs_raw     | table | postgres
 public   | geolgyl_reg_ll83                                                | table | postgres
 public   | geolgyl_reg_ll83_attrs_raw                                      | table | postgres
 public   | geolgyp_reg_ll83                                                | table | postgres
 public   | geolgyp_reg_ll83_attrs_raw                                      | table | postgres
 public   | geospatial_features                                             | table | postgres
 public   | geospatial_layers                                               | table | postgres
 public   | geotextl_reg_ll83                                               | table | postgres
 public   | geotextl_reg_ll83_attrs_raw                                     | table | postgres
 public   | glacagl_reg_ll83                                                | table | postgres
 public   | glacagl_reg_ll83_attrs_raw                                      | table | postgres
 public   | glacal_reg_ll83                                                 | table | postgres
 public   | glacal_reg_ll83_attrs_raw                                       | table | postgres
 public   | hazardmitigationbuyout_20250929_polygons_utm83                  | table | postgres
 public   | hazardmitigationbuyout_20250929_polygons_utm83_attrs_raw        | table | postgres
 public   | hazardmitigationbuyout_20250929_polygons_wma84                  | table | postgres
 public   | hazardmitigationbuyout_20250929_polygons_wma84_attrs_raw        | table | postgres
 public   | healthruralfacilities_manysources_utm83                         | table | postgres
 public   | healthruralfacilities_manysources_utm83_attrs_raw               | table | postgres
 public   | highered_wvemd_072420_utm83                                     | table | postgres
 public   | highered_wvemd_072420_utm83_attrs_raw                           | table | postgres
 public   | highered_wvemd_072420_wgc84                                     | table | postgres
 public   | highered_wvemd_072420_wgc84_attrs_raw                           | table | postgres
 public   | historicalaerialphotographycountycoverage_wvgistc_utm83         | table | postgres
 public   | historicalaerialphotographycountycoverage_wvgistc_utm83_attrs_r | table | postgres
 public   | hospitals                                                       | table | postgres
 public   | hospitals_attrs_raw                                             | table | postgres
 public   | hospitals_wvdem_040519_gcs84                                    | table | postgres
 public   | hospitals_wvdem_040519_gcs84_attrs_raw                          | table | postgres
 public   | hospitals_wvdem_040519_utm83                                    | table | postgres
 public   | hospitals_wvdem_040519_utm83_attrs_raw                          | table | postgres
 public   | hospitalswvdem040519utm83                                       | table | postgres
 public   | hospitalswvdem040519utm83_attrs_raw                             | table | postgres
 public   | impact_reg_ll83                                                 | table | postgres
 public   | impact_reg_ll83_attrs_raw                                       | table | postgres
 public   | indexgrid15minutequads_wvgistc_ll83                             | table | postgres
 public   | indexgrid15minutequads_wvgistc_ll83_attrs_raw                   | table | postgres
 public   | indexgrid15minutequads_wvgistc_utm83                            | table | postgres
 public   | indexgrid15minutequads_wvgistc_utm83_attrs_raw                  | table | postgres
 public   | indexgrid15minutewithcounties_wvgistc_utm27                     | table | postgres
 public   | indexgrid15minutewithcounties_wvgistc_utm27_attrs_raw           | table | postgres
 public   | indexgrid1minutequads_wvgistc_ll83                              | table | postgres
 public   | indexgrid1minutequads_wvgistc_ll83_attrs_raw                    | table | postgres
 public   | industrialbuildings_wvdo_200807_utm83                           | table | postgres
 public   | industrialbuildings_wvdo_200807_utm83_attrs_raw                 | table | postgres
 public   | industrialparks_wvdo_200078_utm83                               | table | postgres
 public   | industrialparks_wvdo_200078_utm83_attrs_raw                     | table | postgres
 public   | industrialsites_wvdo_200807_utm83                               | table | postgres
 public   | industrialsites_wvdo_200807_utm83_attrs_raw                     | table | postgres
 public   | inedexgrid1minutequads_wvgistc_utm83                            | table | postgres
 public   | inedexgrid1minutequads_wvgistc_utm83_attrs_raw                  | table | postgres
 public   | intake_submissions                                              | table | msjarvis
 public   | intermodalterminalfacilities_usdot_1997_ll83                    | table | postgres
 public   | intermodalterminalfacilities_usdot_1997_ll83_attrs_raw          | table | postgres
 public   | intermodalterminalfacilities_usdot_1997_utm83                   | table | postgres
 public   | intermodalterminalfacilities_usdot_1997_utm83_attrs_raw         | table | postgres
 public   | layer_config                                                    | table | postgres
 public   | libraries_manysources_2001_ll27                                 | table | postgres
 public   | libraries_manysources_2001_ll27_attrs_raw                       | table | postgres
 public   | libraries_manysources_2001_utm83                                | table | postgres
 public   | libraries_manysources_2001_utm83_attrs_raw                      | table | postgres
 public   | local_resources                                                 | table | postgres
 public   | local_resources_index                                           | table | postgres
 public   | majorriversandlakesline_nhd_2002_ll83                           | table | postgres
 public   | majorriversandlakesline_nhd_2002_ll83_attrs_raw                 | table | postgres
 public   | majorriversandlakesline_nhd_2002_utm83                          | table | postgres
 public   | majorriversandlakesline_nhd_2002_utm83_attrs_raw                | table | postgres
 public   | majorriversandlakespolygon_nhd_2002_poly_ll83                   | table | postgres
 public   | majorriversandlakespolygon_nhd_2002_poly_ll83_attrs_raw         | table | postgres
 public   | majorriversandlakespolygon_nhd_2002_utm83                       | table | postgres
 public   | majorriversandlakespolygon_nhd_2002_utm83_attrs_raw             | table | postgres
 public   | manufacturingandbusiness_wvdo_200803_utm83                      | table | postgres
 public   | manufacturingandbusiness_wvdo_200803_utm83_attrs_raw            | table | postgres
 public   | memories                                                        | table | postgres
 public   | metfacp_reg_ll83                                                | table | postgres
 public   | metfacp_reg_ll83_attrs_raw                                      | table | postgres
 public   | metropolitanandmicropolitanstatisticalareas_census_2020_utm83   | table | postgres
 public   | metropolitanandmicropolitanstatisticalareas_census_2020_utm83_a | table | postgres
 public   | metropolitanandmicropolitanstatisticalareas_census_2020_wma84   | table | postgres
 public   | metropolitanandmicropolitanstatisticalareas_census_2020_wma84_a | table | postgres
 public   | metropolitanandmicropolitanstatisticalareascensus201111gcs83    | table | postgres
 public   | metropolitanandmicropolitanstatisticalareascensus201111gcs83att | table | postgres
 public   | metropolitanandmicropolitanstatisticalareascensus201111utm83    | table | postgres
 public   | metropolitanandmicropolitanstatisticalareascensus201111utm83att | table | postgres
 public   | metropolitanstatisticalareas_uscensus_199901_ll83               | table | postgres
 public   | metropolitanstatisticalareas_uscensus_199901_ll83_attrs_raw     | table | postgres
 public   | metropolitanstatisticalareas_uscensus_199901_utm83              | table | postgres
 public   | metropolitanstatisticalareas_uscensus_199901_utm83_attrs_raw    | table | postgres
 public   | mineraloperations_usgs_200204_ll83                              | table | postgres
 public   | mineraloperations_usgs_200204_ll83_attrs_raw                    | table | postgres
 public   | mineraloperations_usgs_200204_utm83                             | table | postgres
 public   | mineraloperations_usgs_200204_utm83_attrs_raw                   | table | postgres
 public   | minesabandonedlandsline_wvdep_1996_noprojectoin                 | table | postgres
 public   | minesabandonedlandsline_wvdep_1996_noprojectoin_attrs_raw       | table | postgres
 public   | minesabandonedlandspoint_wvdep_1996_noprojection                | table | postgres
 public   | minesabandonedlandspoint_wvdep_1996_noprojection_attrs_raw      | table | postgres
 public   | minesabandonedlandspolygon_wvdep_1996_noprojection              | table | postgres
 public   | minesabandonedlandspolygon_wvdep_1996_noprojection_attrs_raw    | table | postgres
 public   | nationalatlasstreams_usgs_199903_ll83                           | table | postgres
 public   | nationalatlasstreams_usgs_199903_ll83_attrs_raw                 | table | postgres
 public   | nationalatlasstreams_usgs_199903_utm83                          | table | postgres
 public   | nationalatlasstreams_usgs_199903_utm83_attrs_raw                | table | postgres
 public   | nationalregister_point_20200923                                 | table | postgres
 public   | nationalregister_point_20200923_attrs_raw                       | table | postgres
 public   | nationalregister_point_20200923_utm27                           | table | postgres
 public   | nationalregister_point_20200923_utm27_attrs_raw                 | table | postgres
 public   | nationalwaterwaynetwork_usarmycorpsofengineers_2001_ll83        | table | postgres
 public   | nationalwaterwaynetwork_usarmycorpsofengineers_2001_ll83_attrs_ | table | postgres
 public   | nationalwaterwaynetwork_usarmycorpsofengineers_2001_utm83       | table | postgres
 public   | nationalwaterwaynetwork_usarmycorpsofengineers_2001_utm83_attrs | table | postgres
 public   | nationalwaterwaynetworkports_usarmycorpsofengineers_2001_ll83   | table | postgres
 public   | nationalwaterwaynetworkports_usarmycorpsofengineers_2001_ll83_a | table | postgres
 public   | nationalwaterwaynetworkports_usarmycorpsofengineers_2001_utm83  | table | postgres
 public   | nationalwaterwaynetworkports_usarmycorpsofengineers_2001_utm83_ | table | postgres
 public   | naviagablewaterways_usarmycropsofengineers_2006_utm83           | table | postgres
 public   | naviagablewaterways_usarmycropsofengineers_2006_utm83_attrs_raw | table | postgres
 public   | navigablewaterwaysrivermiles_usarmycropsofengineers_2006_utm83  | table | postgres
 public   | navigablewaterwaysrivermiles_usarmycropsofengineers_2006_utm83_ | table | postgres
 public   | navigablewaterwaysstructures_usarmycorpsofengineers_2006_utm83  | table | postgres
 public   | navigablewaterwaysstructures_usarmycorpsofengineers_2006_utm83_ | table | postgres
 public   | nursinghomes_wvdem_041219_gcs84                                 | table | postgres
 public   | nursinghomes_wvdem_041219_gcs84_attrs_raw                       | table | postgres
 public   | nursinghomes_wvdem_041219_utm83                                 | table | postgres
 public   | nursinghomes_wvdem_041219_utm83_attrs_raw                       | table | postgres
 public   | officebuildings_wvdo_200807_utm83                               | table | postgres
 public   | officebuildings_wvdo_200807_utm83_attrs_raw                     | table | postgres
 public   | paroleoffices_manysources_2008_utm83                            | table | postgres
 public   | paroleoffices_manysources_2008_utm83_attrs_raw                  | table | postgres
 public   | paroleoffices_manysources_2008_wgs84                            | table | postgres
 public   | paroleoffices_manysources_2008_wgs84_attrs_raw                  | table | postgres
 public   | placesofworship_hsip_20080723_utm83                             | table | postgres
 public   | placesofworship_hsip_20080723_utm83_attrs_raw                   | table | postgres
 public   | placesofworship_hsip_20080723_wgs84                             | table | postgres
 public   | placesofworship_hsip_20080723_wgs84_attrs_raw                   | table | postgres
 public   | policedept_wvdem_012319_gcs84                                   | table | postgres
 public   | policedept_wvdem_012319_gcs84_attrs_raw                         | table | postgres
 public   | policedept_wvdem_012319_utm83                                   | table | postgres
 public   | policedept_wvdem_012319_utm83_attrs_raw                         | table | postgres
 public   | populatedplaces_census_201112_utm83                             | table | postgres
 public   | populatedplaces_census_201112_utm83_attrs_raw                   | table | postgres
 public   | populatedplaces_census_20112_gcs83                              | table | postgres
 public   | populatedplaces_census_20112_gcs83_attrs_raw                    | table | postgres
 public   | populatedplaces_census_2020_utm83                               | table | postgres
 public   | populatedplaces_census_2020_utm83_attrs_raw                     | table | postgres
 public   | populatedplaces_census_2020_wma84                               | table | postgres
 public   | populatedplaces_census_2020_wma84_attrs_raw                     | table | postgres
 public   | populatedplaces_uscensus_1990_ll83                              | table | postgres
 public   | populatedplaces_uscensus_1990_ll83_attrs_raw                    | table | postgres
 public   | populatedplaces_uscensus_1990_utm83                             | table | postgres
 public   | populatedplaces_uscensus_1990_utm83_attrs_raw                   | table | postgres
 public   | populationdatablockgroups_uscensus_2000_ll83                    | table | postgres
 public   | populationdatablockgroups_uscensus_2000_ll83_attrs_raw          | table | postgres
 public   | populationdatablockgroups_uscensus_2000_utm83                   | table | postgres
 public   | populationdatablockgroups_uscensus_2000_utm83_attrs_raw         | table | postgres
 public   | pow_wvgistc_062919_utm83                                        | table | postgres
 public   | pow_wvgistc_062919_utm83_attrs_raw                              | table | postgres
 public   | pow_wvgistc_062919_wgs84                                        | table | postgres
 public   | pow_wvgistc_062919_wgs84_attrs_raw                              | table | postgres
 public   | program                                                         | table | postgres
 public   | program_authority_links                                         | table | postgres
 public   | program_catalog                                                 | table | postgres
 public   | program_eligibility                                             | table | postgres
 public   | program_entity_links                                            | table | postgres
 public   | program_evidence_links                                          | table | postgres
 public   | program_income_limit_rules                                      | table | postgres
 public   | program_income_source_policy                                    | table | postgres
 public   | program_manual_rule_links                                       | table | postgres
 public   | program_name_crosswalk                                          | table | postgres
 public   | program_target_config                                           | table | postgres
 public   | publichealthdepts_hsip_20091229_gcs83                           | table | postgres
 public   | publichealthdepts_hsip_20091229_gcs83_attrs_raw                 | table | postgres
 public   | publichealthdepts_hsip_20091229_utm83                           | table | postgres
 public   | publichealthdepts_hsip_20091229_utm83_attrs_raw                 | table | postgres
 public   | railnetworkregion_usdot_200203_ll83                             | table | postgres
 public   | railnetworkregion_usdot_200203_ll83_attrs_raw                   | table | postgres
 public   | railnetworkregion_usdot_200203_utm83                            | table | postgres
 public   | railnetworkregion_usdot_200203_utm83_attrs_raw                  | table | postgres
 public   | railnetworkwv_usdot_200203_ll83                                 | table | postgres
 public   | railnetworkwv_usdot_200203_ll83_attrs_raw                       | table | postgres
 public   | railnetworkwv_usdot_200203_utm83                                | table | postgres
 public   | railnetworkwv_usdot_200203_utm83_attrs_raw                      | table | postgres
 public   | railroads_rahalltransportationinstitute_2005_utm83              | table | postgres
 public   | railroads_rahalltransportationinstitute_2005_utm83_attrs_raw    | table | postgres
 public   | realtimestreamflowstations_usgs_200012_ll27                     | table | postgres
 public   | realtimestreamflowstations_usgs_200012_ll27_attrs_raw           | table | postgres
 public   | realtimestreamflowstations_usgs_200012_utm27                    | table | postgres
 public   | realtimestreamflowstations_usgs_200012_utm27_attrs_raw          | table | postgres
 public   | realtimestreamflowstations_usgs_200012_utm83                    | table | postgres
 public   | realtimestreamflowstations_usgs_200012_utm83_attrs_raw          | table | postgres
 public   | recreationalwwtrails_ofwv_20151117_utm83                        | table | postgres
 public   | recreationalwwtrails_ofwv_20151117_utm83_attrs_raw              | table | postgres
 public   | regionalplanninganddevelopmentcouncil_wvdo_1971_ll83            | table | postgres
 public   | regionalplanninganddevelopmentcouncil_wvdo_1971_ll83_attrs_raw  | table | postgres
 public   | regionalplanninganddevelopmentcouncil_wvdo_1971_utm83           | table | postgres
 public   | regionalplanninganddevelopmentcouncil_wvdo_1971_utm83_attrs_raw | table | postgres
 public   | resource_county_coverage                                        | table | postgres
 public   | resource_eligibility                                            | table | postgres
 public   | samhsa_provider_building_join                                   | table | postgres
 public   | samhsa_provider_spatial_grounded                                | table | postgres
 public   | samhsa_provider_stage                                           | table | postgres
 public   | sewertreatmentplants_wvdep_200203_utm83                         | table | postgres
 public   | sewertreatmentplants_wvdep_200203_utm83_attrs_raw               | table | postgres
 public   | solidwastefacilities_wvdep_200202_ll83                          | table | postgres
 public   | solidwastefacilities_wvdep_200202_ll83_attrs_raw                | table | postgres
 public   | solidwastefacilities_wvdep_200202_utm83                         | table | postgres
 public   | solidwastefacilities_wvdep_200202_utm83_attrs_raw               | table | postgres
 public   | spatial_ref_sys                                                 | table | postgres
 public   | spatial_role_scopes                                             | table | postgres
 public   | springs_wvges_1986_ll83                                         | table | postgres
 public   | springs_wvges_1986_ll83_attrs_raw                               | table | postgres
 public   | springs_wvges_1986_utm83                                        | table | postgres
 public   | springs_wvges_1986_utm83_attrs_raw                              | table | postgres
 public   | stateofwvhousedistricts_wvlegislativeservices_2010              | table | postgres
 public   | stateofwvhousedistricts_wvlegislativeservices_2010_attrs_raw    | table | postgres
 public   | stateofwvsenatedistricts_wvlegislativeservices_2010             | table | postgres
 public   | stateofwvsenatedistricts_wvlegislativeservices_2010_attrs_raw   | table | postgres
 public   | states_region_ll83                                              | table | postgres
 public   | states_region_ll83_attrs_raw                                    | table | postgres
 public   | structurepointsnorth_samb_2003_utm83                            | table | postgres
 public   | structurepointsnorth_samb_2003_utm83_attrs_raw                  | table | postgres
 public   | structurepointssouth_samb_2003_utm83                            | table | postgres
 public   | structurepointssouth_samb_2003_utm83_attrs_raw                  | table | postgres
 public   | structurepolygons_samb_2003_utm83                               | table | postgres
 public   | structurepolygons_samb_2003_utm83_attrs_raw                     | table | postgres
 public   | summits_gistc_052012_utm83_shp                                  | table | postgres
 public   | summits_gistc_052012_utm83_shp_attrs_raw                        | table | postgres
 public   | summits_gistc_052012_wgs84_shp                                  | table | postgres
 public   | summits_gistc_052012_wgs84_shp_attrs_raw                        | table | postgres
 public   | surveycontrol_nationalgeodeticsurvey_102011_gcs83               | table | postgres
 public   | surveycontrol_nationalgeodeticsurvey_102011_gcs83_attrs_raw     | table | postgres
 public   | tiger_county_2022                                               | table | postgres
 public   | timberremovalvolume_usfs_1996_utm83                             | table | postgres
 public   | timberremovalvolume_usfs_1996_utm83_attrs_raw                   | table | postgres
 public   | tl_2020_54_bg                                                   | table | postgres
 public   | tl_2020_54_tabblock20                                           | table | postgres
 public   | tmp_building_block_nearest_sample                               | table | postgres
 public   | towers_wvpublicbroadcasting_2002_ll83                           | table | postgres
 public   | towers_wvpublicbroadcasting_2002_ll83_attrs_raw                 | table | postgres
 public   | towers_wvpublicbroadcasting_2002_utm83                          | table | postgres
 public   | towers_wvpublicbroadcasting_2002_utm83_attrs_raw                | table | postgres
 public   | towersam_fcc_200202_utm83                                       | table | postgres
 public   | towersam_fcc_200202_utm83_attrs_raw                             | table | postgres
 public   | towersasr_fcc_200202_ll83                                       | table | postgres
 public   | towersasr_fcc_200202_ll83_attrs_raw                             | table | postgres
 public   | towersasr_fcc_200202_utm83                                      | table | postgres
 public   | towersasr_fcc_200202_utm83_attrs_raw                            | table | postgres
 public   | towerscellular_fcc_200202_ll83                                  | table | postgres
 public   | towerscellular_fcc_200202_ll83_attrs_raw                        | table | postgres
 public   | towerscellular_fcc_200202_utm83                                 | table | postgres
 public   | towerscellular_fcc_200202_utm83_attrs_raw                       | table | postgres
 public   | towersfm_fcc_200202_utm83                                       | table | postgres
 public   | towersfm_fcc_200202_utm83_attrs_raw                             | table | postgres
 public   | towersmicrowave_fcc_200202_ll83                                 | table | postgres
 public   | towersmicrowave_fcc_200202_ll83_attrs_raw                       | table | postgres
 public   | towersmicrowave_fcc_200202_utm83                                | table | postgres
 public   | towersmicrowave_fcc_200202_utm83_attrs_raw                      | table | postgres
 public   | towerspager_fcc_200202_ll83                                     | table | postgres
 public   | towerspager_fcc_200202_ll83_attrs_raw                           | table | postgres
 public   | towerspager_fcc_200202_utm83                                    | table | postgres
 public   | towerspager_fcc_200202_utm83_attrs_raw                          | table | postgres
 public   | towersprivate_fcc_200202_ll83                                   | table | postgres
 public   | towersprivate_fcc_200202_ll83_attrs_raw                         | table | postgres
 public   | towersprivate_fcc_200202_utm83                                  | table | postgres
 public   | towersprivate_fcc_200202_utm83_attrs_raw                        | table | postgres
 public   | uei_registry                                                    | table | msjarvis
 public   | us_counties                                                     | table | postgres
 public   | us_counties_tmp                                                 | table | postgres
 public   | us_zips                                                         | table | postgres
 public   | us_zips_tmp                                                     | table | postgres
 public   | user_compliance_task                                            | table | postgres
 public   | utility_discount_enrollment                                     | table | postgres
 public   | veteransaffairsfacilities_manysources_200503_utm83              | table | postgres
 public   | veteransaffairsfacilities_manysources_200503_utm83_attrs_raw    | table | postgres
 public   | veteransaffairsfacilities_manysources_200503_wgs84              | table | postgres
 public   | veteransaffairsfacilities_manysources_200503_wgs84_attrs_raw    | table | postgres
 public   | votingdistrictswv_legislativeservices_2002_ll83                 | table | postgres
 public   | votingdistrictswv_legislativeservices_2002_ll83_attrs_raw       | table | postgres
 public   | votingdistrictswv_legislativeservices_2002_utm83                | table | postgres
 public   | votingdistrictswv_legislativeservices_2002_utm83_attrs_raw      | table | postgres
 public   | votingdistrictswv_uscensus_2000_utm83                           | table | postgres
 public   | votingdistrictswv_uscensus_2000_utm83_attrs_raw                 | table | postgres
 public   | weatherstations_nationalclimatedatacenter_1999_gcs83            | table | postgres
 public   | weatherstations_nationalclimatedatacenter_1999_gcs83_attrs_raw  | table | postgres
 public   | weatherstations_nationalclimatedatacenter_1999_utm27            | table | postgres
 public   | weatherstations_nationalclimatedatacenter_1999_utm27_attrs_raw  | table | postgres
 public   | windenergyresource_nationalrenewableenergylab_200901_utm83      | table | postgres
 public   | windenergyresource_nationalrenewableenergylab_200901_utm83_attr | table | postgres
 public   | windenergyresource_nationalrenewableenergylab_200901_wgs84      | table | postgres
 public   | windenergyresource_nationalrenewableenergylab_200901_wgs84_attr | table | postgres
 public   | workforceinvestmentareas_wvgistc_200208_ll83                    | table | postgres
 public   | workforceinvestmentareas_wvgistc_200208_ll83_attrs_raw          | table | postgres
 public   | wv_county_bbox_geom                                             | table | postgres
 public   | wv_county_boundaries_24k_topo_updated_2022_utm83_attrs_raw      | table | postgres
 public   | wv_county_names                                                 | table | postgres
 public   | wv_income_manual_income_limits                                  | table | postgres
 public   | wv_income_manual_income_sources                                 | table | postgres
 public   | wv_income_manual_income_treatment                               | table | postgres
 public   | wv_income_manual_income_treatment_extended                      | table | postgres
 public   | wv_income_manual_rules                                          | table | postgres
 public   | wv_microsoft_20180207_utm17n83                                  | table | postgres
 public   | wv_microsoft_20180207_utm17n83_attrs_raw                        | table | postgres
 public   | wv_tax_districts_ll83                                           | table | postgres
 public   | wv_tax_districts_ll83_attrs_raw                                 | table | postgres
 public   | wv_tax_districts_utm83_attrs_raw                                | table | postgres
 public   | wv_tax_districts_wma84                                          | table | postgres
 public   | wv_tax_districts_wma84_attrs_raw                                | table | postgres
 public   | wv_zip_zcta_raw                                                 | table | postgres
 public   | wvgistc_building_footprints                                     | table | postgres
 public   | wvgistc_building_footprints_attrs_raw                           | table | postgres
 public   | wvgistcbuildingfootprints                                       | table | postgres
 public   | wvgistcbuildingfootprints_attrs_raw                             | table | postgres
 public   | wvgistcbuildingfootprintsattrsraw                               | table | postgres
 public   | wvstatebounadary100k_usgs_200203_utm83                          | table | postgres
 public   | wvstatebounadary100k_usgs_200203_utm83_attrs_raw                | table | postgres
 public   | wvstateboundary100k_usgs_200203_ll83                            | table | postgres
 public   | wvstateboundary100k_usgs_200203_ll83_attrs_raw                  | table | postgres
 public   | wvstateboundary24k_usgs_200203_ll83                             | table | postgres
 public   | wvstateboundary24k_usgs_200203_ll83_attrs_raw                   | table | postgres
 public   | wvstateboundary24k_usgs_200203_utm83                            | table | postgres
 public   | wvstateboundary24k_usgs_200203_utm83_attrs_raw                  | table | postgres
 public   | wvstatehousedistricts_manysources_1992_ll83                     | table | postgres
 public   | wvstatehousedistricts_manysources_1992_ll83_attrs_raw           | table | postgres
 public   | wvstatehousedistricts_manysources_1992_utm83                    | table | postgres
 public   | wvstatehousedistricts_manysources_1992_utm83_attrs_raw          | table | postgres
 public   | wvstatehousedistricts_manysources_2002_ll83                     | table | postgres
 public   | wvstatehousedistricts_manysources_2002_ll83_attrs_raw           | table | postgres
 public   | wvstatehousedistricts_manysources_2002_utm83                    | table | postgres
 public   | wvstatehousedistricts_manysources_2002_utm83_attrs_raw          | table | postgres
 public   | wvstatehousedistricts_wvlegislativeservices_2020_utm83_attrs_ra | table | postgres
 public   | wvstatesenatedistricts_manysources_1992_ll83                    | table | postgres
 public   | wvstatesenatedistricts_manysources_1992_ll83_attrs_raw          | table | postgres
 public   | wvstatesenatedistricts_manysources_1992_utm83                   | table | postgres
 public   | wvstatesenatedistricts_manysources_1992_utm83_attrs_raw         | table | postgres
 public   | wvstatesenatedistricts_manysources_2002_ll83                    | table | postgres
 public   | wvstatesenatedistricts_manysources_2002_ll83_attrs_raw          | table | postgres
 public   | wvstatesenatedistricts_manysources_2002_utm83                   | table | postgres
 public   | wvstatesenatedistricts_manysources_2002_utm83_attrs_raw         | table | postgres
 public   | wvstatesenatedistricts_wvlegislativeservices_2020_utm83_attrs_r | table | postgres
 public   | zcta_county_rel                                                 | table | postgres
 public   | zcta_polygons                                                   | table | postgres
 public   | zipcodetabulationarea_census_2020_raw                           | table | postgres
 public   | zipcodetabulationarea_census_2020_utm83_attrs_raw               | table | postgres
 public   | zipcodetabulationarea_census_2020_wma84                         | table | postgres
 public   | zipcodetabulationarea_census_2020_wma84_attrs_raw               | table | postgres
 tiger    | addr                                                            | table | postgres
 tiger    | addrfeat                                                        | table | postgres
 tiger    | bg                                                              | table | postgres
 tiger    | county                                                          | table | postgres
 tiger    | county_lookup                                                   | table | postgres
 tiger    | countysub_lookup                                                | table | postgres
 tiger    | cousub                                                          | table | postgres
 tiger    | direction_lookup                                                | table | postgres
 tiger    | edges                                                           | table | postgres
 tiger    | faces                                                           | table | postgres
 tiger    | featnames                                                       | table | postgres
 tiger    | geocode_settings                                                | table | postgres
 tiger    | geocode_settings_default                                        | table | postgres
 tiger    | loader_lookuptables                                             | table | postgres
 tiger    | loader_platform                                                 | table | postgres
 tiger    | loader_variables                                                | table | postgres
 tiger    | pagc_gaz                                                        | table | postgres
 tiger    | pagc_lex                                                        | table | postgres
 tiger    | pagc_rules                                                      | table | postgres
 tiger    | place                                                           | table | postgres
 tiger    | place_lookup                                                    | table | postgres
 tiger    | secondary_unit_lookup                                           | table | postgres
 tiger    | state                                                           | table | postgres
 tiger    | state_lookup                                                    | table | postgres
 tiger    | street_type_lookup                                              | table | postgres
 tiger    | tabblock                                                        | table | postgres
 tiger    | tabblock20                                                      | table | postgres
 tiger    | tract                                                           | table | postgres
 tiger    | zcta5                                                           | table | postgres
 tiger    | zip_lookup                                                      | table | postgres
 tiger    | zip_lookup_all                                                  | table | postgres
 tiger    | zip_lookup_base                                                 | table | postgres
 tiger    | zip_state                                                       | table | postgres
 tiger    | zip_state_loc                                                   | table | postgres
 topology | layer                                                           | table | postgres
 topology | topology                                                        | table | postgres
(569 rows)

--
-- PostgreSQL database dump
--

\restrict i2KE7XJNJc1e6ZRetwWKBa6YvWaCEPdpddyJjbkd5ji1r8DLCfeIFYY7YvvEQmR

-- Dumped from database version 15.8 (Debian 15.8-1.pgdg110+1)
-- Dumped by pg_dump version 16.13 (Ubuntu 16.13-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: wv_hospitals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wv_hospitals (
    id integer NOT NULL,
    name character varying(255),
    full_address text,
    zip character varying(10),
    lat numeric(10,7),
    lon numeric(10,7),
    city character varying(100),
    beds integer,
    trauma character varying(20)
);


ALTER TABLE public.wv_hospitals OWNER TO postgres;

--
-- Name: wv_hospitals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.wv_hospitals_id_seq
    AS integer
    START WITH 1
 schemaname |                            tablename                            
------------+-----------------------------------------------------------------
 public     | gbim_beliefs
 public     | benefit_county_snap
 public     | benefit_county_tanf
 public     | benefit_county_medicaid
 public     | benefit_county_medicare
 public     | benefit_county_section8
 public     | benefit_county_daycare
 public     | benefit_county_wic
 public     | benefit_county_ssi
 public     | samhsa_provider_building_join
 public     | nursinghomes_wvdem_041219_gcs84
 public     | policedept_wvdem_012319_gcs84
 public     | hospitals_wvdem_040519_gcs84
 public     | fire_dept_wvdem_092017_utm83
 public     | communityhealthproviders_wvhealthcareauthority_200802_utm83
 public     | hazardmitigationbuyout_20250929_polygons_wma84
 public     | samhsa_provider_spatial_grounded
 public     | spatial_role_scopes
 public     | gbim_layer_catalog
 public     | towerspager_fcc_200202_utm83_attrs_raw
 public     | towersprivate_fcc_200202_ll83
 public     | towersprivate_fcc_200202_ll83_attrs_raw
 public     | towersprivate_fcc_200202_utm83
 public     | wv_income_manual_income_treatment_extended
 public     | veteransaffairsfacilities_manysources_200503_utm83
 public     | community_points
 public     | wv_county_names
 public     | gbim_entity_clusters
 public     | gbim_entity_land_candidates
 public     | intake_submissions
 public     | program_eligibility
 public     | program_name_crosswalk
 public     | resource_county_coverage
 public     | resource_eligibility
 public     | tiger_county_2022
 public     | uei_registry
 public     | wv_county_bbox_geom
 public     | memories
 public     | gbim_worldviews
 public     | program_entity_links
 public     | utility_discount_enrollment
 public     | wv_income_manual_income_sources
 public     | wv_income_manual_income_treatment
 public     | zcta_county_rel
 public     | zcta_polygons
 public     | local_resources_index
 public     | benefit_county_utility20
 public     | 911centers_wvdem_032819_gcs84
 public     | spatial_ref_sys
 public     | gbim_belief_evidence
 public     | 911centers_wvdem_032819_gcs84_attrs_raw
 public     | 911centers_wvdem_032819_utm83
 public     | 911centers_wvdem_032819_utm83_attrs_raw
 public     | amtrackrails_federalrailroadadministration_200210_ll83
 public     | amtrackrails_federalrailroadadministration_200210_ll83_attrs_ra
 public     | amtrackrails_federalrailroadadministration_200210_utm83
 public     | amtrackrails_federalrailroadadministration_200210_utm83_attrs_r
 public     | amtrackrails_fra_200210_ll83_attrs_raw
 public     | amtrackrails_fra_200210_utm83_attrs_raw
 public     | attrs_files_list
 public     | attrs_inventory_detailed
 public     | authority_references
 public     | bldg_join__floodplainstructuresatrisk_usarmycorpsofengineers_20
 public     | bldg_join__hospitals
 public     | blockgroups_census_2000_ll83
 public     | confidence_decay
 public     | fayette_parcels
 public     | fayette_fire_stations
 public     | blockgroups_census_2000_ll83_attrs_raw
 public     | blockgroups_census_2000_utm83
 public     | blockgroups_census_2000_utm83_attrs_raw
 public     | blockgroups_census_201111_gcs83
 public     | blockgroups_census_201111_gcs83_attrs_raw
 public     | blockgroups_census_201111_utm83
 public     | blockgroups_census_201111_utm83_attrs_raw
 public     | benefit_case
 public     | blockgroups_census_2020_utm83
 public     | blockgroups_census_2020_utm83_attrs_raw
 public     | blockgroups_census_2020_utm83_full
 public     | blockgroups_census_2020_wma84
 public     | blockgroups_census_2020_wma84_attrs_raw
 public     | blocks_census_2020_utm83
 public     | blocks_census_2020_utm83_attrs_raw
 public     | blocks_census_2020_utm83_full
 public     | blocks_census_2020_wma84
 public     | blocks_census_2020_wma84_attrs_raw
 public     | boundaryappalachianbasin_wvges_1996_utm83
 public     | boundaryappalachianbasin_wvges_1996_utm83_attrs_raw
 public     | boundaryappalachianbasin_wvges_1996_wma84
 public     | bridges
 public     | bridges_attrs_raw
 public     | building_flood_risk
 public     | building_metric_stage
 public     | buildings
 public     | calderl_reg_ll83
 public     | calderl_reg_ll83_attrs_raw
 public     | citieswithpopulation_2500_census_201111_gcs83
 public     | citieswithpopulation_2500_census_201111_gcs83_attrs_raw
 public     | citieswithpopulation_2500_census_201111_utm83
 public     | citieswithpopulation_2500_census_201111_utm83_attrs_raw
 public     | citieswithpopulationover10k_census_201111_gcs83
 public     | citieswithpopulationover10k_census_201111_gcs83_attrs_raw
 public     | citieswithpopulationover10k_uscensus_1990_ll83
 public     | citieswithpopulationover10k_uscensus_1990_ll83_attrs_raw
 public     | citieswithpopulationover10k_uscensus_1990_utm83
 public     | citieswithpopulationover10k_uscensus_1990_utm83_attrs_raw
 public     | citieswithpopulationover2500_uscensus_1990_ll83
 public     | citieswithpopulationover2500_uscensus_1990_ll83_attrs_raw
 public     | citieswithpopulationsover10k_census_2020_utm83
 public     | citieswithpopulationsover10k_census_2020_utm83_attrs_raw
 public     | citieswithpopulationsover10k_census_2020_wma84
 public     | citieswithpopulationsover10k_census_2020_wma84_attrs_raw
 public     | citieswithpopulationsover2500_census_2020_utm83
 public     | citieswithpopulationsover2500_census_2020_utm83_attrs_raw
 public     | citieswithpopulationsover2500_census_2020_wma84
 public     | citieswithpopulationsover2500_census_2020_wma84_attrs_raw
 public     | citieswithpopulatoinover2500_uscensus_1990_utm83
 public     | citieswithpopulatoinover2500_uscensus_1990_utm83_attrs_raw
 public     | client_utility_account
 public     | coals2_ll83
 public     | coals2_ll83_attrs_raw
 public     | coals2_utm27
 public     | coals2_utm27_attrs_raw
 public     | coals2_utm83
 public     | coals2_utm83_attrs_raw
 public     | communityboundary_min_att_20250121_utm83
 public     | communityboundary_min_att_20250121_utm83_attrs_raw
 public     | communityboundary_min_att_20250121_wma84
 public     | communityboundary_min_att_20250121_wma84_attrs_raw
 public     | communityhealthproviders_wvhealthcareauthority_200802_utm83_att
 public     | correctionalinstitutions_hsip_20091230_utm83
 public     | correctionalinstitutions_hsip_20091230_utm83_attrs_raw
 public     | correctionalinstitutions_hsip_20091230_wgs84
 public     | correctionalinstitutions_hsip_20091230_wgs84_attrs_raw
 public     | countycityparkboundaries_20201104_utm83
 public     | countycityparkboundaries_20201104_utm83_attrs_raw
 public     | countyseats_usgs_ll83
 public     | countyseats_usgs_ll83_attrs_raw
 public     | countyseats_usgs_utm83
 public     | countyseats_usgs_utm83_attrs_raw
 public     | courthousescounty_manysources_200203_ll83
 public     | courthousescounty_manysources_200203_ll83_attrs_raw
 public     | courthousescounty_manysources_200203_utm83
 public     | courthousescounty_manysources_200203_utm83_attrs_raw
 public     | courthousesfederal_manysources_200203_ll83
 public     | courthousesfederal_manysources_200203_ll83_attrs_raw
 public     | courthousesfederal_manysources_200203_utm
 public     | courthousesfederal_manysources_200203_utm_attrs_raw
 public     | cvfault_ll83
 public     | cvfault_ll83_attrs_raw
 public     | cvfault_utm27
 public     | cvfault_utm27_attrs_raw
 public     | cvfault_utm83
 public     | cvfault_utm83_attrs_raw
 public     | cvpoly_ll83
 public     | cvpoly_ll83_attrs_raw
 public     | cvpoly_utm27
 public     | cvpoly_utm27_attrs_raw
 public     | cvpoly_utm83
 public     | cvpoly_utm83_attrs_raw
 public     | dams_usarmycorpsofengineers_200010_utm83
 public     | dams_usarmycorpsofengineers_200010_utm83_attrs_raw
 public     | dams_usarmycropsofengineers_200010_ll83
 public     | dams_usarmycropsofengineers_200010_ll83_attrs_raw
 public     | damsnoncoal_usgs_2002_ll27
 public     | damsnoncoal_usgs_2002_ll27_attrs_raw
 public     | damsnoncoal_usgs_2002_utm83
 public     | damsnoncoal_usgs_2002_utm83_attrs_raw
 public     | empowermentzonesandenterprisecommunities_uscensus_2002_utm83
 public     | empowermentzonesandenterprisecommunities_uscensus_2002_utm83_at
 public     | empowermentzonesandenterprisecommunitiesbytractuscens30c72907
 public     | empowermentzonesandenterprisecommunitiesbytractuscens30c72907at
 public     | evidence_documents
 public     | excursionpassengertrains_wvdof_200102_ll83
 public     | excursionpassengertrains_wvdof_200102_ll83_attrs_raw
 public     | excursionpassengertrains_wvdof_200102_utm83
 public     | excursionpassengertrains_wvdof_200102_utm83_attrs_raw
 public     | facilities_epa_200203_ll83
 public     | facilities_epa_200203_ll83_attrs_raw
 public     | facilities_epa_200203_utm83
 public     | facilities_epa_200203_utm83_attrs_raw
 public     | fault_reg_ll83
 public     | fault_reg_ll83_attrs_raw
 public     | faultgl_reg_ll83
 public     | faultgl_reg_ll83_attrs_raw
 public     | features
 public     | features_attrs_raw
 public     | fire_departments
 public     | fire_departments_attrs_raw
 public     | fire_dept_wvdem_092017_utm83_attrs_raw
 public     | floodplainstructuresatrisk_usarmycorpsofengineers_200303_utm83
 public     | floodplainstructuresatrisk_usarmycorpsofengineers_200303_utm83_
 public     | gbim_evidence
 public     | gbim_belief
 public     | wv_county_boundaries_24k_topo_updated_2022_utm83_attrs_raw
 public     | gbim_full_points
 public     | gbim_full_points_raw
 public     | gbim_belief_edges
 public     | gbim_layer_config
 public     | gbim_layer_manifest
 public     | wvstatehousedistricts_wvlegislativeservices_2020_utm83_attrs_ra
 public     | wvstatesenatedistricts_wvlegislativeservices_2020_utm83_attrs_r
 public     | gbim_source_epochs
 public     | gbim_source_tables_used
 public     | wv_tax_districts_utm83_attrs_raw
 public     | gbim_entities
 public     | gbim_worldview_entity_backup_small
 public     | gbim_worldview_entity
 public     | zipcodetabulationarea_census_2020_utm83_attrs_raw
 public     | gbimbeliefnormalized
 public     | geographicalnamesonusgstopomaps_usgs_200601_ll27
 public     | geographicalnamesonusgstopomaps_usgs_200601_ll27_attrs_raw
 public     | geographicalnamesonusgstopomaps_usgs_200601_utm83
 public     | geographicalnamesonusgstopomaps_usgs_200601_utm83_attrs_raw
 public     | geographicnamesonusgstopomaps_current_usgs_20110801_ll83
 public     | geographicnamesonusgstopomaps_current_usgs_20110801_ll83_attrs_
 public     | geographicnamesonusgstopomaps_current_usgs_20110801_utm83
 public     | geographicnamesonusgstopomaps_current_usgs_20110801_utm83_attrs
 public     | geographicnamesonusgstopomaps_historical_usgs_20110801_ll83
 public     | geographicnamesonusgstopomaps_historical_usgs_20110801_ll83_att
 public     | geographicnamesonusgstopomaps_historical_usgs_20110801_utm83
 public     | geographicnamesonusgstopomaps_historical_usgs_20110801_utm83_at
 public     | geographicnamesonusgstopomaps_usgs_20110801_ll83
 public     | geographicnamesonusgstopomaps_usgs_20110801_ll83_attrs_raw
 public     | geographicnamesonusgstopomaps_usgs_20110801_utm83
 public     | geographicnamesonusgstopomaps_usgs_20110801_utm83_attrs_raw
 public     | geolgyl_reg_ll83
 public     | geolgyl_reg_ll83_attrs_raw
 public     | geolgyp_reg_ll83
 public     | geolgyp_reg_ll83_attrs_raw
 public     | geospatial_features
 public     | geospatial_layers
 public     | geotextl_reg_ll83
 public     | geotextl_reg_ll83_attrs_raw
 public     | glacagl_reg_ll83
 public     | glacagl_reg_ll83_attrs_raw
 public     | glacal_reg_ll83
 public     | glacal_reg_ll83_attrs_raw
 public     | hazardmitigationbuyout_20250929_polygons_utm83
 public     | hazardmitigationbuyout_20250929_polygons_utm83_attrs_raw
 public     | hazardmitigationbuyout_20250929_polygons_wma84_attrs_raw
 public     | healthruralfacilities_manysources_utm83
 public     | healthruralfacilities_manysources_utm83_attrs_raw
 public     | highered_wvemd_072420_utm83
 public     | highered_wvemd_072420_utm83_attrs_raw
 public     | highered_wvemd_072420_wgc84
 public     | highered_wvemd_072420_wgc84_attrs_raw
 public     | historicalaerialphotographycountycoverage_wvgistc_utm83
 public     | historicalaerialphotographycountycoverage_wvgistc_utm83_attrs_r
 public     | hospitals
 public     | hospitals_attrs_raw
 public     | hospitals_wvdem_040519_gcs84_attrs_raw
 public     | hospitals_wvdem_040519_utm83
 public     | hospitals_wvdem_040519_utm83_attrs_raw
 public     | hospitalswvdem040519utm83
 public     | hospitalswvdem040519utm83_attrs_raw
 public     | impact_reg_ll83
 public     | impact_reg_ll83_attrs_raw
 public     | indexgrid15minutequads_wvgistc_ll83
 public     | indexgrid15minutequads_wvgistc_ll83_attrs_raw
 public     | indexgrid15minutequads_wvgistc_utm83
 public     | indexgrid15minutequads_wvgistc_utm83_attrs_raw
 public     | indexgrid15minutewithcounties_wvgistc_utm27
 public     | indexgrid15minutewithcounties_wvgistc_utm27_attrs_raw
 public     | indexgrid1minutequads_wvgistc_ll83
 public     | indexgrid1minutequads_wvgistc_ll83_attrs_raw
 public     | industrialbuildings_wvdo_200807_utm83
 public     | industrialbuildings_wvdo_200807_utm83_attrs_raw
 public     | industrialparks_wvdo_200078_utm83
 public     | industrialparks_wvdo_200078_utm83_attrs_raw
 public     | industrialsites_wvdo_200807_utm83
 public     | industrialsites_wvdo_200807_utm83_attrs_raw
 public     | inedexgrid1minutequads_wvgistc_utm83
 public     | inedexgrid1minutequads_wvgistc_utm83_attrs_raw
 public     | intermodalterminalfacilities_usdot_1997_ll83
 public     | intermodalterminalfacilities_usdot_1997_ll83_attrs_raw
 public     | intermodalterminalfacilities_usdot_1997_utm83
 public     | intermodalterminalfacilities_usdot_1997_utm83_attrs_raw
 public     | layer_config
 public     | libraries_manysources_2001_ll27
 public     | libraries_manysources_2001_ll27_attrs_raw
 public     | libraries_manysources_2001_utm83
 public     | libraries_manysources_2001_utm83_attrs_raw
 public     | local_resources
 public     | majorriversandlakesline_nhd_2002_ll83
 public     | majorriversandlakesline_nhd_2002_ll83_attrs_raw
 public     | majorriversandlakesline_nhd_2002_utm83
 public     | majorriversandlakesline_nhd_2002_utm83_attrs_raw
 public     | majorriversandlakespolygon_nhd_2002_poly_ll83
 public     | majorriversandlakespolygon_nhd_2002_poly_ll83_attrs_raw
 public     | majorriversandlakespolygon_nhd_2002_utm83
 public     | majorriversandlakespolygon_nhd_2002_utm83_attrs_raw
 public     | manufacturingandbusiness_wvdo_200803_utm83
 public     | manufacturingandbusiness_wvdo_200803_utm83_attrs_raw
 public     | metfacp_reg_ll83
 public     | metfacp_reg_ll83_attrs_raw
 public     | metropolitanandmicropolitanstatisticalareas_census_2020_utm83
 public     | metropolitanandmicropolitanstatisticalareas_census_2020_utm83_a
 public     | metropolitanandmicropolitanstatisticalareas_census_2020_wma84
 public     | metropolitanandmicropolitanstatisticalareas_census_2020_wma84_a
 public     | metropolitanandmicropolitanstatisticalareascensus201111gcs83
 public     | metropolitanandmicropolitanstatisticalareascensus201111gcs83att
 public     | metropolitanandmicropolitanstatisticalareascensus201111utm83
 public     | metropolitanandmicropolitanstatisticalareascensus201111utm83att
 public     | metropolitanstatisticalareas_uscensus_199901_ll83
 public     | metropolitanstatisticalareas_uscensus_199901_ll83_attrs_raw
 public     | metropolitanstatisticalareas_uscensus_199901_utm83
 public     | metropolitanstatisticalareas_uscensus_199901_utm83_attrs_raw
 public     | mineraloperations_usgs_200204_ll83
 public     | mineraloperations_usgs_200204_ll83_attrs_raw
 public     | mineraloperations_usgs_200204_utm83
 public     | mineraloperations_usgs_200204_utm83_attrs_raw
 public     | minesabandonedlandsline_wvdep_1996_noprojectoin
 public     | minesabandonedlandsline_wvdep_1996_noprojectoin_attrs_raw
 public     | minesabandonedlandspoint_wvdep_1996_noprojection
 public     | minesabandonedlandspoint_wvdep_1996_noprojection_attrs_raw
 public     | minesabandonedlandspolygon_wvdep_1996_noprojection
 public     | minesabandonedlandspolygon_wvdep_1996_noprojection_attrs_raw
 public     | nationalatlasstreams_usgs_199903_ll83
 public     | nationalatlasstreams_usgs_199903_ll83_attrs_raw
 public     | nationalatlasstreams_usgs_199903_utm83
 public     | nationalatlasstreams_usgs_199903_utm83_attrs_raw
 public     | nationalregister_point_20200923
 public     | nationalregister_point_20200923_attrs_raw
 public     | nationalregister_point_20200923_utm27
 public     | nationalregister_point_20200923_utm27_attrs_raw
 public     | nationalwaterwaynetwork_usarmycorpsofengineers_2001_ll83
 public     | nationalwaterwaynetwork_usarmycorpsofengineers_2001_ll83_attrs_
 public     | nationalwaterwaynetwork_usarmycorpsofengineers_2001_utm83
 public     | nationalwaterwaynetwork_usarmycorpsofengineers_2001_utm83_attrs
 public     | nationalwaterwaynetworkports_usarmycorpsofengineers_2001_ll83
 public     | nationalwaterwaynetworkports_usarmycorpsofengineers_2001_ll83_a
 public     | nationalwaterwaynetworkports_usarmycorpsofengineers_2001_utm83
 public     | nationalwaterwaynetworkports_usarmycorpsofengineers_2001_utm83_
 public     | naviagablewaterways_usarmycropsofengineers_2006_utm83
 public     | naviagablewaterways_usarmycropsofengineers_2006_utm83_attrs_raw
 public     | navigablewaterwaysrivermiles_usarmycropsofengineers_2006_utm83
 public     | navigablewaterwaysrivermiles_usarmycropsofengineers_2006_utm83_
 public     | navigablewaterwaysstructures_usarmycorpsofengineers_2006_utm83
 public     | navigablewaterwaysstructures_usarmycorpsofengineers_2006_utm83_
 public     | nursinghomes_wvdem_041219_gcs84_attrs_raw
 public     | nursinghomes_wvdem_041219_utm83
 public     | nursinghomes_wvdem_041219_utm83_attrs_raw
 public     | officebuildings_wvdo_200807_utm83
 public     | officebuildings_wvdo_200807_utm83_attrs_raw
 public     | paroleoffices_manysources_2008_utm83
 public     | paroleoffices_manysources_2008_utm83_attrs_raw
 public     | paroleoffices_manysources_2008_wgs84
 public     | paroleoffices_manysources_2008_wgs84_attrs_raw
 public     | placesofworship_hsip_20080723_utm83
 public     | placesofworship_hsip_20080723_utm83_attrs_raw
 public     | placesofworship_hsip_20080723_wgs84
 public     | placesofworship_hsip_20080723_wgs84_attrs_raw
 public     | policedept_wvdem_012319_gcs84_attrs_raw
 public     | policedept_wvdem_012319_utm83
 public     | policedept_wvdem_012319_utm83_attrs_raw
 public     | populatedplaces_census_201112_utm83
 public     | populatedplaces_census_201112_utm83_attrs_raw
 public     | populatedplaces_census_20112_gcs83
 public     | populatedplaces_census_20112_gcs83_attrs_raw
 public     | populatedplaces_census_2020_utm83
 public     | populatedplaces_census_2020_utm83_attrs_raw
 public     | populatedplaces_census_2020_wma84
 public     | populatedplaces_census_2020_wma84_attrs_raw
 public     | populatedplaces_uscensus_1990_ll83
 public     | populatedplaces_uscensus_1990_ll83_attrs_raw
 public     | populatedplaces_uscensus_1990_utm83
 public     | populatedplaces_uscensus_1990_utm83_attrs_raw
 public     | populationdatablockgroups_uscensus_2000_ll83
 public     | populationdatablockgroups_uscensus_2000_ll83_attrs_raw
 public     | populationdatablockgroups_uscensus_2000_utm83
 public     | populationdatablockgroups_uscensus_2000_utm83_attrs_raw
 public     | pow_wvgistc_062919_utm83
 public     | pow_wvgistc_062919_utm83_attrs_raw
 public     | pow_wvgistc_062919_wgs84
 public     | pow_wvgistc_062919_wgs84_attrs_raw
 public     | program
 public     | program_authority_links
 public     | program_catalog
 public     | program_manual_rule_links
 public     | publichealthdepts_hsip_20091229_gcs83
 public     | publichealthdepts_hsip_20091229_gcs83_attrs_raw
 public     | publichealthdepts_hsip_20091229_utm83
 public     | publichealthdepts_hsip_20091229_utm83_attrs_raw
 public     | railnetworkregion_usdot_200203_ll83
 public     | railnetworkregion_usdot_200203_ll83_attrs_raw
 public     | railnetworkregion_usdot_200203_utm83
 public     | railnetworkregion_usdot_200203_utm83_attrs_raw
 public     | railnetworkwv_usdot_200203_ll83
 public     | program_evidence_links
 public     | program_income_limit_rules
 public     | program_income_source_policy
 public     | program_target_config
 public     | railnetworkwv_usdot_200203_ll83_attrs_raw
 public     | railnetworkwv_usdot_200203_utm83
 public     | railnetworkwv_usdot_200203_utm83_attrs_raw
 public     | railroads_rahalltransportationinstitute_2005_utm83
 public     | railroads_rahalltransportationinstitute_2005_utm83_attrs_raw
 public     | realtimestreamflowstations_usgs_200012_ll27
 public     | realtimestreamflowstations_usgs_200012_ll27_attrs_raw
 public     | realtimestreamflowstations_usgs_200012_utm27
 public     | realtimestreamflowstations_usgs_200012_utm27_attrs_raw
 public     | realtimestreamflowstations_usgs_200012_utm83
 public     | realtimestreamflowstations_usgs_200012_utm83_attrs_raw
 public     | recreationalwwtrails_ofwv_20151117_utm83
 public     | recreationalwwtrails_ofwv_20151117_utm83_attrs_raw
 public     | regionalplanninganddevelopmentcouncil_wvdo_1971_ll83
 public     | regionalplanninganddevelopmentcouncil_wvdo_1971_ll83_attrs_raw
 public     | regionalplanninganddevelopmentcouncil_wvdo_1971_utm83
 public     | regionalplanninganddevelopmentcouncil_wvdo_1971_utm83_attrs_raw
 public     | sewertreatmentplants_wvdep_200203_utm83
 public     | sewertreatmentplants_wvdep_200203_utm83_attrs_raw
 public     | solidwastefacilities_wvdep_200202_ll83
 public     | solidwastefacilities_wvdep_200202_ll83_attrs_raw
 public     | solidwastefacilities_wvdep_200202_utm83
 public     | solidwastefacilities_wvdep_200202_utm83_attrs_raw
 public     | springs_wvges_1986_ll83
 public     | springs_wvges_1986_ll83_attrs_raw
 public     | springs_wvges_1986_utm83
 public     | springs_wvges_1986_utm83_attrs_raw
 public     | stateofwvhousedistricts_wvlegislativeservices_2010
 public     | stateofwvhousedistricts_wvlegislativeservices_2010_attrs_raw
 public     | stateofwvsenatedistricts_wvlegislativeservices_2010
 public     | stateofwvsenatedistricts_wvlegislativeservices_2010_attrs_raw
 public     | states_region_ll83
 public     | states_region_ll83_attrs_raw
 public     | structurepointsnorth_samb_2003_utm83
 public     | structurepointsnorth_samb_2003_utm83_attrs_raw
 public     | structurepointssouth_samb_2003_utm83
 public     | structurepointssouth_samb_2003_utm83_attrs_raw
 public     | structurepolygons_samb_2003_utm83
 public     | structurepolygons_samb_2003_utm83_attrs_raw
 public     | summits_gistc_052012_utm83_shp
 public     | summits_gistc_052012_utm83_shp_attrs_raw
 public     | summits_gistc_052012_wgs84_shp
 public     | summits_gistc_052012_wgs84_shp_attrs_raw
 public     | surveycontrol_nationalgeodeticsurvey_102011_gcs83
 public     | surveycontrol_nationalgeodeticsurvey_102011_gcs83_attrs_raw
 public     | timberremovalvolume_usfs_1996_utm83
 public     | timberremovalvolume_usfs_1996_utm83_attrs_raw
 public     | tl_2020_54_bg
 public     | tl_2020_54_tabblock20
 public     | tmp_building_block_nearest_sample
 public     | towers_wvpublicbroadcasting_2002_ll83
 public     | towers_wvpublicbroadcasting_2002_ll83_attrs_raw
 public     | towers_wvpublicbroadcasting_2002_utm83
 public     | towers_wvpublicbroadcasting_2002_utm83_attrs_raw
 public     | towersam_fcc_200202_utm83
 public     | towersam_fcc_200202_utm83_attrs_raw
 public     | towersasr_fcc_200202_ll83
 public     | towersasr_fcc_200202_ll83_attrs_raw
 public     | towersasr_fcc_200202_utm83
 public     | towersasr_fcc_200202_utm83_attrs_raw
 public     | towerscellular_fcc_200202_ll83
 public     | towerscellular_fcc_200202_ll83_attrs_raw
 public     | towerscellular_fcc_200202_utm83
 public     | towerscellular_fcc_200202_utm83_attrs_raw
 public     | towersfm_fcc_200202_utm83
 public     | towersfm_fcc_200202_utm83_attrs_raw
 public     | towersmicrowave_fcc_200202_ll83
 public     | towersmicrowave_fcc_200202_ll83_attrs_raw
 public     | towersmicrowave_fcc_200202_utm83
 public     | towersmicrowave_fcc_200202_utm83_attrs_raw
 public     | towerspager_fcc_200202_ll83
 public     | towerspager_fcc_200202_ll83_attrs_raw
 public     | towerspager_fcc_200202_utm83
 public     | towersprivate_fcc_200202_utm83_attrs_raw
 public     | us_counties
 public     | us_counties_tmp
 public     | us_zips
 public     | us_zips_tmp
 public     | user_compliance_task
 public     | veteransaffairsfacilities_manysources_200503_utm83_attrs_raw
 public     | veteransaffairsfacilities_manysources_200503_wgs84
 public     | veteransaffairsfacilities_manysources_200503_wgs84_attrs_raw
 public     | votingdistrictswv_legislativeservices_2002_ll83
 public     | votingdistrictswv_legislativeservices_2002_ll83_attrs_raw
 public     | votingdistrictswv_legislativeservices_2002_utm83
 public     | votingdistrictswv_legislativeservices_2002_utm83_attrs_raw
 public     | wv_income_manual_income_limits
 public     | wv_income_manual_rules
 public     | votingdistrictswv_uscensus_2000_utm83
 public     | votingdistrictswv_uscensus_2000_utm83_attrs_raw
 public     | wvgistcbuildingfootprints
 public     | weatherstations_nationalclimatedatacenter_1999_gcs83
 public     | weatherstations_nationalclimatedatacenter_1999_gcs83_attrs_raw
 public     | weatherstations_nationalclimatedatacenter_1999_utm27
 public     | weatherstations_nationalclimatedatacenter_1999_utm27_attrs_raw
 public     | windenergyresource_nationalrenewableenergylab_200901_utm83
 public     | windenergyresource_nationalrenewableenergylab_200901_utm83_attr
 public     | windenergyresource_nationalrenewableenergylab_200901_wgs84
 public     | windenergyresource_nationalrenewableenergylab_200901_wgs84_attr
 public     | workforceinvestmentareas_wvgistc_200208_ll83
 public     | workforceinvestmentareas_wvgistc_200208_ll83_attrs_raw
 public     | wv_microsoft_20180207_utm17n83
 public     | wv_microsoft_20180207_utm17n83_attrs_raw
 public     | wv_tax_districts_ll83
 public     | wv_tax_districts_ll83_attrs_raw
 public     | wv_tax_districts_wma84
 public     | wv_tax_districts_wma84_attrs_raw
 public     | wvgistc_building_footprints
 public     | wvgistc_building_footprints_attrs_raw
 public     | wvgistcbuildingfootprints_attrs_raw
 public     | wvgistcbuildingfootprintsattrsraw
 public     | wvstatebounadary100k_usgs_200203_utm83
 public     | wvstatebounadary100k_usgs_200203_utm83_attrs_raw
 public     | wvstateboundary100k_usgs_200203_ll83
 public     | wvstateboundary100k_usgs_200203_ll83_attrs_raw
 public     | wvstateboundary24k_usgs_200203_ll83
 public     | wvstateboundary24k_usgs_200203_ll83_attrs_raw
 public     | wvstateboundary24k_usgs_200203_utm83
 public     | wvstateboundary24k_usgs_200203_utm83_attrs_raw
 public     | wvstatehousedistricts_manysources_1992_ll83
 public     | wvstatehousedistricts_manysources_1992_ll83_attrs_raw
 public     | wvstatehousedistricts_manysources_1992_utm83
 public     | wvstatehousedistricts_manysources_1992_utm83_attrs_raw
 public     | wvstatehousedistricts_manysources_2002_ll83
 public     | wvstatehousedistricts_manysources_2002_ll83_attrs_raw
 public     | wvstatehousedistricts_manysources_2002_utm83
 public     | wvstatehousedistricts_manysources_2002_utm83_attrs_raw
 public     | wvstatesenatedistricts_manysources_1992_ll83
 public     | wvstatesenatedistricts_manysources_1992_ll83_attrs_raw
 public     | wvstatesenatedistricts_manysources_1992_utm83
 public     | wvstatesenatedistricts_manysources_1992_utm83_attrs_raw
 public     | wvstatesenatedistricts_manysources_2002_ll83
 public     | wvstatesenatedistricts_manysources_2002_ll83_attrs_raw
 public     | wvstatesenatedistricts_manysources_2002_utm83
 public     | wvstatesenatedistricts_manysources_2002_utm83_attrs_raw
 public     | zipcodetabulationarea_census_2020_raw
 public     | zipcodetabulationarea_census_2020_wma84
 public     | zipcodetabulationarea_census_2020_wma84_attrs_raw
 public     | wv_zip_zcta_raw
 public     | samhsa_provider_stage
(533 rows)

(crypto-venv) cakidd@cakidd-Legion-5-16IRX9:~/msjarvis-rebuild-working/msjarvis-rebuild$ 

