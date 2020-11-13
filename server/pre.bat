@echo off
SET location=%CD%
REM echo %path%
cd "C:Program FilesMongoDBServer4.2bin"
start call mongod -dbpath c:datadb
TIMEOUT /T 10
start call mongo
cd %location%