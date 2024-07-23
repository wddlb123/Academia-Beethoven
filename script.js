document.addEventListener('DOMContentLoaded', () => {
    const comunicadosList = document.getElementById('comunicados-list');
    const comunicados = [
        { date: '2024-07-01', message: 'Nuevo concierto programado para agosto.' },
        { date: '2024-06-15', message: 'Actualización de horarios de práctica.' }
    ];

    comunicados.forEach(comunicado => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${comunicado.date}</strong>: ${comunicado.message}`;
        comunicadosList.appendChild(div);
    });
});