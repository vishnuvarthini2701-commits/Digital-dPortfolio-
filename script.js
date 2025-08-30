// JS Section (optional for animation)

document.querySelectorAll('.skill').forEach(skill => {

  skill.addEventListener('mouseover', () => {

    skill.style.transform = "scale(1.1)";

  });

  skill.addEventListener('mouseout', () => {

    skill.style.transform = "scale(1)";

  });

});