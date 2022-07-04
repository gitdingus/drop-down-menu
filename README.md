# drop-down-menu

Description:

This is a very bare bones dropdown menu with just some basic behavior and very basic styling applied. It is meant to be styled and customized per project. It consists of a header with an unordered list that drops down on hover or on click. The behavior is specified when you create the object. Each component is only one dropdown menu. If it is to be used in a navigation bar you will have to add multiple separate components to your list, it does not have any container for multiple dropdown menus.

Use:

The default and only export of this module is the createDropDownMenu function. It returns an object containing a div of your menu element, as well as a function addMenuItem to add new items to your dropdown list. To import this function use:

```
import createDropDownMenu from 'drop-down-menu';
```

In order to create a drop down menu you call the function passing an object that supplies properties for the menu header. The object is of the form:

```
{ 
  menuHeader: { 
    displayText: 'Some text', 
    linkSrc: 'some url' 
  }, 
  behavior: 'click' || 'hover',
}
```
The display text will show up as the menus title element. If a link is provided it will wrap the display text in an anchor element. The behavior property specifies if it will open when clicked or hovered over. If no behavior is specified it defaults to open on hover. Here is an example of how to create a dropdown menu that opens on click:

```
const sampleDropdown = createDropDownMenu({
  menuHeader: {
      displayText: 'About', 
      linkSrc'./about.html',
  }, 
  behavior: 'click',
});
```
Once you have your dropdown menu, you can add elements to your dropdown list by calling the sampleDropdown.addMenuItem function. All items will be added to a ul's li element. You have a lot of freedom in what shows up in your menu list. It can either display a simple link or any html component you design. 
To create a simple link you can supply the function with an object of the form:

```
{
  type: 'link',
  displayText: 'Some text',
  linkSrc: 'Some url',
}
```
If you would like to add a more complex element pass an object of the form:
```
{ 
  type: 'content',
  content: YourHtmlElement,
}
```
Once you have added all your links or elements to your menu list you can append your dropdown menu to your documents navigation bar.

The initial styling will be very basic. To customize your dropdown list use CSS. Your dropdown menu's html content will have this basic structure:
```
<div class="drop-down-menu">
  <div class="menu-header"></div>
  <div class="drop-down">
    <ul class="menu-list">
      <li>...</li>
      <li>...</li>
      ...
    </ul>
  </div>
</div>
```
