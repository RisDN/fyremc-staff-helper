const commands = [
  {
    cmd: "kategoria",
    cat: "default",
    desc: "Ha a játékos nem választ kategóriát.",
  },
  {
    cmd: "close",
    cat: "default",
    desc: "Ticket zárás ha minden rendben",
  },

  {
    cmd: "nevvaltas",
    cat: "name",
    desc: "Névváltoztatás",
  },
  {
    cmd: "összekötés",
    cat: "name",
    desc: "Ismeretlen tagok számára",
  },

  {
    cmd: "jelszo",
    cat: "name",
    desc: "Elfelejtett/változtatás",
  },

  {
    cmd: "net",
    cat: "client",
    desc: "Unkown host, hálózati hiba",
  },
  {
    cmd: "debug",
    cat: "client",
    desc: "Ha nem válik be a /net",
  },
  {
    cmd: "anydesk",
    cat: "client",
    desc: "Anydesk segítségével való hibajavítás",
  },
  {
    cmd: "svetch",
    cat: "client",
    desc: "Kliens probléma",
  },

  {
    cmd: "felelősség",
    cat: "other",
    desc: "Kereskedés, átverés",
  },
  {
    cmd: "tgf",
    cat: "other",
    desc: "Tagfelvétel, információk",
  },
  {
    cmd: "karbantartas",
    cat: "other",
    desc: "Amikor karbantartás alatt van a szerver",
  },

  {
    cmd: "nex",
    cat: "team",
    desc: "Szerver",
  },
  {
    cmd: "raptor",
    cat: "team",
    desc: "KitPvP",
  },
  {
    cmd: "svetch",
    cat: "team",
    desc: "Kliens",
  },
  {
    cmd: "ikoli",
    cat: "team",
    desc: "Fyland, Kingdoms",
  },
  {
    cmd: "anjah",
    cat: "team",
    desc: "Multiaccount, Staff",
  },
  {
    cmd: "korwey",
    cat: "team",
    desc: "SkyPvP, Kingdoms",
  },
  {
    cmd: "flash",
    cat: "team",
    desc: "Builder, Staff",
  },
  {
    cmd: "aron",
    cat: "team",
    desc: "BedWars, SkyWars",
  },
  {
    cmd: "samu",
    cat: "team",
    desc: "BedWars, SkyWars",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  commands.forEach((command) => {
    let newElement = document.createElement("div");
    newElement.onclick = () => {
      copy(command.cmd);
    };
    newElement.className = "commandrow";
    newElement.innerHTML = `
    <div class="command">/${command.cmd}</div>
    <div class="command-description">${command.desc}</div>
    `;
    document.querySelector(`.${command.cat}`).append(newElement);
  });
});
