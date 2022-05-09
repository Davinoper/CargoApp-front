<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <div id="titulo">
    <h1>CargoApp</h1>
    <h5>Sistema de gerenciamento de cargas</h5>
    </div>
      <v-list>
      <v-list-item-group >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" :to="item.to" link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>CargoApp</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="red lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat labore nulla sapiente harum, consequatur aperiam accusantium quam maiores enim iure vero expedita, voluptas nobis voluptates beatae commodi impedit. Magnam?
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; <strong>CargoApp - todos os direitos reservados</strong> -{{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
           
       
  </v-app>
</template>


<style >
h1,h5{
  color: rgb(77, 74, 74);
}

</style>



<script>


export default {
  name: 'Principal',
 data: () => ({
    drawer: null,
    items: [
      { title: "CARGAS", icon: "mdi-view-dashboard", to: "/carga" },
      { title: "CARROS", icon: "mdi-car", to: "/carro"},
      { title: "OPERAÇÕES", icon: "mdi-badge-account", to: "/operacao"},
      { title: "PESSOAS FÍSICAS", icon: "mdi-account-tie", to: "/pessoafisica"},
      { title: "PESSOAS JURÍDICAS", icon: "mdi-account-tie", to: "/pessoajuridica"},
    ],
  }),

};
</script>
