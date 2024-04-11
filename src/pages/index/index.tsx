import {View} from '@tarojs/components'
import {Button} from "@nutui/nutui-react-taro"
import './index.scss'
import Taro from "@tarojs/taro";

function Index() {

    const toForm1 = () => {
        Taro.navigateTo({
            url: '/pages/form1/index'
        })
    }
    const toForm2 = () => {
        Taro.navigateTo({
            url: '/pages/form2/index'
        })
    }

    return (
        <View className="nutui-react-demo">
            <View className="index">
                欢迎使用 NutUI React 开发 Taro 多端项目。
            </View>
            <View className="index">
                <Button type="primary" className="btn" onClick={() => toForm1()}>
                    纯Form动态表单
                </Button>
                <Button type="primary" className="btn" onClick={() => toForm2()}>
                    完全受控动态表单
                </Button>
            </View>
        </View>
    )
}

export default Index
