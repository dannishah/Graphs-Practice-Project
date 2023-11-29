<template>
  <div class="d-flex flex-wrap justify-space-around">
    <v-card width="500" class="my-3 pa-1" height="250"><canvas id="card1"></canvas></v-card>
    <v-card width="500" class="my-3 pa-1" height="250"><canvas id="card2"></canvas></v-card>
    <v-card width="500" class="my-3 pa-1" height="250"><canvas id="acquisitions"></canvas></v-card>
    <v-card width="500" class="my-3 pa-1" height="250"><canvas id="card4"></canvas></v-card>
    <v-card>
      <h1>new code</h1>
      <v-btn>new btn</v-btn>
    </v-card>
  </div>
</template>
<script setup type="module">
import Chart from 'chart.js/auto'
import { onMounted } from "vue";
onMounted(() => {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(document.getElementById('acquisitions'), {
    type: 'bar',
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: data.map(row => row.count),
        },
      ],
    },
  });

  new Chart(document.getElementById('card2'), {
    type: 'bubble',
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: data.map(row => ({ x: row.year, y: row.count, r: 10 })),
          backgroundColor: 'rgb(255, 159, 63)',
          borderColor: 'rgb(255, 159, 63)',
          borderWidth: 1,
        },
      ],
    },
  });
  new Chart(document.getElementById('card1'), {
    type: 'line',
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: data.map(row => ({ x: row.year, y: row.count, r: 10 })),
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
        },
      ],
    },
  });

 new Chart(document.getElementById('card4'), {
    type: 'line',
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: data.map(row => ({ x: row.year, y: row.count, r: 10 })),
          backgroundColor: 'blue',
          borderColor: 'blue',
          borderWidth: 2,
        },
      ],
    },
  });
});
</script>
