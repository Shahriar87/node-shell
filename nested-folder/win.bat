@echo off
IF NOT EXIST "..\.eslintrc.js" COPY ".eslintrc-project.js" "..\.eslintrc.js"
