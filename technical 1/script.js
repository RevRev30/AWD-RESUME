document.addEventListener('DOMContentLoaded', function() {
    var resumeContainer = document.querySelector('.resume-container');
    var headerLeft = document.querySelector('.header-left');
    var originalBackgroundColor = resumeContainer.style.backgroundColor;
    var originalTextColor = resumeContainer.style.color;
    var isColorChanged = false;

    document.getElementById('changeColorButton').addEventListener('click', function() {
        if (!isColorChanged) {
            var backgroundColor = '#0000ff'; 
            var textColor = '#ffffff'; 
        } else {
            var backgroundColor = originalBackgroundColor; 
            var textColor = originalTextColor; 
        }

        resumeContainer.style.backgroundColor = backgroundColor;
        resumeContainer.style.color = textColor;
        headerLeft.style.color = textColor;

        isColorChanged = !isColorChanged; // Toggle color change
    });

    document.getElementById('changeColorButton').addEventListener('mouseover', function() {
        var backgroundColor = isColorChanged ? originalBackgroundColor : '#009688';
        this.title = 'Background Color: ' + backgroundColor + '\nText Color: #000000';
    });
});
