

For csrf token issue:
    -use multer before csrf in app.js
    -newly added lines in app.js : line 5 and line 19
(Note: still there is issue with file reading,I think optimizing the multer code will solve the problem)

Ref:
Link to stackoverflow thread: https://stackoverflow.com/questions/42685940/csrf-and-multer-invalid-csrf-token-error

--LAXMAN--
if we configured multer as in line 19, we don't get flexibility with multer, especially when we have to receive files from the user
from different input fields from single or multiple forms. 
To configure in more flexible manner we configure in a way as in adminRoutes.js line 8-12

--main issue---
i didn't know that " When we send a request to the server it serches for _csrf token from requ.body and until  and unless req.file is handled req.body is not handled.

As csrf token is checked before handling both file and body, server cannot get csrf token so we get invalid csrf token error while using multer.
To solve this we pass the _csrf as params in action of the form! (index.ejs line 11)"
reference: https://www.youtube.com/watch?v=l3mFU0kAFAg&ab_channel=DesiProgrammer
## SOLVED ##