// Implementor: Theme
interface Theme {
    void applyTheme();
}

// Concrete Implementor: LightTheme
class LightTheme implements Theme {
    @Override
    public void applyTheme() {
        System.out.println("Applying Light Theme");
    }
}

// Concrete Implementor: DarkTheme
class DarkTheme implements Theme {
    @Override
    public void applyTheme() {
        System.out.println("Applying Dark Theme");
    }
}

// Abstraction: ProfilePage
abstract class ProfilePage {
    protected Theme theme;

    public ProfilePage(Theme theme) {
        this.theme = theme;
    }

    public abstract void renderContent();
}

// Refined Abstraction: UserProfilePage
class UserProfilePage extends ProfilePage {
    private String username;

    public UserProfilePage(String username, Theme theme) {
        super(theme);
        this.username = username;
    }

    @Override
    public void renderContent() {
        theme.applyTheme();
        System.out.println("Rendering user profile page for: " + username);
    }
}

public class Main {
    public static void main(String[] args) {
        //Here creating two theme objects:lightTheme and darkTheme.
        Theme lightTheme = new LightTheme();
        Theme darkTheme = new DarkTheme();


        //Here creating two userProfilePage objects: userProfileLight and userProfileDark 
        ProfilePage userProfileLight = new UserProfilePage("john_doe", lightTheme);
        ProfilePage userProfileDark = new UserProfilePage("jane_smith", darkTheme);

        userProfileLight.renderContent();
        userProfileDark.renderContent();
    }
}
