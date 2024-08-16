#!/usr/bin/env fish

for file in mods/*.pw.toml
    set slug (basename $file .pw.toml)
    set modname (tomlq '.name' < $file)
    set current (tomlq '.filename' < $file)
    if test (tomlq '.update | has("modrinth")' < $file) = "true"
        set platform modrinth
        set url (printf "https://modrinth.com/mod/%s" $slug)
    else
        set platform curseforge
        set url (printf "https://curseforge.com/minecraft/mc-mods/%s" $slug)
    end
    clear
    echo MOD: $modname
    echo CURRENT VERSION: $current
    echo PLATFORM: $platform
    echo opening mod page
    open $url
    
    read newurl -p 'echo -n "ENTER UPDATED URL OR LEAVE EMPTY TO SKIP: "'
    if test -z newurl
        continue
    end
    packwiz $platform add "$newurl"
end

