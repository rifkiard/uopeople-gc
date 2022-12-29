<script setup lang="ts">
import AppCol from "@/components/atoms/AppCol.vue";
import AppRow from "@/components/atoms/AppRow.vue";
import AppWrapper from "@/components/atoms/AppWrapper.vue";
import AppLinkItem from "@/components/molecules/AppLinkItem.vue";

const links: {
  title: string;
  link: string;
}[] = [
  {
    title: "🤖 Discord Channel",
    link: "https://bit.ly/dc-uopeople",
  },
  {
    title: "📞 WhatsApp Community",
    link: "https://chat.whatsapp.com/ED6BaeGyRwDKOX7u0Vty4X",
  },
  {
    title: "🌐 Global Networking",
    link: "https://chat.whatsapp.com/IZguTSw1Z2OKyL5fc9XGuH",
  },
  {
    title: "💻 Computer Science",
    link: "https://chat.whatsapp.com/JGWET8VncKz6WGhIzd8SxW",
  },
  {
    title: "🏥 Health Science",
    link: "https://chat.whatsapp.com/CJwXpi3SHBC3BnGP5a6Dkg",
  },

  {
    title: "📊 Business Administration",
    link: "https://chat.whatsapp.com/Ja2gBavTTjuH8Ykhc5NAe7",
  },

  {
    title: "📚 Education",
    link: "https://chat.whatsapp.com/IhHeteRCbkV9cDOrrVwLWi",
  },

  {
    title: "🖥️ Information Technology",
    link: "https://chat.whatsapp.com/HtfrSKDe0j46b5kN2c27tm",
  },

  {
    title: "🌎 English as a Second Language",
    link: "https://chat.whatsapp.com/HNMiHs2st6xC0byTEqT1J7",
  },
];
</script>

<template>
  <AppWrapper>
    <section class="min-h-screen flex justify-center flex-col py-10">
      <div class="flex justify-center">
        <img src="@/assets/images/logo.png" alt="" class="w-[200px]" />
      </div>
      <h1
        class="text-primary-100 text-3xl md:text-5xl font-bold text-center leading-snug md:leading-snug mt-5"
      >
        University of the People
        <br />
        Global Community
      </h1>

      <p class="text-center text-white mt-5">
        ✨ Our goal is to create a global-level community for the students at
        UoPeople ✨
      </p>

      <div class="flex justify-center mt-6">
        <a
          href="#join"
          class="bg-primary-100/20 text-white hover:bg-primary-100/50 py-2 px-3 rounded font-bold"
        >
          ⬇ Join Us ⬇
        </a>
      </div>
    </section>
    <section id="join" class="min-h-screen py-10">
      <h2
        class="text-primary-100 text-center text-3xl md:text-4xl font-bold mb-10"
      >
        🎓
        <br />
        Join Us
      </h2>

      <AppRow :gap="30" :gap-y="30" class="justify-center">
        <AppCol :gap="30" :gap-y="30" :col-md="8" :col-lg="6">
          <AppRow :gap="30" :gap-y="30">
            <AppCol
              v-for="(v, k) in links"
              :key="k"
              :gap="30"
              :gap-y="30"
              :col-md="12"
            >
              <AppLinkItem :title="v.title" :link="v.link" />
            </AppCol>
          </AppRow>
        </AppCol>
      </AppRow>
    </section>
    <section class="py-10">
      <p class="text-center text-primary-500 text-sm">
        Copyright &copy; 2022. UoPeople Global Community. All Rights Reserved.
      </p>
    </section>
  </AppWrapper>
</template>
