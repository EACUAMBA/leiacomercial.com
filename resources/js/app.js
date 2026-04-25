import {createIcons, icons} from 'lucide';
import Alpine from 'alpinejs';

// Caution, this will import all the icons and bundle them.
createIcons({icons});

window.Alpine = Alpine;
Alpine.start();
