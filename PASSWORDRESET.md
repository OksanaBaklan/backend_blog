## PASSWORD RESET STEPS

- We need to create a link through which user can reset his password (This link is normally available in the login page )
- We need to develop a component where user can provide his email address and submit it to reset his password.
- We also need to develop another component where user can enter his new password and confirm password.
- We will send an email containing a link with token on user's verified email address.
    - This part will happen on backend side
    - we need to develop some kind of end point for it and controller
    - We need to generate a token that must expire as soon as user has changed his password using it once
    - In controller we need to implement send-grid to send email.
    - We need to develop a end-point and controller where we can verify that token and allow user to change his password
    
    