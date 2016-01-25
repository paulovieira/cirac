# taken from https://github.com/mapbox/node-mbtiles/blob/master/lib/schema.sql


mv cirac_vul_bgri_ssi75.mbtiles ..
mv cirac_vul_bgri_ssi.mbtiles ..
mv cirac_vul_bgri_tf75.mbtiles ..
mv cirac_vul_bgri_tf.mbtiles ..



echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_vul_bgri_ssi75_lisbon_alges.mbtiles' AS lisbon;
ATTACH DATABASE 'cirac_vul_bgri_ssi75_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_vul_bgri_ssi75_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM lisbon.map;
REPLACE INTO images SELECT * FROM lisbon.images;
REPLACE INTO grid_utfgrid SELECT * FROM lisbon.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM lisbon.keymap;
REPLACE INTO grid_key SELECT * FROM lisbon.grid_key;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

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
CREATE UNIQUE INDEX geocoder_shard_index ON geocoder_data (type, shard);"\
| sqlite3 cirac_vul_bgri_ssi75.mbtiles





echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_vul_bgri_ssi_lisbon_alges.mbtiles' AS lisbon;
ATTACH DATABASE 'cirac_vul_bgri_ssi_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_vul_bgri_ssi_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM lisbon.map;
REPLACE INTO images SELECT * FROM lisbon.images;
REPLACE INTO grid_utfgrid SELECT * FROM lisbon.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM lisbon.keymap;
REPLACE INTO grid_key SELECT * FROM lisbon.grid_key;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_vul_bgri_ssi.mbtiles


echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_vul_bgri_tf75_lisbon_alges.mbtiles' AS lisbon;
ATTACH DATABASE 'cirac_vul_bgri_tf75_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_vul_bgri_tf75_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM lisbon.map;
REPLACE INTO images SELECT * FROM lisbon.images;
REPLACE INTO grid_utfgrid SELECT * FROM lisbon.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM lisbon.keymap;
REPLACE INTO grid_key SELECT * FROM lisbon.grid_key;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_vul_bgri_tf75.mbtiles



echo "
PRAGMA journal_mode=PERSIST;
PRAGMA page_size=80000;
PRAGMA synchronous=OFF;

ATTACH DATABASE 'cirac_vul_bgri_tf_lisbon_alges.mbtiles' AS lisbon;
ATTACH DATABASE 'cirac_vul_bgri_tf_coimbra.mbtiles' AS coimbra;
ATTACH DATABASE 'cirac_vul_bgri_tf_porto.mbtiles' AS porto;

REPLACE INTO map SELECT * FROM lisbon.map;
REPLACE INTO images SELECT * FROM lisbon.images;
REPLACE INTO grid_utfgrid SELECT * FROM lisbon.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM lisbon.keymap;
REPLACE INTO grid_key SELECT * FROM lisbon.grid_key;

REPLACE INTO map SELECT * FROM coimbra.map;
REPLACE INTO images SELECT * FROM coimbra.images;
REPLACE INTO grid_utfgrid SELECT * FROM coimbra.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM coimbra.keymap;
REPLACE INTO grid_key SELECT * FROM coimbra.grid_key;

REPLACE INTO map SELECT * FROM porto.map;
REPLACE INTO images SELECT * FROM porto.images;
REPLACE INTO grid_utfgrid SELECT * FROM porto.grid_utfgrid;
REPLACE INTO keymap SELECT * FROM porto.keymap;
REPLACE INTO grid_key SELECT * FROM porto.grid_key;

DROP INDEX map_index;
DROP INDEX grid_key_lookup;
DROP INDEX keymap_lookup;
DROP INDEX grid_utfgrid_lookup;
DROP INDEX images_id;
DROP INDEX name;
DROP INDEX map_grid_id;

CREATE UNIQUE INDEX map_index ON map (zoom_level, tile_column, tile_row);
CREATE UNIQUE INDEX grid_key_lookup ON grid_key (grid_id, key_name);
CREATE UNIQUE INDEX keymap_lookup ON keymap (key_name);
CREATE UNIQUE INDEX grid_utfgrid_lookup ON grid_utfgrid (grid_id);
CREATE UNIQUE INDEX images_id ON images (tile_id);
CREATE UNIQUE INDEX name ON metadata (name);
CREATE INDEX map_grid_id ON map (grid_id);"\
| sqlite3 cirac_vul_bgri_tf.mbtiles
