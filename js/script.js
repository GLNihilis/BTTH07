$(document).ready(function()
{

    //Check UserID
    function checkUserId()
    {
        let userID = $('#txtUserID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e)
    {
        e.preventDefault();
        if(checkUserId())
        {
            $("#statusOfUserID").text('UserID correct')
            $("#statusOfUserID").css('color','blue')
        }
        else
        {
            $("#statusOfUserID").text('UserID incorrect')
            $("#statusOfUserID").css('color','red')
        }
    })

    //Check Password
    function checkPassword()
    {
        let password = $('#txtPassword').val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passwordRegex.test(password))
        {
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e)
    {
        e.preventDefault();
        if(checkPassword())
        {
            $("#statusOfPassword").text('Password correct')
            $("#statusOfPassword").css('color','blue')
        }
        else
        {
            $("#statusOfPassword").text('Password incorrect')
            $("#statusOfPassword").css('color','red')
        }
    })

    //Check UserName
    function checkUserName()
    {
        let userName = $('#txtUserName').val();
        let userNameRegex = /^[a-zA-Z]+$/;
        if(userNameRegex.test(userName))
        {
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e)
    {
        e.preventDefault();
        if(checkUserName())
        {
            $("#statusOfUserName").text('Name correct')
            $("#statusOfUserName").css('color','blue')
        }
        else
        {
            $("#statusOfUserName").text('Name incorrect')
            $("#statusOfUserName").css('color','red')
        }
    })
})