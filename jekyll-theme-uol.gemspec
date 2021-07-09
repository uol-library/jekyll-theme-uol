# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-uol"
  spec.version       = "0.0.1"
  spec.authors       = ["Peter Edwards"]
  spec.email         = ["p.l.edwards@leeds.ac.uk"]

  spec.summary       = "Jekyll theme based on the University of Leeds Design System"
  spec.homepage      = "https://universityofleeds.github.io/jekyll-theme-uol/"
  spec.license       = "GPL-3.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|LICENSE|README\.md|_config\.yml|404\.html)!i) }

  spec.add_runtime_dependency "jekyll", '~> 3.9', '>= 3.9.0'
end
