document.addEventListener("DOMContentLoaded", function () {
    let survey_options = document.getElementById('survey_options');
    let add_fields = document.getElementById('add_fields');
    let remove_fields = document.getElementById('remove_fields');

    add_fields.addEventListener('click', function (event) {
        event.preventDefault();  // Prevents the default action of the anchor tag
        let newFields = document.createElement('input');
        newFields.setAttribute('type', 'text');
        newFields.setAttribute('name', 'survey_options[]');
        newFields.setAttribute('class', 'survey_options');
        newFields.setAttribute('size', '50');
        newFields.setAttribute('placeholder', 'Other Fields');
        
        survey_options.appendChild(newFields);
    });

    remove_fields.addEventListener('click', function (event) {
        event.preventDefault();  // Prevents the default action of the anchor tag
        let fields = document.querySelectorAll('.survey_options');
        if (fields.length > 1) {
            survey_options.removeChild(fields[fields.length - 1]);
        }
    });
});
