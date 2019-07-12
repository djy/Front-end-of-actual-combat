attribute vec4 pointPosition;
attribute vec4 pointColor;

uniform mat4 perspetiveMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;

uniform vec4 eyePosition;

varying vec4 sharePointColor;
varying float shareDistance;

void main() {
    gl_Position = perspetiveMatrix * viewMatrix * modelMatrix * pointPosition;
    sharePointColor = pointColor;

    // 生成雾效果关键就是确定离视野点开始有雾的距离（fogStart）和雾效果逐渐增强以致物体完全看不见的距离（fogEnd）
    // 雾效果的产生最终还是由物体表面的颜色和雾的颜色计算后的结果，这个计算这里采用线性混合，计算公式如下
    // resultColor = pointColor * fogfactor + fogcolor * (1 - fogfactor); 这个公式可以用shader的mix方法直接计算
    // 其中fogfactor为系数，要保证系数在[0.0, 1.0] 之间（可以用shader的clamp函数保证这个范围），系数的计算公式如下
    // fogfactor = (fogEnd - distancefromeye) / (fogEnd - fogStart); 其中distancefromeye由shader的distance函数计算

    // 计算物体点距离视野点的距离
    shareDistance = distance(modelMatrix * pointPosition, eyePosition);
    // shareDistance = gl_Position.w; 可以用w坐标近似模拟物体点距离视野点的距离，节省计算
}