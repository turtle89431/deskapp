copy .\exefiles\*.* .\build\
copy .\main\*.* .\build\resources\app\
xcopy /E /I /T %cd%\main\node_modules\ %cd%\build\resources\node_modules\
