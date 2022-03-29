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
       //Check ZipCode
       function checkZipCode()
       {
           let zipCode = $('#txtZip').val();
           let zipCodeRegex = /^[0-9]+$/;
           if(zipCodeRegex.test(zipCode))
           {
               return true
           }
           return false
       }
       $("#btnRegister").click(function(e)
       {
           e.preventDefault();
           if(checkZipCode())
           {
               $("#statusOfZip").text('Zip Code correct')
               $("#statusOfZip").css('color','blue')
           }
           else
           {
               $("#statusOfZip").text('Must be numeric only')
               $("#statusOfZip").css('color','red')
           }
       })
   
       //Check Email
       function checkEmail()
       {
           let email = $('#txtEmail').val();
           let emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
           if(emailRegex.test(email))
           {
               return true
           }
           return false
       }
       $("#btnRegister").click(function(e)
       {
           e.preventDefault();
           if(checkEmail())
           {
               $("#statusOfEmail").text('Email correct')
               $("#statusOfEmail").css('color','blue')
           }
           else
           {
               $("#statusOfEmail").text('Email incorrect')
               $("#statusOfEmail").css('color','red')
           }
       })
          //Check Country
    function checkCountry()
    {
        let country = $('#selectCountry').val();
        if(country == '')
        {
            return true
        }
        else
        {
            return false
        }
    }
    $("#btnRegister").click(function(e)
    {
        e.preventDefault();
        if( checkCountry() == true)
        {
            $("#statusOfCountry").text('Select a country')
            $("#statusOfCountry").css('color','red')
            $("#statusOfCountry").css('font-size','15px')
        }
        else
        {
            $("#statusOfCountry").text('Country is valid')
            $("#statusOfCountry").css('color','blue')
            $("#statusOfCountry").css('font-size','15px')
        }
    })
})
