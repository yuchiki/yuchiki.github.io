def font_dir
    'https://fonts.googleapis.com/earlyaccess'
end

def img(a, s, t)
    "<img alt=\"#{a}\", src=\"#{s}\", title=\"#{t}\">"
end

def font_path(name)
    "#{font_dir}/#{name}.css"
end
