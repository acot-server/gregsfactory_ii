ls mods | where {|it| $it.name | str ends-with ".pw.toml"} | each {|mod|
  let mod_data = open $mod.name
  if ($mod_data.update | get -o modrinth) != null {
      print $"($mod_data.name) @ ($mod_data.update.modrinth.version)"
      let versions = http get $'https://api.modrinth.com/v2/project/($mod_data.update.modrinth.mod-id)/version' |
        where {|it| $it.game_versions | any {|v| $v == "1.20.1" } } |
        where {|it| $it.loaders | any {|v| $v == "forge" or $v == "neoforge"} }
      let options = ($versions | each {|it| $"($it.id) ($it.version_number)" } | str join "\n")
      print $options
      let version = ($options | lines | input --reedline)
      if $version != "" {
        packwiz mr add $"https://modrinth.com/mod/($mod_data.update.modrinth.mod-id)/version/($version)"
      }
  } else if ($mod_data.update | get -o curseforge) != null { 
      print $"($mod_data.name) on cf"
      print $mod_data.update.curseforge
      xdg-open $"https://cflookup.com/($mod_data.update.curseforge.project-id)"
      let url = (input --reedline)
      if $url != "" {
        packwiz cf add $url
      }
  } else {
    print $"mod ($mod_data.name) is neither cf nor mr"
  }
}
print done
