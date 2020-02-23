PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE mock_responses (
    id INTEGER PRIMARY KEY,
    name TEXT DEFAULT 'Unnamed',
    active INTEGER DEFAULT 1,
    req_url TEXT,
    req_method TEXT DEFAULT 'GET',
    res_status INTEGET DEFAULT 200,
    res_content_type TEXT DEFAULT 'application/json',
    res_body BLOB
  , res_delay_sec integer, created_at INTEGER, created_by string, updated_at INTEGER, updated_by string, req_payload TEXT);
INSERT INTO mock_responses VALUES(3318566369624064,'Test1',1,'/api/v1/test1','POST',200,'application/json','{"name":"Bala"}',0,1582415756038,'bala',1582416424739,'bala','');
CREATE TABLE use_cases (
          id  INTEGER PRIMARY KEY,
          name  TEXT NOT NULL,
          description TEXT NOT NULL,
          mock_responses TEXT
        , category TEXT NOT NULL DEFAULT('Uncategorized'));
COMMIT;
