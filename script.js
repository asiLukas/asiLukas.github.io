document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('techChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Python',
        'Django',
        'TypeScript',
        'React',
        'Java',
        'Spring Boot',
        'SQL',
        'Docker',
        'Git',
        'C#',
      ],
      datasets: [
        {
          data: [100, 80, 80, 85, 50, 30, 85, 70, 100, 50],
          backgroundColor: '#ECECEC',
          borderColor: null,
          borderWidth: 0,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false, // Hide legend
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw}%`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: true,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: true,
          },
        },
      },
    },
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const technologiesSection = document.querySelector('#technologies');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  if (technologiesSection) {
    observer.observe(technologiesSection);
  }
});
