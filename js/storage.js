const KEY='repere-settings';const TAGS='repere-tags';
export function settings(){return {...{midday:'12:00',endday:'17:00'},...JSON.parse(localStorage.getItem(KEY)||'{}')}}
export function saveSettings(v){localStorage.setItem(KEY,JSON.stringify(v))}
export function tags(){return JSON.parse(localStorage.getItem(TAGS)||'[]')}
export function saveTags(v){localStorage.setItem(TAGS,JSON.stringify(v))}
