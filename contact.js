function SendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    if (document.getElementById("name").value.trim() == "" || document.getElementById("email").value.trim() == "" || document.getElementById("message").value.trim() == "") {
        alert("All fields are required.");
        return false;
    }
    else {
        emailjs.send("service_qc5crod", "template_n9ml2tl", params).then(
            function (res) {
                alert("Thank you for reaching me out! I will reply as soon as possible.");
            });
    }
}