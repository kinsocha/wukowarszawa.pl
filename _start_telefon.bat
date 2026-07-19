@echo off
cd /d C:\Users\lenovo\wukowarszawa.pl
ipconfig > ipinfo.txt 2>&1
start "astro-serwer" cmd /k "npm run dev -- --host > astro-log.txt 2>&1"
start "tunel-publiczny" cmd /k "npx -y localtunnel --port 4321 > tunnel-log.txt 2>&1"
