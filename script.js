jQuery("#form").validate({
    rule: {
        company: "required",
        name: "required",
        email: {
            required: true,
            email: true,
        },

    }, messages: {
        company: "Please Enter your Company Name",
        name: "Please Enter your Name",
        email: {
            required: "Please Enter your Valid Email",
            email: true,
        },
    },
    submitHandler:function(form){
        form.submit();
    }
});