# _plugins/liens_plugin.rb

module Jekyll
    class LiensPlugin < Liquid::Tag
      def render(context)
        site = context.registers[:site]
  
        # Parcours de chaque page générée
        site.pages.each do |page|
          # Vérification si le contenu de la page est une chaîne de caractères
          if page.content.is_a?(String)
            # Remplacement de chaque balise <a> avec un attribut `data-lien`
            page.content.gsub!(/<a(.*?)>/) do |match|
              attributes = $1.strip
              attributes << ' ' unless attributes.empty?
              attributes << 'data-lien="true" '
              "<a#{attributes}>"
            end
          end
        end
  
        # Retourne le contexte inchangé
        context
      end
    end
  end
  
  Liquid::Template.register_tag('liens', Jekyll::LiensPlugin)
  