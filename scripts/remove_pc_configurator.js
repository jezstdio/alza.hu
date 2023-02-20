function remove_pc_configurator() {
    const panel = document.getElementsByClassName("pc-config-wrapper")[0];

    panel.parentElement.removeChild(panel);
}

try { remove_pc_configurator() } catch(e) { console.log(e) };