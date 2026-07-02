You are debugging a Flutter Web viewport issue.

Problem:  
The viewport meta tag is set, but the app still renders as if it's using the default viewport.

Your task is to systematically find the root cause and fix it.
Follow this process:

1. Check `web/index.html`
- Verify that `<meta name="viewport">` exists
- Ensure it is inside `<head>`
- Ensure no duplicate viewport meta tags exist
- Confirm the content is correct (e.g., width=device-width, initial-scale=1.0)

2. Inspect runtime DOM (important)
- Use browser DevTools to check the actual rendered `<meta name="viewport">`
- Confirm it is not modified or overridden by scripts

3. Check for CSS overrides
- Inspect `html`, `body`, and `#flt-glass-pane` or `#flt-platform-view`
- Look for fixed widths (e.g., width: 1000px)    
- Look for overflow:hidden or layout-breaking styles

4. Identify Flutter renderer
- Determine if the app is using CanvasKit or HTML renderer
- If CanvasKit:
    - Check if scaling behavior is causing the issue
    - Consider testing with HTML renderer

5. Verify layout responsiveness
- Check if the UI uses MediaQuery or LayoutBuilder
- Ensure widgets are not using fixed pixel widths    
- Confirm the issue is not caused by non-responsive layout

6. Rebuild and cache issues
- Clear browser cache    
- Run `flutter clean`
- Rebuild the project

7. If issue persists:
- Create a minimal reproduction
- Strip the app down to a simple layout and test viewport behavior

Output:
- Root cause (very specific)
- What was wrong
- Exact code changes made
- Why the fix works

Do NOT assume the problem is only in one place. Investigate all layers:  
HTML → CSS → Flutter → Renderer → Browser runtime.