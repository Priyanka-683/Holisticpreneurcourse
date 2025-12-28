<script>
    const fullCourseCheck = document.querySelector('input[value="FULL 14 PILLARS"]');
    const individualPillars = document.querySelectorAll('input[name="Pillars[]"]:not([value="FULL 14 PILLARS"])');

    // Agar 'Master All' select ho, toh baaki sab hata do
    fullCourseCheck.addEventListener('change', () => {
        if (fullCourseCheck.checked) {
            individualPillars.forEach(p => p.checked = false);
        }
    });

    // Agar koi individual pillar select ho, toh 'Master All' hata do
    individualPillars.forEach(pillar => {
        pillar.addEventListener('change', () => {
            if (pillar.checked) {
                fullCourseCheck.checked = false;
            }
        });
    });
</script>