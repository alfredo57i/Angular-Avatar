# Angular Avatar Component Ver. 1.0

This is an Angular component that generates circular or square avatars with initials inside. The background colors are randomly generated from a predefined list.

## Usage

```typescript
import { AvatarComponent } from './avatar/avatar.component';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule, AvatarComponent]
})
```

In your component

```html
<app-avatar [fullName]="'John Doe'"></app-avatar>
```

All variables

```html
<app-avatar [fullName]="'John Doe'" [charCount]="2" [radius]="50" [size]="40"></app-avatar>
```


### Inputs

- **`fullName`**: The full name of the person. The component will automatically generate initials.
  
- **`charCount`**: Defines how many initials will be shown. Possible values:  
  - `1`: First letter of the first name.
  - `2`: First letter of the first and second names.
  - `3`: First letter of the first name followed by the initial of the second name with a dot (Example: "J. B").
    
- **`radius`**: Defines the border radius of the avatar:
  - `50`: Completely circular avatar.
  - `0`: Square avatar.
  - Other values: For rounded corners.
  
- **`size`**: Defines the size of the avatar (in pixels).

### Example

```html
    <app-avatar [fullName]="'John Doe'"></app-avatar>
    <app-avatar fullName="Richard" [size]="40"></app-avatar>
    <app-avatar fullName="John Smith" [size]="50" [chars]="2"></app-avatar>
    <app-avatar fullName="Mary Sue" [size]="50" [chars]="2" [radius]="25"></app-avatar>
    <app-avatar fullName="Mary Sue" [size]="60" [chars]="3" [radius]="0"></app-avatar>
```
<img src="/images/examples.png" style="height: 150px"/>


## Installation

1. Copy the `avatar.component.ts` and `avatar.component.html` files into your Angular project.
   
2. Import the component in the module that needs it (it’s standalone).
   
3. Use the `<app-avatar>` selector in any template where you need to display an avatar.

## Customization

The component includes a list of predefined colors that you can adjust as needed:

```typescript
private colors = [
  '#A4262C', '#5C2E91', '#8764B8', '#750B1C', '#0078D4',
  '#498205', '#038387', '#4F6BED', '#C239B3', '#005B70',
];
````
## License

This component is available under the [MIT License](./LICENSE).