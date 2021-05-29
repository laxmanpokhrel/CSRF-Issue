

For csrf token issue:
    -use multer before csrf in app.js
    -newly added lines in app.js : line 5 and line 19
(Note: still there is issue with file reading,I think optimizing the multer code will solve the problem)

Ref:
Link to stackoverflow thread: https://stackoverflow.com/questions/42685940/csrf-and-multer-invalid-csrf-token-error