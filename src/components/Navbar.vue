<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/"> Inicio </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/busquedas">
                Búsquedas
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/ventas"> Ventas </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/total"> Total </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
