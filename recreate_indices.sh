#!/bin/bash
export MBTILES_DIR="./tiles"

mbtiles=()

mbtiles+=("cirac_risk_lx_fixed_assets_i_b.mbtiles")
mbtiles+=("cirac_risk_lx_fixed_assets_i_g.mbtiles")
mbtiles+=("cirac_risk_lx_fixed_assets_ni_b.mbtiles")
mbtiles+=("cirac_risk_lx_fixed_assets_ni_g.mbtiles")
mbtiles+=("cirac_risk_lx_res_inventory_b.mbtiles")
mbtiles+=("cirac_risk_lx_res_inventory_g.mbtiles")
mbtiles+=("cirac_risk_lx_stocks_b.mbtiles")
mbtiles+=("cirac_risk_lx_stocks_g.mbtiles")
mbtiles+=("cirac_risk_lx_structure.mbtiles")
mbtiles+=("cirac_risk_lx_t100.mbtiles")
mbtiles+=("cirac_risk_lx_t500.mbtiles")
mbtiles+=("cirac_risk_lx_t50.mbtiles")
mbtiles+=("cirac_vul_bgri_bfvi_75.mbtiles")
mbtiles+=("cirac_vul_bgri_bfvi_n.mbtiles")
mbtiles+=("cirac_vul_bgri_cfvi75.mbtiles")
mbtiles+=("cirac_vul_bgri_cfvi.mbtiles")
mbtiles+=("cirac_vul_bgri_e75.mbtiles")
mbtiles+=("cirac_vul_bgri_e.mbtiles")
mbtiles+=("cirac_vul_bgri_fvi_75.mbtiles")
mbtiles+=("cirac_vul_bgri_fvi_n.mbtiles")
mbtiles+=("cirac_vul_bgri_sf75.mbtiles")
mbtiles+=("cirac_vul_bgri_sf.mbtiles")
mbtiles+=("cirac_vul_bgri_ssi75.mbtiles")
mbtiles+=("cirac_vul_bgri_ssi.mbtiles")
mbtiles+=("cirac_vul_bgri_tf75.mbtiles")
mbtiles+=("cirac_vul_bgri_tf.mbtiles")
mbtiles+=("cirac_vul_cp4_bfvi75.mbtiles")
mbtiles+=("cirac_vul_cp4_bfvi.mbtiles")
mbtiles+=("cirac_vul_cp4_cfvi_75.mbtiles")
mbtiles+=("cirac_vul_cp4_cfvi_mode.mbtiles")
mbtiles+=("cirac_vul_cp4_e75.mbtiles")
mbtiles+=("cirac_vul_cp4_e.mbtiles")
mbtiles+=("cirac_vul_cp4_fvi75.mbtiles")
mbtiles+=("cirac_vul_cp4_fvi.mbtiles")
mbtiles+=("cirac_vul_cp4_sf75.mbtiles")
mbtiles+=("cirac_vul_cp4_sf.mbtiles")
mbtiles+=("cirac_vul_cp4_ssi75.mbtiles")
mbtiles+=("cirac_vul_cp4_ssi.mbtiles")
mbtiles+=("cirac_vul_cp4_tf75.mbtiles")
mbtiles+=("cirac_vul_cp4_tf.mbtiles")
mbtiles+=("cirac_vul_freg_bfvi75.mbtiles")
mbtiles+=("cirac_vul_freg_bfvi.mbtiles")
mbtiles+=("cirac_vul_freg_cfvi_75.mbtiles")
mbtiles+=("cirac_vul_freg_cfvi_mode.mbtiles")
mbtiles+=("cirac_vul_freg_e75.mbtiles")
mbtiles+=("cirac_vul_freg_e.mbtiles")
mbtiles+=("cirac_vul_freg_fvi75.mbtiles")
mbtiles+=("cirac_vul_freg_fvi.mbtiles")
mbtiles+=("cirac_vul_freg_sf75.mbtiles")
mbtiles+=("cirac_vul_freg_sf.mbtiles")
mbtiles+=("cirac_vul_freg_ssi75.mbtiles")
mbtiles+=("cirac_vul_freg_ssi.mbtiles")
mbtiles+=("cirac_vul_freg_tf75.mbtiles")
mbtiles+=("cirac_vul_freg_tf.mbtiles")

l=${#mbtiles[@]}

# taken from https://github.com/mapbox/node-mbtiles/blob/master/lib/schema.sql

for (( i=0; i < $l; i++ )) do

	echo "
	DROP INDEX map_index;
	DROP INDEX grid_key_lookup;
	DROP INDEX keymap_lookup;
	DROP INDEX grid_utfgrid_lookup;
	DROP INDEX images_id;
	DROP INDEX name;
	DROP INDEX map_grid_id;
	DROP INDEX geocoder_type_index;
	DROP INDEX geocoder_shard_index;
	CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
	CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
	CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
	CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
	CREATE UNIQUE INDEX images_id ON images (tile_id);
	CREATE UNIQUE INDEX name ON metadata (name);
	CREATE INDEX map_grid_id ON map (grid_id);
	CREATE INDEX geocoder_type_index ON geocoder_data (type);
	CREATE UNIQUE INDEX geocoder_shard_index ON geocoder_data (type, shard);
	VACUUM;
	"\
	| sqlite3 $MBTILES_DIR/${mbtiles[$i]}

done
