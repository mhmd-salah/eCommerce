from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.uix.scrollview import ScrollView
from kivy.uix.gridlayout import GridLayout


class ToDoApp(App):
    def build(self):
        # تصميم الشاشة الرئيسية
        self.tasks = []  # قائمة تخزين العناصر
        
        # الطبقة الأساسية
        main_layout = BoxLayout(orientation='vertical', padding=10, spacing=10)
        
        # إدخال المهام
        self.task_input = TextInput(hint_text="add new todo ", size_hint=(1, 0.1), multiline=False)
        main_layout.add_widget(self.task_input)
        
        # زر الإضافة
        add_button = Button(text="add", size_hint=(1, 0.1))
        add_button.bind(on_press=self.add_task)
        main_layout.add_widget(add_button)
        
        # عرض القائمة
        self.task_list_layout = GridLayout(cols=1, spacing=10, size_hint_y=None)
        self.task_list_layout.bind(minimum_height=self.task_list_layout.setter('height'))
        
        scroll_view = ScrollView(size_hint=(1, 0.8))
        scroll_view.add_widget(self.task_list_layout)
        main_layout.add_widget(scroll_view)
        
        return main_layout

    def add_task(self, instance):
        task_text = self.task_input.text.strip()
        if task_text:
            # إنشاء عنصر جديد
            task_layout = BoxLayout(size_hint_y=None, height=40, spacing=10)
            task_label = Label(text=task_text, size_hint_x=0.8)
            remove_button = Button(text="remove", size_hint_x=0.2)
            
            # وظيفة زر الحذف
            remove_button.bind(on_press=lambda x: self.remove_task(task_layout))
            
            task_layout.add_widget(task_label)
            task_layout.add_widget(remove_button)
            
            # إضافة العنصر إلى القائمة
            self.task_list_layout.add_widget(task_layout)
            self.tasks.append(task_layout)
            
            # تفريغ خانة الإدخال
            self.task_input.text = ""

    def remove_task(self, task_layout):
        # إزالة العنصر من القائمة
        if task_layout in self.tasks:
            self.task_list_layout.remove_widget(task_layout)
            self.tasks.remove(task_layout)


if __name__ == "__main__":
    ToDoApp().run()
