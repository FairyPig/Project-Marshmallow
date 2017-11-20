#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(binding = 0) uniform sampler2D texColor;

layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragUV;

layout(location = 0) out vec4 outColor;

void main() {
    vec3 col = texture(texColor, fragUV).xyz;
    col *= fragColor;
    outColor = vec4(col, 1.0);
}